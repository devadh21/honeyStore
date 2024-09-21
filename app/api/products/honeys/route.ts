import dbConnect from "@app/helpers/sqliteDb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  //open db
  const db = await dbConnect();

  const autho = req.headers.get("authorization");
  const token = "1234567890abcdefghijklmnopqrstuvwxyz";
  if (autho !== token)
    return NextResponse.json({ status: 401, msg: "Unauthorized" });

  try {
    // open db

    const products = await db.all("SELECT * FROM products");
    
    if (!products) return NextResponse.json({ msg: "No Products Found" });

    return NextResponse.json({ status: 200, data: products });
  } catch (error) {
    console.log(error);
  } finally {
    db.close()
      .then(() => console.log("Database connection closed."))
      .catch((e) => console.log(e));
  }
}
