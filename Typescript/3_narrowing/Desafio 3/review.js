var luccas = { name: 'Luccas', order: { id: 9321, price: 39.90 } };
function publishUserReview(user, review, message) {
    if (review) {
        user.order.review = review;
    }
    if (message) {
        user.order.message = message;
    }
    else if (review && !message) {
        user.order.message = '';
    }
}
function getUserReview(user) {
    if (user.order['review']) {
        console.log("".concat(user.name, " : ").concat(user.order.review, " starts\n").concat(user.order.message));
    }
    else {
        console.log("".concat(user.name, " didnt review his last order yet, try again later"));
    }
}
getUserReview(luccas);
publishUserReview(luccas, false);
getUserReview(luccas);
publishUserReview(luccas, 4, 'Good');
getUserReview(luccas);
