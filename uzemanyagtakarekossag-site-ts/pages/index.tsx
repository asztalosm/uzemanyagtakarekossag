import { Menu } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-gradient-to-b from-[#66d831] to-[#66d831] py-6 relative">
        <button className="absolute left-4 top-4 text-black">
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-center text-black text-3xl font-light">Üzemanyagtakarékosság</h1>
      </header>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section className="mt-8 relative h-32 bg-[#e6e6e6]">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#66d831] clip-diagonal-left"></div>
          <div className="p-6 relative z-10">
            <h2 className="text-xl font-medium">Title1</h2>
            <p className="text-sm">Lorem</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-8 relative h-32 bg-[#e6e6e6]">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-[#66d831] clip-diagonal-right"></div>
          <div className="p-6 text-right relative z-10">
            <h2 className="text-xl font-medium">Title2</h2>
            <p className="text-sm">Lorem</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-8 relative h-32 bg-[#e6e6e6]">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#66d831] clip-diagonal-left"></div>
          <div className="p-6 relative z-10">
            <h2 className="text-xl font-medium">Title3</h2>
            <p className="text-sm">Lorem</p>
          </div>
        </section>

        {/* Card Section */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#e6e6e6] rounded-lg p-6 h-72 max-w-md mx-auto w-full">
            <h2 className="text-xl font-medium text-center mb-2">Title</h2>
            <p className="text-sm">Paragraph</p>
          </div>
          <div className="bg-[#e6e6e6] rounded-lg p-6 h-72 max-w-md mx-auto w-full">
            <h2 className="text-xl font-medium text-center mb-2">FuelCalculator</h2>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-medium text-center mb-8">Summary</h2>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#afcf7a] rounded-lg p-4 w-full max-w-[220px]">
                <div className="bg-[#c5b2b2] h-32 mb-2 rounded"></div>
                <h3 className="text-center font-medium">Title</h3>
                <p className="text-xs">Paragraph</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#afcf7a] rounded-lg p-4 w-full max-w-[220px]">
                <div className="bg-[#c5b2b2] h-32 mb-2 rounded"></div>
                <h3 className="text-center font-medium">Title</h3>
                <p className="text-xs">Paragraph</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

