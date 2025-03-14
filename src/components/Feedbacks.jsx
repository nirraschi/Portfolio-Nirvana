import React from 'react'
import { motion } from 'framer-motion'
import {styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({index, testimonial, company}) => (
  <motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col items-start justify-start gap-2 ' 
  >
    <p className='text-white font-black text-xl'>{company}</p>
    <div className="mt-1">
    <p className='text-white tracking-wider text-sm'>{testimonial}</p>


    </div>
  </motion.div>

)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
        variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Formación.</h2>

        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
          key={testimonial.name}
          index={index}
          {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "") 