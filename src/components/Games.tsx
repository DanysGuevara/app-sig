"use client";
import { useEffect, useState } from "react";
import CardGames from "@/components/CardGames";

interface Rom {
  title: string;
  description: string;
  image: string;
  genre: string;
  region: string;
  download: string;
}

export default function Games() {
  const [roms, setRoms] = useState<Rom[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoms = async () => {
      try {
        const response = await fetch("/api/roms");
        if (!response.ok) {
          throw new Error("Failed to fetch ROMs");
        }
        const data = await response.json();
        setRoms(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoms();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {roms.map((rom) => (
        <CardGames
          key={rom.title}
          title={rom.title}
          description={rom.description}
          image={rom.image}
          genre={rom.genre}
          region={rom.region}
          download={rom.download}
        />
      ))}
    </div>
  );
}
