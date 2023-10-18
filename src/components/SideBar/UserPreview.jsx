import React from 'react'

import AvatarImgDefoult from '../../static/img/avatar-img-defoult.png'

const UserPreview = () => {
  return (
    <div className="user-preview">
      <img className="user-preview__img" src={AvatarImgDefoult} alt="user image" />
      <div className="user-preview__info">
        <span className="user-preview__name">Bret</span>
        <span className="user-preview__email">Sincere@april.biz</span>
      </div>  
    </div>
  )
}

export default UserPreview