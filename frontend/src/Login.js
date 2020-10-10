// index.js

import React from 'react'
import { render } from 'react-dom'
import Header from './Container/Header/HeaderContainer/Header'
import Footer from './Container/Footer/FooterContainer/Footer'

render((
    <Header />
), document.getElementById('Header'));


render((
    <Footer />
), document.getElementById('Footer'));

