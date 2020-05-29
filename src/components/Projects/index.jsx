import React from 'react'
import {Grid, Cell, Card , CardTitle, CardActions , CardText, Button, CardMenu, IconButton} from 'react-mdl'
import headshot from "../../images/headshot.jpg"
import "./style.css"
function Projects() {
    return (
        <div>
            <Grid className="demo-grid-1" >

        <Cell col={4}>
    <Card className="card" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{width: '150px',  color: '#fff', height: '150px', background: 'url(https://res.cloudinary.com/amzap/image/upload/v1590461962/portfolio/full-logo_osgp4y.png)  center / cover'}}>Social Distance</CardTitle>
    <CardText className="card-text">
    With the unforseen circumstances of the novel Covid-19 Virus. My team and I thought of an idea, of having an app to help us keep the distances between us, but also keep us social with each other.
    </CardText>
    <CardActions border>
        <Button   href="https://bbelka.github.io/covidDistractions/" colored>Check it Out</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>
        </Cell>

        <Cell col={4}>

        <Card className="card" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'image(../../images/Headshot.jpg)'}}>Welcome</CardTitle>
    <CardText className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
        </Cell>
        <Cell col={4}>

        <Card className="card" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/amzap/image/upload/v1590461983/portfolio/Geogram_hhjymp.png) center / cover'}}>Welcome</CardTitle>
    <CardText className="card-text">
       This application saves locations on a map and allows the user to post a title, review, and image to that location. It is user based so all saved data is for that specific user. Full Stack Application made with MySQL on the backend along with Sequilize and other npm packages including , handlebars, express, and others.
    </CardText>
    <CardActions border>
        <Button href="https://murmuring-waters-09325.herokuapp.com//" colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    
</Card>
        </Cell>
    </Grid>
            
        </div>
    )
}

export default Projects
