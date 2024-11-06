import Link from "next/link";

interface Service {
  id: number;
  name: string;
  detail: string;
}

export default async function Services() {
  const res = await fetch("http://localhost:3000/data/data.json");
  const jsonData = await res.json();
  const services: Service[] = jsonData.services;
  console.log(jsonData);

  return (
    <ol className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg mt-10 flex flex-col justify-center ">
      {services.map((service) => {
        return (
          <li className="px-4 py-4 transition ease-in-out delay-75 duration-100 hover:bg-slate-400 rounded-lg font-semibold text-lg" key={service.id}>
            <Link href={`/services/${service.id}`}>{service.name}</Link>
          </li>
        );
      })}
    </ol>
  );
}
