import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const NavBar = () => {
    const { amount } = useSelector((store) => store.cart);
    return (
        <nav className="nav-center">
            <h3>redux toolkit</h3>

            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
