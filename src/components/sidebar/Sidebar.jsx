import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

const variants = {
  open: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    transition: { duration: 0.3, type: "spring", stiffness: 50 },
    opacity: 1,
  },
  close: {
    clipPath: "polygon(0 100%, 0 100%, 0 0, 0 0)",
    transition: {
      duration: 0.3,
      type: "spring",
      delay: 0.3,
      stiffness: 400,
      damping: 40,
    },
    opacity: 1,
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div className="sidebar" animate={open ? "open" : "close"}>
        <motion.div className="bg" initial={{ opacity: 0 }} variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default Sidebar;
