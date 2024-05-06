import LoadingDots from '../components/LoadingDots';
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>hi my name is arav.</h1>
        <br></br>
        <h1>welcome to my website<LoadingDots /></h1>
      </div>
    </main>
  );
}
