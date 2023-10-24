import React, { useContext } from 'react'

import { ContextUserData } from '../../context/context';

import { userApi } from '../../api/userApi';

const SearchField = () => {
  const { contextUser, setContextUser } = useContext(ContextUserData)

  const getUsers = (e) => {
    let inputValue = e.target.value
    let arrInputValue = []

    arrInputValue = (inputValue.trim().split(', '))
    const arrTypeInputValue = arrInputValue.map(item =>
      isNaN(item) == false ? parseInt(item) : item
    )

    const arrStrings = arrTypeInputValue.filter(item => typeof item == 'string')
    const arrNumbers = arrTypeInputValue.filter(item => typeof item == 'number')
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
      setContextUser(resultArr)
    }, 500);
  }

  return (
    <input onChange={getUsers} className='sidebar__field' type="text" placeholder='Введите Id или имя ' />
  )
}

export default SearchField