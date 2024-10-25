import { ProjectCard } from "./component/ProjectCard";

export type Project = {
  id: number;
  title: string;
  description: string;
  images: {
    name: string;
    alt: string;
  }[];
  category: string;
  tools: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "SIGMART",
    description:
      "Sigmart is a responsive multi-branch online grocery app designed for a seamless experience for both customers and admins, similar to KlikIndomaret. It features location-based search, allowing customers to shop from their nearest store and manage multiple addresses. For admins, it offers product management with stock-tracking via an integrated journaling system. The platform supports diverse promotions, including store-specific offers, product discounts, and referral rewards, while providing detailed sales and inventory reports for data-driven insights across branches.",
    images: [
      { name: "/sigmart1.png", alt: "Landing page" },
      { name: "/sigmart2.png", alt: "Login" },
      { name: "/sigmart7.png", alt: "Product Search" },
      { name: "/sigmart8.png", alt: "Product Detail" },
      { name: "/sigmart4.png", alt: "Voucher Selection Checkout" },
      { name: "/sigmart3.png", alt: "Sales Report - Dashboard" },
      { name: "/sigmart5.png", alt: "Edit Product - Dashboard" },
      { name: "/sigmart9.png", alt: "Add Store Promotion - Dashboard" },
      { name: "/sigmart6.png", alt: "Add Inventory Entry - Dashboard" },
    ],
    category: "WEB",
    tools: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "React",
      "Express.js",
      "Prisma ORM",
      "MySQL",
      "Redux",
      "JWT",
      "Shadcn",
    ],
    githubUrl: "https://github.com/citakurnia/sigmart-grocery-store",
    liveUrl: "",
  },
  {
    id: 2,
    title: "EventCreate",
    description:
      "EventCreate is a responsive event management platform designed to streamline the process for organizers and attendees alike. Organizers can effortlessly create and promote events, offering multiple ticket categories and time-based promotions or discounts using coupons. The platform includes a referral program that rewards users with points for successful referrals and provides discount vouchers for those registering through a referral code. Additionally, an intuitive dashboard allows organizers to track events, registrations, and transactions, providing visual statistics to improve operational efficiency.",
    images: [
      { name: "/eventcreate1.png", alt: "Login" },
      { name: "/eventcreate2.png", alt: "Register" },
      { name: "/eventcreate10.png", alt: "Account" },
      { name: "/eventcreate4.png", alt: "My Event - Dashboard" },
      { name: "/eventcreate8.png", alt: "Event Detail - Dashboard" },
      { name: "/eventcreate9.png", alt: "Order - Dashboard" },
      { name: "/eventcreate6.png", alt: "Add Event - Dashboard" },
      { name: "/eventcreate7.png", alt: "Add Promotion - Dashboard" },
    ],
    category: "FULLSTACK",
    tools: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "React",
      "Express.js",
      "Prisma ORM",
      "MySQL",
      "Redux",
      "JWT",
      "Chakra UI",
      "Chart.js",
    ],
    githubUrl: "https://github.com/citakurnia/mp-04",
    liveUrl: "",
  },
  {
    id: 3,
    title: "HealthYo! Company Profile",
    description:
      "HealthYo! is a responsive company profile website designed to be informative, engaging, and user-friendly. It utilizes Contentful as a headless CMS, enabling effortless content management and updates without requiring technical skills from programmers, ensuring that visitors always have access to the latest information.",
    images: [
      { name: "/companyprofile1.png", alt: "Landing Page" },
      { name: "/companyprofile2.png", alt: "Landing Page" },
      { name: "/companyprofile3.png", alt: "About Us" },
      { name: "/companyprofile4.png", alt: "Product View" },
      { name: "/companyprofile5.png", alt: "Team" },
    ],
    category: "FULLSTACK",
    tools: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "React",
      "Contentful (CMS)",
      "Tailwind CSS",
      "Material UI",
    ],
    githubUrl: "https://github.com/citakurnia/company-profile-healthyo",
    liveUrl: "https://company-profile-healthyo.vercel.app",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "This portfolio is my personal website showcasing my skills and projects as a software engineer. It highlights my software development journey, demonstrating my expertise in both frontend and backend technologies, along with detailed project descriptions and insights into my background.",
    images: [
      { name: "/portfolio1.png", alt: "Landing Page" },
      { name: "/portfolio2.png", alt: "Project" },
      { name: "/portfolio4.png", alt: "Project Image" },
      { name: "/portfolio3.png", alt: "Contact" },
    ],
    category: "FULLSTACK",
    tools: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Shadcn"],
    githubUrl: "https://github.com/citakurnia/portofolio",
    liveUrl: "https://cita-kurnia-portofolio.vercel.app/",
  },
];

export default function ProjectView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
