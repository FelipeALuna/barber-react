import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import Nav from './components/Nav'
import Home from './components/Home';
function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Home/>
      {/* <Section image="https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gray= {true}/> */}
    </div>
  );
}

export default App;
