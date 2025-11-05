import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventname: {
    type: String,
    required: [true, "Event Name is required"],
    unique: true,
    trim: true
  },
  venue: {
    type: String,
    required: [true, "Venue is required"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true
  },
  bg_image_url: {
    type: String
  },
  rulebook: {
    type: String
  },
  rules: {
    type: [String]
  },
  coordinator_names: {
    type: [String]
  },
  coordinator_phone: {
    type: [String]
  },
  event_creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

export const Event = mongoose.model("Event", eventSchema);