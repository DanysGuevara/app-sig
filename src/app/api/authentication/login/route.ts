import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {queryConnection} from '@/db/page';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const client = await queryConnection();

  try {
    const loginQuery = `
      SELECT * FROM logins WHERE username = $1
    `;
    const loginResult = await client.query(loginQuery, [username]);

    if (loginResult.rows.length === 0) {
      return NextResponse.json({ message: 'Credenciales inválidas' }, { status: 401 });
    }

    const user = loginResult.rows[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Credenciales inválidas' }, { status: 401 });
    }

    const token = jwt.sign({ uuid: user.uuid }, 'tu_secreto', { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error al iniciar sesión', error: error.message }, { status: 500 });
  } finally {
    client.release();
  }
}
