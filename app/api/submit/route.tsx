import prisma from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
 
export async function POST(request: Request) {

  const formdata = await request.formData();
  const formdataJson = Object.fromEntries(formdata);

  const insertData = await prisma.batch.create({
    data: {
      model: formdataJson.model.toString(),
      batch_date: (new Date(formdataJson.batchDate as string)).toISOString(),
      quantity: Number(formdataJson.quantity),
      license_level: Number(formdataJson.licenseLevel),
      comment_message: formdataJson.commentMessage.toString(),
    }
  })

  return NextResponse.json({
    code: 200,
    data: insertData,
  });
}