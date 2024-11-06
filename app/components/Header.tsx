import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-red-700 w-full flex items-center justify-center py-4">
      <div>
        <Link href={"/services"} className="font-bold text-2xl">Services</Link>
      </div>
    </div>
  );
}
