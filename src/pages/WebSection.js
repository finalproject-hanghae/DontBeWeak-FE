import React from 'react'
import styled from 'styled-components'
import { devices } from '../device'
import { ColumnFlexDiv } from '../styled'

const WebSection = () => {
  return (
    <WebCard>WebSection</WebCard>
  )
}

const WebCard = styled(ColumnFlexDiv)`
width: 50%;
height: 100vh;
background: red;
@media ${devices.tablet} {
  display:none;
}
`


export default WebSection