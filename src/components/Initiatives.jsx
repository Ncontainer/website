import { Globe, Users, Shield, HardHat, Handshake } from "lucide-react";

const Initiatives = () => {
  const initiatives = [
    {
      icon: <div className="text-orange-500"><Shield size={36} /></div>,
      title: "Corporate Social Responsibility",
      description: "We actively support community initiatives through charitable donations and volunteer programs, focusing on causes related to education, environment, and community development."
    },
    {
      icon: <div className="text-orange-500"><Globe size={36} /></div>,
      title: "Sustainability Initiatives",
      description: "Company Containers is committed to reducing its environmental footprint by implementing energy-efficient practices, promoting recycling programs, and investing in eco-friendly technologies."
    },
    {
      icon: <div className="text-orange-500"><Users size={36} /></div>,
      title: "Diversity and Inclusion Programs",
      description: "Company Containers values diversity and fosters an inclusive workplace culture where all employees are respected and empowered to contribute their unique perspectives."
    },
    {
      icon: <div className="text-orange-500"><Handshake size={36} /></div>,
      title: "Ethical Business Practices",
      description: "Company Containers upholds the highest ethical standards in all aspects of its operations, ensuring transparency, integrity, and compliance with legal and regulatory requirements."
    },
    {
      icon: <div className="text-orange-500"><HardHat size={36} /></div>,
      title: "Health and Safety Initiatives",
      description: "We prioritize the health and safety of its employees, customers, and the public by maintaining rigorous safety standards, providing comprehensive training programs, and promoting a culture of safety awareness."
    }
  ];

  return (
    <section className="my-6 w-full m-auto bg-gray-50">

    
    <div className="w-[90%] mx-auto py-10 px-3 sm:px-4">
      <div className="text-center">
        <h3 className="text-orange-500 font-medium uppercase tracking-wide text-sm sm:text-base">INITIATIVES</h3>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Initiatives at NCON</h2>
        <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-base text-gray-600">
          At NCON, we believe that even the smallest initiative can pave the way for a brighter future. We are committed to making
          meaningful contributions in areas that truly matter. Explore our initiatives
        </p>
      </div>

      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-justify">
        {initiatives.map((initiative, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-3 p-2">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
              {initiative.icon}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">{initiative.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">{initiative.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Initiatives;