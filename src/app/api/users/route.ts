import { NextResponse } from "next/server";
import data from "@/app/data/users.json";

export async function GET() {
  return NextResponse.json({
    data: data,
    status: 200,
  });
}
