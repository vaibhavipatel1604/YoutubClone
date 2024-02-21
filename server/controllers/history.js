import History from '../models/History.js'
import mongoose from 'mongoose'

export const HistoryController= async(req,res)=>{
    const HistoryData= req.body;
    // console.log(HistoryData)
    const addToHistory= new History(HistoryData);

    try {
        await addToHistory.save();
        res.status(200).json('added to History')
        // console.log('post Done')
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllHistoryController=async(req,res)=>{
    try {

        const files= await History.find();
        res.status(200).send(files)
        // console.log("hiii"+ files);

    } catch (error) {
        // console.log("notDone");
        res.status(404).send(error.message)

    }    
}

export const clearHistoryController=async(req,res)=>{
    const { userId:userId } = req.params;
    // console.log(userId)
    try {
        await History.deleteMany({
            Viewer: userId 
        })
        res.status(200).json({message: "Removed from your watch Laters"})
    } catch (error) {
        res.status(400).send({message: error.message})
    }    
}
