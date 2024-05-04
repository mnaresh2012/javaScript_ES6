const Address = {
    name: 'Naresh',
    occupation: 'UI Developer',
    city: 'Bangalore',
    country: 'IN',
    printName: () => {
        console.log(name);
    }
}

let {name, city, printName} = Address;

printName();