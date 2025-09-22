import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize } from "lucide-react";

const SpectralMap = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Mock data for field zones
  const fieldZones = [
    { id: 1, x: 20, y: 30, width: 60, height: 40, status: "healthy", value: 0.85 },
    { id: 2, x: 85, y: 25, width: 45, height: 35, status: "stress", value: 0.65 },
    { id: 3, x: 25, y: 75, width: 55, height: 30, status: "disease", value: 0.35 },
    { id: 4, x: 85, y: 70, width: 40, height: 25, status: "healthy", value: 0.90 },
    { id: 5, x: 140, y: 45, width: 50, height: 45, status: "stress", value: 0.55 },
  ];

  const getZoneColor = (status: string) => {
    switch (status) {
      case "healthy": return "bg-success";
      case "stress": return "bg-warning";
      case "disease": return "bg-danger";
      default: return "bg-muted";
    }
  };

  const getZoneOpacity = (status: string) => {
    switch (status) {
      case "healthy": return "opacity-80";
      case "stress": return "opacity-70";
      case "disease": return "opacity-90";
      default: return "opacity-50";
    }
  };

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">NDVI Analysis</Badge>
          <Badge variant="outline">Real-time</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.25))}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground min-w-12 text-center">
            {Math.round(zoomLevel * 100)}%
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.25))}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Spectral Map */}
      <div className="relative bg-muted/20 border border-border rounded-lg overflow-hidden">
        <div
          className="relative w-full h-80 bg-gradient-to-br from-secondary/30 to-muted/50"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center" }}
        >
          {/* Field Background */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--success))_0%,_hsl(var(--success)/0.3)_50%,_hsl(var(--muted))_100%)]" />
          
          {/* Field Zones */}
          {fieldZones.map((zone) => (
            <div
              key={zone.id}
              className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10 rounded border border-white/20 ${getZoneColor(zone.status)} ${getZoneOpacity(zone.status)}`}
              style={{
                left: `${zone.x}px`,
                top: `${zone.y}px`,
                width: `${zone.width}px`,
                height: `${zone.height}px`,
              }}
              title={`Zone ${zone.id}: ${zone.status.toUpperCase()} (NDVI: ${zone.value})`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium bg-black/20 rounded">
                {zone.value}
              </div>
            </div>
          ))}
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 py-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-success rounded"></div>
          <span className="text-sm text-muted-foreground">Healthy (0.8-1.0)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-warning rounded"></div>
          <span className="text-sm text-muted-foreground">Stress (0.5-0.8)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-danger rounded"></div>
          <span className="text-sm text-muted-foreground">Disease (0.0-0.5)</span>
        </div>
      </div>
    </div>
  );
};

export default SpectralMap;