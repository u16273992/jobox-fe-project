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
            <ul style={{listStyleType:"decimal"}}>
                <li>&emsp; <strong>Payment Terms:</strong>
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
                </li>
                <li style={{marginTop:"1cm"}}>
                    &emsp; <strong>Appointment</strong>
                    <ol style={{listStyleType:"decimal",marginTop:"0.2cm"}}>
                        <li style={style.height}>
                        The Client has procured the services of <strong>BMF Attorneys</strong> and hereby accepts 
                        the appointment as an independent contractor of the Client for a fixed 
                        period of time.   
                        </li>
                        <li style={style.height}>
                        The reason for this fixed-term contract is <strong>for the appointment and completion
                        of the</strong> [Service Description] 
                        </li> 
                    </ol>    
                </li> 
                <li style={{marginTop:"1cm"}}>
                    &emsp; <strong>Duration</strong>
                    <ul style={{listStyleType:"decimal",marginTop:"0.2cm"}}>
                        <li style={style.height}>
                        Notwithstanding the date of signature hereof, this fixed term contract shall be deemed 
                        to have commenced on the [insert start date] and will terminate, without further notice, 
                        on the [insert end date].    
                        </li>
                        <li style={style.height}>
                        The automatic termination of the contract on the Termination Date shall not be construed 
                        as a dismissal but as the completion of a fixed term contract.
                        </li> 
                    </ul>    
                </li>   
            </ul>
        </div>
       )
 }
 else if (props.page ==3)
 {
    return (
        <div style={style.heading3}>
            <strong>4.</strong>
            <p style={{marginTop:"2cm"}}>Signed at &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;on</p>
            <p style={{marginTop:"2cm",borderBottom: "1px solid black", width:"7cm"}}></p>
            <p>Who warrants authority on behalf of Jobox</p>
            <p style={{marginTop:"2cm"}}>Signed at &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;on</p>
            <p style={{marginTop:"2cm",borderBottom: "1px solid black", width:"7cm"}}></p>
            <p>Who warrants authority on behalf of Jobox</p>
        </div>
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
        marginLeft:"2cm",
        width:"16cm",
        marginBottom: "4cm"
    },
    height:{
       marginTop:"0.1cm" 
    },
    heading3:{
        marginTop:"1cm",
        marginLeft:"2.5cm",
        marginBottom: "12cm"
    }


}
