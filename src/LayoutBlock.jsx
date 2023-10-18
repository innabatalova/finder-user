import React from 'react'

import SideBar from './components/SideBar/SideBar'
import ResultView from './components/ResultView/ResultView'

const LayoutBlock = () => {
  return (
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
  )
}

export default LayoutBlock