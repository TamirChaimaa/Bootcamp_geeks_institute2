interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID : ${user.id}`);
    console.log(`Name : ${user.name}`);
    console.log(`Email : ${user.email}`);

    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }else {
        console.log(`Membership Level: Not provided`);  
    }

}

const user1 : PremiumUser = {
    id : 101,
    name : 'imane',
    email : 'imane@gmail.com',
    membershipLevel : 'gold'
}

const user2 : PremiumUser = {
    id : 102,
    name : 'sanaa',
    email : 'sanaa@gmail.com',
}

printUserDetails(user1);
printUserDetails(user2);