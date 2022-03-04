import './App.css';
import Header from './Componentes/Header/Header';
import Main from './Componentes/Mains/Main';
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (

    <div>

      <ScrollToTop smooth top="50"/>

      <Header />

      <Main />

    </div>

  );
}

export default App;
