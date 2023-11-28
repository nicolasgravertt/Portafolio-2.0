import { motion } from "framer-motion";

const Links = () => {
  const items = ["Home", "Servicios", "Portafolio", "Contacto"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggeredChildren: 0.1,
        staggeredDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div variants={variants} className="links">
      {items.map((item) => (
        <motion.a
          key={item}
          href={`#${item}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >{`${item}`}</motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
