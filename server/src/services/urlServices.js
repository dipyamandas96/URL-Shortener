import generateShortCode from "../utils/generateShortCode.js";
import Url from "../models/urlModel.js";

const generateShortUrlService = async (originalUrl) => {
    const shortCode = generateShortCode();
    const url = new Url({
        originalUrl,
        shortCode
    });
    await url.save();
    return shortCode;
}

const redirectToOriginalUrlService = async (shortCode) => {
    const url = await Url.findOneAndUpdate(
        { shortCode },
        { $inc: { clickCount: 1 } },
        { returnDocument: "after" });

    if (!url) {
        throw new Error('Short URL not found');
    }
    if (!url.originalUrl) {
        throw new Error('Original URL not found');
    }
    return url.originalUrl;
}

const urlStatsService = async (shortCode) => {
    const url = await Url.findOne({ shortCode });
    if (!url) {
        throw new Error('Short URL not found');
    }
    return { 
       count: url.clickCount,
       createdAt: url.createdAt,
    };
}


export {
    generateShortUrlService,
    redirectToOriginalUrlService,
    urlStatsService
};