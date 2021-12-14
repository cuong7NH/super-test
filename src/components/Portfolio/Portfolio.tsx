import React from 'react'
import { PortfolioWrapper } from './PortfolioStyled'
import Container from '../Container/Container'
import TitleSection from '../TitleSection/TitleSection'

const Portfolio = () => {
  return (
    <PortfolioWrapper id={'Portfolio'}>
      <Container>
        <TitleSection title={'Portfolio'} desc={'My technical level'} />

        <div>
        </div>

      </Container>

    </PortfolioWrapper>
  )
}

export default Portfolio