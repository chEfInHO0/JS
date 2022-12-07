interface Dog {
    breed:string,
    name?:string,
    readonly species:string,
}

interface Owner{
    [index:string]:string
}

type fulladdress = [string,string,string,string]

interface Address{
    street:string,
    number:string,
    neighborhood:string,
    zip:string,
    completeAddress?:fulladdress
}

const home:Address = {
    street:"abc",
    number:'123',
    neighborhood:'downtown',
    zip:'455032',
}
home.completeAddress = [home.street,home.number,home.neighborhood,home.zip]

console.log(home)

function showDogDetails(dog:Dog){
    console.log(`Breed ${dog.breed} has been added`)
    if(dog.name){
        console.log(`The dog name is ${dog.name} `)
    }
}