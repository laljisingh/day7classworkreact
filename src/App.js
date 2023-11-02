import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Body from './component/body';

function App() {
  const data1 = {
    data : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    name:"Adam Scott"
  };
  const data2 = {
    data : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    name:"Harry poter"
  };
  const data3 = {
    data : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    name:"Adam Scott"
  };
  const data4 = {
    data : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    name:"Adam Scott"
  };
  const data5 = {
    data : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    name:"Adam Scott"
  };
  const data6 = {
    data : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    name:"Adam Scott"
  };
  return (
    <div className="App">
      <Navbar></Navbar>
      <Body props={data1}></Body>
      <Body props={data2}></Body>
      <Body props={data3}></Body>
      <Body props={data4}></Body>
      <Body props={data5}></Body>
      <Body props={data6}></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
