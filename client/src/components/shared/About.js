import { Container, Divider, Icon, Header, Card, Image, Grid} from 'semantic-ui-react';
import Harry from '../images/Harry-Img.png';
import Skylar from '../images/testing.jpg';
import Spencer from '../images/Spencer.jpg';
import {Img, Headers, H1, Icons, Footer, Btn, Btn1, Body, Divpad, Icon1} from './styledComponents';

const About = () => {
  return(
   <>
    <Container textAlign="center">
       <Headers>About Us</Headers>
     <Grid columns='3'>
        <Grid.Column>
          <Card>
            <Image src={Harry} />
            <Card.Content>
              <Header>Harry Dhillon</Header>
            </Card.Content>
            <Card.Description >
            <a style={{color: 'black'}} href="https://github.com/hary-singh"><Icon name='github' size='big' /></a>
            <a href="https://www.linkedin.com/in/navbirsdhillon/"><Icon name='linkedin' size='big'/></a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              I choose difficult projects and sometimes fail at them! LOL!
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src={Skylar} />
            <Card.Content>
            <Header>Skylar Burningham</Header>
            </Card.Content>
            
            <Card.Description>
            <a style={{color: 'black'}} href="https://github.com/skyburn42"><Icon name='github' size='big' /></a>
            <a href='https://www.linkedin.com/in/skylar-burningham400'>
            <Icon name='linkedin' size='big'/>
              </a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              I just there and laugh at Harry! LOL!
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
        
        <Grid.Column>
          <Card>
            <Image src={Spencer}/>
            <Card.Content>
              <Header>Spencer Curtis</Header>
            </Card.Content>
            <Card.Description>
              <a style={{color: 'black'}} href='https://github.com/Scurtis90'>
                <Icon name='github' size="big" />
              </a>
              <a href='https://www.linkedin.com/in/spencer-curtis?trk=people-guest_people_search-card'>
                <Icon name='linkedin' size="big" />
              </a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              I like turtles.
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
     </Grid>
    </Container>
    </>
  )
}

export default About;