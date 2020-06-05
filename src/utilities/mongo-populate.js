import CarData from './data.json';
import {Car} from '../models/car';
import mongoose from 'mongoose';

export default async function PopulateDb()  {
    for (var val in CarData){
        // console.log('going');

        const carEntry = new Car({
            _id: new mongoose.Types.ObjectId(),
            makeName: val['make_name'],
            makeId: val['make_id'],
            modelName: val['model_name'],
            modelId: val['model_id']
        })

        await carEntry.save( (err) => {
            if(err){
                console.log(err);
            }

            console.log(carEntry._id);
        })
    }
}