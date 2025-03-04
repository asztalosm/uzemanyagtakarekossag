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
        <div className="Paragrafusok mt-20">
          <p className=""></p>


        </div>
        <div className='w-200 ml-auto mr-auto'>
          <div className='bal bg-[#5bce27] h-100 mt-30 w-130 float-left rounded-lg'>
            <h1 className='text-center font-bold text-xl root.background'>Lorem</h1>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates debitis ea, fuga reprehenderit cupiditate saepe sed iusto in! Natus aperiam consequatur nesciunt minima? Aperiam obcaecati accusamus officia velit voluptatem!</p>
          </div>
          <div className='bal bg-[#5bce27] h-100 mt-30 w-65 float-right rounded-lg'>
            <h1 className='text-center font-bold text-xl'>Lorem</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eligendi corporis, molestias aperiam molestiae vero quia, quaerat fugiat reiciendis cumque nisi laborum id ipsam. Tempore adipisci tenetur perferendis placeat velit!</p>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className='mt-140'>
          <h1 className='text-center text-6xl '>Összegzés</h1>
          <div className='container mx-auto p-4 mt-10 ml-auto mr-auto'>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              <div className=' h-100 w-80 rounded-lg'></div>
              <div className=' h-100 w-80 rounded-lg'></div>
              <div className=' h-100 w-80 rounded-lg'></div>
              <div className=' h-100 w-80 rounded-lg'></div>
              <div className=' h-100 w-80 rounded-lg'></div>
              <div className=' h-100 w-80 rounded-lg'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
