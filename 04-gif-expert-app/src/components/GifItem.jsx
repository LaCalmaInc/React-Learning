import React from 'react'

export const GifItem = ({title , url}) => {

  return (
    <div className='card'>
      <img src={url} alt="No image" />
      <p>{title}</p>
    </div>
  )
}


