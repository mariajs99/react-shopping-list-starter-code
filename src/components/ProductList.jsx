import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

        {/* //* all elements of the shopping list will be here */}
      {props.allProducts
      .filter((eachProduct) =>{
        if (eachProduct.name.startsWith(props.searchInputValue)) {
          return true //incluye el producto y rendelizalo
        }else {
          return false //no lo incluyas y ni lo renderices
        }
      })
      .map((eachProduct, index) => {
        return (
          <ProductCard key={index} eachProduct={eachProduct}/>
        )
      })}

      {/* //* the list of the products will be here */}
      {/* //* it will render a ProductCard for each product in the list */}

    </div>
  )
}

export default ProductList