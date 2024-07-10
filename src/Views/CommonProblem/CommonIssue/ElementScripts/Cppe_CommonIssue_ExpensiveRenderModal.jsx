import { useState, useMemo } from "react";
import { Button, Form, Modal } from "react-bootstrap";

//This file has 1 issue
//1.Expensive Render
const expensiveCalculation = (intRange) => {
  let sum = 0;
  for (let i = 0; i < intRange; i++) {
    sum += i;
  }
  return sum;
};
export const ExpensiveRender = ({ HideModal }) => {
  const [intCount, setIntCount] = useState(0);
  const [intRange, setIntRange] = useState(1000000000);

  const intTotal = useMemo(() => expensiveCalculation(intRange), [intRange]);

  return (
    <Modal show={true} onHide={HideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Expensive Render</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          value={intRange}
          onChange={(event) => setIntRange(Number(event.target.value || 0))}
        />
        <label>
          The sum of number from 0 to {intRange} = {intTotal}
        </label>
        <div className="mt-3">
          <Button variant="primary" onClick={() => setIntCount(intCount + 1)}>
            Increment {intCount}
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={HideModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
