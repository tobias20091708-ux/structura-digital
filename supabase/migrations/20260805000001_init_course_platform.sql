-- Course platform base schema: profiles, courses, modules, lessons, enrollments, progress.

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  avatar_url text,
  role text not null default 'student' check (role in ('student', 'instructor', 'admin')),
  created_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  instructor_id uuid not null references public.profiles (id) on delete cascade,
  title text not null,
  slug text not null unique,
  description text,
  cover_image_url text,
  price numeric(10, 2) not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses (id) on delete cascade,
  title text not null,
  position int not null default 0
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.modules (id) on delete cascade,
  title text not null,
  content text,
  video_url text,
  position int not null default 0,
  duration_minutes int
);

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete cascade,
  enrolled_at timestamptz not null default now(),
  completed_at timestamptz,
  unique (user_id, course_id)
);

create table public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  completed boolean not null default false,
  completed_at timestamptz,
  unique (user_id, lesson_id)
);

-- Keeps profiles in sync with auth.users without requiring a manual insert after signup.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;

create policy "profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "users update their own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "published courses are viewable by everyone" on public.courses
  for select using (is_published or auth.uid() = instructor_id);

create policy "instructors manage their own courses" on public.courses
  for all using (auth.uid() = instructor_id) with check (auth.uid() = instructor_id);

create policy "modules follow course visibility" on public.modules
  for select using (
    exists (
      select 1 from public.courses
      where courses.id = modules.course_id
        and (courses.is_published or courses.instructor_id = auth.uid())
    )
  );

create policy "instructors manage their own modules" on public.modules
  for all using (
    exists (select 1 from public.courses where courses.id = modules.course_id and courses.instructor_id = auth.uid())
  ) with check (
    exists (select 1 from public.courses where courses.id = modules.course_id and courses.instructor_id = auth.uid())
  );

create policy "lessons follow course visibility" on public.lessons
  for select using (
    exists (
      select 1 from public.modules
      join public.courses on courses.id = modules.course_id
      where modules.id = lessons.module_id
        and (courses.is_published or courses.instructor_id = auth.uid())
    )
  );

create policy "instructors manage their own lessons" on public.lessons
  for all using (
    exists (
      select 1 from public.modules
      join public.courses on courses.id = modules.course_id
      where modules.id = lessons.module_id and courses.instructor_id = auth.uid()
    )
  ) with check (
    exists (
      select 1 from public.modules
      join public.courses on courses.id = modules.course_id
      where modules.id = lessons.module_id and courses.instructor_id = auth.uid()
    )
  );

create policy "users manage their own enrollments" on public.enrollments
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "instructors view enrollments in their courses" on public.enrollments
  for select using (
    exists (select 1 from public.courses where courses.id = enrollments.course_id and courses.instructor_id = auth.uid())
  );

create policy "users manage their own lesson progress" on public.lesson_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
