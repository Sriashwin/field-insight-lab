import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Thermometer, Droplets, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const SensorDataSection = () => {
  const [openSections, setOpenSections] = useState<string[]>(["temperature"]);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sensorData = [
    {
      id: "temperature",
      title: "Temperature Sensors",
      icon: Thermometer,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      borderColor: "border-chart-4/20",
      data: [
        { sensor: "TMP-001", location: "Zone 1", value: "24.5°C", status: "normal", timestamp: "2 min ago" },
        { sensor: "TMP-002", location: "Zone 2", value: "26.1°C", status: "normal", timestamp: "2 min ago" },
        { sensor: "TMP-003", location: "Zone 3", value: "28.7°C", status: "warning", timestamp: "3 min ago" },
        { sensor: "TMP-004", location: "Zone 4", value: "23.9°C", status: "normal", timestamp: "2 min ago" },
      ]
    },
    {
      id: "humidity",
      title: "Humidity & Moisture",
      icon: Droplets,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
      borderColor: "border-chart-2/20",
      data: [
        { sensor: "HUM-001", location: "Zone 1", value: "65%", status: "normal", timestamp: "1 min ago" },
        { sensor: "HUM-002", location: "Zone 2", value: "42%", status: "danger", timestamp: "2 min ago" },
        { sensor: "HUM-003", location: "Zone 3", value: "58%", status: "normal", timestamp: "1 min ago" },
        { sensor: "HUM-004", location: "Zone 4", value: "71%", status: "normal", timestamp: "3 min ago" },
      ]
    },
    {
      id: "soil",
      title: "Soil pH & Nutrients",
      icon: Activity,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      borderColor: "border-chart-3/20",
      data: [
        { sensor: "PH-001", location: "Zone 1", value: "6.8 pH", status: "normal", timestamp: "15 min ago" },
        { sensor: "PH-002", location: "Zone 2", value: "7.2 pH", status: "normal", timestamp: "15 min ago" },
        { sensor: "PH-003", location: "Zone 3", value: "5.9 pH", status: "warning", timestamp: "18 min ago" },
        { sensor: "NPK-001", location: "Zone 1", value: "N:85 ppm", status: "normal", timestamp: "20 min ago" },
      ]
    },
    {
      id: "power",
      title: "Power & Connectivity",
      icon: Zap,
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      borderColor: "border-chart-5/20",
      data: [
        { sensor: "PWR-001", location: "Gateway", value: "92%", status: "normal", timestamp: "5 min ago" },
        { sensor: "PWR-002", location: "Repeater 1", value: "78%", status: "warning", timestamp: "5 min ago" },
        { sensor: "PWR-003", location: "Repeater 2", value: "95%", status: "normal", timestamp: "5 min ago" },
        { sensor: "SIG-001", location: "Network", value: "-45 dBm", status: "normal", timestamp: "1 min ago" },
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return <Badge variant="secondary" className="bg-success/20 text-success-foreground border-success/30">Normal</Badge>;
      case "warning":
        return <Badge variant="secondary" className="bg-warning/20 text-warning-foreground border-warning/30">Warning</Badge>;
      case "danger":
        return <Badge variant="destructive" className="bg-danger/20 text-danger-foreground border-danger/30">Alert</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card className="animate-fade-in shadow-lg" style={{ animationDelay: "0.4s" }}>
      <CardHeader>
        <CardTitle>Detailed Sensor Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sensorData.map((section) => {
          const Icon = section.icon;
          const isOpen = openSections.includes(section.id);
          
          return (
            <Collapsible
              key={section.id}
              open={isOpen}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger className="w-full">
                <div className={cn(
                  "flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:shadow-md",
                  section.bgColor,
                  section.borderColor,
                  isOpen && "shadow-md"
                )}>
                  <div className="flex items-center gap-3">
                    <Icon className={cn("h-5 w-5", section.color)} />
                    <span className="font-medium">{section.title}</span>
                    <Badge variant="outline" className="text-xs">
                      {section.data.length} sensors
                    </Badge>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isOpen && "transform rotate-180"
                    )}
                  />
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                  {section.data.map((sensor, index) => (
                    <div
                      key={sensor.sensor}
                      className="flex items-center justify-between p-3 bg-card border border-border rounded-lg transition-all duration-200 hover:shadow-sm animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{sensor.sensor}</span>
                          {getStatusBadge(sensor.status)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {sensor.location} • {sensor.timestamp}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">
                          {sensor.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SensorDataSection;