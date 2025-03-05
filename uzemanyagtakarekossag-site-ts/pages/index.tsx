import Head from 'next/head';
import Image from 'next/image'; // Import Image component if using Next.js for optim  ization
import { Quicksand } from 'next/font/google';
import kep from '../public/image.png'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: "swap",
});


export default function Document() {
  return (
    <>
      <Head>
        <title>Üzemanyagtakarékosság</title>
      </Head>
      <div className={`${quicksand.className}`}>
        <header className={`h-50 flex items-center justify-center headergradient`}>
          <h1 className="text-center text-6xl">Üzemanyagtakarékosság</h1>
        </header>
        <div className='w-200 ml-auto mr-auto'>
          <div className='bal bg-[#5bce27] h-100 mt-30 w-130 float-left rounded-lg'>
            <h1 className='text-center font-bold text-xl root.background'>Gumik</h1>
            <p className='text-center'>Az autógumik üzemanyag-hatékonysági osztályai (A-G) közvetlenül befolyásolják az autó fogyasztását. Az „A” osztályú gumik a legkevesebb gördülési ellenállással rendelkeznek, ami 0,6 literrel kevesebb üzemanyag-fogyasztást jelent 100 km-en, mint a „G” osztályú gumik. Osztásonként (pl. „A” és „B” között) átlagosan 0,1 liter (1 dl) üzemanyag takarítható meg.</p>
          </div>
          <div className='bal bg-[#5bce27] h-100 mt-30 w-65 float-right rounded-lg'>
            <h1 className='text-center font-bold text-xl'>Tapadás</h1>
            <p className='text-center'>Azonban a kisebb gördülési ellenállás gyakran gyengébb tapadással jár, így a gumik választásakor fontos egyensúlyt találni a fogyasztás és a biztonság között. Az „A” osztályú gumik évente akár 90 liter üzemanyag-megtakarítást is jelenthetnek, de a teljesítményt, kopásállóságot és évszaknak megfelelő tulajdonságokat is figyelembe kell venni.</p>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className='mt-140'>
          <h1 className='text-center text-6xl '>Tippek</h1>
          <div className='container mx-auto p-4 mt-10 ml-auto mr-auto'>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              <div className=' h-100 w-80 rounded-lg'><p><b>Tempomat: </b>A tempomat elősegíti az üzemanyag-megtakarítást, de hegyvidéken érdemes inkább manuálisan szabályozni a sebességet.</p></div>
              <div className=' h-100 w-80 rounded-lg'><p><b>Fojtószelep: </b>Benzines motorok esetén a fojtószelep teljes nyitása nem mindig kedvező; mérsékelt gázadagolás javasolt.</p></div>
              <div className=' h-100 w-80 rounded-lg'><p><b>Telematikai eszközök: </b>A járműkövető rendszerek segítik az autóhasználat monitorozását, csökkentve az üzemanyag-fogyasztást.</p></div>
              <div className=' h-100 w-80 rounded-lg'><p><b>Sebességváltás: </b>A váltásjelzők követése helyett nagy terhelésnél magasabb fordulatszámon lehet gazdaságosabb haladni.</p></div>
              <div className=' h-100 w-80 rounded-lg'><p><b>Sebességkorlát: </b>Az előírt sebességhatárok betartása és egyenletes sebesség tartása jelentős üzemanyag-megtakarítást eredményezhet.</p></div>
              <div className=' h-100 w-80 rounded-lg'><p><b>Tankolás: </b>Ritkábban, de nagyobb mennyiségekben tankolva csökkenthetjük az üzemanyag párolgásából eredő veszteséget. Dízelautóknál különösen fontos, hogy ne hagyjuk kiürülni az üzemanyagtartályt.</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
