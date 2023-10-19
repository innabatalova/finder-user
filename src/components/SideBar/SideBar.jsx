import React, { useState } from 'react'

import { userApi } from '../../api/userApi'

import StartSearch from './StartSearch'
import NoResult from './NoResult'
import UserPreview from './UserPreview'

const SideBar = () => {
  const [userResult, setUserResult] = useState(null)

  const getUsers = (e) => {
    let inputValue = e.target.value
    const arrProps = (inputValue.split(', '))

    const arrUrls = []

    arrProps.forEach(item => {
      if (isNaN(item) == false) {
        const intArrProps = arrProps.map(item => {
          var number = parseInt(item)
          return number
        })
        let urlNumber = userApi(intArrProps)
        fetch(urlNumber)
          .then((response) => response.json())
          .then((data) => {
            const userData = data.map(item =>
              item
            )
            arrUrls.push(userData)
          }
          )

      } else if (isNaN(item) == true) {
        let urlString = userApi(arrProps)
        fetch(urlString)
          .then((response) => response.json())
          .then((data) => {
            const userData = data.map(item =>
              item
            )
            arrUrls.push(userData)
          }
          )
      }
    })
    console.log(arrUrls)
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