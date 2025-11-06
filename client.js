const fetch = require('node-fetch');

// La URL donde se está ejecutando tu servidor Apollo
const API_URL = 'http://localhost:4000/';

async function callApi(query, variables = {}) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        }),
    });

    const result = await response.json();

    if (result.errors) {
        console.error('Error en la API de GraphQL:');
        console.error(JSON.stringify(result.errors, null, 2));
        throw new Error('Falló la petición de GraphQL');
    }

    return result.data;
}

// Definición de nuestras queries y mutations

const GET_ALL_USERS_QUERY = `
    query {
        getAllUsers {
            id
            name
            email
        }
    }
`;

const GET_USER_BY_ID_QUERY = `
    query GetUserById($userId: ID!) {
        getUserById(id: $userId) {
            id
            name
            age
        }
    }
`;

const CREATE_USER_MUTATION = `
    mutation CreateUser($name: String!, $age: Int!, $email: String!) {
        createUser(name: $name, age: $age, email: $email) {
            id
            name
            age
        }
    }
`;

// Función principal para ejecutar las pruebas
async function main() {
    try {
        // 1. Obtener todos los usuarios
        console.log('--- Obteniendo todos los usuarios ---');
        const allUsersData = await callApi(GET_ALL_USERS_QUERY);
        console.log(JSON.stringify(allUsersData, null, 2));

        // 2. Crear un nuevo usuario "Bob"
        console.log('\n--- Creando un nuevo usuario "Bob" ---');
        const newUserData = await callApi(CREATE_USER_MUTATION, {
            name: "Bob",
            age: 45,
            email: "bob@gmail.com"
        });
        console.log(JSON.stringify(newUserData, null, 2));

        // 3. Obtener el usuario 'Bob' usando su ID aleatorio
        // Extraemos el ID aleatorio de la respuesta de la mutación
        const newId = newUserData.createUser.id; 
        
        console.log(`\n--- Obteniendo al usuario recién creado (ID: ${newId}) ---`);
        
        // Usamos ese ID dinámico para llamar a getUserById
        const dynamicUserData = await callApi(GET_USER_BY_ID_QUERY, { userId: newId });
        console.log(JSON.stringify(dynamicUserData, null, 2));


        // 4. Verificar que el nuevo usuario se añadió
        console.log('\n--- Verificando la lista actualizada de usuarios ---');
        const updatedUsersData = await callApi(GET_ALL_USERS_QUERY);
        console.log(JSON.stringify(updatedUsersData, null, 2));

    } catch (error) {
        console.error('No se pudo completar la operación:', error.message);
    }
}

main();