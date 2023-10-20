import React, { useContext, useEffect } from 'react'

import { Context } from '../../context/context'

import UserCard from './UserCard'
import ResultDefoult from './ResultDefoult'

const ResultView = () => {
  // const { contextUser, setContextUser } = useContext(Context)
  // useEffect(() => { setContextUser(ResultDefoult) }, [])

  // const itemArr = resultArr.map((item, index) =>
  //   <UserPreview key={index} nameUserPreviewProps={item.name} emailUserPreviewProps={item.email} />
  // )
  // itemArr.length === 0 ? setContextUser(NoResult) : setContextUser(itemArr)
  
  return (
    <div className="result">
      <UserCard nameUserCardProps='Leanne Graham' emailUserCardProps='Sincere@april.biz' 
        phoneUserCardProps='1-770-736-8031 x56442' catchPhraseUserCardProps='Multi-layered client-server neural-net'/>
    </div>
  )
}

export default ResultView