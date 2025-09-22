import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, User, Settings, Bell } from "lucide-react";

const CropIQNavigation = () => {
  const navItems = [
    { label: "Home", href: "#", active: false },
    { label: "Features", href: "#", active: false },
    { label: "Dashboard", href: "#", active: true },
    { label: "Solutions", href: "#", active: false },
    { label: "Resources", href: "#", active: false },
    { label: "About Us", href: "#", active: false },
    { label: "Contact", href: "#", active: false }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground font-inter">
              CropIQ
            </div>
            <Badge variant="secondary" className="ml-2 text-xs">
              v2.1
            </Badge>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-danger rounded-full animate-pulse"></span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>

            <div className="h-6 w-px bg-border mx-2" />

            <Button variant="outline" size="sm">
              Login
            </Button>
            
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <User className="h-4 w-4 mr-2" />
              Technician Portal
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CropIQNavigation;