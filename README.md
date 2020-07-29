A simple yet effective GraphQL server built with Node, ExpressJS, MongoDB, Apollo, and MongooseJS. For now it serves car data, but it can be used as boilerplate to setup your GraphQL + MongoDB server. All you have to do is clone my repo and modify the TypeDefs and Resolvers to your needs.

**Editing TypeDefs and Resolvers**

In the ```./src/resolvers.js``` file you should see this:

```javascript
const resolvers = {
    Query: {
        cars: () => Car.find(),
        cars: (modelName) => 
        Car.find({'makeName': `${modelName}`})
    },
};
```
<br></br>
Let's add Hello World as an example:

```javascript
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        cars: () => Car.find(),
        cars: (modelName) => 
        Car.find({'makeName': `${modelName}`})
    },
};
```
<br></br>
Now in the ```./src/typedefs.js``` file we must define the Hello World model:

``` javascript
const typeDefs = gql`
    type Query {
        hello: String!
        cars(modelName: String): [Car!]!
        car: Car!
    }
    type Car {
        id: ID!
        makeName: String!
        makeID: Int!
        modelName: String!
        modelID: Int!
    }
`;

```
<br></br>
**Final Remarks**

If you wish to utilize the car data, make sure to run ```PopulateDb()``` once on the initial run.
