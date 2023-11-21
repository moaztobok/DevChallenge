import Image from 'next/image'
export default function Home() {
  return (
   <main className='w-screen h-screen flex justify-center items-center '>
    <div className='shadow-lg w-[26rem]  rounded-xl flex flex-col'>
      <div className='bg-MyDarkBlue w-full h-[17rem] relative rounded-xl '
      style={{backgroundImage:"url(./hero-image-business-card.png)",backgroundSize:"cover"}}>
      <Image src='./white-overlay.svg' alt='lip' width={200} height={200} className='absolute bottom-[-2px] h-[full] w-full'/>
     </div>
    <div>
    <div className='text-MyDarkBlue font-poppins px-8 flex flex-col gap-4'>
      <h2 className='text-[1.5rem] font-medium'>Perfect solution for small business</h2>
      <h3 className='text-[0.9rem] font-normal text-BlueIshGrey'>Small businesses need to generate leads to grow. You can use tools like Ringy.</h3>
    </div>
    <div className='w-full border-b border-b-MyGrey py-4'></div>
    </div>

    <div className='w-full px-8 py-8 grid grid-cols-[50px_auto] items-center'>
      <div>
        <Image src='/avatar-image-business-card.png' className='rounded-full' width={35} height={35} />
      </div>
      <div className='flex flex-col'>
      <h3 className='text-[0.8rem] font-bold'>Amy Burgess</h3>
      <h4 className='text-[0.7rem] text-BlueIshGrey'>Customer Manger, Solution Oy</h4>
      </div>
    </div>

    </div>
   </main>
  )
}
