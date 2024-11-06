import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-3xl font-bold">This is home page</h1>
      <p className="text-2xl font-bold">For services click here</p>
      <Link className="px-3 py-3  bg-red-700 rounded-lg font-bold border-none outline-none transition ease-out delay-75 duration-100 hover:bg-transparent hover:outline-black" href={"/services"}>
        Services
      </Link>
    </div>
  );
}
