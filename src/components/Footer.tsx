import { Separator } from "./ui/separator";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "figma:asset/6493039118a5df3d76ebcf357d45c2202436c679.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="DMK For Engineering & Construction" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Professional engineering and construction services specializing in steel structures 
              and electro-mechanical solutions since 2019.
            </p>
            <div className="flex gap-4">
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Steel Structure Engineering</li>
              <li>Steel Fabrication</li>
              <li>Installation & Assembly</li>
              <li>Mechanical Equipment</li>
              <li>Electrical Equipment</li>
              <li>Turnkey Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <div>New Beni Suef City</div>
                  <div>1st District, Arab Contract St.</div>
                  <div>Egypt</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+2 0100 486 0511</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@dmk-engineering.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/80">
              © {currentYear} DMK For Engineering & Construction. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Professional Licensing
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}