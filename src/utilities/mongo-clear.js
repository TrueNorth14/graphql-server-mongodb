import { Car } from '../models/car';

export const ClearDb = async () => {
    var query = Car.find();
    query.exec().then((docs, err) => {
        docs.map((doc) => Car.deleteOne({'_id': doc._id}, (err) => {
            if(err)
                throw err;
            else
                console.log("deleted");
        }));
    })
    // console.log(Car.find());
}