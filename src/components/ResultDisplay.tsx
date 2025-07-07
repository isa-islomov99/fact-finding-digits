import { memo } from "react";

// components
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { ArrowLeft, RefreshCw } from "lucide-react";

// utils
import {
  getNumberDisplay,
  getTypeLabel,
} from "@/shared/utils/resultDisplayUtils";

// type
import type { NumberType, UserSelectedNumberType } from "@/shared/types/numbersType";

interface ResultDisplayProps {
  number: UserSelectedNumberType;
  type: NumberType;
  fact: string;
  isLoading: boolean;
  onBack: () => void;
}

const ResultDisplay = memo(
  ({ number, type, fact, onBack }: ResultDisplayProps) => {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-2xl mx-auto pt-8 space-y-6">
          <Button onClick={onBack} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Search
          </Button>

          <Card className="p-8 space-y-6 shadow-strong">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Number Fact Result</h1>
              <p className="text-muted-foreground">
                {getNumberDisplay(number, type)}
              </p>
            </div>

            <div className="p-6 rounded-lg space-y-4">
              <h2 className="font-semibold text-lg">Your Input:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Type:</span>{" "}
                  {getTypeLabel(type)}
                </div>
                <div>
                  <span className="font-medium">Number:</span>{" "}
                  {number === "random" ? "Random" : number}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Interesting Fact:</h2>
              <Card className="p-6 border-l-4 border-l-primary">
                <p className="text-lg leading-relaxed">{fact}</p>
              </Card>
            </div>

            <div className="flex justify-center space-x-4">
              <Button onClick={onBack}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Another
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
);

export default ResultDisplay;
