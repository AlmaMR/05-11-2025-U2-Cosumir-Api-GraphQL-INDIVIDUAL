# 05-11-2025-U2-Cosumir-Api-GraphQL-INDIVIDUAL

Este proyecto es una API de GraphQL simple desarrollada con Node.js y Apollo Server. Su propósito es demostrar los conceptos fundamentales de GraphQL, incluyendo esquemas, queries, mutations y resolvers, para la gestión de una entidad de "Usuario".

## Instalación

1.  Clona o descarga este repositorio.
2.  Abre una terminal en la raíz del proyecto.
3.  Instala las dependencias del servidor:
    ```bash
    npm install
    ```
4.  Instala la dependencia del cliente (si aún no la tienes):
    ```bash
    npm install node-fetch@2
    ```

## Cómo Ejecutar

Para probar la aplicación, **necesitarás dos terminales** abiertas en la carpeta del proyecto.

### Terminal 1: Iniciar el Servidor

En tu primera terminal, inicia el servidor de Apollo. Este se quedará "escuchando" peticiones.

```bash
node index.js
```

Deberías ver el siguiente mensaje, indicando que el servidor está listo:
`Servidor GraphQL ejecutandose en http://localhost:4000/`

### Terminal 2: Ejecutar el Cliente

En tu segunda terminal, ejecuta el script `cliente.js` para enviar peticiones al servidor.

```bash
node cliente.js
```

Verás en la consola la salida de las diferentes operaciones:
1.  Pide todos los usuarios.
2.  Pide un usuario por un ID estático.
3.  Crea un nuevo usuario ("Bob").
4.  Pide el usuario recién creado usando su ID aleatorio.
5.  Vuelve a pedir todos los usuarios para mostrar la lista actualizada.

## Probar con Apollo Studio (Opcional)

Con el servidor ejecutándose (Terminal 1), puedes probar la API de forma interactiva en tu navegador:

1.  Abre tu navegador web.
2.  Ve a [**http://localhost:4000/**](http://localhost:4000/)
3.  Se abrirá **Apollo Studio**, una interfaz gráfica donde puedes escribir y ejecutar queries y mutations directamente.

**Ejemplo de Query:**
```graphql
query {
  getAllUsers {
    id
    name
    email
  }
}
```

**Ejemplo de Mutation:**
```graphql
mutation {
  createUser(name: "Charlie", age: 35, email: "charlie@test.com") {
    id
    name
  }
}
```