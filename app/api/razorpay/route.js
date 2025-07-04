import { NextResponse } from "next/server";
import connectDB from "@/db/connectDb";
import Payment from "@/models/Payment";
import User from "@/models/User";
import crypto from "crypto";

export const POST = async (req) => {
    await connectDB();

    let body = await req.formData();
    body = Object.fromEntries(body);

    console.log("Razorpay Response:", body);

    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "order id not found" });
    }

    let user = await User.findOne({ username: p.to_user });
    const secret = user.razorpaysecret;

    // ✅ Correct signature verification
    const generatedSignature = crypto.createHmac('sha256', secret)
        .update(`${body.razorpay_order_id}|${body.razorpay_payment_id}`)
        .digest('hex');

    if (generatedSignature === body.razorpay_signature) {
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: true },
            { new: true }
        );

        return NextResponse.redirect(`${process.env.BASE_URL}/${updatedPayment.to_user}?paymentdone=true`);
    } else {
        return NextResponse.json({ success: false, message: "Payment verification failed" });
    }
}
