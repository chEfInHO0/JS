interface User{
    name:string
    order:Order
}
interface Order{
    id:number|string
    price:number
    review?:boolean|number
    message?:string
}

const luccas:User = {name:'Luccas',order:{id:9321,price:39.90}}

function publishUserReview(user:User,review:number|boolean,message?:string){
    if(review){
        user.order.review = review
    }
    if(message){
        user.order.message = message
    }else if(review && !message){
        user.order.message = ''
    }
}

function getUserReview(user:User){
    if(user.order['review']){
        console.log(`${user.name} : ${user.order.review} starts\n${user.order.message}`);
    }else{
        console.log(`${user.name} didnt review his last order yet, try again later`)
    }
}

getUserReview(luccas)
publishUserReview(luccas,false)
getUserReview(luccas)
publishUserReview(luccas,4,'Good')
getUserReview(luccas)