import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus } from "lucide-react";

const recentRecipients = [
  { id: 1, name: "Sarah Johnson", initials: "SJ", lastAmount: "AED 500" },
  { id: 2, name: "Mohammed Ali", initials: "MA", lastAmount: "AED 1,200" },
  { id: 3, name: "Fatima Hassan", initials: "FH", lastAmount: "AED 750" },
  { id: 4, name: "David Chen", initials: "DC", lastAmount: "AED 2,000" },
];

const Transfer = () => {
  return (
    <PageLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Transfer Money</h1>
          <p className="text-sm text-muted-foreground">Send money to anyone, instantly</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search contacts or enter phone/email" 
            className="pl-10 h-12"
          />
        </div>

        {/* Quick Transfer Options */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold">🏦</span>
            </div>
            <p className="text-xs font-medium">To Bank</p>
          </Card>
          
          <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-secondary rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold">👤</span>
            </div>
            <p className="text-xs font-medium">P2P</p>
          </Card>
          
          <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-foreground font-bold">🌍</span>
            </div>
            <p className="text-xs font-medium">International</p>
          </Card>
        </div>

        {/* Recent Recipients */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Recipients</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              <Plus className="w-4 h-4 mr-1" />
              Add New
            </Button>
          </div>

          <Card className="divide-y">
            {recentRecipients.map((recipient) => (
              <div 
                key={recipient.id}
                className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {recipient.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{recipient.name}</p>
                    <p className="text-xs text-muted-foreground">Last sent: {recipient.lastAmount}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Send
                </Button>
              </div>
            ))}
          </Card>
        </div>

        {/* Transfer Stats */}
        <Card className="p-4 bg-gradient-trust text-white">
          <p className="text-sm opacity-90 mb-1">Monthly Transfer Volume</p>
          <h3 className="text-2xl font-bold">AED 25,480</h3>
          <p className="text-xs opacity-75 mt-2">15 transactions this month</p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Transfer;
