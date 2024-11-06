import { notFound } from "next/navigation";

interface Service {
  id: number;
  name: string;
  detail: string;
}

async function fetchService(id: number): Promise<Service | null> {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();
  const service = data.services.find((service: Service) => service.id === id);
  return service || null;
}

export default async function ServiceDetail({ params }: { params: { id: string } }) {
  const service = await fetchService(parseInt(params.id));

  if (!service) {
    notFound(); // This will show a 404 if the service doesn't exist
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold">{service.name}</h1>
      <p className="mt-4 text-gray-700">{service.detail}</p>
    </div>
  );
}
