import { DebitNoteCard } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="items-center justify-between max-w-[1024px] m-auto " style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="px-[24px]">
    <DebitNoteCard/>
    </div>
    </main>
  );
}
