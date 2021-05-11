import React from 'react';

function reducer(state = { products: [] }, action: any) {

  console.log(action)

  switch (action.type) {
    case "loadProduct":
      return {
        products: action.data
      };
    case "Bike":
      return {
        vehicle: "It is a Bike"
      };
    default:
      return "No";
  }
}

export default reducer;