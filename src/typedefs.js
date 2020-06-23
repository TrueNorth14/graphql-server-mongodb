import { gql } from 'apollo-server-express';

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

export default typeDefs;