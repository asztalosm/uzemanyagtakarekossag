import Image from "next/image";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";

const Quicksandfont = Quicksand({
  weight: '600',
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[Quicksand]`}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg">

        
        <h1 className={Quicksandfont.className} style={{
          fontSize: 60,
          minHeight: 30,
        }}
        >Üzemanyagtakarékosság</h1>
      </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
