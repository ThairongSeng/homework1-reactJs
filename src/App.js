import logo from './logo.svg';
import './App.css';
import {Gallery, Profile } from './component/Gallery';
import {Header} from './component/Header';
import { Footer } from './component/Footer';
import { MainSec } from './component/MainSec';
import { Feedback } from './component/Feedback';
import { Product } from './component/Product';





function App() {
  return (
    <div className="App">
      <Header/>
      <MainSec/>
      <Gallery/>
      <Feedback/>
      <Product/>
      <Footer/>
    </div>
    
  );
}
export default App;
