import { NextRequest, NextResponse } from 'next/server';
import { query,queryConnection } from '@/db/page';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


type Data = {
  message: string;
  error?: string;
};

export async function POST(req: NextRequest) {
  const { email, username, password } = await req.json();

  const client = await queryConnection();

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const userUUID = crypto.randomUUID();

    await client.query('BEGIN');

    const loginQuery = `
      INSERT INTO logins (uuid, username, password, salt, md5, sha1, sha256)
      VALUES ($1, $2, $3, $4, '', '', '')
    `;
    await client.query(loginQuery, [userUUID, username, hashedPassword, salt]);

    const userQuery = `
      INSERT INTO users (email, credentials)
      VALUES ($1, $2)
    `;
    await client.query(userQuery, [email, userUUID]);

    await client.query('COMMIT');

    return NextResponse.json({ message: 'Usuario registrado exitosamente' }, { status: 201 });
  } catch (error: any) {
    await client.query('ROLLBACK');
    return NextResponse.json({ message: 'Error al registrar el usuario', error: error.message }, { status: 500 });
  } finally {
    client.release();
  }
}

export function GET(res: NextResponse) {
    return NextResponse.json({ message: 'Hello world' }, { status: 200 });
}

