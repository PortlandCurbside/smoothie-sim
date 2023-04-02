import clientPromise from "@/lib/mongodb"
import Ingredient from "@/models/Ingredient"
import { NextResponse } from "next/server"

export default async function handler (req, res) {
  const { method } = req
  
  await clientPromise

  switch (method) {
    case 'GET':
      try {
        const ingredients = Ingredient.findById
      }
  }
}