import clientPromise from "../../lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    await clientPromise
    return NextResponse.json({ isConnected: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ isConnected: false })
  }
}
