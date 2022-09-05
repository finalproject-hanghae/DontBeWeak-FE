import React from 'react'
import styled from 'styled-components'

import { ColumnFlexDiv } from '../../../../style/styled'

const CatLevelRight = () => {
  return (
    <SideCard>
    <p>Lv.10</p>
    <p>Lv.20</p>
    <p>Lv.30</p>
    </SideCard>
  )
}

const SideCard = styled(ColumnFlexDiv)`
p{
  font-weight:bold;
  margin: 1.3rem 0rem;
}
`

export default CatLevelRight