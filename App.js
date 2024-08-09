import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
// import {auth} from './firebase'
// import { useStateValue } from './StateProvider';
// import { type } from 'express/lib/response';
function App() {

  // const [{basket},dispatch] = useStateValue();

  // useEffect(()=>{
  //   //will only run once when the app comment loads

  //   auth.onAuthStateChanged((authUser)=>{

  //     console.log('THE USER >>>',authUser);

  //     if(authUser){
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser
  //       });
  //     }else {
  //       // the user is logged out
  //       dispatch({
  //         type:'SET_USER',
  //         user: null
  //       })
  //     }
  //   })
  // },[]);

  return (
    <Router>
      <div className="app">

        {/*header */}
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
        </Routes>

        <Routes>
          <Route path='/login' element={<><Login/></>}/>
        </Routes>

        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
