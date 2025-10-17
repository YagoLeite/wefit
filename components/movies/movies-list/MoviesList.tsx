"use client";

import { Movie } from "@/types/movie";
import MoviesCard from "../movies-card/MoviesCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      // ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function MoviesList({ initialData }: { initialData: Movie[] }) {
  return (
    <motion.section
      className="flex h-full w-full items-center justify-center gap-4 flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {initialData.map((movie, index) => (
        <motion.div
          key={movie.id}
          variants={cardVariants}
          style={{ animationDelay: `${index * 0.1}s` }}
          className="w-full max-w-[339px]"
        >
          <MoviesCard movie={movie} />
        </motion.div>
      ))}
    </motion.section>
  );
}
