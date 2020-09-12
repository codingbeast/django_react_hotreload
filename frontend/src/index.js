// index.js

import React from 'react'
import { render } from 'react-dom'
import Header from './Components/Header'
import Myfeed from './Components/MyFeed'



render((
    <Header />
), document.getElementById('Header'));

render((
    <Myfeed />
), document.getElementById('Myfeed'));

