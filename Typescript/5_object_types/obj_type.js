var home = {
    street: "abc",
    number: '123',
    neighborhood: 'downtown',
    zip: '455032'
};
home.completeAddress = [home.street, home.number, home.neighborhood, home.zip];
console.log(home);
function showDogDetails(dog) {
    console.log("Breed ".concat(dog.breed, " has been added"));
    if (dog.name) {
        console.log("The dog name is ".concat(dog.name, " "));
    }
}
