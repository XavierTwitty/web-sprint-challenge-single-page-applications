import React from "react";
import { Route, Link } from "react-router-dom";
import PizzaForm from "./Components/PizzaForm";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p> click here to shop</p>
      <div>
        <nav>
          <ul>
            <Link to="/"> Home </Link>
          </ul>
          <ul>
            <Link to="/pizza"> Shop </Link>
          </ul>
        </nav>
      </div>
      <Route exact path="/" />
      <Route exact path="/pizza" component={PizzaForm} />
    </>
  );
};
export default App;
