import { useState } from "react";
import { Text, View } from "react-native";

import "./styles.css";

import calculate from "./helpers/calculate";

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
    <View className="grid w-96 grid-cols-4 grid-rows-6 bg-black">
      <Text className="col-span-4 row-span-2 h-fit w-fit self-end justify-self-end p-8 font-sans text-8xl font-thin text-white">
        {calculatorState[`${displayedOperand}Operand`]}
      </Text>
      <Button onPress={() => {}} title="C" backgroundColor="bg-light-gray" />
      <Button onPress={() => {}} title="+/-" backgroundColor="bg-light-gray" />
      <Button onPress={() => {}} title="%" backgroundColor="bg-light-gray" />
      <Button
        onPress={() => handleOperationChange("divide")}
        title="÷"
        backgroundColor="bg-orange"
      />
      <Button
        onPress={() => handleNumChange(7)}
        title="7"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleNumChange(8)}
        title="8"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleNumChange(8)}
        title="9"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleOperationChange("multiply")}
        title="x"
        backgroundColor="bg-orange"
      />
      <Button
        onPress={() => handleNumChange(4)}
        title="4"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleNumChange(5)}
        title="5"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleNumChange(6)}
        title="6"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleOperationChange("subtract")}
        title="-"
        backgroundColor="bg-orange"
      />
      <Button
        onPress={() => handleNumChange(1)}
        title="1"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleNumChange(2)}
        title="2"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleNumChange(3)}
        title="3"
        backgroundColor="bg-dark-gray"
      />
      <Button
        onPress={() => handleOperationChange("add")}
        title="+"
        backgroundColor="bg-orange"
      />
      <Button
        onPress={() => handleNumChange(0)}
        title="0"
        backgroundColor="bg-dark-gray"
        additionalClasses="col-span-2 w-full"
      />
      <Button
        onPress={() => handleEquals()}
        title="="
        backgroundColor="bg-orange"
      />
    </View>
  );
}
