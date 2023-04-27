import React from "react";
// import "./AddToCart.css";
import Title from "../Title/Title";
import books from "../../assets/books.webp";
import card from "../../assets/card.webp";
import earphone from "../../assets/earphone.webp";
import TeaCoffee from "../../assets/Tea&coffee.webp";
const Wishlist = () => {
  const CartArr = [
    {
      image: books,
      name: "Rich Dad Poor Dad",
      price: "Rs. 1200 /-",
      quantity: 2,
      total: "Rs. 2400 /-",
    },
    {
      image: card,
      name: "Ace Card",
      price: "Rs. 120 /-",
      quantity: 1,
      total: "Rs. 120 /-",
    },
    {
      image: earphone,
      name: "BOAT Earphone",
      price: "Rs. 3600 /-",
      quantity: 1,
      total: "Rs. 3600 /-",
    },
    {
      image: TeaCoffee,
      name: "TOKLA Chiya",
      price: "Rs. 60 /-",
      quantity: 4,
      total: "Rs. 240 /-",
    },
  ];
  return (
    <>
      <section className="add_to_cart_container">
        <Title title="Welcome TO your WISHLIST." />
        <div className="container">
          <div class="table-responsive">
            <div class="table-wrapper">
              <table class="table table-striped table-hover">
                <thead>
                  <tr className="cart_title_container">
                    <th>IMAGE</th>
                    <th>PRODUCT NAME</th>
                    <th>UNIT PRICE</th>
                    <th>SUBTOTAL</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {CartArr.map((get, keys) => {
                    return (
                      <tr>
                        <td>
                          <div className="add_to_cart_img">
                            <img src={get.image} alt="cart" />
                          </div>
                        </td>
                        <td>
                          <p className="cart_name">{get.name}</p>
                        </td>
                        <td>
                          <p className="cart_name">{get.price}</p>
                        </td>
                        {/* <td>
                          <div className="cart_quantity_container d-flex gap-2">
                            <button className="cart_quantity">-</button>
                            <p className="cart_name">{get.quantity}</p>
                            <button className="cart_quantity">+</button>
                          </div>
                        </td> */}
                        <td>
                          <p className="cart_name">{get.total}</p>
                        </td>
                        <td>
                          <div className="cart_icon_container">
                            <span className="delete_icon">
                              <i class="fa-solid fa-trash"></i>
                            </span>
                            <span className="edit_icon">
                              <i class="fa-solid fa-cart-shopping"></i>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="cart_btn_container">
            <button>Checkout</button>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Wishlist;
