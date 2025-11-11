import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <PageLayout>
      {/* Header with Gradient */}
      <div className="bg-gradient-trust text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm opacity-90">Welcome back,</p>
            <h1 className="text-2xl font-bold">Ahmed</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setShowBalance(!showBalance)}
          >
            {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </Button>
        </div>

        <div className="space-y-2">
          <p className="text-sm opacity-90">Total Balance</p>
          <h2 className="text-4xl font-bold">
            {showBalance ? "AED 45,280.50" : "AED ••••••"}
          </h2>
        </div>

        <div className="flex gap-3 mt-6">
          <Button className="flex-1 bg-white text-primary hover:bg-white/90 h-12">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Send
          </Button>
          <Button className="flex-1 bg-white/20 text-white hover:bg-white/30 h-12">
            <ArrowDownLeft className="w-4 h-4 mr-2" />
            Request
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Quick Actions</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CreditCard className="w-6 h-6 text-primary mb-2" />
            <p className="text-sm font-medium">My Cards</p>
            <p className="text-xs text-muted-foreground">2 Active</p>
          </Card>
          
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-6 h-6 bg-secondary rounded-full mb-2 flex items-center justify-center">
              <span className="text-white text-xs font-bold">$</span>
            </div>
            <p className="text-sm font-medium">Investments</p>
            <p className="text-xs text-muted-foreground">+12.5%</p>
          </Card>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-3 mt-6">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-success rounded-full flex items-center justify-center">
                  <ArrowDownLeft className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Salary Deposit</p>
                  <p className="text-xs text-muted-foreground">Today, 9:30 AM</p>
                </div>
              </div>
              <p className="font-bold text-secondary">+AED 12,500</p>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-card rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Grocery Shopping</p>
                  <p className="text-xs text-muted-foreground">Yesterday, 2:15 PM</p>
                </div>
              </div>
              <p className="font-bold text-foreground">-AED 450.20</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-card rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Netflix Subscription</p>
                  <p className="text-xs text-muted-foreground">Jan 15, 2025</p>
                </div>
              </div>
              <p className="font-bold text-foreground">-AED 39.00</p>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
