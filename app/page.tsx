import Image from "next/image";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className=" my-12 text-3xl text-center dark:text-gray-200">
        {" "}
        Hello and Welcome &nbsp;
        <span className=" whitespace-nowrap">
          I am <span className="font-bold"> Pyaesone Khant </span>{" "}
        </span>{" "}
      </p>
      <Posts />
    </main>
  );
}
