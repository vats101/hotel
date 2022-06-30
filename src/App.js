import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Error from './Pages/Error';
import SingleRoom from './Pages/SingleRoom';
import './App.css';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import RoomContext from './context';
import items from './data'
import Footer from './components/Footer'
function App() {
  console.log(items);
  return (
    <RoomContext.Provider value={items}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/rooms' exact element={<Rooms />}></Route>
          <Route path='/rooms/:lobby' exact element={<SingleRoom />}></Route>  //alag alag rooms honge like presidential room etc. therefore we are using params here.
          <Route component={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </RoomContext.Provider>

  );
}

export default App;
