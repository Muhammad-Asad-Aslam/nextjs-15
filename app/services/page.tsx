import Link from "next/link";
import Card from "../components/Card";

interface Service {
  id: number;
  name: string;
  detail: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:3000/data/data.json");
  const jsonData = await res.json();
  const services: Service[] = jsonData.services;
  console.log(jsonData);

  return (
    <>
      <div className="flex items-center justify-center text-2xl font-bold py-4 underline">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="w-full flex justify-center items-center flex-wrap gap-6 ">
        {services.map((service) => (
          <Card key={service.id} name={service.name} id={service.id} />
        ))}
      </div>
    </>
  );
}
