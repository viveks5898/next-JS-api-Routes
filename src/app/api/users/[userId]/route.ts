import { NextResponse } from "next/server";
import data from "@/app/data/users.json";

export async function POST(request: Request, context: any) {
  const {
    params: { userId },
  } = context;

  const findUserById = data.find((ele) => ele.id == userId);
  if (findUserById == undefined) {
    return NextResponse.json({
      data: [],
      status: 401,
      message: "User not found",
    });
  } else {
    return NextResponse.json({
      data: findUserById,
      status: 200,
      message: "User Successfully found",
    });
  }
}
