import clientPromise from "@/lib/mongodb"
import Ingredient from "@/models/Ingredient"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  try {
    await clientPromise
    
    const foundIngredients = await Ingredient.find({ params })
    return NextResponse.json({ success: true, ingredients: foundIngredients})
  } catch (e) {
    console.log(e)
    return NextResponse.json({ success: false })
  }
}
