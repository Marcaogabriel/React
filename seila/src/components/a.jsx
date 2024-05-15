import React from 'react'

export default function A() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json(
            console.log(response)
        ))
        .then((json) => console.log(json));

     


    return (
    <div>
      <h1>A</h1>
    </div>
  )
}
