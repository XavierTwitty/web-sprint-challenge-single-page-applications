import React from "react";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Route exact path="/"></Route>
      <Route path="/pizza"></Route>
    </>
  );
};
export default App;
