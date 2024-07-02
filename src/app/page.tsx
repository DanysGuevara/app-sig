import Navbar from "@/components/Navbar";
import Games from "@/components/Games";
export default function Home() {

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Games />
      </main>
    </>
  );
}
