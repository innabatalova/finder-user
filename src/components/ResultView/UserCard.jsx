import React from 'react'

import AvatarImgDefoult from '../../static/img/avatar-img-defoult.png'

const UserCard = ({ nameUserCardProps, emailUserCardProps, phoneUserCardProps, catchPhraseUserCardProps } ) => {
  return (
    <div className="user-card">
      <div className="user-card__img">
        <img src={AvatarImgDefoult} alt="user image" />
      </div>

      <div className="user-card__info">
        <span className="user-card__title">{nameUserCardProps}</span>
        <span className="user-card__data">
          email:
          <span className="user-card__data_info">{emailUserCardProps}</span>
        </span>
        <span className="user-card__data">
          phone:
          <span className="user-card__data_info">{phoneUserCardProps}</span>
        </span>
        <span className="user-card__title">О себе:</span>
        <p className="user-card__text">{catchPhraseUserCardProps}</p>
      </div>
    </div>
  )
}

export default UserCard