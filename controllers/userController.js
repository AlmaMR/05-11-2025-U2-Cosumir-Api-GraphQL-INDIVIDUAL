const userModel = require('../models/usersModel');

const resolvers = {
    Query: {
        getAllUsers: () => userModel.getAllUsers(),
        getUserById: (_, { id }) => userModel.getUserById(id)
    },
    Mutation: {
        createUser: (_, { name, age, email }) => userModel.createUser(name, age, email)
    }
}

module.exports = resolvers;