import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
    console.log("Create listing request received");

    try {
        const listing = await Listing.create(req.body);
        res.status(201).json(listing);
    } catch (error) {
        console.log(error);
        next(error)
    }
};