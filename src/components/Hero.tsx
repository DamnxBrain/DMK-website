import { Button } from "./ui/button";
import { ArrowRight, Award, Users, CheckCircle, ChevronDown } from "lucide-react";
import companyVideo from "../assets/images/dmk/hero/companybackground.mp4";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const typewriterVariants: Variants = {
    hidden: { width: 0, borderRight: "2px solid rgba(255,255,255,0)" },
    visible: {
      width: "100%",
      borderRight: "2px solid rgba(255,255,255,0.75)",
      transition: {
        width: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3
        },
        borderRight: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={companyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 bg-[rgba(0,0,0,0.7)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <motion.h1
              variants={typewriterVariants}
              className="text-2xl sm:text-4xl md:text-6xl text-white font-bold overflow-hidden whitespace-nowrap pr-1"
            >
              DMK For Engineering & Construction
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 inline-block block">
            <motion.div
              variants={typewriterVariants}
              className="overflow-hidden whitespace-nowrap text-xl md:text-2xl text-white/90 pr-1"
            >
              Engineering Excellence Since 2019
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="border-white text-white hover:bg-white hover:text-black bg-transparent transition-all hover:scale-105"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white group cursor-default">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">6+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToServices}
        >
          <ChevronDown className="h-10 w-10 opacity-80 hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.div>
    </section>
  );
}