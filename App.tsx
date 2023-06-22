import { useState } from "react";
import { Button, Text, View } from "react-native";

import "./styles.css";

import calculate from "./helpers/calculate";

interface CalculatorState {
  primaryOperand: number;
  selectedOperation?: UnaryOperation | BinaryOperation;
  secondaryOperand?: number;
}

export default function App() {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    primaryOperand: 0
  });

  /**
   * Changes calculator's state based on an operation change
   * @param operation The operator button pressed
   */
  const handleOperationChange = (operation: BinaryOperation) => {
    setCalculatorState((prevState) => {
      return {
        ...prevState,
        selectedOperation:
          prevState.selectedOperation === operation ? undefined : operation
      };
    });
  };

  /**
   * Changes calculator's state based on a value change
   * @param value The number button pressed
   */
  const handleNumChange = (value: number) => {
    setCalculatorState((prevState) => {
      return prevState.selectedOperation === undefined
        ? { ...prevState, primaryOperand: value }
        : {
            primaryOperand: calculate(
              prevState.primaryOperand,
              prevState.selectedOperation,
              value
            ),
            selectedOperation: undefined,
            secondaryOperand: undefined
          };
    });
  };

  return (
    <View className="items-center justify-center flex-1 bg-slate-500">
      <Text>{calculatorState.primaryOperand}</Text>
      <Button onPress={() => handleOperationChange("add")} title="+" />
      <Button onPress={() => handleOperationChange("subtract")} title="-" />
      <Button onPress={() => handleOperationChange("multiply")} title="x" />
      <Button onPress={() => handleOperationChange("divide")} title="/" />
      <Button onPress={() => handleNumChange(0)} title="0" />
      <Button onPress={() => handleNumChange(1)} title="1" />
      <Button onPress={() => handleNumChange(2)} title="2" />
    </View>
  );
}
