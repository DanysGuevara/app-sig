import { NextResponse } from 'next/server';
import { query } from '@/db/page';
export async function GET(request: Request) {
  const data = await query('SELECT * FROM logins');
  
  return NextResponse.json(data.rows);
}
