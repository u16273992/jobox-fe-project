import './App.css';
import Contract from './components/contract';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";



function App() {

  function downloadDocument(){
    const input = document.getElementById("downloadContract");
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      for(let i = 0; i < 3; i++)
      {
        pdf.addImage(imgData, "JPEG",-139.5,-3 - (i*300));
        
        if (i !== 2)
          pdf.addPage();
      }
      pdf.save("BMF_ATTORNEYS CONTRACT")
    })
  }
  

  return (
    <div style={styles.background}>
      <Contract/>
      <button onClick={downloadDocument} style={styles.button}>
        DOWNLOAD CONTRACT
      </button>
    </div>
    
  );
}

export default App;

const styles = {
  background:{
    backgroundColor: "#f8f9fa",
  },
  buttonView: {
    marginTop: "2cm",
    marginBottom: "2cm",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
  },
  button: {
    position: "fixed",
    bottom: "0.5rem",
    right: "0.5rem",
    boxShadow: "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
    width: "4cm",
    height: "1cm"
  }

}