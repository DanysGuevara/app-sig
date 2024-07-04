import { NextRequest, NextResponse } from "next/server";
import { queryConnection } from "@/db/page"; // Asegúrate de tener configurado el pool de conexión

export async function POST(req: NextRequest) {
  const {
    title,
    download,
    filesize,
    sha256,
    regionid,
    releasedate,
    publisher,
    developer,
    description,
    uploaddate,
    uploader,
    image,
  } = await req.json();
  try {
    const client = await queryConnection();
    try {
      const query = `
      INSERT INTO gba_roms (
        title, download, filesize, sha256, regionid, releasedate, 
        publisher, developer, description, uploaddate, uploader, image
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING romid
    `;
      const values = [
        title,
        download,
        filesize,
        sha256,
        regionid,
        releasedate,
        publisher,
        developer,
        description,
        uploaddate,
        uploader,
        image,
      ];

      const result = await client.query(query, values);
      return NextResponse.json({ success: true, romid: result.rows[0].romid });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const query = 'SELECT * FROM gba_roms';
    const client = await queryConnection();
    const { rows } = await client.query(query);
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error('Error fetching ROMs:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
