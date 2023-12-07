import prisma from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const getSubmitedDate = function() {
  return new Date().toLocaleDateString().replaceAll('/', '');
}

const getSerialNumber = function (length:number):number {
  return Math.floor(Math.random() * length);
}

export async function POST(request: Request) {

  const formdata = await request.formData();
  const formdataJson = Object.fromEntries(formdata);

  const submitedDate = getSubmitedDate()
  const randomNumber = getSerialNumber(1000000000)
  const machineNumber = `${formdataJson.model}_${formdataJson.quantity}_${submitedDate}_${randomNumber}`;

  const insertData = await prisma.batch.create({
    data: {
      model: formdataJson.model.toString(),
      batch_date: (new Date(formdataJson.batchDate as string)).toISOString(),
      quantity: Number(formdataJson.quantity),
      license_level: Number(formdataJson.licenseLevel),
      comment_message: formdataJson.commentMessage.toString(),
      machine_number: machineNumber.toString(),
    }
  })

  return NextResponse.json({
    code: 200,
    data: insertData,
  });
}