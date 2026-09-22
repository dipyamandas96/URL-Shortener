import ApiResponse from "../utils/apiResponse.js"
import { generateShortUrlService, redirectToOriginalUrlService, urlStatsService } from "../services/urlServices.js"
import extractShortCode from "../utils/extractShortCode.js"


const getOriginalUrl = async (req, res) => {
    try {

        const { originalUrl } = req.body

        if (!originalUrl) {
            return res.status(400).json(new ApiResponse(400, 'URL is required', null));
        }

        const shortCode = await generateShortUrlService(originalUrl);
        
        return res.status(200).json(new ApiResponse(200, 'Short URL generated', shortCode));

    } catch (error) {
        return res.status(500).json(new ApiResponse(500, 'Internal server error', null));
    }
}

const redirectToOriginalUrl = async (req, res) => {
    try {
        const { shortCode } = req.params;
        
        if (!shortCode) {
            return res.status(400).json(new ApiResponse(400, 'Short code is required', null));
        }

        const originalUrl = await redirectToOriginalUrlService(shortCode);

        return res.redirect(302, originalUrl);
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, 'Internal server error', null));
    }
}

const getUrlStats = async (req, res) => {

    const { url } = req.body

    if (!url || url.trim() === "") {
        return res.status(400).json(new ApiResponse(400, "Short url is required", null))
    }

    const shortCode = extractShortCode(url);

    if (!shortCode) {
        throw new Error("Invalid short url format");
    }

    try {
        const stats = await urlStatsService(shortCode);
        return res.status(200).json(new ApiResponse(200, "URL stats", stats));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, 'Internal server error', null));
    }
}

export {
    getOriginalUrl,
    redirectToOriginalUrl,
    getUrlStats
};