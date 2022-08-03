const person = { name: "Jack William", age: 17, job: "Facebook", gfName: "Ema watson", address: "Kochu Khet", phone: "01733533434", friends: ["Tom hancks", "Tom cruise", "Tom yarn"] };

const { phone, gfName, address, salary } = person;

const complexObject = {
    name: "abc",
    info: {
        address: "kola bagan",
        leader: "Tiger Leader",
    }
}

const { leader } = complexObject.info;
console.log(complexObject.info);
// const gfName = foperson.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, salary);
// console.log(gfName, phone, address, salary);
// console.log(gfName, phone, address, salary);

const friends = ['Sakib Kham', 'Arman khan', 'Amir Khan', 'Salman khan', "Sharukh khan"];
const [chotoFriend, nextFriend, ...olderF] = friends;
console.log(olderF);