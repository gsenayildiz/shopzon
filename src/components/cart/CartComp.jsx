import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between gap-4">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[470px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="text-2xl font-bold whitespace-nowrap">
        {cart?.price} ₺ ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white text-2xl cursor-pointer rounded-md w-[150px] h-16 flex items-center justify-center whitespace-nowrap"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
