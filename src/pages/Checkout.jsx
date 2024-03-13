import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, cartTotals } from "../components";
import CartTotals from "../components/CartTotals";

const Checkout = () => {
  const cartItems((state)=> state.cartState.cartTotal)
  if(cartItems === 0){
    return <SectionTitle text='Your car is empty' />
  }
  return <>
  <SectionTitle text='place your order' />
  <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
    <CheckoutForm/>
    <CartTotals/>
  </div>
  </>
  
}

export default Checkout