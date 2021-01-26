import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required(" name is required "),
  size: yup.string().required("choose a pizza size"),
  pepperoni: yup.boolean().nullable(""),
  onions: yup.boolean().nullable(""),
  peppers: yup.boolean().nullable(""),
  mushrooms: yup.boolean().nullable(""),
  special: yup.string().nullable(""),
});

export default function PizzaForm() {
  const [pizzaForm, setPizzaForm] = useState({
    name: "",
    size: "",
    pepperoni: false,
    onions: false,
    peppers: false,
    mushrooms: false,

    special: "",
  });

  const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    pepperoni: false,
    onions: false,
    peppers: false,
    mushrooms: false,
    special: "",
  });

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({ ...errorState, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log("input change", value);
    setPizzaForm({ ...pizzaForm, [e.target.name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", pizzaForm)
      .then((response) => console.log("form submitted", response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlfor="name">
          <h2> name </h2>
          <input
            type="text"
            id="name"
            name="name"
            onChange={inputChange}
            value={pizzaForm.name}
          />
          {errorState.name ? <p>{errorState.name}</p> : null}
        </label>
      </div>
      <div>
        <label htmlfor="size">
          <h2> select a size</h2>
          <select
            name="size"
            id="size"
            value={pizzaForm.size}
            onChange={inputChange}
          >
            <option value="">pick a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
          {errorState.size ? <p>{errorState.size}</p> : null}
        </label>
      </div>
      <div>
        <label htmlFor="toppings">
          <h2>pick a topping</h2>
          <label htmlfor="pepperoni">
            <input
              type="checkbox"
              name="pepperoni"
              value={pizzaForm.pepperoni}
            />
            Pepperoni
          </label>
          <label htmlfor="onions">
            <input type="checkbox" name="onions" value={pizzaForm.onions} />
            Onions
          </label>
          <label htmlfor="peppers">
            <input type="checkbox" name="peppers" value={pizzaForm.peppers} />
            Peppers
          </label>
          <label htmlfor="mushrooms">
            <input
              type="checkbox"
              name="mushroom"
              value={pizzaForm.mushrooms}
            />
            Mushrooms
          </label>
        </label>
      </div>
      <div>
        <label htmlFor="speacial">
          <h3>Special orders</h3>
          <textarea
            name="special"
            value={pizzaForm.special}
            onChange={inputChange}
          />
        </label>
      </div>
      <div>
        <button> submit </button>
      </div>
    </form>
  );
}
