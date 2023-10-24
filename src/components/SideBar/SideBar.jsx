import React, { useContext, useEffect, useState } from 'react'

import { ContextUserData } from '../../context/context'

import SearchField from '../ResultView/SearchField'
import StartSearch from './StartSearch'
import NoResult from './NoResult'
import UserPreview from './UserPreview'

const SideBar = () => {
  const { contextUser } = useContext(ContextUserData)
  const [stateUser, setStateUser] = useState(contextUser)

  useEffect(() => {
    if (stateUser.length === 0){setStateUser(StartSearch)}
    else{
    const itemArr = contextUser.map((item, index) =>
      <UserPreview key={index} nameUserPreviewProps={item.name} emailUserPreviewProps={item.email} />
    )
    itemArr.length === 0 ? setStateUser(NoResult) : setStateUser(itemArr)
    }
  }, [contextUser])

  return (
    <div className='sidebar'>
      <span className='sidebar__title'>Поиск сотрудников</span>
      <SearchField />
      <span className='sidebar__title'>Результаты</span>
      <div className="sidebar__search">
        {stateUser}
      </div>
    </div>
  )
}

export default SideBar