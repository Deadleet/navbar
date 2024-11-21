'use client';
import React, { useState } from 'react';
import styles from './calculator.module.css';  // Importation du fichier CSS

enum Operation {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '×',
  DIVIDE = '÷',
}

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<Operation | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  };

  const handleOperationChange = (op: Operation) => {
    setOperation(op);
  };

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult(null);
      return;
    }

    switch (operation) {
      case Operation.ADD:
        setResult(n1 + n2);
        break;
      case Operation.SUBTRACT:
        setResult(n1 - n2);
        break;
      case Operation.MULTIPLY:
        setResult(n1 * n2);
        break;
      case Operation.DIVIDE:
        if (n2 === 0) {
          setResult(null);
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <h1 className={styles.h1}>Calculatrice</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => handleNumberChange(e, setNum1)}
        placeholder="Premier nombre"
        className={styles.calculatorInput}
      />
      <div className={styles.operations}>
        <button className={styles.operationButton} onClick={() => handleOperationChange(Operation.ADD)}>+</button>
        <button className={styles.operationButton} onClick={() => handleOperationChange(Operation.SUBTRACT)}>-</button>
        <button className={styles.operationButton} onClick={() => handleOperationChange(Operation.MULTIPLY)}>×</button>
        <button className={styles.operationButton} onClick={() => handleOperationChange(Operation.DIVIDE)}>÷</button>
      </div>
      <input
        type="number"
        value={num2}
        onChange={(e) => handleNumberChange(e, setNum2)}
        placeholder="Deuxième nombre"
        className={styles.calculatorInput}
      />

      <button className={styles.calculateButton} onClick={handleCalculate}>Calculer</button>

      {result !== null && (
        <p className={styles.result}>Résultat : {result}</p>
      )}
    </div>
  );
};

export default Calculator;
