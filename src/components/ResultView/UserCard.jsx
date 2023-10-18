import React from 'react'

import AvatarImgDefoult from '../../static/img/avatar-img-defoult.png'

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-card__img">
        <img src={AvatarImgDefoult} alt="user image" />
      </div>

      <div className="user-card__info">
        <span className="user-card__title">Ervin Howell</span>
        <span className="user-card__data">
          email:
          <span className="user-card__data_info">Shanna@melissa.tv</span>
        </span>
        <span className="user-card__data">
          phone:
          <span className="user-card__data_info">010-692-6593 x09125</span>
        </span>
        <span className="user-card__title">О себе:</span>
        <p className="user-card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui esse laborum ab repellendus similique labore tempora ipsam dolorem rem soluta. Molestiae consequatur odit cupiditate placeat non, est cum explicabo dolorum?</p>
      </div>
    </div>
  )
}

export default UserCard