import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { projects } from '../constants'
import { github } from '../assets'
import "./css/project.css"
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({index, name , description , tags , image, source_code_link }) => {
return (
  <motion.div variants={fadeIn("rigth",
  "spring",index*0.5,0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 300,
    }} className='bg-tertiary  p-5 rounded-2xl sm:w-[360px] '>
      <div className='relative  w-full h-[200px]'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl gallery ' />
        <div className='inset-0 flex items-center justify-center m-3 gallery-links card-img_hover'>
          <div 
            onClick={() => window.open(source_code_link, '_blank')}
            className='black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'>
             <a className="preview-link items-center hover:text-white"><i className="bx bx-link-external"></i></a>
            </div>
           
          </div>
        </div>
        <div className='mt-5 py-2'>
          <h3 className='text-white text-[24px] font-bold '>{name}</h3>
          <p className='text-secondary text-[15px] mt-2'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-3 '>
          {tags.map((tag, index) => (
            <p key={tag.name} index={index}className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
  </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div className=' mt-28  mb-10' variants={textVariant()}>
        <p className={styles.sectionSubText + ' text-center'}>What I have done</p>
        <h2 className={styles.sectionHeadText + ' text-center'}>Project.</h2>
      </motion.div>

      <div className='w-full max-w-8xl mx-auto  relative z-0 flex flex-col '>
        <motion.p variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-8xl text-center leading-[30px] ' >
               Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
        <div className='flex justify-center items-center flex-wrap mt-20 gap-x-16 gap-y-10'>
          {projects.map((project, index) => (
            <ProjectCard key={`projec-${index}`} {...project} index={index} />
          ))}
          </div>
      </div>
    </>
  )
}

export default Works