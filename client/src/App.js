import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/auth/FetchUser";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Footer from './components/shared/Footer';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Container>
    </FetchUser>
  </>
);

export default App;
