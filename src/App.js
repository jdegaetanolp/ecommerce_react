import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './main.css';



function App() {
  return (
      <>
        <NavBar/>
        <ItemListContainer greetings="Bienvenido a nuestra Tienda Web!!!"/>
      </>
  );
}

export default App;
