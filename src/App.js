import './App.css';
import PDFgenerator from './components/pdfGenerator';

function App() {
  return (
    <div style={styles.background}>
      <PDFgenerator/>
    </div>
    
  );
}

export default App;

const styles = {
  background:{
    flex:1,
    backgroundColor: "red",
  },
  heading: {

  },
  body: {

  },

}