import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      transition: { duration: 0.4, type: "spring", stiffness: 20 },
    },
    close: {
      clipPath: "polygon(0 100%, 0 100%, 0 0, 0 0)",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
