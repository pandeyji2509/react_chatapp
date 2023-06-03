import './App.css';

import Join from './components/Join/Join';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from './components/Chat/Chat';
// const ENDPOINT='http://localhost:5000/';
// const socket= socketIO(ENDPOINT,{transports:['websocket']});
import Navbar from './components/Navbar/Navbar';
function App() {
  // socket.on("connect",()=>{

  // });
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Join/>} />
          <Route path='/chat' exact element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
