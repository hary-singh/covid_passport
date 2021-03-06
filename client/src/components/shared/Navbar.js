import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { Menus } from './styledComponents';

const Navbar = ({user, handleLogout, location, history }) => {

  const rightNavItems = () => {
    if (user) {
      return (<>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(history) }
          />
        </Menu.Menu></>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  return (
    <div>
      <Menu pointing secondary>
      <Link to='/about'>
              <Menu.Item
                name='about'
                id='about'
                active={location.pathname === '/about'}
              />
            </Link>
        
          { rightNavItems() }
      </Menu>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navbar { ...props } { ...auth } />
    }
  </AuthConsumer>
)


export default withRouter(ConnectedNavbar);