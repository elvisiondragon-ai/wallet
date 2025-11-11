import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Zap, Droplet, Phone, Wifi, CreditCard } from "lucide-react";

const billCategories = [
  { id: 1, name: "Electricity", icon: Zap, color: "bg-yellow-500", amount: "AED 340" },
  { id: 2, name: "Water", icon: Droplet, color: "bg-blue-500", amount: "AED 180" },
  { id: 3, name: "Mobile", icon: Phone, color: "bg-green-500", amount: "AED 120" },
  { id: 4, name: "Internet", icon: Wifi, color: "bg-purple-500", amount: "AED 299" },
];

const Pay = () => {
  return (
    <PageLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Payments</h1>
          <p className="text-sm text-muted-foreground">Pay bills and scan QR codes</p>
        </div>

        {/* QR Scanner Card */}
        <Card className="p-6 bg-gradient-trust text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
            <QrCode className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold mb-2">Scan QR to Pay</h3>
          <p className="text-sm opacity-90 mb-4">Quick and secure payment method</p>
          <Button className="bg-white text-primary hover:bg-white/90 w-full">
            Open Scanner
          </Button>
        </Card>

        {/* Bill Categories */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Utility Bills</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {billCategories.map((category) => (
              <Card 
                key={category.id}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className={`w-12 h-12 ${category.color} rounded-xl mb-3 flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-sm mb-1">{category.name}</p>
                <p className="text-xs text-muted-foreground">Due: {category.amount}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Payments */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Recent Payments</h3>
          
          <Card className="divide-y">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">DEWA Bill</p>
                  <p className="text-xs text-muted-foreground">Jan 10, 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">AED 340</p>
                <p className="text-xs text-secondary">Paid</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Etisalat</p>
                  <p className="text-xs text-muted-foreground">Jan 8, 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">AED 120</p>
                <p className="text-xs text-secondary">Paid</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">du Internet</p>
                  <p className="text-xs text-muted-foreground">Jan 5, 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">AED 299</p>
                <p className="text-xs text-secondary">Paid</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Payment Stats */}
        <Card className="p-4 bg-secondary/10 border-secondary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Paid This Month</p>
              <h3 className="text-2xl font-bold text-secondary">AED 1,280</h3>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">8 payments</p>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Pay;
