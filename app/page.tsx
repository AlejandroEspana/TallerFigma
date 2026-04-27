import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-between overflow-hidden">
      {/* Floating Images Area - Static */}
      <div className="relative w-full flex-1 mt-8 min-h-[50vh]">
        {/* Floating Images (static positions, no circles, no mix-blend) */}
        <div className="absolute -top-4 -left-12 w-48 h-48 flex items-center justify-center">
          <Image src="/Img1.png" alt="Food 1" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain" />
        </div>
        <div className="absolute top-[20%] left-[20%] w-56 h-56 z-10 flex items-center justify-center">
          <Image src="/Img2.png" alt="Food 2" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain" />
        </div>
        <div className="absolute top-8 -right-16 w-44 h-44 flex items-center justify-center">
          <Image src="/Img3.png" alt="Food 3" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain" />
        </div>
        <div className="absolute bottom-16 -left-16 w-52 h-52 flex items-center justify-center">
          <Image src="/Img5.png" alt="Food 4" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain" />
        </div>
        <div className="absolute bottom-24 left-[40%] w-40 h-40 z-10 flex items-center justify-center">
          <Image src="/Img4.png" alt="Food 5" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain" />
        </div>
        <div className="absolute bottom-4 -right-12 w-48 h-48 flex items-center justify-center">
          <Image src="/Img1.png" alt="Food 6" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain" />
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
