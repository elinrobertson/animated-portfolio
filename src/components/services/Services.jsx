import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import "./Services.scss"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const Services = () => {
  
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"});

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={ "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your brand grow 
          <br/>and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1><motion.b whileHover={{ color: "#B975B5" }}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{ color: "#B975B5" }}>For Your</motion.b> Business</h1>
          <button>What We Do</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum officia deleniti dolores, ea quisquam quod eaque aut iusto maxime beatae odio, molestiae possimus exercitationem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum officia deleniti dolores, ea quisquam quod eaque aut iusto maxime beatae odio, molestiae possimus exercitationem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum officia deleniti dolores, ea quisquam quod eaque aut iusto maxime beatae odio, molestiae possimus exercitationem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum officia deleniti dolores, ea quisquam quod eaque aut iusto maxime beatae odio, molestiae possimus exercitationem.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services