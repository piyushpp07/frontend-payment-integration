import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
function handelToken(token) {
    return (
        console.log(token)
    );

}


export default function index() {
    return (
        <div style={styles.main}>
            <h1>COVID-19 Relief</h1>
            <h3>$2.3 billion in medical aid • $87.8 million in cash funding disbursed • 41,100 emergency aid shipments delivered • 2+ million vaccines • 5,500 tons of PPE and other medical resources provided • 83 million masks • 3 million face shields • 33 million gloves • 2.2 million gowns and coveralls • 56 US states and territories and 106 countries supported</h3>

            <StripeCheckout stripeKey='pk_test_51JObFKSAm54TGSWjZQQVnpytQbBKaz7MqR7ewLtoeqZSsO9SZUl7n3ZZm3zEYV3sYmQnZaVbzZCttT3in6KJTxKS00lJalhL2a'
                token={handelToken} />

        </div>
    );
}
const styles = {
    main: {
        height: '200em',
        backgroundColor: '#A19882'
    }
}