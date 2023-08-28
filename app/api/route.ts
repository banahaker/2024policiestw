import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import { IPolicy } from "./api";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Policies");
    const list = await db.collection("List").find().toArray();
    return NextResponse.json(list);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 1 }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as IPolicy;
  try {
    const client = await clientPromise;
    const db = client.db("Policies");
    const list = await db.collection("List").insertOne(body);
    return NextResponse.json(list);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 1 }, { status: 500 });
  }
}
