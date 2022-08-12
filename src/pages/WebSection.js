import React from 'react'
import styled from 'styled-components'
import { devices } from '../device'
import { ColumnFlexDiv } from '../style/styled'

const WebSection = () => {
  return (
    <WebCard>
      WebSection
    </WebCard>
  )
}

const WebCard = styled(ColumnFlexDiv)`
width:45%;
@media ${devices.tablet} {
  display:none;
}
`


export default WebSection;