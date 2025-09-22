import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Leaf, Calendar, MapPin } from "lucide-react";

interface NavigationFiltersProps {
  selectedCrop: string;
  setSelectedCrop: (value: string) => void;
  dateRange: string;
  setDateRange: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
}

const NavigationFilters = ({
  selectedCrop,
  setSelectedCrop,
  dateRange,
  setDateRange,
  location,
  setLocation,
}: NavigationFiltersProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground font-inter">
              Field Analysis Dashboard
            </h2>
            <Badge variant="secondary" className="bg-success/20 text-success-foreground border-success/30">
              Real-time Monitoring
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger className="w-36 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Crop Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corn">🌽 Corn</SelectItem>
                  <SelectItem value="wheat">🌾 Wheat</SelectItem>
                  <SelectItem value="soybean">🫘 Soybean</SelectItem>
                  <SelectItem value="rice">🌾 Rice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-36 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="7-days">Last 7 Days</SelectItem>
                  <SelectItem value="30-days">Last 30 Days</SelectItem>
                  <SelectItem value="90-days">Last 90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-40 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Field Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="field-a">🗺️ Field A - North</SelectItem>
                  <SelectItem value="field-b">🗺️ Field B - South</SelectItem>
                  <SelectItem value="field-c">🗺️ Field C - East</SelectItem>
                  <SelectItem value="all-fields">🌐 All Fields</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationFilters;