import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./Portfolio.scss"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ex expedita minima, nostrum cumque necessitatibus optio dolore dolorum libero vitae aliquam veniam ad sed magnam.",
    },
    {
        id: 2,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/4599050/pexels-photo-4599050.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ex expedita minima, nostrum cumque necessitatibus optio dolore dolorum libero vitae aliquam veniam ad sed magnam.",
    },
    {
        id: 3,
        title: "Restaurant App",
        img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ex expedita minima, nostrum cumque necessitatibus optio dolore dolorum libero vitae aliquam veniam ad sed magnam.",
    },
    {
        id: 4,
        title: "GPT-3",
        img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ex expedita minima, nostrum cumque necessitatibus optio dolore dolorum libero vitae aliquam veniam ad sed magnam.",
    },
]

const Single = ({item}) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imgConatiner" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button>See More</button>
                </motion.div>
            </div>
        </div>
    </section>
};

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref, 
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio