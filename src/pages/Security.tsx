import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Shield, Lock, Fingerprint, Bell, CreditCard, User, ChevronRight } from "lucide-react";
import { useState } from "react";

const Security = () => {
  const [biometric, setBiometric] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <PageLayout>
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-primary text-white text-xl">
                AH
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Ahmed Hassan</h2>
              <p className="text-sm text-muted-foreground">ahmed.hassan@email.com</p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-muted rounded-lg">
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-xs text-muted-foreground">Active Cards</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <p className="text-2xl font-bold text-secondary">4</p>
              <p className="text-xs text-muted-foreground">Linked Accounts</p>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Security Settings</h3>
          
          <Card className="divide-y">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Fingerprint className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Biometric Login</p>
                  <p className="text-xs text-muted-foreground">Fingerprint & Face ID</p>
                </div>
              </div>
              <Switch checked={biometric} onCheckedChange={setBiometric} />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Two-Factor Auth</p>
                  <p className="text-xs text-muted-foreground">Extra security layer</p>
                </div>
              </div>
              <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/50 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm">Push Notifications</p>
                  <p className="text-xs text-muted-foreground">Transaction alerts</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </Card>
        </div>

        {/* Account Management */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Account Management</h3>
          
          <Card className="divide-y">
            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-muted-foreground" />
                <p className="font-medium text-sm">Change Password</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <p className="font-medium text-sm">Manage Cards</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-muted-foreground" />
                <p className="font-medium text-sm">Personal Information</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Card Controls */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Card Controls</h3>
          
          <Card className="p-4 bg-gradient-card text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm opacity-90">Primary Card</p>
                <p className="text-lg font-bold mt-1">•••• 4582</p>
              </div>
              <CreditCard className="w-6 h-6" />
            </div>
            <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
              Freeze Card
            </Button>
          </Card>
        </div>

        {/* Security Score */}
        <Card className="p-4 bg-secondary/10 border-secondary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Security Score</p>
              <h3 className="text-2xl font-bold text-secondary">Excellent</h3>
            </div>
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-secondary">95</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Your account is well protected with multiple security layers
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Security;
