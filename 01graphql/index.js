const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/userSchema');
const resolvers = require('./controllers/userController');

// Configuración del servidor
const server = new ApolloServer({ typeDefs, resolvers });

// Inicializar sevidor
server.listen().then(({ url }) => {
    console.log(`Servidor GraphQL ejecutandose en ${url}`)
});