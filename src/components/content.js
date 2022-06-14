import React from 'react'

export default function Content(props) {
 if (props.page ==1 ) 
 {
    return (
        <div>Content 1</div>
        )
 }
 else if (props.page ==2)
 {
    return (
        <div>Content 2</div>
       )
 }
 else if (props.page ==3)
 {
    return (
        <div>Content 3</div>
       )
 }
}

const style = {
    heading:{

    },
    input:{

    }
}
