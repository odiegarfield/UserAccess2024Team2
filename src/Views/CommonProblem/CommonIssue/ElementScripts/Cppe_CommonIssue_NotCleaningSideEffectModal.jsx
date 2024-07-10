import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

//This file has 1 issue
//1.Not Cleaning Side Effect
export const NotCleaningSideEffect = ({ HideModal }) => {
  const [intCount, setIntCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIntCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <Modal show={true} onHide={HideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Not Cleaning Side Effect - Clock Sample</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span className="fw-semibold">Time: </span>
        {intCount}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={HideModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
