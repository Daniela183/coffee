//aula335||341||343
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/template/Header'

import Footer from '../components/template/Footer'
import { Routes } from 'react-router'
//import Home from '../components/template/Home'
//import { Box, Typography } from '@mui/material'


export default props =>
    <BrowserRouter>
        <div className="app">
          <Routes/>
            <Header />
            <Footer />
        </div>
    </BrowserRouter>
/*import 'font-awesome/css/font-awesome.min.css'

import { BrowserRouter } from 'react-router-dom'

import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>*/