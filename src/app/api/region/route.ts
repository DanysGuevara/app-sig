// pages/api/regions.ts
import { NextRequest, NextResponse } from 'next/server';
import {queryConnection} from '@/db/page';

export async function POST(req: NextRequest) {
  const { regionname } = await req.json();

  if (!regionname) {
    return NextResponse.json({ error: 'Region name is required' }, { status: 400 });
  }

  try {
    const client = await queryConnection();
    try {
      const insertQuery = 'INSERT INTO regions (regionname) VALUES ($1) RETURNING *';
      const result = await client.query(insertQuery, [regionname]);

      return NextResponse.json(result.rows[0], { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
