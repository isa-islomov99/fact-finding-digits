import { Card } from "@/shared/ui/card";

export const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="p-8 text-center space-y-4 shadow-strong">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground">Fetching your number fact...</p>
      </Card>
    </div>
  );
};
