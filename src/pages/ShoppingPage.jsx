import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

//* this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingPage() {

  const [ allProducts, setAllProducts ] = useState(testProducts) 
  //* initial state. change to empty array when finished with add functionality

  return (
    <>

      <h1>Shopping List!</h1>

      {/* //* all elements of the shopping list will be here */}
      {allProducts.map((eachProduct, index) => {
        return (
          <div className="product-card" key={index}>
            <h3>{eachProduct.name}</h3>
            <p>{eachProduct.price}€</p>
            <p>{eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
            <button>Buy</button>
          </div>
        )
      })}

    </>
  )
}

export default ShoppingPage