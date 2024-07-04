"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";

export default function CardGames() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };
  return (
    <Card className="w-full max-w-sm rounded-lg shadow-lg">
      <div className="relative">
        <Image
          priority
          src="https://firebasestorage.googleapis.com/v0/b/storage-39b2e.appspot.com/o/games%2FPokemon_-_Fire_Red_Version_poster.webp?alt=media&token=bccc7caf-693f-46af-8d26-594301f5aa40"
          alt="Game Thumbnail"
          width={320}
          height={200}
          className="rounded-t-lg object-cover w-full"
        />
        <button
          onClick={handlePlayClick}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-3 transition-transform ${
            isPlaying
              ? "scale-125 animate-pulse"
              : "hover:scale-110 focus-visible:scale-110"
          }`}
        >
          <PlayIcon className="w-6 h-6" />
        </button>
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs"
          >
            RPG
          </Badge>
          <Badge
            variant="outline"
            className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs"
          >
            Gameboy Advance
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold">Cyberpunk 2077</CardTitle>
        <CardDescription className="text-muted-foreground">
          Cyberpunk 2077 is an open-world, action-adventure story set in Night
          City, a megalopolis obsessed with power, glamour and body
          modification.
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
