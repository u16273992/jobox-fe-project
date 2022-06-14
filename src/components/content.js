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
            <div style={style.input1}>
            [INSERT CLIENT NAME]
            </div>
            <p style={{marginTop:"2cm", fontSize:"14px"}}>Collectively referred herein as the “parties”</p>
        </div>
        )
 }
 else if (props.page ==2)
 {
    return (
        <div style={style.heading2}>
            <p style={{fontWeight:"bold"}}>1. &emsp; Payment Terms:</p>
            <ul style={{listStyleType:"disc"}}>
                <li>BMF Attorney’s fee [Insert Payment Amount] (excluding VAT). The retainer fee 
                    can be paid upfront, or month-to-month and the payment terms can be payable 
                    as follows:
                </li>
                <ul style={{listStyleType:"circle", marginTop:"0.1cm"}}>
                    <li style={{marginTop:"0.2cm"}}>
                       Upfront:
                       <ul style={{listStyleType:"square", marginTop:"0.2cm"}}>
                           <li>
                           Three-twelfths of the fee during the probation period in 3 equal 
                           instalments by the 7th day of each month   
                           </li>
                           <li style={style.height}>
                           Nine-twelfths of the fee upon conclusion of the probation period 
                           of employment payable on the 7th day of the 4th month.   
                           </li>
                       </ul> 
                    </li>
                    <li style={{marginTop:"0.2cm"}}>
                        Month-to-month:
                        <ul style={{listStyleType:"square", marginTop:"0.2cm"}}>
                            <li>
                            The month-to-month fee shall be paid by the 7th day of each month
                            </li>
                        </ul>   
                    </li>   
                </ul>
            <li style={style.height}>
            No variation or amendment to this Agreement shall be of any effect unless such 
            amendment is put in writing and signed by all parties    
            </li> 
            <li style={style.height}>
            Any documentation prepared by <strong>BMF Attorneys</strong> remains its property
            </li>
            </ul>
            <p style={{fontWeight:"bold"}}>2. &emsp; Appointment</p>
            <ul style={{listStyleType: "none", marginTop:"0.2cm"}}>
                2.1
                <li style={style.height}>
                    &emsp;   
                    The Client has procured the services of <strong>BMF Attorneys</strong> and hereby accepts 
                    the appointment as an independent contractor of the Client for a fixed 
                    period of time.   
                </li>
                <li style={style.height}>
                    2.2 &emsp;
                    The reason for this fixed-term contract is <strong>for the appointment and completion
                    of the</strong> [Service Description] 
                </li> 
            </ul>
        </div>
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
    input1:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"1cm",
        marginRight:"2.5cm"
    },
    heading2:{
        marginTop:"1cm",
        marginLeft:"2.5cm",
        width:"15.5cm"
    },
    height:{
       marginTop:"0.1cm" 
    }

}
