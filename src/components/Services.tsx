import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Hammer, Building2, Cog, Zap, Gauge, Wrench } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Steel Structure Engineering",
      description: "Comprehensive design and engineering services for steel structures tailored to your project requirements.",
      features: ["Structural design", "Load calculations", "Technical drawings", "Engineering analysis"]
    },
    {
      icon: <Hammer className="h-8 w-8 text-primary" />,
      title: "Steel Fabrication",
      description: "High-quality steel fabrication services for small to medium-sized projects using advanced equipment.",
      features: ["Custom fabrication", "Precision cutting", "Welding services", "Quality control"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Installation & Assembly",
      description: "Professional installation and assembly of steel structures with experienced technical teams.",
      features: ["On-site installation", "Structure assembly", "Safety compliance", "Project management"]
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "Mechanical Equipment",
      description: "Modification and replacement of mechanical equipment for industrial and commercial applications.",
      features: ["Equipment modification", "Component replacement", "Maintenance services", "Performance optimization"]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Electrical Equipment",
      description: "Expert electrical equipment services including installation, modification, and replacement.",
      features: ["Electrical installation", "System upgrades", "Equipment replacement", "Safety testing"]
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: "Turnkey Solutions",
      description: "Complete turnkey electro-mechanical solutions from design to commissioning.",
      features: ["Full project management", "Integrated solutions", "Commissioning support", "After-sales service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive engineering and construction services for industrial and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdlbGRpbmd8ZW58MXx8fHwxNzU1MzU0NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Steel welding and fabrication"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Expert Fabrication</h3>
                <p>State-of-the-art equipment for precision steel fabrication</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGZhYnJpY2F0aW9ufGVufDF8fHx8MTc1NTM1NDY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Industrial construction"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Quality Installation</h3>
                <p>Professional installation services for all project types</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}