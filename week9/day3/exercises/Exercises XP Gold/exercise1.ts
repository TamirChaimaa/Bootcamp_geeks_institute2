interface User {
    name : string;
    email : string;
}

interface Admin {
    adminLevel : number;
}


type AdminUser = User & Admin

function getProperty(obj:AdminUser , key : string) : any {
    if (key in obj) {
        return (obj as any)[key]
    }
    return undefined;
}

const adminUser : AdminUser = {
    name : 'imane',
    email : 'imane@gmail.com',
    adminLevel : 2,
};

console.log(getProperty(adminUser, "name"));
console.log(getProperty(adminUser, "email"));      
console.log(getProperty(adminUser, "adminLevel"));  
console.log(getProperty(adminUser, "unknown"));  
