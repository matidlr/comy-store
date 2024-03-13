import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, cartTotals } from "../components";
import CartTotals from "../components/CartTotals";

export const loader = (store) =>() => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
}

const Checkout = () =>{
const cartItems = useSelector((state)=> state.cartState.cartTotal);
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