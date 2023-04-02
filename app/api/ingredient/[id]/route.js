import clientPromise from "../../lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  try {
    await clientPromise
    return NextResponse.json({ isConnected: true, ingredientId: params.id })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ isConnected: false })
  }
}