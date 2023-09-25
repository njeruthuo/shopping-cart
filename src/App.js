import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
    const dispatch = useDispatch();
    const { cartItems, isLoading } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1 className="loading">Loading...</h1>
            </div>
        );
    }

    return (
        <main>
            {isOpen && <Modal />}
            <NavBar />
            <CartContainer />
        </main>
    );
}
export default App;
