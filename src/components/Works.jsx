import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { projects } from '../constants'
import { github } from '../assets'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({index, name , description , tags , image, source_code_link }) => {
return (
  <motion.div variants={fadeIn("up",
  "spring",index*0.5,0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 450,
    }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative  w-full h-[200px]'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        <div className='absolute inset-0 flex justify-end m-3  card-img_hover '>
          <div 
            onClick={() => window.open(source_code_link, '_blank')}
            className='black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'>
            <img src={github} alt='github' className='w-3/4 h-3/4 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5 py-2'>
          <h3 className='text-white text-[24px] font-bold '>{name}</h3>
          <p className='text-secondary text-[15px] mt-2'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-3 '>
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
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
      <motion.div className=' mt-28 mb-10' variants={textVariant()}>
        <p className={styles.sectionSubText + ' text-center'}>What I have done</p>
        <h2 className={styles.sectionHeadText + ' text-center'}>Project.</h2>
      </motion.div>

      <div className='w-full flex flex-col'>
        <motion.p variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-8xl text-center leading-[30px] ' >
               Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
        <div className='flex  justify-center items-center flex-wrap mt-20 gap-9'>
          {projects.map((project, index) => (
            <ProjectCard key={`projec-${index}`} {...project} index={index} />
          ))}
          </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")