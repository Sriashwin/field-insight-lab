import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Download, ChevronDown, AlertTriangle, CheckCircle, Eye } from "lucide-react";
import NavigationFilters from "@/components/NavigationFilters";
import AlertCard from "@/components/AlertCard";
import ChartSection from "@/components/ChartSection";
import SpectralMap from "@/components/SpectralMap";
import SensorDataSection from "@/components/SensorDataSection";

const TechnicianDashboard = () => {
  const [selectedCrop, setSelectedCrop] = useState("corn");
  const [dateRange, setDateRange] = useState("7-days");
  const [location, setLocation] = useState("field-a");

  const alerts = [
    {
      id: 1,
      type: "danger" as const,
      title: "High Risk Zone Detected",
      description: "Pest activity detected in Field A - Zone 3",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      type: "warning" as const,
      title: "Moisture Deficit",
      description: "Soil moisture below optimal levels in Zone 1",
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      type: "success" as const,
      title: "Healthy Growth Pattern",
      description: "NDVI values within optimal range",
      timestamp: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <NavigationFilters
        selectedCrop={selectedCrop}
        setSelectedCrop={setSelectedCrop}
        dateRange={dateRange}
        setDateRange={setDateRange}
        location={location}
        setLocation={setLocation}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {alerts.map((alert, index) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Spectral Map */}
          <Card className="animate-slide-in shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Crop Health Spectral Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SpectralMap />
            </CardContent>
          </Card>

          {/* Right Panel - Charts */}
          <Card className="animate-slide-in shadow-lg" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <span>Analytics Overview</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    CSV
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartSection />
            </CardContent>
          </Card>
        </div>

        {/* Sensor Data Section */}
        <SensorDataSection />
      </div>
    </div>
  );
};

export default TechnicianDashboard;