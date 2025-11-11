import { NavLink } from "@/components/NavLink";
import { Home, ArrowLeftRight, QrCode, TrendingUp, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/transfer", icon: ArrowLeftRight, label: "Transfer" },
  { to: "/pay", icon: QrCode, label: "Pay" },
  { to: "/investment", icon: TrendingUp, label: "Investment" },
  { to: "/security", icon: Shield, label: "Security" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-[60px]"
            activeClassName="text-primary bg-accent/20"
          >
            {({ isActive }) => (
              <>
                <item.icon 
                  className={cn(
                    "w-5 h-5 transition-all duration-200",
                    isActive ? "text-primary scale-110" : "text-muted-foreground"
                  )} 
                />
                <span className={cn(
                  "text-[10px] font-medium transition-all duration-200",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
