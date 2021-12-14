import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContainerWrapper = styled.div`

  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

`
type Props = {
  children: React.ReactNode
};
const Container = ({ children }: Props) => {
  return (
    <ContainerWrapper className={'container'}>
      {children}
    </ContainerWrapper>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container