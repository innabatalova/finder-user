import React, { useContext, useEffect, useState } from 'react'

import { ContextUserData } from '../../context/context'

import UserCard from './UserCard'
import ResultDefoult from './ResultDefoult'

const ResultView = () => {
  const { contextUser } = useContext(ContextUserData)
  const [stateUser, setStateUser] = useState(contextUser)

  useEffect(() => {
    const itemArr = contextUser.map((item, index) =>
      <UserCard key={index} nameUserCardProps={item.name} emailUserCardProps={item.email}
        phoneUserCardProps={item.phone} catchPhraseUserCardProps={item.company.catchPhrase} />
    )
    itemArr.length === 0 ? setStateUser(ResultDefoult) : setStateUser(itemArr)
  }, [contextUser])

  return (
    <div className="result">
      {stateUser}
    </div>
  )
}

export default ResultView