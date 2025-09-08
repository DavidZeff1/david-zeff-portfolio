import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  demo,
  github,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl shadow-md overflow-hidden border bg-white"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-gray-100 px-2 py-1 rounded-full border text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          <a
            href={demo}
            target="_blank"
            className="text-blue-600 hover:underline text-sm"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            className="text-gray-700 hover:underline text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
