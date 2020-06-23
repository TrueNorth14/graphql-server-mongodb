// import mongoose from 'mogoose';
import mongoose from 'mongoose';
import { Car } from '../models/car';


//Find all values in the database and log them in the console.
//testing purposes only

export const QueryDb = async () => {
    var query = Car.find();
    // console.log(Car.count());
    query.exec().then((docs, err) => {
        
        if(err){
            console.log(`YEas ${err}`);
        }
        
        docs.map((item) => 
            console.log(`${item}`)
        );
        
    })
}