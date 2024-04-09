import React, { useState } from 'react'

function GenreFilter({genres}) {


  return (
    <div style={{backgroundColor:'lightgray',borderRadius:'5px',padding:'20px'}}>
      <h2>Filter by Genre</h2>
      <div>
        {genres.map((mov,i)=><button onClick={()=> console.log('Filtering by',mov)}   style={{backgroundColor:'lightgray',margin:'0.5rem',padding:'5px',borderRadius:'5px'}}  key={i}>{mov}</button>)}
      </div>
    </div>
  )
}

export default GenreFilter
