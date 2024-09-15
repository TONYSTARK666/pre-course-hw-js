let passport = {
    name: "Petr",
    surname: "Petrov",
};

let new_obj = {};
Object.assign(new_obj, passport);
new_obj.name = "Ivan";

console.log(passport.name);
console.log(new_obj.name);
