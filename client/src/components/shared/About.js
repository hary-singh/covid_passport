import { Container, Divider, Icon, Header, Card, Image, Grid} from 'semantic-ui-react';

const About = () => {
  return(
   <>
    <Container textAlign="center">
       <Header>About Us</Header>
     <Grid columns='3'>
        <Grid.Column>
          <Card>
            <Image  />
            <Card.Content>
              <Header>Harry Dhillon</Header>
            </Card.Content>
            <Card.Description >
            <a style={{color: 'black'}} href="https://github.com"><Icon name='github' size='big' /></a>
            <a href="https://linkedin.com"><Icon name='linkedin' size='big'/></a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image  />
            <Card.Content>
            <Header>Skylar Burningham</Header>
            </Card.Content>
            <Card.Description>
              <Icon name='github' size='big' /> <a><Icon name='linkedin'  size='big' /></a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              This is Discription
            </Card.Description>
            
          </Card>
        </Grid.Column>
        
        <Grid.Column>
          <Card>
            <Image />
            <Card.Content>
              <Header>Spencer Curtis</Header>
            </Card.Content>
            <Card.Description>
              <a style={{color: 'black'}} href='http://www.linkedin.com/in/tyler-cheney'>
                <Icon name='github' size="big" />
              </a>
              <a href='http://www.linkedin.com/in/tyler-cheney'>
                <Icon name='linkedin' size="big" />
              </a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              
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