import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    //map out the ingredients
    .map(igKey => {
      //transform the string value into an array with as many elements for given ingredients
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
        //return BurgerIngredient because need to return an array of JSX
        //igkey ie: salad, cheese, etc, i = 1,2,3,etc
      });
      //access given "key" because still in igkey function of map method which runs in an array which contains all keys
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients!</p>;
  }

  //console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
