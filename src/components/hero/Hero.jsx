import { scroll } from "../../assets/hero";
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          className="text-container"
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Nicolas Gravertt</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Ultimos Trabajos
            </motion.button>
            <motion.button variants={textVariants}>Contactame</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Desarrollador web.
        </motion.div>
      </div>
      <div className="image-container">{/* <img src={code} alt="" /> */}</div>
    </div>
  );
};

export default Hero;
