import React from 'react';

const logos = import.meta.glob('../assets/images/company-logos/*.{png,jpg,jpeg,svg}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const companyLogos = Object.values(logos) as string[];

export function CompanyLogos() {
  if (companyLogos.length === 0) return null;

  return (
    <div className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <p className="text-base font-medium text-muted-foreground uppercase tracking-[0.2em]">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group pause-on-hover">
        <div className="flex">
          {/* Track 1 */}
          <div className="flex shrink-0 animate-marquee items-center gap-48 pr-48">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] h-32 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index}`}
                  // Metallic look: grayscale, high contrast, slight brightness bump. 
                  // Reduced max-h to 20 (80px) to prevent upscaling blur.
                  className="max-h-20 w-auto object-contain grayscale contrast-125 brightness-110 drop-shadow-sm hover:grayscale-0 hover:contrast-100 hover:brightness-100 hover:drop-shadow-none transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless loop) */}
          <div className="flex shrink-0 animate-marquee items-center gap-48 pr-48" aria-hidden="true">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] h-32 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index}`}
                  className="max-h-20 w-auto object-contain grayscale contrast-125 brightness-110 drop-shadow-sm hover:grayscale-0 hover:contrast-100 hover:brightness-100 hover:drop-shadow-none transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient masks for smooth fade effect */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}
