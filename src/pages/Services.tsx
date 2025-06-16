// components/Services.jsx
"use Client"
import { servicesData } from "../data/data.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <>
    <section className=" bg-slate-800 py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-md font-bold mb-6 text-center text-red-600">Our Services</h2>
      <p className="text-white mb-4 text-4xl font-light text-center">
       Comprehensive Education Consulting
      </p>
      <p className="text-muted mb-10 text-center">
        From selecting the right university to post-admission support, we’re here at every step.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-800">
        {servicesData.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Card key={idx}>
              <CardHeader className="flex flex-row items-start gap-4">
                <Icon className="w-8 h-8 text-primary bg-gray-100" />
                 </CardHeader>
                <CardTitle className="text-md font-bold text-slate-800 mx-4">{service.title}</CardTitle>
              <CardContent>
                <p className="text-sm text-slate-800">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <section className="py-12 px-6 max-w-4xl mx-auto">
  <h2 className="text-xl text-red-500 font-light">WHY CHOOSE US</h2>
  <h3 className="text-xl text-white  mb-6 font-bold">The Tiercel Difference</h3>

 <div className="flex flex-col lg:flex-row gap-8 text-white">
  {/* Left Column (1-3) */}
  <ul className="space-y-6 pl-6 list-none flex-1">
    <li>
      <span className="text-red-400">1</span>
      <span className="ml-4 text-xl font-light">Personalized Approach</span>
      <p className="ml-6 text-sm font-extralight">
        Unlike generic consultancies, we develop custom strategies for each student based on their unique academic profile and ambitions.
      </p>
    </li>
    <li>
      <span className="text-red-400">2</span>
      <span className="ml-4 text-xl font-light">Direct University Relationships</span>
      <p className="ml-6 text-sm font-extralight">
        We maintain strong partnerships with admissions offices at top institutions in the UK, USA, Canada, Ireland, Australia, and Europe.
      </p>
    </li>
    <li>
      <span className="text-red-400">3</span>
      <span className="ml-4 text-xl font-light">End-to-End Support</span>
      <p className="ml-6 text-sm font-extralight">
        From initial consultation to arrival at your institution, we provide continuous guidance and support.
      </p>
    </li>
  </ul>

  {/* Right Column (4-6) */}
  <ul className="space-y-6 pl-6 list-none flex-1">
    <li>
      <span className="text-red-400">4</span>
      <span className="ml-4 text-xl font-light">Expert Guidance</span>
      <p className="ml-6 text-sm font-extralight">
        Our team comprises experienced advisors with deep knowledge of international education systems and admissions trends.
      </p>
    </li>
    <li>
      <span className="text-red-400">5</span>
      <span className="ml-4 text-xl font-light">Proven Track Record</span>
      <p className="ml-6 text-sm font-extralight">
        We pride ourselves on a high success rate, helping students gain admission to their desired universities and programs.
      </p>
    </li>
    <li>
      <span className="text-red-400">6</span>
      <span className="ml-4 text-xl font-light">Application Mastery</span>
      <p className="ml-6 text-sm font-extralight">
        We assist with every detail, from crafting compelling personal statements to preparing for interviews and visa applications.
      </p>
    </li>
  </ul>
</div>

</section>

    </section>

    </>
  );
}
