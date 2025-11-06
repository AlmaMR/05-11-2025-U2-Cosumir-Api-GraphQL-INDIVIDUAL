const { randomUUID } = require("node:crypto");

const users = [
    { id: randomUUID(), name: 'Alice', age: 30, email: 'alice@gmail.com' },
    { id: randomUUID(), name: 'Alma', age: 22, email: 'alma@gmail.com' }
];

function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find(user => user.id === id) || null;
}

function createUser(name, age, email) {
    const newUser = {
        id: randomUUID(),
        name: name,
        age: age,
        email: email
    }
    users.push(newUser);
    return newUser;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};