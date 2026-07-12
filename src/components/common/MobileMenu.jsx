import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import NavLinks from "./NavLinks";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-zinc-950 p-8 md:hidden"
        >
          <div className="flex justify-end">
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="mt-12">
            <NavLinks
              mobile
              onClick={onClose}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}