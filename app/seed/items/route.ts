import { NextResponse } from 'next/server'
 
export async function GET() {
    const res = await fetch('https://data.mongodb-api.com/...', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return Response.json(data)
  }



  export async function POST(request: Request) {
    const res = await request.json()
    return Response.json({ res })
  }