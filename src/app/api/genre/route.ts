// pages/api/genres.ts
import { NextRequest, NextResponse } from 'next/server';
import {queryConnection} from '@/db/page';

export async function POST(req: NextRequest) {
  const { genrename } = await req.json();

  if (!genrename) {
    return NextResponse.json({ error: 'Genre name is required' }, { status: 400 });
  }

  try {
    const client = await queryConnection();
    try {
      const insertQuery = 'INSERT INTO genres (genrename) VALUES ($1) RETURNING *';
      const result = await client.query(insertQuery, [genrename]);

      return NextResponse.json(result.rows[0], { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
