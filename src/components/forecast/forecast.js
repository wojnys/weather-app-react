import React from 'react'

export const Forecast = ({data}) => {
    console.log(data.list[0].dt + " do")

    {data.list.map((value) => (
        console.log(value.main.temp)
      ))}

  return (
    <div>forecast</div>
  )
}