import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Body from './component/Body';
import Quotes from './component/quotes.json';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      {
        Quotes.quote.map((ele)=>(
          <Body text={ele.quote} author = {ele.author}></Body>
        ))

      }
      <Footer></Footer>
    </div>
  );
}

export default App;
