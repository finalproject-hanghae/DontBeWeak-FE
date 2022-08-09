import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { ColumnFlexDiv } from '../styled'

import SearchModal from '../components/modals/SearchModal'
import NotFoundModal from '../components/modals/NotFoundModal'
import styled from 'styled-components'
import { devices } from '../device'

const RecordingPage = () => {
  const navigate = useNavigate();
  return (
    <RecordingSection>RecordingPage
      <button onClick={()=>navigate('search')}>영양제 등록하기 +</button>
      <Routes>
        <Route index element={null}/>
        <Route path="search" element={<SearchModal/>} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </RecordingSection>
  )
}
const RecordingSection = styled(ColumnFlexDiv)`
  width: 100%;
  height: 100%;
  background-color:#FFF7C7;
  @media ${devices.tablet} {
    width: 100%;
  }
`;

export default RecordingPage