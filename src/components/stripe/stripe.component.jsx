import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51KDwh9Ew7dYtB1YtZzj5UVaDWGigpqTU0IZXfBBue6aaBJPLNqcAATnpTIoRqdd6FsQjVYspJtCpOLLoxI5R3Y6m00vRa94kTn'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }
    return(
        <StripeCheckout 
        name = 'Crown E-Commerce Ltd.'
        image = 'http://svgshare.com/i/CUz.svg'
        panelLabel = 'Pay Now'
        description = {`The Total amount payable is $${price}`}
        shippingAddress
        billingAddress
        amount = {stripePrice}
        stripeKey= {publishableKey}
        token = {onToken}
        />
    )
}

export default StripeCheckoutButton;