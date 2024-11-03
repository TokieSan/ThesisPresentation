// app/api/sections/route.ts
import { NextResponse } from 'next/server';
import { sections, sectionOrder } from '@/components/sections';

export async function GET() {
  return NextResponse.json({ sections, sectionOrder });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Here you could add validation logic
    // And potentially save to a database instead of just sending back the data
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid data format' },
      { status: 400 }
    );
  }
}
