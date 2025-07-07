import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

// types
import type { NumberType } from "@/shared/types/numbersType";
interface NumberTypeSelectorProps {
  selectedType: NumberType;
  onTypeSelect: (type: NumberType) => void;
}

const types: { value: NumberType; label: string; description: string }[] = [
  {
    value: "trivia",
    label: "Trivia",
    description: "Fun facts about numbers",
  },
  { value: "math", label: "Math", description: "Mathematical properties" },
  { value: "date", label: "Date", description: "Historical events by date" },
  { value: "year", label: "Year", description: "Historical events by year" },
];

const NumberTypeSelector = ({
  selectedType,
  onTypeSelect,
}: NumberTypeSelectorProps) => {
  return (
    <Card className="p-6 shadow-soft">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Choose Information Type
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {types.map((type) => (
          <Button
            key={type.value}
            variant={selectedType === type.value ? "default" : "secondary"}
            className="h-auto p-4 flex-col space-y-2"
            onClick={() => onTypeSelect(type.value)}
          >
            <span className="font-semibold">{type.label}</span>
            <span className="text-xs opacity-80">{type.description}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default NumberTypeSelector;
