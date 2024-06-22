import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
    console.log("Create listing request received");

    try {
        const listing = await Listing.create(req.body);
        res.status(201).json(listing);
        console.log("Create listing successful");
    } catch (error) {
        console.log(error);
        next(error)
    }
};

export const deleteListing = async (req, res, next) => {
    console.log("Delete listing request received");
    const listing = await Listing.findById(req.params.id);
    if(!listing) {
        return next(errorHandler(404, "Listing not found"));
    }
    
    if(req.user._id !== listing.userRef) {
        console.log("You can delete only your listing");
        return next(errorHandler(403, "You can delete only your listing"));
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Listing deleted successfully" });
        console.log("Delete listing successful");
    } catch (error) {
        console.log("Error deleting listing: ", error.message);
        next(error);
    }
};

export const updateListing = async (req, res, next) => {
    console.log("Update listing request received");
    const listing = await Listing.findById(req.params.id);
    if(!listing) {
        return next(errorHandler(404, "Listing not found"));
    }

    if(req.user._id !== listing.userRef) {
        console.log("You can update only your listing");
        return next(errorHandler(403, "You can update only your listing"));
    }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedListing);
        console.log("Update listing successful");
    } catch (error) {
        console.log("Error updating listing: ", error.message);
        next(error);
    }
};

export const getListing = async (req, res, next) => {
    console.log("Get listing request received");
    try {
        const listing = await Listing.findById(req.params.id);
        if(!listing) {
            return next(errorHandler(404, "Listing not found"));
        }
        res.status(200).json(listing);
        console.log("Get listing successful");
    } catch (error) {
        console.log("Error getting listing: ", error.message);
        next(error);
    }
}