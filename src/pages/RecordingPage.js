import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { ColumnFlexDiv } from '../styled'

import SearchModal from '../components/modals/SearchModal'
import NotFoundModal from '../components/modals/NotFoundModal'

const RecordingPage = () => {
  const navigate = useNavigate();
  return (
    <ColumnFlexDiv>RecordingPage
      <button onClick={()=>navigate('search')}>검색하기</button>
      <Routes>
        <Route index element={null}/>
        <Route path="search" element={<SearchModal/>} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </ColumnFlexDiv>
  )
}


export default RecordingPage