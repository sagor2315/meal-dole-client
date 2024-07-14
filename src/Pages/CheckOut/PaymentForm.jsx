import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

import moment from "moment";
import usePackages from "../../Hooks/usePackages/usePackages";
import useAuthentication from "../../Hooks/useAuthentication";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
moment().format();

const PaymentForm = ({ data }) => {
  console.log(data);
  const [error, setError] = useState("");

  const [transactionId, setTransactionId] = useState("");
  const [payStatus, setPayStatus] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { users } = useAuthentication();

  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  // const [cart, refetch] = useCarts();
  const [, refetch] = usePackages();
  const totalPrice = data.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Handle Submit");

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: users?.email || "noEmail",
            name: users?.displayName || "nameLoading",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);
        setPayStatus(paymentIntent.status);

        // Now save the payment in the database
        const payment = {
          email: users?.email,
          price: totalPrice,
          date: moment().format("LLL"),
          transactionId: paymentIntent.id,
          // cartIds: data._id,
          cartIds: data.map((item) => item._id),
          menuIds: data.map((item) => item.packageId),
          packageName: data.map((item) => item.packageName),
          // menuIds: data.packageId,
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);
        refetch();
      }
    }
  };

  return (
    <div className="lg:pt-16 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
      <h1 className="text-center font-medium text-2xl">
        Package Price: ${data.map((data) => data.price)}
      </h1>
      <h1 className="text-center font-medium text-2xl">
        Membership Package Name: {data.map((data) => data.packageName)}
      </h1>

      <form onSubmit={handleSubmit}>
        <CardElement
          className="border-2 border-gray-400 my-5 max-w-screen-2xl mx-auto py-5 px-3 rounded"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>

        <div className="flex justify-center">
          <Button type="submit" disabled={!stripe || !clientSecret}>
            Payment Now
          </Button>
        </div>

        <p>{error}</p>
        <p>{transactionId && `Your Transaction ID is: ${transactionId}`}</p>
        <p> {payStatus && `You Payment Status is: ${payStatus}`}</p>
      </form>
    </div>
  );
};

PaymentForm.propTypes = {
  data: PropTypes.array,
};

export default PaymentForm;
