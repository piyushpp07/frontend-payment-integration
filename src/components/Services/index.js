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
            <h1>Your donations will be very helpful for the foundation </h1>
            <div style={styles.content}>As India tries to stay afloat amidst the ‘second wave’ of the pandemic, our poor and vulnerable elderly face the highest risk. Countless have lost their lives and many disadvantaged elders were left starving due to loss of their livelihood. At such a time, it is critical that they get vaccinated immediately and safeguard themselves from the fatality of this deadly disease. As the pandemic makes inroads deeper into rural India, we need to ensure that the poor elderly & their families have food to eat, so they can maintain their nutrition and immunity levels and do not become more susceptible to the Covid 19 virus. Many are physically frail with chronic conditions, living alone and have no one to turn to. Your contribution can help an elder survive and bring hope during this uncertain time.</div>

            <h3> Enter the amount you want to donate :</h3>
            <form style={styles.from}>
                <label>
                    <input style={styles.inp} type="text" name="name" value={amount}
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
    content: {
        marginTop: '0',
        width: '92%'
    },
    from: {
        padding: '3px'
    },

    main: {
        marginTop: '5em',
        height: '50em',
        backgroundColor: '#E6DDC6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("https://images.unsplash.com/photo-1611689102192-1f6e0e52df0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2005&q=80")`,
    },
    inp: {
        borderRadius: "8%",
        borderColor: "#F2D200"
    }
}