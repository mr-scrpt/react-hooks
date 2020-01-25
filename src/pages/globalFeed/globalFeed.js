import React from 'react'
import { Feeds } from 'components/feeds';
const globalFeed = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>Место для обмена знаниями</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Feeds />
          </div>
          <div className="col-md-3">
            Популярыне теги
          </div>
        </div>
      </div>
    </div>
  )

}
export default globalFeed;