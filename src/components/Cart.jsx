import { useSelector, useDispatch } from "react-redux";
import { cleareCart, removeFromcart } from "../rdx/slices/Cart";

function Cart({ white }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <section className="cart_section" id={white && white}>
      <button className="btn" onClick={() => dispatch(cleareCart())}>
        Clear
      </button>
      <table>
        <tr>
          <th>Qt</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Ations</th>
        </tr>

        {cart.map((product, idx) => {
          return (
            <tr>
              <td>{product.id}</td>
              <td className="cart_product_img">
                <img src={product.image} alt="img" />
              </td>
              <td>{product.title}</td>
              <td>{product.price} $</td>
              <td>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(removeFromcart(product));
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="totol_price ">
        <article className="flex">
          <h1>Total</h1>
          <big>{total}$</big>
        </article>
      </div>
      <button className="totol_price_btn btn">Check Out</button>
    </section>
  );
}

export default Cart;
