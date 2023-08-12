import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import Studocorp from './Studocorp';
import Service from './Services';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
 function App() {
  return (
    <div> 
    {/* <Router>
         <Route exact path="/" element={<Carousel />}/>
    </Router> */}
    <Navbar /> <Carousel /> <About /> <Studocorp /> <Service /> <Footer />
    </div>
 
  )
 }

 export default App;