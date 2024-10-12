import Link from "next/link";

export default function Content() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hello</h1>
      <p className="mt-4 text-gray-900">
        I&apos;m Cita, a software engineer with a strong aptitude for logical
        thinking, problem-solving, and adapting to new technologies. While
        I&apos;m still early in my career, I&apos;ve quickly gained the ability
        to work across various areas of software engineering, including backend,
        frontend, and full stack development.
      </p>
      <p className="mt-4 mb-2 text-gray-700">
        My extroverted and respectful nature fosters positive collaboration in
        team environments, and I&apos;m always eager to take on new challenges,
        grow my skills, and contribute to innovative solutions.
      </p>
      <Link
        href="/project"
        className="text-sm text-primary-deep-blue hover:text-primary-med-blue"
      >
        Discover my projects here.
      </Link>
    </div>
  );
}
