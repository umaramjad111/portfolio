import Navbar from "./components/navbar/navbar";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Privacypolicy from "./pages/privacypolicy";
import Home from "./pages/home";


function App() {


  return (
    <>
     <Router>
     <Navbar />
     <Route path="/" exact component={Home} />
      <Route path="/privacy" exact component={Privacypolicy} />
     </Router>
     

     
     
    </>
  );
}

export default App;
