import './App.css';
import Contract from './components/contract';


function App() {

  function handleSubmit(e) {
    e.preventDefault();    
    console.log('You clicked submit.');
  }

  return (
    <div style={styles.background}>
      <Contract/>
      <button onClick={handleSubmit} style={styles.button}>
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