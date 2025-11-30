import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2 } from "lucide-react";
import industrialImage from "../assets/images/dmk/generated/industrial-pipework.png";
import steelStructureImage from "../assets/images/dmk/generated/steel-structure.png";
import ductingImage from "../assets/images/dmk/generated/industrial-ducting.png";
import installationImage from "../assets/images/dmk/generated/site-installation.png";

export function Projects() {
  const categories = [
    {
      title: "Steel Structure & Heavy Fabrication",
      image: steelStructureImage,
      description: "Fabrication and installation for Cement, Oil & Gas, and Energy sectors.",
      items: [
        "Structural Steel & Access Platforms",
        "Conveyors & Gantries",
        "Towers & Trestles",
        "Canopies & Grating"
      ]
    },
    {
      title: "Pipework & Pumping Systems",
      image: industrialImage,
      description: "Fabrication of piping (CS, SS, FRP, GRP) meeting international standards.",
      items: [
        "Pump & Compressor Stations",
        "High Pressure & Low-Temperature Piping",
        "Chilled Water, Steam, and Process Pipework",
        "Tank & Vessel Fabrication"
      ]
    },
    {
      title: "Specialized Industrial Equipment",
      image: ductingImage,
      description: "Fully integrated industrial solutions from concept to final production.",
      items: [
        "Cooling Towers",
        "Industrial Duct Systems",
        "Bag Filters",
        "Customized Fabrications"
      ]
    },
    {
      title: "Site Installation & Turnkey Solutions",
      image: installationImage,
      description: "Comprehensive installation and commissioning of complex equipment systems.",
      items: [
        "Production Line Fit-outs",
        "Mechanical & Packaged Equipment Installation",
        "Turnkey Electro-mechanical Projects"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Portfolio Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Categorizing our diverse projects and expertise across key industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative h-64">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6">{category.description}</p>

                <div className="mt-auto">
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-primary">Key Items:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs py-1 px-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Let us provide you with a customized geotechnical solution
            that meets your specific requirements and budget.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <Building2 className="h-5 w-5" />
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}