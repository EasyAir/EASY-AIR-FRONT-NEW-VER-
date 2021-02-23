import './App.css';
import GlobalStyle from './PUBLIC/globalStyle'
import Login from './COMPONENTS/LOGIN/login'
import Header from './COMPONENTS/HEADER/header'
import Overview from './COMPONENTS/OVERVIEW/overview'
import {BrowserRouter,Route} from 'react-router-dom'
import FactoryMange from './COMPONENTS/FACTORY/FACTORYMANAGE/factoryManage';
import FactoryAdd from './COMPONENTS/FACTORY/FACTORYADD/factoryAdd'
import MemberManage from './COMPONENTS/MEMBER/MEMBERMANAGE/memberManage'
import Team from './COMPONENTS/TEAM/team'
import Check from './COMPONENTS/CHECK/check';
import Modal from './PUBLIC/modal';
import ContextProvider from './CONTEXT/provider'
import FactoryComp from './COMPONENTS/FACTORY/FACTORYMACHINE/factoryComp';
import TeamManage from './COMPONENTS/TEAM/teamManage';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Modal></Modal> 
        <Route exact path="/"><Login></Login></Route>
        <Route path="/" component={Header}></Route>
        <Route path="/overview" component={Overview}></Route>
        <Route exact path="/factory" component={FactoryMange}></Route>
        <Route path="/addfactory"><FactoryAdd></FactoryAdd></Route>
        <Route path="/member"><MemberManage></MemberManage></Route>
        <Route path="/team"><Team></Team></Route>
        <Route path="/check"><Check></Check></Route>
        <Route path="/teammanage" component={TeamManage }></Route>
        <Route path="/factory/:id" component={FactoryComp}></Route>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
  