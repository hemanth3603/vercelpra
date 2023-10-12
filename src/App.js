import './App.css';
import { Header,Footer } from './components/Header';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Header name="hemanth" />
      <Nav age="10" />
      <Nav age="20" />
      <Nav age="30" />
      <Nav age="40" />
      <Footer brand="Puma"></Footer>
    </div>
  );
}

export default App;
