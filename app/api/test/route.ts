import { NextResponse } from "next/server";

export default async function handler(req, res) {
  return NextResponse.json({ hello: "world" });
}