import { useState , useRef } from "react"
import { motion } from "framer-motion"
import { styles } from "../style"
import emailjs from '@emailjs/browser'
import { slideIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { EarthCanvas } from "./canvas"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  }
  console.log(form)
//service_bspfm78  template_z076jxt  NPUmn4D_3uloUQO16
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_bspfm78', 'template_wnvmz35', form, 'NPUmn4D_3uloUQO16')
    .then((result) => {
        console.log(result.text);
        setLoading(false)
        alert('Message Sent, I will get back to you shortly');
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, (error) => {
        console.log(error.text);
        setLoading(false)
      });
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse  flex gap-10 overflow-hidden ">
          <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
              <p className={styles.sectionSubText +" text-center"}>Get in touch</p>
              <h3 className={styles.sectionHeadText + " text-center"}>Contact.</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex text-[16px] flex-col gap-10">
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className=" bg-tertiary p-4  px-6 border-none font-medium placeholder:text-secondary text-white rounded-lg outline-none"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4"> Your Email </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className=" bg-tertiary p-4  px-6 border-none font-medium placeholder:text-secondary text-white rounded-lg outline-none"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Message </span>
                  <textarea
                  rows="6"
                    name="message"
                    value={form.message}
                   
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className=" bg-tertiary p-4  px-6 border-none font-medium placeholder:text-secondary text-white rounded-lg outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-tertiary text-white w-fit  outline-none font-bold shadow-md py-4 px-6 rounded-xl shadow-primary hover:bg-white-100 hover:text-black-100 hover:transition hover:duration-300 hover:ease-in-out"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                </form>
            </motion.div>
            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px]">
              <EarthCanvas />
              </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")