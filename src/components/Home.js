import React, { useContext } from 'react';
import { Button, Navbar, Nav, NavItem } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import ZenContext from '../contextProvider/ZenContext';

// This component displays the home page of this application
const Home = () => {
    const navigate = useNavigate();
    const {logoutMessage} = useContext(ZenContext);

  return (
    <div className='component-main-div'>
      <Navbar  expand="md" className='Navbar-class' fixed='top'>
          <Nav className="mr-auto" navbar style={{alignItems : "center"}}>
            <NavItem>
              <h6 style={{color:"white"}}>Zen Student Dashboard</h6>
            </NavItem>
          </Nav>
          <Nav className='ml-auto' navbar style={{alignItems : "center"}}>
            <NavItem>
                <Button className='home-page-Button-class' color='primary' size='sm' onClick={() => navigate('/login')}>Login</Button>
            </NavItem>
            <NavItem>
                <Button className='home-page-Button-class' color='info' size='sm' onClick={()=>navigate('/signup')}>Signup</Button>
            </NavItem>
          </Nav>
    </Navbar>

    <p className='app-suggestion-p'>When you have opened this application's link for the <b style={{color : "blue"}}>first time</b>, please wait for 20-30 seconds <b style={{color : "blue"}}>after submitting the requests for login, signup, or forgot password</b>.</p>
    <p className='app-suggestion-p'>Due to Render's <b style={{color : "blue"}}>"spinning down on idle"</b> issue, the server may take a little longer time to start (when it is opened after a long time). </p>
      
    <br />
   
        <h5 style={{color: "blue"}}>Welcome to Zen application </h5>
        <p className='blue-color-p-class'>(zen student dashboard)</p>
        {/* A message will be displayed when an student logged out successfully */}
        <h5 style={{color : "green"}}>{logoutMessage}</h5>


        <br />

        {/* Application usage suggestions */}


        <h6>Instructions</h6>
        <div className='home-page-suggestion-flex'>
          <div className='home-page-suggestion-divs'>
            <ul>
            <li><p className='home-page-suggestion-p-red'><b>This page will monitor the localStorage (for access token) every 2 minutes. So, during login, signup, forgot-password operations, please fill the details in less than 2 minutes. Otherwise, it will reload the login page again.</b></p></li>
            <li><p className='home-page-suggestion-p-green'>All the recommended features are implemented.</p></li>
            <li><p className='home-page-suggestion-p-red'>The "Forgot password" or "Reset password" link is given in the login page.</p></li>
            
            <li><p className='home-page-suggestion-p-green'>For using pages which do not need authentcation, logout from your account first.</p></li>

            <li><p className='home-page-suggestion-p-red'><b>After submitting signup, forgot-password, reset-password pages, kindly wait for some time. It may take some time for processing and giving confirmation message.</b></p></li>

            
            

            </ul>
           

          </div>
          <div className='home-page-suggestion-divs'>
          <ul>
          <li><p className='home-page-suggestion-p-red'>The student during SIGNUP, should give valid and working email id. An account-activation link will be sent to the registered email id.</p></li>

          <li><p className='home-page-suggestion-p-green'><b>Here, it is considered that when student clicks a bubble button (in the session roadmap) i.e. checked, that class will be marked as conducted or completed. </b></p></li>

          <li><p className='home-page-suggestion-p-red'><b>When student clicks the "Join Class" button, it will be considered that he attended that class. </b></p></li>

          <li><p className='home-page-suggestion-p-green'>After submitting any data (task or webcode etc.), if the proper data is not displayed, then kindly refresh the page once.</p></li>
          
           

          </ul>           
          </div>

        </div>

    </div>
  )
}

export default Home;



