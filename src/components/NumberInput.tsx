// components
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Card } from "@/shared/ui/card";
import { Shuffle, Hash } from "lucide-react";

// hook
import { useNumberInput } from "@/hooks/useNumberInput";

// utils
import { getPlaceholder, getInputType } from "@/shared/utils/numberInputUtils";

// type
import type { NumberInputProps } from "@/shared/types/numbersType";

const NumberInput = ({ selectedType, onSubmit }: NumberInputProps) => {
  const {
    inputValue,
    error,
    handleRandomSubmit,
    handleManualSubmit,
    handleInputChange,
  } = useNumberInput(selectedType, onSubmit);

  return (
    <Card className="p-6 space-y-4 shadow-soft">
      <div className="text-center space-y-4">
        <Button size="lg" onClick={handleRandomSubmit} className="w-full">
          <Shuffle className="mr-2 h-5 w-5" />
          Get Random{" "}
          {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Fact
        </Button>

        <div className="flex items-center space-x-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-muted-foreground text-sm">OR</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="space-y-3">
          <div className="flex space-x-2">
            <Input
              type={getInputType(selectedType)}
              placeholder={getPlaceholder(selectedType)}
              value={inputValue}
              onChange={handleInputChange}
              className="flex-1"
              onKeyUp={(e) => e.key === "Enter" && handleManualSubmit()}
            />
            <Button onClick={handleManualSubmit}>
              <Hash className="h-4 w-4" />
            </Button>
          </div>

          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default NumberInput;
