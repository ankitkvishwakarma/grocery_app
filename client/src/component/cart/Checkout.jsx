import { useDispatch } from "react-redux";
import { clearCartAsync } from "../../redux/cartSlice"; // ✅ Adjust this path

const Checkout = () => {
  const dispatch = useDispatch();
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(clearCartAsync()); // ✅ backend order + cart clear
    alert("Order placed successfully!");
    navigate("/");
  };
export default Checkout;