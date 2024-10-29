import Link from "next/link";

export default function Content() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hello</h1>
      <p className="mt-4 text-gray-900">
        I&apos;m Cita, a software engineer with a passion for logical thinking,
        problem-solving, and learning new technologies. Although I&apos;m still
        in the early stages of my career, I&apos;ve quickly developed skills
        across various areas of software development, including backend,
        frontend, and full stack work.
      </p>
      <p className="mt-4 mb-2 text-gray-700">
        It wasn&apos;t until recently that I discovered a passion for software
        engineering, with a particular interest in backend development. I&apos;m
        excited to continue expanding my skills, take on new challenges, and
        contribute to impactful projects through collaboration and innovation.
      </p>
      <Link
        href="/project"
        className="text-md text-primary-deep-blue hover:text-primary-med-blue"
      >
        Discover my projects here.
      </Link>
    </div>
  );
}
