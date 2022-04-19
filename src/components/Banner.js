import React from 'react'
import BannerIcon from '../icons/banner-title.png'
export default function Banner({title,detail}) {
  return (
    <>
    <div className='banner-section'>
    <img src={BannerIcon} />
    <h4>{title}</h4>
    <p>{detail}</p>
    </div>
    </>
  )
}

Banner.defaultProps = {
    title:['21', <sup>st</sup>, ' January I 8-10 PM Live On Our Social Media'],
    detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet doloreagna aliquam eratdolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet doloreagna aliquam erat volutpat. ',
}