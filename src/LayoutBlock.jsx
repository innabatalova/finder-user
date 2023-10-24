import React, { useState } from 'react'
import { ContextUserData } from './context/context'

import SideBar from './components/SideBar/SideBar'
import ResultView from './components/ResultView/ResultView'
import StartSearch from './components/SideBar/StartSearch'

const LayoutBlock = () => {
  const [contextUser, setContextUser] = useState([])

  return (
    <ContextUserData.Provider value={{ contextUser, setContextUser }}>
      <div className="layout">
        <div className="layout__bar">
          <h1 className="layout__title">Жилфонд</h1>
          <span className="layout__user">Пользователь</span>
        </div>
        <div className="layout__body">
          <SideBar />
          <ResultView />
        </div>
      </div>
    </ContextUserData.Provider>
  )
}

export default LayoutBlock