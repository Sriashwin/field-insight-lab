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
    <Card className="border-0 rounded-none shadow-md bg-card/95 backdrop-blur-sm">
      <CardContent className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-foreground">
              Technician Dashboard
            </h1>
            <Badge variant="secondary" className="ml-2">
              Live Analysis
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Crop Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corn">Corn</SelectItem>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="soybean">Soybean</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="7-days">7 Days</SelectItem>
                  <SelectItem value="30-days">30 Days</SelectItem>
                  <SelectItem value="90-days">90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="field-a">Field A</SelectItem>
                  <SelectItem value="field-b">Field B</SelectItem>
                  <SelectItem value="field-c">Field C</SelectItem>
                  <SelectItem value="all-fields">All Fields</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NavigationFilters;