import React from 'react';
import './Main.css';
import './Navbar.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom';



import Singapore from './Images/Singapore.webp';
import bangkok from './Images/bangkok.webp';
import chennai from './Images/chennai.webp';
import dubai from './Images/dubai2.webp';
import mumbai from './Images/mumbai.webp';
import delhi from './Images/delhi.webp';


export default function Main() {
  return (
    <div id="divide">
      <body>
        <center>
        <div>
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-item">
                <Button className="nav-link" style={{color:"white"}}>HOME</Button>
              </li>

              <li className="nav-item">
                <Button className="nav-link"style={{color:"white"}}>Find Jobs</Button>
              </li>

              <li className="nav-item">
                <Button className="nav-link"style={{color:"white"}}>Hire Freelancers</Button>
              </li>

              <li className="nav-item">
                <Button className="nav-link" style={{color:"white"}}>Get Ideas</Button>
              </li>

              <li className="nav-item">
                <Button className="nav-link"style={{color:"white"}}>About</Button>
              </li>

              <li className="nav-item">
                <Button className="nav-link"style={{color:"white"}}> Resources</Button>
              </li>

              <li className="nav-item">
                <Button className="nav-link"style={{color:"white"}}> LOGIN</Button>
                <Link to ="/Login">LOGIN</Link>
              </li>
            </ul>
          </nav>
       </div>
       <br/><br/><br/>


        <table id="table_bg">
          <h1 id="let" >
            Hire the best freelancers for any job, online.
          </h1>

          <h4 id="let1">
            World's largest freelance marketplace
          </h4>

          <h4 id="let1">
            Any job you can possibly think of
          </h4>

          <h4 id="let1">
            Save up to 90% & get quotes for free
          </h4>

          <h4 id="let1">
            Pay only when you're 100% happy
          </h4>

          <br/>
            <button href="#" variant = "contained" className='btns' >Hire a Freelancers</button>
            <button href="#" variant ="contained" className='btns'>Earn Money Freelancing</button>
        </table>
        <br/><br/>

        <table>
          <center>
            <h1 id ="let">Make your dreams a reality.</h1>
          </center>
        </table>
        <table id="places">
          <tr>
            <td id="card">
              <Card sx={{ maxWidth: 350 }} id="boxx"> 
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={dubai}
                    alt="Dubai"
                  />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Album cover
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Album cover.
                        ₹9,000 in 9 days.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" >
                      Discover More
                    </Button>
                  </CardActions>
                </Card>
            </td>

            <td  id="card">
              <Card sx={{ maxWidth: 350 }} id="boxx">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Singapore}
                    alt="Singapore"
                  />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Interior 3D model
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Interior 3D model.
                        ₹28,900 in 7 days.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Discover More
                    </Button>
                  </CardActions>
                </Card>

            </td>  

            <td  id="card">

                
            <Card sx={{ maxWidth: 350 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bangkok}
          alt="Bangkok"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          AI generated art
          </Typography>
          <Typography variant="body2" color="text.secondary">
          AI generated art.
          ₹16,500 in 7 days.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Discover More
        </Button>
      </CardActions>
    </Card>

            </td>

          </tr>

          <tr   id="card">

            <td>

            <Card sx={{ maxWidth: 350 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ delhi}
          alt="Delhi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Book cover design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Book cover design.
          ₹2,000 in 3 days
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Discover More
        </Button>
      </CardActions>
    </Card>

            </td>

            <td  id="card">

            <Card sx={{ maxWidth: 350 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ mumbai}
          alt="Mumbai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile app
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Mobile app.
          ₹1,730,000 in 60 days.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Discover More
        </Button>
      </CardActions>
    </Card>

            </td>

            <td  id="card">
            <Card sx={{ maxWidth: 350 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={chennai}
          alt="chennai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Delivery small parcel project
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Delivery small parcel project.
          ₹4,162 in 1 day.
                  </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Discover More
                    </Button>
                  </CardActions>
                </Card>
              </td>
            </tr>
          </table>
        </center>
      </body>
      <Link to ="Footer">Footer</Link>
    </div>
  );
}
