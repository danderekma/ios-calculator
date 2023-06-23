import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import "./styles.css";

import calculate from "./helpers/calculate";
Button;
import Button from "./components/Button";

interface CalculatorState {
  primaryOperand: number;
  selectedOperation?: UnaryOperation | BinaryOperation;
  secondaryOperand?: number;
}

export default function App() {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    primaryOperand: 0
  });
  const [displayedOperand, setDisplayedOperand] = useState<
    "primary" | "secondary"
  >("primary");

  /**
   * Changes calculator's state based on an operation change
   * @param operation The operator button pressed
   */
  const handleOperationChange = (operation: BinaryOperation) => {
    setCalculatorState((prevState) => {
      if (
        prevState.primaryOperand !== undefined &&
        prevState.selectedOperation !== undefined &&
        prevState.secondaryOperand !== undefined
      ) {
        setDisplayedOperand("primary");
        return {
          primaryOperand: calculate(
            prevState.primaryOperand,
            prevState.selectedOperation,
            prevState.secondaryOperand
          ),
          selectedOperation: operation,
          secondaryOperand: undefined
        };
      } else {
        return { ...prevState, selectedOperation: operation };
      }
    });
  };

  /**
   * Changes calculator's state based on a value change
   * @param value The number button pressed
   */
  const handleNumChange = (value: number) => {
    setCalculatorState((prevState) => {
      if (prevState.selectedOperation === undefined) {
        if (prevState.primaryOperand === 0) {
          return { ...prevState, primaryOperand: value };
        } else {
          return {
            ...prevState,
            primaryOperand: +(
              prevState.primaryOperand.toString() + value.toString()
            )
          };
        }
      } else {
        setDisplayedOperand("secondary");
        return {
          ...prevState,
          secondaryOperand: +(prevState.secondaryOperand === undefined
            ? value.toString()
            : prevState.secondaryOperand.toString() + value.toString())
        };
      }
    });
  };

  const handleEquals = () => {
    setCalculatorState((prevState) => {
      if (
        prevState.selectedOperation !== undefined &&
        prevState.secondaryOperand !== undefined
      ) {
        setDisplayedOperand("primary");
        return {
          primaryOperand: calculate(
            prevState.primaryOperand,
            prevState.selectedOperation,
            prevState.secondaryOperand
          ),
          selectedOperation: undefined,
          secondaryOperand: undefined
        };
      } else {
        return prevState;
      }
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="font-sans text-8xl font-thin text-white">
        {calculatorState[`${displayedOperand}Operand`]}
      </Text>
      <Button
        onPress={() => handleOperationChange("add")}
        title="+"
        color="orange"
      />
      <Button
        onPress={() => handleOperationChange("subtract")}
        title="-"
        color="orange"
      />
      <Button
        onPress={() => handleOperationChange("multiply")}
        title="x"
        color="orange"
      />
      <Button
        onPress={() => handleOperationChange("divide")}
        title="÷"
        color="orange"
      />
      <Button onPress={() => handleEquals()} title="=" color="orange" />
      <Button onPress={() => handleNumChange(0)} title="0" color="dark-gray" />
      <Button onPress={() => handleNumChange(1)} title="1" color="dark-gray" />
      <Button onPress={() => handleNumChange(2)} title="2" color="dark-gray" />
      <Button onPress={() => handleNumChange(3)} title="3" color="dark-gray" />
      <Button onPress={() => handleNumChange(4)} title="4" color="dark-gray" />
      <Button onPress={() => handleNumChange(5)} title="5" color="dark-gray" />
      <Button onPress={() => handleNumChange(6)} title="6" color="dark-gray" />
      <Button onPress={() => handleNumChange(7)} title="7" color="dark-gray" />
      <Button onPress={() => handleNumChange(8)} title="8" color="dark-gray" />
      <Button onPress={() => handleNumChange(8)} title="9" color="dark-gray" />
    </View>
  );
}
