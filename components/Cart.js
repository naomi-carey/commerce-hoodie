import { useStateContext } from "../lib/context";
import { CartWrapper, CartStyle } from "../styles/CartStyles";

export default function Cart() {
  const { cartItems } = useStateContext();

  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <div>
            <h1>You still have more shopping to do 😀 </h1>
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <div>
                <img src="" alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </div>
              </div>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
