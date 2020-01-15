export function USER(user) {
    return {
        type: "USER",
        user:user
    };
};

export function SHIPPING_ADDRESS(address) {
    return {
        type: "SHIPPING_ADDRESS",
        address: address
    };
};

export function PAYMENT_DETAILS(address) {
    return {
        type: "PAYMENT_DETAILS",
        address: address
    };
};