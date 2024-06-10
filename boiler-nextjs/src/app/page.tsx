import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="roboto">Home Component</h1>
      <h1 className={roboto.className}>Home Component</h1>
    </>
  );
}
