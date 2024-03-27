import Image from "next/image";

export default function Home() {
  return (
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
    <div className="h-1/2 relative lg:h-full lg:w-1/2" >
  <Image src="/hero.png" alt="sami" fill className="object-contain"/>
    </div>
    <div className="h-1/2 flex lg:h-full lg:w-1/2 flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl font-bold md:text-6xl"> Crafting digital experiances , Designing tomorrow. </h1>
      <p className="md:text-xl">Armed with a deep understanding of machine learning , web development and a flair for creating seamless user experiences . </p>
      <div className="flex gap-4 w-full">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work </button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me </button>
      </div>
    </div>
  </div>
  );
}
