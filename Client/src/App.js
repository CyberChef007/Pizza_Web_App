import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import TopBar from "./components/TopBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
      <Route path="/orders" component={OrderScreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
