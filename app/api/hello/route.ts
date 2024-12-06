import { NextResponse } from 'next/server'

export const runtime = 'edge'
 
export async function GET() {
  return NextResponse.json({ message: 'Hola Mundo' })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  return NextResponse.json({ 
    message: 'Datos recibidos',
    data: body 
  })
}