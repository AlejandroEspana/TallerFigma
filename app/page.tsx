import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-between overflow-hidden">
      {/* Floating Images Area */}
      <div className="relative w-full flex-1 mt-8 min-h-[50vh]">
        <div className="absolute top-0 -left-6 w-32 h-32 overflow-visible animate-[bounce_8s_infinite]">
          <Image src="/Img1.png" alt="Food 1" fill className="object-contain mix-blend-multiply" />
        </div>
        <div className="absolute top-1/4 left-[20%] w-40 h-40 overflow-visible animate-[bounce_6s_infinite_0.5s] z-10">
          <Image src="/Img2.png" alt="Food 2" fill className="object-contain mix-blend-multiply" />
        </div>
        <div className="absolute top-12 -right-8 w-36 h-36 overflow-visible animate-[bounce_7s_infinite_1s]">
          <Image src="/Img3.png" alt="Food 3" fill className="object-contain mix-blend-multiply" />
        </div>
        <div className="absolute bottom-10 -left-10 w-44 h-44 overflow-visible animate-[bounce_6s_infinite_1.5s]">
          <Image src="/Img5.png" alt="Food 4" fill className="object-contain mix-blend-multiply" />
        </div>
        <div className="absolute bottom-20 left-[35%] w-32 h-32 overflow-visible animate-[bounce_8s_infinite_0.2s] z-10">
          <Image src="/Img4.png" alt="Food 5" fill className="object-contain mix-blend-multiply" />
        </div>
        <div className="absolute bottom-0 -right-4 w-36 h-36 overflow-visible animate-[bounce_7s_infinite_0.8s]">
          <Image src="/Img1.png" alt="Food 6" fill className="object-contain mix-blend-multiply" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="w-full flex flex-col items-center justify-end pb-8 px-6 z-20 shrink-0">
        <h1 className="text-4xl font-bold text-center leading-tight mb-4 tracking-tight">
          Test the Joy of<br />Delivery
        </h1>
        <p className="text-center text-[var(--color-text-secondary)] mb-10 text-sm max-w-[280px]">
          Unlock a world of culinary delights, right at your fingertips
        </p>
        
        <Link 
          href="/home" 
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-4 rounded-3xl text-center text-lg shadow-[0_8px_20px_rgba(232,91,82,0.3)] transition-transform active:scale-95"
        >
          Get Started
        </Link>
        
        {/* iOS style home indicator bar */}
        <div className="w-1/3 h-1.5 bg-gray-300 rounded-full mt-6"></div>
      </div>
    </div>
  );
}
