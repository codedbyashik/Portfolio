const testimonials = [
  {
    name: "Rafiq Ahmed",
    position: "CEO, Tech Solutions",
    quote: "Ashik did an amazing job building our company website. Highly recommended!",
  },
  {
    name: "Fatima Noor",
    position: "Product Manager, InnovateX",
    quote: "Professional and detail-oriented developer. Great communication skills.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map(({ name, position, quote }, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">“{quote}”</p>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">{position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
