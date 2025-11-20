import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Calendar, Building2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Metropolitan Tower Complex",
      location: "Downtown Business District",
      year: "2023",
      type: "Commercial High-Rise",
      image: "https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmlzZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1NTM1NDc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comprehensive geotechnical analysis for a 45-story mixed-use development including deep foundation design and settlement monitoring.",
      services: ["Deep Foundation Design", "Soil Analysis", "Settlement Monitoring", "Load Testing"],
      challenges: "Complex urban environment with existing underground utilities and adjacent structures requiring careful analysis."
    },
    {
      title: "River Crossing Bridge",
      location: "Central Valley Region",
      year: "2022",
      type: "Infrastructure",
      image: "https://images.unsplash.com/photo-1598789392666-406be85bc973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NTUzNTQ3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Geotechnical investigation and foundation design for a major river crossing bridge supporting heavy commercial traffic.",
      services: ["River Bed Analysis", "Pier Foundation Design", "Scour Protection", "Environmental Assessment"],
      challenges: "Variable soil conditions across the river span and environmental protection requirements for aquatic habitats."
    },
    {
      title: "Oakwood Residential Development",
      location: "Suburban Growth Area",
      year: "2023",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1695959085986-f1370e18bc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNpbmclMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTUzNTQ3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Site-wide geotechnical evaluation for a 200-unit residential community including slope stability analysis and foundation recommendations.",
      services: ["Site Investigation", "Slope Stability", "Foundation Design", "Drainage Solutions"],
      challenges: "Sloping terrain with varying soil conditions requiring customized foundation solutions for each building phase."
    },
    {
      title: "Industrial Manufacturing Facility",
      location: "Industrial District",
      year: "2022",
      type: "Industrial",
      image: "https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMHNpdGV8ZW58MXx8fHwxNzU1MzU0NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comprehensive geotechnical services for a large-scale manufacturing facility including heavy equipment foundations and environmental compliance.",
      services: ["Heavy Load Analysis", "Environmental Testing", "Foundation Design", "Vibration Analysis"],
      challenges: "Requirements for heavy machinery foundations and strict environmental regulations for industrial development."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise across diverse project types and challenging site conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">{project.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Project Challenges:</h4>
                  <p className="text-sm text-muted-foreground">{project.challenges}</p>
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