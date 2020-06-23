import { Car } from '../models/car';
import CarData from './data';
import mongoose from 'mongoose';

export const PopulateDb = async() => {
    
    CarData.map(async (data) => {
        // console.log(val['make_id']);
        const carEntry = new Car({
            _id:  new mongoose.Types.ObjectId(),
            makeName: data['make_name'],
            makeID: data['make_id'],
            modelName: data['model_name'],
            modelID: data['model_id']
        });
        
        await carEntry.save();

    });

    // for (var val in CarData) {
    //     const carEntry = new Car({
    //         _id: new mongoose.Types.ObjectId(),
    //         makeName: CarData[val]['make_name'],
    //         makeId: CarData[val]['make_id'],
    //         modelName: CarData[val]['model_name'],
    //         modelId: CarData[val]['model_id']
    //     })

    //     // console.log(carEntry.makeName);

    //     await carEntry.save((err) => {
    //         if (err) {
    //             console.log(err);
    //         }

    //         console.log(carEntry.makeName);
    //     })
    // }
}
