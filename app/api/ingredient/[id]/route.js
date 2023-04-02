import clientPromise from "@/lib/mongodb"
import Ingredient from "@/models/Ingredient"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {

  try {
    await clientPromise
    
    const ingredient = await Ingredient.findById(params).exec()
    return NextResponse.json(ingredient)
  } catch (e) {
    return NextResponse.json({ success: false })
  }
}