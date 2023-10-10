import React, { useCallback, useState } from "react";
import cart from "../assets/cart.png";
import avatar from "../assets/avatar.png";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "./Cart";
function TopNav() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = useCallback(() => {
    setShowCart((prevShowCart) => !prevShowCart);
  }, []);

  return (
    <div className="top_nav flex">
      <h2>Home</h2>
      <section className="top_nav_buttons">
        <button
          onClick={handleCartClick}
          className=" top_nav_button top_nav_cart"
        >
          <img src={cart} alt="cart" />
        </button>
        <AnimatePresence>
          {showCart && (
            <motion.div
              className="cart_popUp"
              initial={{
                opacity: 0,
                height: 0,
                width: "fit-content",
                top: "10%",
                right: "7%",
              }}
              animate={{
                opacity: 1,
                height: "fit-content",
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Cart />
            </motion.div>
          )}
        </AnimatePresence>
        <button>
          <img src={avatar} alt="cart" className="top_nav_button avatar" />
        </button>
      </section>
    </div>
  );
}

export default TopNav;
