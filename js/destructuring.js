const Address = {
    name: 'Naresh',
    occupation: 'UI Developer',
    city: 'Bangalore',
    country: 'IN',
    printName: () => {
        console.log(name);
    }
}

// Es6 de-structuring.
let {name, city, printName} = Address;

printName();