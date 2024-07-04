import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import CardGames  from "@/components/CardGames";
export default function Games() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <CardGames />
    </div>
  );
}

