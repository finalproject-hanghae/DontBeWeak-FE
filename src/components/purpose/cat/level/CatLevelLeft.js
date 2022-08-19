import React from 'react'
import styled from 'styled-components'
import { ColumnFlexDiv } from '../../../../style/styled'

const CatLevelLeft = () => {
  return (
    <SideCard>
    <p>Lv.1</p>
    <p>Lv.11</p>
    <p>Lv.21</p>
    <p>Lv.31</p>
    </SideCard>
  )
}

const SideCard = styled(ColumnFlexDiv)`
p{
  text-align:right;
  font-weight:bold;
  margin: 15px 0px;
}
`

export default CatLevelLeft