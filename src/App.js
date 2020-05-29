import React from 'react'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header,  Navigation, Drawer, Content} from 'react-mdl'

import Main from '../src/components/Main'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import "./images/headshot.jpg"
import "./App.css"

function App() {

    // <a href="/about">About</a>
    // <a href="/projects">Projects</a>
    // <a href="/contact">Contact</a>
    // <a href="/">Home</a>
    // https://www.wallpaperflare.com/static/666/270/487/walhalla-overlook-north-rim-grand-canyon-wallpaper.jpg

  return (
  
   
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Michael Zuniga" scroll>
    <Navigation >
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    <a href="/">Home</a>       
    </Navigation>
        </Header>


    <Drawer title="">
    <Navigation>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    <a href="/">Home</a>
    </Navigation>
    </Drawer>
    
        <Content>
            <Main />
           
        
        </Content>
    </Layout>
</div>
   
  )
}

export default App;

