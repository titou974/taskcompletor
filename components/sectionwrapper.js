import { motion } from "framer-motion";
import styles  from "./style";
import { staggerContainer } from "../utils/motion";
import Link from "next/link";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Link className="hash-span" href={idName}>
          &nbsp;
        </Link>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
