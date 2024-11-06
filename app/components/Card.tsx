import Link from "next/link";

export default function Card({ name, id }: { name: string; id: number }) {
  return (
    <div className="w-96 flex items-center justify-around flex-col text-center gap-4 bg-gray-400 p-6 h-80 mt-6 rounded-lg shadow-2xl transition delay-75 ease-in-out duration-70 hover:scale-110  cursor-pointer">
      <span className="text-3xl font-bold">{name}</span>
      <span className="text-slate-700 font-semibold text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      <Link
        className="bg-gray-800 font-semibold px-2 py-3 text-white outline-none border-none rounded-lg transition delay-75 ease-out duration-70 hover:bg-transparent hover:outline-black"
        href={`/services/${id}`}
      >
        Read More
      </Link>
    </div>
  );
}
