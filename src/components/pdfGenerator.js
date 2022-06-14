import React from 'react';

export default function PDFgenerator() {
  return (
    <div>
    <div style={styles.pages}>
      <div style={styles.page}>
        <header style={styles.header}></header>
        <h1 style={styles.heading}>
          hello from pdfGenerator
        </h1> 
      </div>
    </div>
    <div style={styles.pages}>
      <div style={styles.head}></div>
      <div style={styles.page}>
        <h1 style={styles.heading}>
          hello from pdfGenerator
        </h1> 
      </div>
    </div>
    <div style={styles.pages}>
      <div style={styles.head}></div>
      <div style={styles.page}>
        <h1 style={styles.heading}>
          hello from pdfGenerator
        </h1> 
      </div>
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
    borderBottom: "1px solid black"
  },
  heading: {
  color: "orange",
  fontSize: "72px",
  },
  body: {

  },
  page:{
    boxShadow: "0 30px 40px rgba(0,0,0,.1)",
    backgroundColor: "white",
    textAlign: "center",
    width: "21cm",
    height: "29.7cm",
    border: '1px solid black',
    marginTop: '0.265cm',
    marginBottom: '0.265cm'
  },
  pages:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

}