import mongoose, { Schema, Document } from "mongoose";

export interface IEmail {
  email: string;
  message: string;
  status: "pending" | "sent" | "failed";
  createdAt?: Date;
  updatedAt?: Date;
}

export type EmailDocument = IEmail & Document;

const emailSchema = new Schema<EmailDocument>(
  {
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Email = mongoose.model<EmailDocument>("Email", emailSchema);