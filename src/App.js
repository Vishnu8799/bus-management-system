import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import AddBusForm from './Components/AddBusForm';
import { getData,saveData } from './Utils/Storage';
import './App.css'
import { Col, Row } from 'reactstrap';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(getData('isLoggedIn'));
  }, []);

  const handleLogin = (loginStatus) => {
    setLoggedIn(loginStatus);
    saveData('isLoggedIn', loginStatus); // Save login status to local storage
  };

  const handleLogout = () => {
    setLoggedIn(false); // Set login state to false
    saveData('isLoggedIn', false); // Remove login status from local storage
  };


  return (
    <div className='head'>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <div>
          <Row className='header'>
            <Col lg='11' style={{justifyContent:'center',display:'flex',fontSize:'25px',fontWeight:'bold'}}>Bus Management Dashboard </Col>
            <Col lg='1'style={{fontSize:'18px',cursor:'pointer'}} onClick={handleLogout}> Logout </Col>
            </Row>
          </div>
          <AddBusForm />
        </div>
      )}
    </div>
  );
}

export default App;
