import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const ChartSection = () => {
  const [activeTab, setActiveTab] = useState("ndvi");

  // Mock data
  const ndviData = [
    { date: "Jan", value: 0.75, optimal: 0.8 },
    { date: "Feb", value: 0.68, optimal: 0.8 },
    { date: "Mar", value: 0.82, optimal: 0.8 },
    { date: "Apr", value: 0.85, optimal: 0.8 },
    { date: "May", value: 0.79, optimal: 0.8 },
    { date: "Jun", value: 0.73, optimal: 0.8 },
    { date: "Jul", value: 0.88, optimal: 0.8 },
  ];

  const soilMoistureData = [
    { date: "Jan", moisture: 45, temperature: 12 },
    { date: "Feb", moisture: 38, temperature: 15 },
    { date: "Mar", moisture: 52, temperature: 18 },
    { date: "Apr", moisture: 48, temperature: 22 },
    { date: "May", moisture: 35, temperature: 25 },
    { date: "Jun", moisture: 28, temperature: 28 },
    { date: "Jul", moisture: 42, temperature: 30 },
  ];

  const pestRiskData = [
    { category: "Low Risk", value: 65, color: "hsl(var(--success))" },
    { category: "Medium Risk", value: 25, color: "hsl(var(--warning))" },
    { category: "High Risk", value: 10, color: "hsl(var(--danger))" },
  ];

  const productivityData = [
    { zone: "Zone 1", yield: 85, efficiency: 92 },
    { zone: "Zone 2", yield: 72, efficiency: 78 },
    { zone: "Zone 3", yield: 45, efficiency: 55 },
    { zone: "Zone 4", yield: 88, efficiency: 95 },
    { zone: "Zone 5", yield: 67, efficiency: 82 },
  ];

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ndvi">NDVI Trends</TabsTrigger>
          <TabsTrigger value="soil">Soil Data</TabsTrigger>
          <TabsTrigger value="pest">Pest Risk</TabsTrigger>
          <TabsTrigger value="productivity">Yield</TabsTrigger>
        </TabsList>

        <TabsContent value="ndvi" className="space-y-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ndviData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 1]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="optimal"
                  stroke="hsl(var(--success))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="soil" className="space-y-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={soilMoistureData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="moisture"
                  stackId="1"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="temperature"
                  stackId="2"
                  stroke="hsl(var(--chart-4))"
                  fill="hsl(var(--chart-4))"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="pest" className="space-y-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pestRiskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pestRiskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="productivity" className="space-y-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="zone" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Bar dataKey="yield" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="efficiency" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChartSection;