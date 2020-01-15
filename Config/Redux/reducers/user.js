const InitialState = {
    user: {
        status:"offline"
    },
    shippingAddress: {},
    paymentDetials: {}
}

export default (state = InitialState, action) => {
    switch (action.type) {
        case 'USER': {
            return { ...state, user: action.user };
        }
        case 'SHIPPING_ADDRESS': {
            return { ...state, shippingAddress: action.address };
        }
        case 'PAYMENT_DETAILS': {
            return { ...state, paymentDetials: action.address };
        }
        default: {
            return state;
        }
    }
}