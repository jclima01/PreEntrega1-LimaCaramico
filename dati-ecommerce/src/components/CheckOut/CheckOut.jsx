import { useCartContext } from "../../context/CartContext";
import ContactForm from "../contactForm/ContactForm";

const CheckOut = () => {
  const { totalPrice } = useCartContext();
  return (
    <div className="d-flex flex-column p-4  justify-content-center">
      {totalPrice() > 0 && (
        <>
          <h2 className="">Total: ${totalPrice()}</h2>
          <ContactForm />
        </>
      )}
    </div>
  );
};

export default CheckOut;
