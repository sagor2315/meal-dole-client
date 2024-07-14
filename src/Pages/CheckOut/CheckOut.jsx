import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";


import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk);

const CheckOut = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm data={data} />
      </Elements>
    </div>
  );
};

export default CheckOut;
