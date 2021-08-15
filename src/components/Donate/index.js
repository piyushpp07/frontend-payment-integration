import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
function handelToken(token) {
    return (
        console.log(token)
    );

}


export default function index() {
    return (
        <div>
            hello
            <StripeCheckout stripeKey='pk_test_51JObFKSAm54TGSWjZQQVnpytQbBKaz7MqR7ewLtoeqZSsO9SZUl7n3ZZm3zEYV3sYmQnZaVbzZCttT3in6KJTxKS00lJalhL2a'
                token={handelToken} />

        </div>
    )
}
