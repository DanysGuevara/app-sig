import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";

export default function Games() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/storage-39b2e.appspot.com/o/games%2FPokemon_-_Fire_Red_Version_poster.webp?alt=media&token=bccc7caf-693f-46af-8d26-594301f5aa40"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Pokémon Fire Red</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Immerse yourself in the vibrant and dangerous world of Night City, a
            megalopolis obsessed with power, glamour and body modification.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>RPG</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="/placeholder.svg"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">The Witcher 3: Wild Hunt</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            The Witcher 3: Wild Hunt is a story-driven, open-world adventure set
            in a dark fantasy universe.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>Action, RPG</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="/placeholder.svg"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Elden Ring</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Elden Ring is an action role-playing game developed by FromSoftware
            and published by Bandai Namco Entertainment.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>Action, RPG</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="/placeholder.svg"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">God of War Ragnarök</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            God of War Ragnarök is an action-adventure game developed by Santa
            Monica Studio and published by Sony Interactive Entertainment.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>Action, Adventure</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="/placeholder.svg"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Horizon Forbidden West</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Horizon Forbidden West is an action role-playing game developed by
            Guerrilla Games and published by Sony Interactive Entertainment.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>Action, Adventure</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="/placeholder.svg"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Elden Ring</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Elden Ring is an action role-playing game developed by FromSoftware
            and published by Bandai Namco Entertainment.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>Action, RPG</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="/placeholder.svg"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Elden Ring</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Elden Ring is an action role-playing game developed by FromSoftware
            and published by Bandai Namco Entertainment.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>Action, RPG</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="/placeholder.svg"
            alt="Game Cover"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Elden Ring</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Elden Ring is an action role-playing game developed by FromSoftware
            and published by Bandai Namco Entertainment.
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <span>Action, RPG</span>
            <GamepadIcon className="h-4 w-4" />
            <span>Gameboy advance</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function GamepadIcon(props: SVGProps<SVGSVGElement>) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function TagIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
