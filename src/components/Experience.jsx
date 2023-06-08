import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion}  from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'



const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText + " text-center" }>Experience</p> 
      <h2 className={styles.sectionHeadText + " text-center"}>Work Experience.</h2>
    </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work mb-10'
            contentStyle={{
              background: '#1d1836',
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            date={experience.date}
            dateClassName='text-secondary text-[16px] font-semibold'
            iconStyle={{
              background: experience.iconBg ,
              color: '#fff',
            }}
            icon={
                <div className='flex justify-center items-center w-full h-full '>
                    <img src={experience.icon} alt={experience.company_name} className='w-[70%] h-[70%] object-contain'/>
                </div>

            }
          >
            <div>
            <h3 className=' text-white text-[24px] font-bold'>
              {experience.title}
            </h3>
            <h5 className=' text-secondary text-[16px] font-semibold'>{experience.company_name}</h5>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {experience.points.map((desc, index) => (
                <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider font-semibold'>
                  {desc}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
          ))
          }
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")