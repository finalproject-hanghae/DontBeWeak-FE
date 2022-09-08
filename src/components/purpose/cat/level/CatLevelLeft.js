import React from 'react'
import styled from 'styled-components'
import { devices } from '../../../../device'
import { ColumnFlexDiv } from '../../../../style/styled'

const CatLevelLeft = () => {
  return (
    <SideCard>
    <p>Lv.1</p>
    <p>Lv.11</p>
    <p>Lv.21</p>
    </SideCard>
  )
}

const SideCard = styled(ColumnFlexDiv)`
p{
  text-align:right;
  font-weight:bold;
  margin: 1.3rem 0px;
}
@media ${devices.mobileL} {
   p{
    margin: 1.3rem 0px;
    font-size: 0.6rem;
   }
  }
`

export default CatLevelLeft