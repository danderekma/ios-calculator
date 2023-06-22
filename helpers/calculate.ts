import { format, add, subtract } from "mathjs";

/**
 * Calculates result of both unary and binary operations
 * @param primaryOperand First operand
 * @param operation Operation conducted
 * @param secondaryOperand Second operand
 * @returns Result of operation
 */
export default function calculate(
  primaryOperand: number,
  operation: UnaryOperation | BinaryOperation,
  secondaryOperand: number
): number {
  switch (operation) {
    case "negate": {
      return -primaryOperand;
    }
    case "percent": {
      return primaryOperand / 100;
    }
    case "add": {
      return +format(add(primaryOperand, secondaryOperand), { precision: 14 });
    }
    case "subtract": {
      return +format(subtract(primaryOperand, secondaryOperand), {
        precision: 14
      });
    }
    case "multiply": {
      return primaryOperand * secondaryOperand;
    }
    case "divide": {
      return primaryOperand / secondaryOperand;
    }
  }
}
