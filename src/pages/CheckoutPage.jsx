import CheckoutLeftForm from "../components/Checkout-component/CheckoutLeftForm";
import CheckoutRightItems from "../components/Checkout-component/CheckoutRightItems";
import "./pagescss/CheckoutPage.css";
const CheckoutPage = () => {
  return (
    <div className="checkout__page__wrapper">
      <CheckoutLeftForm />
      <CheckoutRightItems />
    </div>
  );
};

export default CheckoutPage;
