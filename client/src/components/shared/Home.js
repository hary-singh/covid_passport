import { Header, Button, Icon, Container, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Home = () => (
    <Container textAlign='center'>
      <Divider hidden />
    <Header as="h3" textAlign="center">Covid Passport</Header>

    <Container> Millions of Americans are being vaccinated against Covid-19 everyday -- Did you get yours?</Container>
    <Divider hidden />
    <Button standard size='big' icon labelPosition='right'>
        <Link to="/destinations" >
        View Destinations
        </Link>
        <Icon name='right arrow' />
      </Button>
      <Divider hidden />
      <Button standard size='big' icon labelPosition='right'>
        <Link to="/destinations/1/vaccines" >
        Add vaccines
        </Link>
        <Icon name='right arrow' />
      </Button>
</Container>)

export default Home;