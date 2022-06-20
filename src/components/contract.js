import React from 'react';
import Page from './page';

export default function Contract() {

  let pages = [1,2,3];

  return (
    <div id ="downloadContract">
        {
          pages.map((item,index)=>{
            return <Page key = {index} number={item}/>
          })
        }

    </div>
  )
}
