import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: number;
  type: "success" | "warning" | "danger";
  title: string;
  description: string;
  timestamp: string;
}

interface AlertCardProps {
  alert: Alert;
  className?: string;
  style?: React.CSSProperties;
}

const AlertCard = ({ alert, className, style }: AlertCardProps) => {
  const getAlertConfig = (type: string) => {
    switch (type) {
      case "success":
        return {
          icon: CheckCircle,
          bgClass: "bg-success/10 border-success/20 hover:bg-success/15",
          iconClass: "text-success",
          badgeVariant: "secondary" as const,
          badgeClass: "bg-success/20 text-success-foreground border-success/30"
        };
      case "warning":
        return {
          icon: AlertCircle,
          bgClass: "bg-warning/10 border-warning/20 hover:bg-warning/15",
          iconClass: "text-warning",
          badgeVariant: "secondary" as const,
          badgeClass: "bg-warning/20 text-warning-foreground border-warning/30"
        };
      case "danger":
        return {
          icon: AlertTriangle,
          bgClass: "bg-danger/10 border-danger/20 hover:bg-danger/15 animate-pulse-glow",
          iconClass: "text-danger",
          badgeVariant: "destructive" as const,
          badgeClass: "bg-danger/20 text-danger-foreground border-danger/30"
        };
      default:
        return {
          icon: AlertCircle,
          bgClass: "bg-muted",
          iconClass: "text-muted-foreground",
          badgeVariant: "secondary" as const,
          badgeClass: ""
        };
    }
  };

  const config = getAlertConfig(alert.type);
  const Icon = config.icon;

  return (
    <Card
      className={cn(
        "transition-all duration-300 cursor-pointer hover:shadow-lg border",
        config.bgClass,
        className
      )}
      style={style}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Icon className={cn("h-6 w-6", config.iconClass)} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground leading-tight">
                {alert.title}
              </h3>
              <Badge
                variant={config.badgeVariant}
                className={cn("text-xs shrink-0", config.badgeClass)}
              >
                {alert.type.toUpperCase()}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {alert.description}
            </p>
            <p className="text-xs text-muted-foreground">
              {alert.timestamp}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertCard;