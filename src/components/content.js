import React from 'react'

export default function Content(props) {
 if (props.page ==1 ) 
 {
    return (
        <div style={style.heading1}>
            <p style={{fontWeight:"bold"}}>FIXED TERM AGREEMENT</p>
            <p style={{marginTop:"1cm"}}>between</p>
            <div style={style.heading1name}>
                <p>BMF ATTORNEYS</p>
                <p>with company registration number 2022/123456/07</p>
            </div>
            <p style={{marginTop:"1cm"}}>and</p>
            <div style={style.input}>
            [INSERT CLIENT NAME]
            </div>
            <p style={{marginTop:"2cm", fontSize:"14px"}}>Collectively referred herein as the “parties”</p>
        </div>
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
    heading1:{
        marginTop:"2cm",
        marginLeft:"2.5cm",
    },
    heading1name:{
        marginTop:"1cm", 
        alignItems:"center",
        fontWeight:"bold",
        display:"flex",
        flexDirection:"column",
        marginRight:"2.5cm"
    },
    input:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"1cm",
        marginRight:"2.5cm"
    }
}
