const { gql } = require('apollo-server');

const typeDefs = gql`
    """Representa a un usuario dentro del sistema"""
    type User {
        id: ID!
        name: String!
        age: Int!
        email: String!
    }
    
    type Query {
        """Obtiene la lista de todos los usuarios"""
        getAllUsers: [User]

        """Obtiene un usuario por su ID"""
        getUserById(id: ID!): User
    }

    type Mutation{
        """Crear un nuevo usuario"""
        createUser(name: String!, age: Int!, email: String!): User
    }
`;

module.exports = typeDefs;