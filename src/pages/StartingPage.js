import React from 'react'
import styled from 'styled-components'
import { devices } from '../device'
import { ColumnFlexDiv } from '../styled'

const StartingPage = () => {
  return (
    <StartingSection>StartingPage</StartingSection>
  )
}
const StartingSection = styled(ColumnFlexDiv)`
  width:50%;
@media ${devices.tablet} {
  width:100%;
}
`


export default StartingPage