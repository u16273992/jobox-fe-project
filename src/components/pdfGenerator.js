import React from 'react';
import '../styles/Styles.css';

export default function PDFgenerator() {
  return (
    <div style={styles.pages}>
      <div style={styles.page}>
        <h1 style={styles.heading}>
          hello from pdfGenerator
        </h1> 
      </div>
    </div>
  )
}

const styles = {
  background:{
    backgroundColor: "#f0f4f3"
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
  },
  pages:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

}