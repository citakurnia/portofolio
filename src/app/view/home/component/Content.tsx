import Link from "next/link";

export default function Content() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hello</h1>
      <p className="mt-4 text-gray-900">
        I&apos;m Cita, a software engineer with a passion for logical thinking,
        problem-solving, and learning new technologies. With almost a year of
        experience in full-stack development, I focus primarily on backend
        development.
      </p>
      <p className="mt-4 mb-2 text-gray-700">
        Driven by curiosity and a dedication to continuous learning, I work on
        upgrading my skills regularly. I&apos;m excited to continue expanding my
        skills, take on new challenges, and contribute to impactful projects
        through collaboration and innovation.
      </p>
      <Link
        href="/project"
        className="text-md text-primary-deep-blue hover:text-primary-med-blue mt-2"
      >
        Discover my projects here.
      </Link>
    </div>
  );
}
