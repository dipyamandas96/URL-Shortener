import express from "express";
import { getOriginalUrl, redirectToOriginalUrl, getUrlStats } from "../controllers/apiController.js";

const router = express.Router({
    mergeParams: true
});

router.post("/", getOriginalUrl);
router.post("/stats", getUrlStats);
router.get("/", redirectToOriginalUrl);

export default router;