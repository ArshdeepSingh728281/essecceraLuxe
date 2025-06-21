import mongoose from "mongoose";

const rateLimitSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.RateLimit || mongoose.model("RateLimit", rateLimitSchema);
