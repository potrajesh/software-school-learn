import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/learn-routing/navbar/Navbar.js';
import Home from './components/learn-routing/home/Home.js';
import SignIn from './components/learn-routing/signin/SignIn.js';
import SignUp from './components/learn-routing/signup/SignUp.js';
import CreateAccount from './components/forms-handling/CreateAccount.js';
import FormsHandleSelectRadioCheckBox from './components/forms-handling/formhandling-select-radio-checkbox/FormsHandleSelectRadioCheckBox.js';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/signin' element={<SignIn/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/create-account' element={<CreateAccount/>}></Route>
     <Route path='/formsHandleSelectRadioCheckBox' element={<FormsHandleSelectRadioCheckBox/>}></Route>
     <Route path="*" element={<h1>404 Not Found</h1>} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
