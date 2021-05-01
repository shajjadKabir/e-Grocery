import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import EditProduct from "./components/EditProduct/EditProduct";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        
        <Switch>
          <Route exact path="/">
          <Header />
            <Home />
          </Route>
          <Route path="/home">
          <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Header/>
            <Login />
          </Route>
          <Route path="/addProduct">
            <AddProducts />
          </Route>
          <PrivateRoute path="/checkout/:_id">
          <Header />
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/orders">
          <Header />
            <Orders />
          </PrivateRoute>
          <Route path="/manageProduct">
          <Header />
            <EditProduct />
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
