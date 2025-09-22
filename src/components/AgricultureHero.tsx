import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Activity, BarChart3 } from "lucide-react";
import agriculturalHeroBg from "@/assets/agricultural-hero-bg.jpg";

const AgricultureHero = () => {
  const statistics = [
    {
      value: "99.7%",
      label: "Accuracy Rate",
      icon: TrendingUp,
      color: "text-accent"
    },
    {
      value: "24/7",
      label: "Monitoring",
      icon: Activity,
      color: "text-success"
    },
    {
      value: "5,000+",
      label: "Fields Analyzed",
      icon: BarChart3,
      color: "text-primary"
    }
  ];

  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${agriculturalHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge 
              variant="secondary" 
              className="bg-primary/20 text-primary-foreground border border-primary/30 backdrop-blur-md text-sm px-4 py-2"
            >
              AI-Powered Precision Agriculture
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-inter">
            Advanced Field Analytics
            <span className="block text-primary">for Smart Farming</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Real-time crop monitoring, spectral analysis, and predictive insights 
            for agricultural technicians and precision farming specialists
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Live Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default AgricultureHero;