import React from 'react'
import {BallCanvas} from './canvas'

import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../style'
import { technologies } from '../constants'



const Tech = () => {
  return (
   <> 
       <motion.div className='my-10' variants={textVariant()}>
 
    <h2 className={styles.sectionHeadText + " text-center"}>Skills.</h2>
  </motion.div>
    <div className='flex flex-wrap  justify-center  items-center  gap-10'>
     
      {technologies.map((tech, index) => (
        <div  className='w-28 h-28' key={index}>
          <BallCanvas icon={tech.icon} />
          </div>
      ))}
    </div>
    </>
  )
}

export default Tech