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
      return primaryOperand + secondaryOperand;
    }
    case "subtract": {
      return primaryOperand - secondaryOperand;
    }
    case "multiply": {
      return primaryOperand * secondaryOperand;
    }
    case "divide": {
      return primaryOperand / secondaryOperand;
    }
  }
}
