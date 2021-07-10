import { RequestHandler } from "express"
import video from "./video"
import Video from './video'

export const  createVideos: RequestHandler =async (req,res) => {// retorna el json c
    const videoFound =await Video.findOne({url: req.body.url})
    if(videoFound)
        return res.status(301).json({message: 'the URL already exist'})

    const video = new Video(req.body);
    const savedVideo = await video.save();
    console.log(video);
    res.json(savedVideo);
}


export const  getVideos: RequestHandler = async (req,res) => {// retorna el json 
    try{
        const videos =await Video.find()
        return res.json(videos);
    }
    catch (error){
        res.json(error)
    }
}

export const  getVideo: RequestHandler = async (req,res) => {// retorna el json 
    const videoFound =await Video.findById(req.params.id);
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound)
    }

export const  deleteVideo: RequestHandler = async (req,res) => {// retorna el json 
    
    const videoFound =await Video.findByIdAndDelete(req.params.id);
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound)
}

export const  updateVideo: RequestHandler =async (req,res) => {// retorna el json 
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id,req.body)
    res.json(videoUpdated)
}