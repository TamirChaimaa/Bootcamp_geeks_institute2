function printUserDetails(user) {
    console.log("ID : ".concat(user.id));
    console.log("Name : ".concat(user.name));
    console.log("Email : ".concat(user.email));
    if (user.membershipLevel) {
        console.log("Membership Level: ".concat(user.membershipLevel));
    }
    else {
        console.log("Membership Level: Not provided");
    }
}
var user1 = {
    id: 101,
    name: 'imane',
    email: 'imane@gmail.com',
    membershipLevel: 'gold'
};
var user2 = {
    id: 102,
    name: 'sanaa',
    email: 'sanaa@gmail.com',
};
printUserDetails(user1);
printUserDetails(user2);
