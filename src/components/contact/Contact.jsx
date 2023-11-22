import { motion } from "framer-motion"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.scss"

const variants = {
    initial: {
        y: 300,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xz0inzl', 'template_cjhhhop', formRef.current, '65fDIABzBa2aaP6Dv')
        .then((result) => {
            console.log(result.text);
            formRef.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let&apos;s work <motion.b whileHover={{ color: "#B975B5" }}>together</motion.b></motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Email</h2>
                <span>robertsonelin@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>GitHub</h2>
                <span>github.com/elinrobertson</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Location</h2>
                <span>Kalmar</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.form ref={formRef} onSubmit={sendEmail}>
                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message"/>
                <button>Send</button>
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact