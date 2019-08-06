import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import "./index.scss";
import { ROUTES } from "../../../constants";
import { Loader } from "../../components";
import { usePrevious } from "../../hook";
import shop from "../../../shop";

function SingleProduct({ history, product, isLoading, error }) {
  const prevLoading = usePrevious(isLoading);
  useEffect(() => {
    if (prevLoading && !isLoading && (error || !Object.keys(product).length))
      history.replace(ROUTES.defaultPage);
  }, [error, history, isLoading, prevLoading, product]);
  if (isLoading) {
    return <Loader />;
  }
  const { name, image, description, price, currencySymbol } = product;
  const onClick = () => history.push(ROUTES.cart);

  return (
    <div className="SingleProduct">
      <img src={image} alt={`product: ${name}`} />
      <p>
        {name} - {price}
        {currencySymbol}
      </p>
      <p>{description}</p>
      <button type="button" onClick={onClick}>
        Go to Cart
      </button>
    </div>
  );
}
// function mapStateToProps(
//   state,
//   {
//     match: {
//       params: { id },
//     },
//   },
// ) {
//   //is state.shop visas produktu sarasas
//   // const { products } = state.shop;
//   //produkto id gaunam ir lyginam su paspaustu produkto id//id gaunasm ir routu produkts// params url yra
//   // const product = products.find(({ id }) => id === params.id);
//   return { product: shop.selectors.getProductById(state, id) };
// }
const enhance = connect((state, { match: { params } }) => ({
  product: shop.selectors.getProductById(state, params.id) || {},
  error: shop.selectors.getProductsError(state),
  isLoading: shop.selectors.isLoadingProducts(state)
}));
export default enhance(SingleProduct);
