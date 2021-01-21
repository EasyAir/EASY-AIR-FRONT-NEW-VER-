import './App.css';
import GlobalStyle from './PUBLIC/globalStyle'
import Login from './COMPONENTS/LOGIN/login'
import Header from './COMPONENTS/HEADER/header'
import Overview from './COMPONENTS/OVERVIEW/overview'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Route exact path="/"><Login></Login></Route>
    <Route exact path="/overview">
        <Header></Header>
        <Overview></Overview>
    </Route>
{/*         <Login></Login> */}
    </BrowserRouter>
  );
}

export default App;
