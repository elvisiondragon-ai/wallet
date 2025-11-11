import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react";

const portfolioAssets = [
  { id: 1, name: "Tech Stocks", value: "AED 15,420", change: "+12.5%", positive: true },
  { id: 2, name: "Mutual Funds", value: "AED 8,750", change: "+8.2%", positive: true },
  { id: 3, name: "Gold", value: "AED 5,200", change: "-2.1%", positive: false },
  { id: 4, name: "Crypto", value: "AED 3,180", change: "+18.7%", positive: true },
];

const Investment = () => {
  return (
    <PageLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Investment Portfolio</h1>
          <p className="text-sm text-muted-foreground">Track and grow your wealth</p>
        </div>

        {/* Total Portfolio Value */}
        <Card className="p-6 bg-gradient-success text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90">Total Portfolio Value</p>
              <h2 className="text-3xl font-bold mt-1">AED 32,550</h2>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <PieChart className="w-8 h-8" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+9.8% This Month</span>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-14 bg-primary hover:bg-primary/90">
            <DollarSign className="w-5 h-5 mr-2" />
            Buy Assets
          </Button>
          <Button variant="outline" className="h-14">
            <TrendingDown className="w-5 h-5 mr-2" />
            Sell Assets
          </Button>
        </div>

        {/* Portfolio Breakdown */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Your Assets</h3>
          
          <Card className="divide-y">
            {portfolioAssets.map((asset) => (
              <div 
                key={asset.id}
                className="p-4 hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      asset.positive ? 'bg-secondary/10' : 'bg-destructive/10'
                    }`}>
                      {asset.positive ? (
                        <TrendingUp className={`w-5 h-5 text-secondary`} />
                      ) : (
                        <TrendingDown className={`w-5 h-5 text-destructive`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{asset.name}</p>
                      <p className={`text-xs ${
                        asset.positive ? 'text-secondary' : 'text-destructive'
                      }`}>
                        {asset.change}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">{asset.value}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Investment Performance Chart Placeholder */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Performance (Last 6 Months)</h3>
          <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Chart visualization</p>
              <p className="text-xs text-muted-foreground">Performance tracking</p>
            </div>
          </div>
        </Card>

        {/* Investment Tips */}
        <Card className="p-4 bg-accent/20 border-accent">
          <h4 className="font-semibold text-sm mb-2">💡 Investment Tip</h4>
          <p className="text-xs text-muted-foreground">
            Diversify your portfolio across different asset classes to minimize risk and maximize returns over time.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Investment;
