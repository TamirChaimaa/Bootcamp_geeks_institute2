function getProperty(obj, key) {
    if (key in obj) {
        return obj[key];
    }
    return undefined;
}
var adminUser = {
    name: 'imane',
    email: 'imane@gmail.com',
    adminLevel: 2,
};
console.log(getProperty(adminUser, "name"));
console.log(getProperty(adminUser, "email"));
console.log(getProperty(adminUser, "adminLevel"));
console.log(getProperty(adminUser, "unknown"));
