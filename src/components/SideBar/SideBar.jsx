import React from 'react'

import StartSearch from './StartSearch'
import NoResult from './NoResult'
import UserPreview from './UserPreview'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <span className='sidebar__title'>Поиск сотрудников</span>
      <input className='sidebar__field' type="text" placeholder='Введите Id или имя '/>
      <span className='sidebar__title'>Результаты</span>
      <div className="sidebar__search">
        <StartSearch/>
        <NoResult />
        <UserPreview />
        <UserPreview />
      </div>
    </div>
  )
}

export default SideBar