import React, { useState } from 'react'

import { userApi } from '../../api/userApi'

import StartSearch from './StartSearch'
import NoResult from './NoResult'
import UserPreview from './UserPreview'

const SideBar = () => {
  const [userResult, setUserResult] = useState(null)

  const getUsers = (e) => {
    let inputValue = e.target.value

    let arrInputValue = []
    arrInputValue = (inputValue.trim().split(', '))

    const arrTypeInputValue = arrInputValue.map(item =>
      isNaN(item) == false ? parseInt(item) : item
    )

    const arrStrings = arrTypeInputValue.filter((item) => typeof item == 'string')
    const arrNumbers = arrTypeInputValue.filter((item) => typeof item == 'number')
    const resultArr = []

    let urlString = userApi(arrStrings)
    fetch(urlString)
      .then((response) => response.json())
      .then((data) => {
        data.forEach(item => {
          resultArr.push(item)
        })
      }
      )

    let urlNumber = userApi(arrNumbers)
    fetch(urlNumber)
      .then((response) => response.json())
      .then((data) => {
        data.forEach(item => {
          resultArr.push(item)
        })
      }
      )

    setTimeout(() => {
      const itemArr = resultArr.map((item, index) =>
        <UserPreview key={index} nameUserPreviewProps={item.name} emailUserPreviewProps={item.email}/>
      )
      setUserResult(itemArr)
    }, 500);

  }

  return (
    <div className='sidebar'>
      <span className='sidebar__title'>Поиск сотрудников</span>
      <input onChange={getUsers} className='sidebar__field' type="text" placeholder='Введите Id или имя ' />
      <span className='sidebar__title'>Результаты</span>
      <div className="sidebar__search">
        {userResult}
      </div>
    </div>
  )
}

export default SideBar