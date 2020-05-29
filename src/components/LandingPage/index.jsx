import React from 'react'
import "./style.css"
import { Grid, Cell } from 'react-mdl'


function LandingPage() {
    return (
        <div className="main-div">
           <Grid className="landing-grid">
               <Cell col={12}>
                   <img src="https://res.cloudinary.com/amzap/image/upload/v1590461912/portfolio/headshot_lmclys.jpg"
                   alt="myheadshot"
                   className="head-shot"
                   />
               </Cell>
           </Grid>
            
        </div>
    )
}

export default LandingPage
