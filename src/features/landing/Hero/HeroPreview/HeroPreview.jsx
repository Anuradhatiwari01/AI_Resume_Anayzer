import { motion } from "framer-motion";

import ATSCard from "./ATSCard";
import SkillsCard from "./SkillsCard";
import SuggestionCard from "./SuggestionCard";
import TimelineCard from "./TimelineCard";

export default function HeroPreview() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        <ATSCard />

        <SkillsCard />

        <SuggestionCard />

        <TimelineCard />

      </div>
    </motion.div>
  );
}