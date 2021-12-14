import React from 'react'
import Container from '../Container/Container'
import TitleSection from '../TitleSection/TitleSection'

import { TestimonialWrapper } from './TestimonialStyled'

const Testimonial = () => {
  return (
    <TestimonialWrapper>

      <Container>
        <TitleSection title={'Testimonial'} desc={'My technical level'} />

      </Container>
    </TestimonialWrapper>
  )
}


export default Testimonial