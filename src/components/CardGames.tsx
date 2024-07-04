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
import { SVGProps } from "react";

interface CardGamesProps {
  title: string;
  description: string;
  image: string;
  genre: string;
  region: string;
  download: string;
}

export default function CardGames({ title, description, image, genre, region,download }: CardGamesProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayClick = () => {
     const link = document.createElement("a");
    link.href = download;
    link.download = title;
    link.click();
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  return (
    <Card className="w-full max-w-sm rounded-lg shadow-lg">
      <div className="relative">
        <Image
          priority
          src={image}
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
            {genre}
          </Badge>
          <Badge
            variant="outline"
            className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs"
          >
            {region}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
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
