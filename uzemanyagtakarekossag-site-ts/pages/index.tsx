import Head from 'next/head';
import Image from 'next/image'; // Import Image component if using Next.js for optim  ization
import { Quicksand } from 'next/font/google';
import kep from '../public/image.png'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '600',
  variable: "--font-quicksand"
});

export default function Document() {
  return (
    <>
      <Head>
        <title>Üzemanyagtakarékosság</title>
      </Head>
      <header className="bg-[#5bce27] h-40 flex items-center justify-center">
        <h1 className="text-center text-5xl">Üzemanyagtakarékosság</h1>
      </header>
      <div className="Paragrafusok mt-20">
        <Image src={kep} alt="" width={100} height={100} className='float-left'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam enim, sunt, sequi qui laboriosam deserunt odio minima molestias autem quaerat deleniti reiciendis corporis rerum repudiandae voluptas quasi ut, voluptate temporibus.</p>
        <Image src={kep} alt="" width={100} height={100} className='float-right mt-30'/>
        <p className='mt-30 text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis numquam fuga at fugiat, culpa minus modi rerum ex sunt quam ab inventore vel officia maiores, officiis aut sit repellendus!</p>
      </div>
      <div className='w-200 ml-auto mr-auto'>
        <div className='bal bg-[#5bce27] h-100 mt-30 w-130 float-left'>
          <h1 className='text-center font-bold text-xl'>Lorem</h1>
          <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates debitis ea, fuga reprehenderit cupiditate saepe sed iusto in! Natus aperiam consequatur nesciunt minima? Aperiam obcaecati accusamus officia velit voluptatem!</p>
        </div>
        <div className='bal bg-[#5bce27] h-100 mt-30 w-65 float-right'>
          <h1 className='text-center font-bold text-xl'>Lorem</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eligendi corporis, molestias aperiam molestiae vero quia, quaerat fugiat reiciendis cumque nisi laborum id ipsam. Tempore adipisci tenetur perferendis placeat velit!</p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <h1 className='text-center text-5xl'>Összegzés</h1>
      <div className='container mx-auto p-4 mt-10 ml-auto mr-auto'>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <div className='bg-[#5bce27] h-50 w-50 rounded-lg'></div>
          <div className='bg-[#5bce27] h-50 w-50 rounded-lg'></div>
          <div className='bg-[#5bce27] h-50 w-50 rounded-lg'></div>
          <div className='bg-[#5bce27] h-50 w-50 rounded-lg'></div>
          <div className='bg-[#5bce27] h-50 w-50 rounded-lg'></div>
          <div className='bg-[#5bce27] h-50 w-50 rounded-lg'></div>
        </div>
      </div>
    </>
  );
}
