import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { Cpu, Shield, Rocket, Users, Globe, BarChart3 } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate processes and drive intelligent decision-making.",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols protecting your data with advanced encryption and monitoring systems.",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized performance delivering results at unprecedented speeds with minimal resource consumption.",
      gradient: "from-orange-400 to-red-400"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools enabling teams to work together efficiently across any location.",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scale",
      description: "Infrastructure designed to scale globally, supporting millions of users with consistent performance.",
      gradient: "from-teal-400 to-blue-400"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights providing actionable data to drive business growth.",
      gradient: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the innovative features that make ASK the perfect choice for modern businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group h-full">
                <CardHeader>
                  <div className={`mb-4 w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl md:text-3xl text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who trust ASK to power their operations with next-generation technology solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-300 hover:to-gray-500 text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}