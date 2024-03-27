import Image from "next/image";

export default function Home() {
  return (
  <div className="h-full flex flex-col">
    <div className="h-1/2 relative" >
  <Image src="/sam.jpg" alt="sami" fill className="object-contain"/>
    </div>
    <div className="h-1/2">
      <h1> Crafting digital experiances , Designing tomorrow. </h1>
      <p>Armed with a deep understanding of machine learning and a flair for creating seamless user experiences . </p>
      <div className="">
        <button>View My Work </button>
        <button>Contact Me </button>
      </div>
    </div>
  </div>
  );
}
