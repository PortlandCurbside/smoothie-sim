
import clientPromise from "../../lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    await clientPromise

      // id is contained in request.params.id
      // const database_data = await clientPromise.find({id})
      // return Response.json(database_data)

    return NextResponse.json({ isConnected: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ isConnected: false })
  }
}
