import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { devices } from '../device'
import { ColumnFlexDiv } from '../styled'
import SearchModal from '../components/modal/SearchModal'
import SearchDrug from '../components/SearchDrug'

const RecordingPage = () => {
  const navigate = useNavigate();
  return (
    <RecordingSection>RecordingPage
      <button onClick={()=>navigate('search')}>검색하기</button>
      <Routes>
        <Route path="/search" element={<SearchModal/>} />
      </Routes>
    </RecordingSection>
  )
}

const RecordingSection = styled(ColumnFlexDiv)`
width: 50%;
@media ${devices.tablet} {
  width:100%;
}
`

export default RecordingPage