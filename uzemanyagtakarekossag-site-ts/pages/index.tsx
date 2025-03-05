import { EllipsisVertical, Fuel, SunMoon, Gauge, PiggyBank } from "lucide-react"
import { Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react"
import { Quicksand } from "next/font/google"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})
export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className={`${quicksand.className}`}>
        {/* Header */}
        <header className="radial-gradient backdrop-blur-xl py-8 relative h-auto min-h-[250px] flex flex-col justify-center">

          <div className="flex items-center justify-center">
            <h1 className="mt-6 text-center text-4xl sm:text-5xl md:text-6xl font-light px-4">Üzemanyagtakarékosság</h1>
          </div>
        </header>
        <button className="fixed left-4 top-4 md:left-6 md:top-6 ">
            <EllipsisVertical className="h-6 w-6"/>
        </button>
        {/* Content Container */}
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1 */}
          <section className="my-12 sm:my-16 md:my-20 relative h-auto min-h-[400px] w-full mx-auto bg-[var(--secondarybackground)] rounded-lg overflow-hidden shadow-lg">
            <div
              className="absolute right-0 top-0 h-full w-1/3 half-circle-top bgimg1"
            ></div>
            <div className="p-6 sm:p-8 md:p-10 relative z-10 flex flex-col justify-center h-full">
              <h2 className="text-2xl sm:text-3xl font-medium mb-4">Title1</h2>
              <p className="text-base sm:text-lg max-w-190">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="my-12 sm:my-16 md:my-20 relative h-auto min-h-[400px] w-full mx-auto bg-[var(--secondarybackground)] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute right-0 top-0 h-full w-1/3 half-circle-middle bgimg2"></div>
            <div className="p-6 sm:p-8 md:p-10 relative z-10 flex flex-col justify-center h-full">
              <h2 className="text-2xl sm:text-3xl font-medium mb-4">Title2</h2>
              <p className="text-base sm:text-lg max-w-190">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="my-12 sm:my-16 md:my-20 relative h-auto min-h-[400px] w-full mx-auto bg-[var(--secondarybackground)] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute right-0 top-0 h-full w-1/3 half-circle-bottom bgimg3"></div>
            <div className="p-6 sm:p-8 md:p-10 relative z-10 flex flex-col justify-center h-full">
              <h2 className="text-2xl sm:text-3xl font-medium mb-4">Title3</h2>
              <p className="text-base sm:text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--secondary)] rounded-lg p-6 sm:p-8 h-auto min-h-[600px] w-full mx-auto shadow-md">
              <h2 className="text-2xl sm:text-3xl font-medium text-center mb-4">Title</h2>
              <p className="text-base sm:text-lg">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="bg-[var(--secondary)] rounded-lg p-6 sm:p-8 h-auto min-h-[300px] w-full mx-auto shadow-md">
              <h2 className="text-2xl sm:text-3xl font-medium text-center mb-4">FuelCalculator</h2>
              <p className="text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </section>

          {/* Summary Section */}
          <section className="mt-16 mb-20">
            <h2 className="text-3xl sm:text-4xl font-medium text-center mb-8 sm:mb-10">Summary</h2>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[var(--accent)] rounded-lg p-6 w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] max-w-[350px] shadow-md"
                >
                  <div className="bg-[#c5b2b2] h-75 w-75 mb-4 rounded"></div>
                  <h3 className="text-xl font-medium text-center mb-2">Title</h3>
                  <p className="text-sm">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {[4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-[var(--accent)] rounded-lg p-6 w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] max-w-[350px] shadow-md"
                >
                  <Fuel className="h-25 w-25 centermargin"></Fuel>
                  <h3 className="text-xl font-medium text-center mb-2">Title</h3>
                  <p className="text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

