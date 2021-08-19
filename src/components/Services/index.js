import React from 'react';
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast } from "react-toastify";
toast.configure();
export default function Services() {
    const [amount, setAmount] = useState(0);
    const [product] = React.useState({
        name: "Tesla Roadster",
        description: "Cool car"
    });


    async function handleToken(token) {
        const response = await axios.post(
            "http://localhost:5000/checkout/",
            { token, product, amount }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }
    return (
        <div style={styles.main}>
            <div style={styles.text}> Hello Everyone</div>
            Enter The amount you want to donate
            <form>
                <label>
                    Amount :
                    <input type="text" name="name" value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                </label>
            </form>
            <StripeCheckout stripeKey='pk_test_51JObFKSAm54TGSWjZQQVnpytQbBKaz7MqR7ewLtoeqZSsO9SZUl7n3ZZm3zEYV3sYmQnZaVbzZCttT3in6KJTxKS00lJalhL2a'
                token={handleToken}
                amount={amount * 100}
                name="Tesla Roadster"
            // billingAddress
            // shippingAddress
            />

        </div>
    );

}
const styles = {
    main: {
        marginTop: '5em',
        height: '50em',
        backgroundColor: '#E6DDC6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}