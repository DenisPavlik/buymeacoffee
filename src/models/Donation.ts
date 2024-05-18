import { Schema, model, models } from "mongoose";

export type Donation = {
  amount: number;
  name: string;
  message: string;
  crypto: "btc" | "eth" | "ltc";
  paid: boolean;
  email: string;
};

const donationSchema = new Schema({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  crypto: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return ["btc", "eth", "ltc"].includes(v);
      },
    },
  },
  paid: {type: Boolean, default: false}
});

export const DonationModel =
  models?.Dotation || model<Donation>("Dotation", donationSchema);
