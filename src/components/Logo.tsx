import { Compass, Leaf, Recycle } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  onClick?: () => void;
}

export function Logo({ className = "", size = "md", showText = true, onClick }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: "h-8",
      icon: "w-4 h-4",
      text: "text-sm",
      compass: "w-6 h-6",
      leaf: "w-3 h-3"
    },
    md: {
      container: "h-10",
      icon: "w-5 h-5",
      text: "text-lg",
      compass: "w-8 h-8",
      leaf: "w-4 h-4"
    },
    lg: {
      container: "h-16",
      icon: "w-8 h-8",
      text: "text-2xl",
      compass: "w-12 h-12",
      leaf: "w-6 h-6"
    }
  };

  const sizes = sizeClasses[size];

  return (
    <div 
      className={`flex items-center gap-2 ${sizes.container} ${className} ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      onClick={onClick}
    >
      {/* Logo Icon */}
      <div className="relative flex items-center justify-center">
        {/* Compass base - primary element */}
        <div className="relative">
          <Compass 
            className={`${sizes.compass} text-emerald-600 dark:text-emerald-400 transition-colors`} 
            strokeWidth={1.5}
          />
          
          {/* Sustainability accents */}
          <div className="absolute -top-1 -right-1">
            <Leaf 
              className={`${sizes.leaf} text-green-500 dark:text-green-400 animate-pulse`}
              strokeWidth={2}
            />
          </div>
          
          {/* ESG accent - recycling symbol */}
          <div className="absolute -bottom-1 -left-1">
            <Recycle 
              className={`${sizes.leaf} text-teal-600 dark:text-teal-400 opacity-70`}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-semibold text-foreground ${sizes.text} tracking-tight`}>
            <span className="text-emerald-600 dark:text-emerald-400">Sustainable</span>
            <span className="text-muted-foreground mx-1">·</span>
            <span className="text-foreground">Compass</span>
          </span>
          {size === "lg" && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium tracking-wide uppercase opacity-80">
              ESG Analytics Platform
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// Standalone icon version for favicons, small spaces, etc.
export function LogoIcon({ className = "", size = "md" }: Omit<LogoProps, "showText">) {
  return <Logo className={className} size={size} showText={false} />;
}