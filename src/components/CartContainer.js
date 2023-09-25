import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
    const dispatch = useDispatch();

    const { cartItems, amount, total } = useSelector((store) => store.cart);

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">Is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />;
                    })}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>
                            total <span>${total.toFixed(2)}</span>
                        </h4>
                    </div>
                    <button
                        className="btn-clear btn"
                        onClick={() => dispatch(openModal())}
                        // onClick={() => dispatch(clearCart())}
                    >
                        clear cart
                    </button>
                </footer>
            </header>
        </section>
    );
};

export default CartContainer;
