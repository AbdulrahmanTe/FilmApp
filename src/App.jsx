import './App.css'
import {Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import { Header } from './components';

//1. Setup your router
//2. Define your router
//3. Handle Navigation

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<Header></Header>}>

          <Route index element={<Pages.Homepage></Pages.Homepage>}></Route>

          <Route path ="/shows">
            <Route index element={<Pages.Showspage></Pages.Showspage>}></Route>
            <Route path=":id" element={<Pages.Showpage></Pages.Showpage>}></Route>
          </Route>      

          <Route path="/search" element={<Pages.Searchpage></Pages.Searchpage>}></Route>
          <Route path="*" element={<Pages.NotFoundPage></Pages.NotFoundPage>}></Route>

        </Route>
        
      </Routes>     
    </>
  )
}

export default App
