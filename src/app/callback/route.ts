import { DonationModel } from "@/models/Donation";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

async function handler(req: NextRequest) {
  const data = await req.json();
  await mongoose.connect(process.env.MONGODB_URI as string);
  const { status, order_id } = data;
  if (status === "paid") {
    await DonationModel.findOneAndUpdate(order_id, { paid: true });
  }
  return Response.json(true);
}

export { handler as GET, handler as POST };
