import { Car } from './models/car';

const resolvers = {
    Query: {
        hello: () => 'Hellow world!',
        cars: () => Car.find(),
        cars: (modelName) => Car.find({'makeName': `${modelName}`})
    },
};

export default resolvers;
