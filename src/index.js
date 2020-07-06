import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PopulateDb } from './utilities/mongo-populate';
import { ClearDb } from './utilities/mongo-clear';
import { QueryDb } from './utilities/mongo-query';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import mongoose from 'mongoose';

const PORT = 3002;
// 
const startServer = async () => {
    await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

    const server = new ApolloServer({ typeDefs, resolvers });

    const app = express();
    server.applyMiddleware({ app });

    // await PopulateDb();
    // await ClearDb();
    // await QueryDb();

    app.listen({ port: PORT }, () => console.log('listening'));
}

startServer();