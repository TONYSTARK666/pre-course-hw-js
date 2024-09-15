let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let new_obj_address = structuredClone(passportWithAddress);
new_obj_address.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(new_obj_address.address.city);