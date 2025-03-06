import { Fuel, SunMoon, Gauge, PiggyBank, BarChart, Calculator, Car, Download, Bus, Map} from "lucide-react"
import { Description, Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react"
import { Quicksand } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import { title } from "process"
import { resolve } from "path"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
}
)

export default function Home() {
  const [showCalculator, setShowCalculator] = useState(true)
  const [distance, setDistance] = useState("")
  const [fuelConsumption, setFuelConsumption] = useState("")
  const [fuelPrice, setFuelPrice] = useState("")
  const [result, setResult] = useState("")
  const [showButtons, setShowButtons] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  let clicked = false

  
  const calculateFuelCost = () => {
    const cost = (Number.parseFloat(distance) / 100) * Number.parseFloat(fuelConsumption) * Number.parseFloat(fuelPrice)
    setResult(cost.toFixed(2))
  }

  const switchTheme = () => {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.add("light")
      }
    }
  }

  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  const handleMouseEnter2 = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowButtons(true)
    clicked = true;
    setTimeout(() =>
    {
      clicked = false
      setShowButtons(false)
    }, 4000)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowButtons(true)
  }

  const handleMouseLeave = () => {
    if (!clicked) {
      timeoutRef.current = setTimeout(() => {
        setShowButtons(false)
      }, 800) // 300ms delay before hiding buttons
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

return (
  <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    <div className={`${quicksand.className}`}>
      {/* Header */}
      <header className="radial-gradient backdrop-blur-xl py-8 relative h-auto min-h-[250px] flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <h1 className="mt-6 text-center text-4xl sm:text-5xl md:text-6xl font-light px-4">Üzemanyag &shy;takarékosság</h1>
        </div>
      </header>
      <button className="fixed left-4 top-4 md:left-6 md:top-6 z-1 absolute" onClick={switchTheme}>
          <SunMoon className="h-8 w-8" />
      </button>
      {/* Content Container */}
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1 */}
        <section className="my-12 sm:my-16 md:my-20 relative h-max min-h-[400px] w-full mx-auto bg-[var(--secondarybackground)] rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 sm:p-8 md:p-10 relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 fiftypercentwidth">Autógumik befolyása a fogyasztásban</h2>
            <p className="text-base sm:text-lg sixtyfivepercwidth">
            Az autógumik üzemanyag-hatékonysági osztályai (A-G) közvetlenül befolyásolják az autó fogyasztását. Az „A” osztályú gumik a legkevesebb gördülési ellenállással rendelkeznek, ami 0,6 literrel kevesebb üzemanyag-fogyasztást jelent 100 km-en, mint a „G” osztályú gumik. Osztásonként (pl. „A” és „B” között) átlagosan 0,1 liter (1 dl) üzemanyag takarítható meg.
            <br />
            <br />
            Azonban a kisebb gördülési ellenállás gyakran gyengébb tapadással jár, így a gumik választásakor fontos egyensúlyt találni a fogyasztás és a biztonság között. Az „A” osztályú gumik évente akár 90 liter üzemanyag-megtakarítást is jelenthetnek, de a teljesítményt, kopásállóságot és évszaknak megfelelő tulajdonságokat is figyelembe kell venni.
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full dynamicwidth half-circle-top bgimg1"></div>
        </section>
        {/* Section 2 */}
        <section className="my-12 sm:my-16 md:my-20 relative h-auto min-h-[400px] w-full mx-auto bg-[var(--secondarybackground)] rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 sm:p-8 md:p-10 relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 fiftypercentwidth">Kényelmi funkciók hatása az üzemanyag&shy;-fogyasztásra</h2>
            <p className="text-base sm:text-lg sixtyfivepercwidth">
            A légkondicionálás, valamint az ülésfűtés és egyéb extra funkciók sok plusz energiát fogyasztanak, így növelik  az üzemanyag-fogyasztást. Ezeket mérsékelten és csak akkor érdemes használni, ha valóban szükség van rájuk.
            <br />
            <br />
            A szennyezett utastérszűrő miatt az autó légkondícionáló berendezése nem működhet megfelelően, emellett lényegesen több  energiát használhat fel az elvárt teljesítmény eléréséhez.
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 half-circle-middle bgimg2"></div>
        </section>
        {/* Section 3 */}
        <section className="my-12 sm:my-16 md:my-20 relative h-auto min-h-[400px] w-full mx-auto bg-[var(--secondarybackground)] rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 sm:p-8 md:p-10 relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-3xl font-medium mb-4">Tankolás</h2>
            <p className="text-base sm:text-lg sixtyfivepercwidth">
            Az elmúlt években a benzinkutak az üzemanyagok egész sorát kínálják, de figyeljünk oda, hogy autónk számára a legoptimálisabb üzemanyag az amelyet a gyártó ajánl. Sok  országban ma már nagyobb arányban adnak etanolt a benzinmotorok üzemanyagához, (pl. E10 10%-os etanollal) mely csökkenti a káros anyagok kibocsájtását, viszont hamarabb megromlik az üzemanyag.
            <br /><br />
            Egyes üzemanyagok valamivel olcsóbbak, ugyanakkor használatukkal az üzemanyag-fogyasztás enyhe növekedéséhez vezethet.  Így a tényleges megtakarítás általában elenyésző. Ennek az ellenkezője igaz az egyre gyakrabban kínált "prémium  üzemanyagokra" a dízel vagy benzin gépjárművek esetében; bár ezek az üzemanyagok alacsonyabb fogyasztást eredményeznek  (általában egyszámjegyű százalékos érték), lényegesen drágábbak.
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 half-circle-bottom bgimg3"></div>
        </section>

        {/* Calculator Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--secondary)] rounded-lg p-6 sm:p-8 h-auto min-h-[600px] w-full mx-auto shadow-md">
            <h2 className="text-2xl sm:text-3xl font-medium text-center mb-4">Az üzemanyag fogyasztásról</h2>
            <p className="text-base sm:text-lg">
              Az üzemanyag fogyasztást nagyon sok dolog befolyásolja, legyen ez a jármű súlya, vezetési stílus, vagy akár az üzemanyag minősége. Ezeknek a megfelelő kombinációja elősegíti a spórolást, hogy a <a
                    onClick={handleMouseEnter2}
                    target="_blank"
                    className="text-[var(--primary)] hover:underline"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    rel="noreferrer"
                  >pénz
              </a>ünket megtakarítsuk. Minél nehezebb egy jármű annál több üzemanyagot fogyaszt. Optimális fordulatszám az 2000-3000, viszont ez hosszú távon nem tesz jót az autónak. Konzisztens gyorsaság csökkenti a fogyasztást, emellett egy országút kevesebbet fogyaszthat, mint egy autópálya a sebességkorlátok miatt. Üzemanyagfogyasztást lehet csökkenteni úgy is, hogy újabb évjáratú járművel közlekedünk vagy ha esetleg a helyzet engedi akkor egy motorkerékpár használata kedvezőbb lehet. Rövid útakra való vezetés nem ajánlott ugyanis amíg az autó nem üzemhőmérsékleten működik addig akár az átlag fogyasztás kétszeresére is nőhet vezetés közben. Megosztó téma a motor járatása, egyesek azt ajánlják, hogy ha tudjuk, hogy 10 másodpercnél tovább fog állni az autó akkor állítsuk le nyugodtan, mások azt állítják, hogy csak 1 perc után pazaroljuk az üzemanyagot.

            </p>
            <div
                  className={`w-max h-4absolute bottom-full left-0 mb-2 space-y-2 transition-opacity ${showButtons ? "opacity-100" : "opacity-0"}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="/A_penz_kialakulasa.pdf"
                    download
                    className="block px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors "
                  >
                    <Download className="inline-block w-4 h-4 mr-2" />
                    PDF megnézése böngészőben
                  </a>
                  <a
                    href="/A_penz_kialakulasa.pptx"
                    download
                    className="block px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-200"
                  >
                    <Download className="inline-block w-4 h-4 mr-2" />
                    PPTX letöltése
                  </a>
                </div>
          </div>
          <div className="bg-[var(--secondary)] rounded-lg p-6 sm:p-8 h-auto min-h-[600px] w-full mx-auto shadow-md">
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="bg-[var(--secondarytwo)] text-white px-4 py-2 rounded-md hover:bg-[var(--secondarythree)] transition-colors float-right "
              >
                {showCalculator ? <BarChart className="h-6 w-6" /> : <Calculator className="h-6 w-6" />}
              </button>
            <h2 className="text-2xl sm:text-3xl font-medium text-center mb-4">{showCalculator ? "Üzemanyag fogyasztás számoló" : "Statisztikák"}</h2>
          {showCalculator ? (
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Út (km)"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="Fogyasztás (L/100km)"
                value={fuelConsumption}
                onChange={(e) => setFuelConsumption(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="Benzin ár (liter)"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <button
                onClick={calculateFuelCost}
                className="w-full bg-[var(--secondarytwo)] hover:bg-[var(--secondarythree)] text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors"
              >
                Számolás!
              </button>
              {result && <p className="text-lg font-medium text-center">Becsült Benzin Ár: {result}Ft</p>}
            </div>
          ) : (
          <p className="text-base sm:text-lg">
            Magyarországon a leggyakoribb autók összes évjáraton keresztüli átlagos fogyasztása:
            <br />
            <ul>
              <li>1. Opel Astra - 6.5L/100km</li>
              <li>2. Suzuki Swift - 5.6L/100km</li>
              <li>3. Ford Focus - 6.4L/100km</li>
              <li>4. Volkswagen Golf - 6.6L/100KM</li>
              <li>5. Opel Corsa - 5.5L/100KM</li>
              <li>6. Volkswagen Passat - 6.6L/100KM</li>
              <li>7. Skoda Fabia - 5.9L/100KM</li>
              <li>8. Renault Mégane - 6.1L/100KM</li>
              <li>9. Volkswagen Polo - 6.6L/100KM</li>
              <li>10. Skoda Octavia - 5.9L/100KM</li>
            </ul>
            </p>
          )}
        </div>
        </section>
        {/* Summary Section */}
        <section className="mt-16 mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium text-center mb-8 sm:mb-10">Összegzés</h2>
          {/* Első sor*/}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
            {[
              {
              icon: Bus,
              title: "Tömegközlekedés",
              description: "A tömegközlekedés a legbiztosabb mód arra, hogy csökkentsük az üzemanyag fogyasztásunkat."
            },
            {
              icon: Fuel,
              title: "Üzemanyag",
              description: "Az autóba töltött üzemanyag minősége habár kis mértékben, de befolyásolja a fogyasztási teljesítményét. Magunknak kell eldöntenünk, hogy megéri-e a prémium üzemanyagot vásárolni (nem)"
            },
            {
              icon: Car,
              title: "Jármű",
              description: "A járművünk nagy mértékben hozzájárul a fogyasztási teljesítményhez, itt a motor teljesítménye és az autó súlya és az aerodinamika játszik fő szerepet."
            }
          ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--secondarybackground)] rounded-lg p-6 w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] max-w-[350px] shadow-md flex flex-col items-center"
              >
                <item.icon className="h-50 w-50 text-[var(--primary)]"></item.icon>
                <h3 className="text-3xl font-medium text-center mb-2">{item.title}</h3>
                <p className="text-md">
                  {item.description}
                </p>
              </div>
            ))}
            </div>
            {/*Második sor*/}

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
            {[
              {
              icon: Gauge,
              title: "Fordulatszám",
              description: "Csökkentett fordulatszámon való vezetés segíthet spórolni de vigyázzunk, hogy ne vezessük mindig így az autót ugyanis az tönkreteheti a motort."
            },
            {
              icon: Map,
              title: "Navigáció használata",
              description: "Navigáció használata nagy mértékben elősegítheti az optimális fogyasztást, a forgalmi dugók elkerülésével."
            },
            {
              icon: PiggyBank,
              title: "Megtakarítás",
              description: "Ezeket a tippeket követve az üzemanyag fogyasztásunkat csökkenteni tudjuk, mely éves szinten nagy megtakarítást jelenthet attól függően, hogy mennyire gyakran használjuk járművünket."
            }
          ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--secondarybackground)] rounded-lg p-6 w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] max-w-[350px] shadow-md flex flex-col items-center"
              >
                <item.icon className="h-50 w-50 text-[var(--primary)]"></item.icon>
                <h3 className="text-3xl font-medium text-center mb-2">{item.title}</h3>
                <p className="text-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
)
}
