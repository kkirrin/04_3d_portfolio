import Tilt from 'react-tilt'
import  { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constans'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({ name, index, description, tags, image, source_code_link}) => {  
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max:45,
            scale:1,
            speed:  450}}
          className='bg-tertiary p-5 rounded-10xl sm:w-[300px] w-full'
          >
            <div className='relative w-full h-[230px]'>
              <img 
                src={image} 
                alt={name}
                className='w-full h-full object-cover rounded-2xl'
                />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => 
                  window.open(source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                  <img 
                    src={github}
                    alt='alt'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div> 

            <div
              className='m-5'>
                <h3 className='text-white font-bold text-[18px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>

            <div
              className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
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
      <motion.div variants={textVariant() } >
        <p className={styles.sectionSubText}>My work</p>
        
        <h2 className={styles.sectionHeadText}> Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('','',0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Following projects will show my skills and my experience.
        </motion.p>
      </div>

      <div className='flex flex-wrap mt-20 gap-7'> 
      {projects.map((project, index) => (
        <ProjectCard 
        key={`project-${index}`}
        index={index}
        {...project}
        />
      ))}</div>
    </>
  )
}

export default SectionWrapper(Works, '')