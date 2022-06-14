import React from 'react';
import Content from './content';

const space = 0.5;

export default function Page(props) {
  return (
    <div style={styles.pages}>
      <div style={styles.page}>
        <header>
            <h6 style={styles.header}>RECTRUITMENT RATES AND TERMS AGREEMENT</h6>  
        </header>
        <Content page={props.number}/>
      </div>
    </div>
  )
}

const styles = {
    background:{
      backgroundColor: "#f0f4f3"
    },

    header:{
      marginTop: "3cm",
      marginLeft: "2.5cm",
      width: "16cm",
      borderBottom: "1px solid black",
    },

    title: {
     color: "orange",
     fontSize: "72px",
     alignItems: 'center',
     justifyContent: 'center'
    },

    body: {
  
    },
    page:{
      boxShadow: "0 30px 40px rgba(0,0,0,.1)",
      backgroundColor: "white",
      width: "21cm",
      height: "29.7cm",
      border: '1px solid black',
      marginTop: '10px'
    },
    pages:{
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'center'
    }
  
  }