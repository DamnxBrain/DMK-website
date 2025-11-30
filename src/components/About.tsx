import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { CompanyLogos } from "./CompanyLogos";
import aboutImage from "../assets/images/dmk/architectural-steel-curved.jpg";

export function About() {
  const achievements = [
    "Steel Structure Fabrication",
    "Installation & Assembly",
    "Mechanical Equipment Services",
    "Electrical Equipment Services",
    "Instrumentation Equipment",
    "Turnkey Electro-Mechanical Solutions"
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and accuracy."
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "Quality",
      description: "We deliver high-quality engineering solutions that exceed industry standards."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "Committed to engineering excellence in every aspect of our work since 2019."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground mb-6">
              DMK specializes in engineering, fabricating, and installing steel structures
              for small to medium-sized projects. Our expertise extends to modifying
              and replacing mechanical, electrical, and instrumentation equipment, as
              well as delivering comprehensive turnkey electro-mechanical solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src={aboutImage}
              alt="Steel fabrication workshop"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To provide exceptional engineering and construction services that build lasting relationships with our clients through quality workmanship and professional excellence.
          </p>
        </div>

        {/* Company Logos Marquee */}
        <div className="mb-16">
          <CompanyLogos />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary/5 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-primary mb-2">2</div>
              <div className="text-muted-foreground">Office Locations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}