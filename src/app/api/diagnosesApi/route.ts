import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const diagnoses = await prisma.diagnosticos.findMany();
  return NextResponse.json(diagnoses);
}
