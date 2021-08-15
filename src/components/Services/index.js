import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
function handelToken(token) {
    return (
        console.log(token)
    );

}
export default function Services() {

    return (
        <div style={styles.main}>
            <div style={styles.text}> Hello Everyone</div>
            <StripeCheckout stripeKey='pk_test_51JObFKSAm54TGSWjZQQVnpytQbBKaz7MqR7ewLtoeqZSsO9SZUl7n3ZZm3zEYV3sYmQnZaVbzZCttT3in6KJTxKS00lJalhL2a'
                token={handelToken} />

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