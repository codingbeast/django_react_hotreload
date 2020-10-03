// index.js

import React from 'react'
import { render } from 'react-dom'
import LoginScreen from './Components/LoginScreen'
import Header  from './Components/Header'
import Footer from './Components/Footer'

render((
    <Header />
), document.getElementById('Header'));


render((
    <Footer />
), document.getElementById('Footer'));

