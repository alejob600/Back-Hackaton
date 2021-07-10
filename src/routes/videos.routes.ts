import { Router } from "express";
const router =Router();
import * as videoCtrl from './videos.controller'


router.get('/videos',videoCtrl.getVideos);
router.post('/videos',videoCtrl.createVideos);
router.get('video/;id',videoCtrl.getVideo);
router.delete('/videos/:id',videoCtrl.deleteVideo);
router.put('/videos/:id', videoCtrl.updateVideo);

export default router 