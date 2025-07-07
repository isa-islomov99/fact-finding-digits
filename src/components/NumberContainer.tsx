import { useCallback, useState } from "react";

// components
import NumberTypeSelector from "./NumberTypeSelector";
import NumberInput from "./NumberInput";
import ResultDisplay from "./ResultDisplay";
import { LoadingSpinner } from "./LoadingSpinner";
import { Card } from "@/shared/ui/card";

// hook
import { useNumberFact } from "@/hooks/useNumberFact";

// type
import type {
  NumberType,
  UserSelectedNumberType,
} from "@/shared/types/numbersType";

const NumberContainer = () => {
  const [selectedType, setSelectedType] = useState<NumberType>("trivia");
  const { showResult, isLoading, result, fetchNumberFact, resetResult } =
    useNumberFact();

  const handleSubmit = useCallback(
    (number: UserSelectedNumberType) => {
      fetchNumberFact(number, selectedType);
    },
    [selectedType]
  );

  if (showResult) {
    return (
      <ResultDisplay
        type={selectedType}
        number={result.number}
        fact={result.fact}
        isLoading={isLoading}
        onBack={resetResult}
      />
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto pt-8 space-y-8">
        <Card className="p-8 text-center shadow-strong">
          <h1 className="text-4xl font-bold mb-4">Numbers API Explorer</h1>
          <p className="text-muted-foreground text-lg">
            Discover fascinating facts about numbers!
          </p>
        </Card>

        <NumberTypeSelector
          selectedType={selectedType}
          onTypeSelect={setSelectedType}
        />

        <NumberInput selectedType={selectedType} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default NumberContainer;
