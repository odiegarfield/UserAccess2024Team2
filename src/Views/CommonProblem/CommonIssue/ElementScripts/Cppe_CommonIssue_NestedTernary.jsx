import { NotHandlingSideEffectsProperlyModal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperlyModal";
import { DirectlyModifyingStateModal } from "./Cppe_CommonIssue_DirectlyModifyingStateModal";
import { IncorrectlyUpdateState } from "./Cppe_CommonIssue_IncorrectlyUpdateStateModal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { NotHandlingSideEffectsProperly2Modal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperly2Modal";
import { ExpensiveRender } from "./Cppe_CommonIssue_ExpensiveRenderModal";
import { NotCleaningSideEffect } from "./Cppe_CommonIssue_NotCleaningSideEffectModal";

//2 Issue
//Improper use of ternary operator
//Not using Custom Hook
const useBolIssue = () => {
  const [bolIssue, setBolIssue] = useState(false);
  const showBolIssue = () => setBolIssue(true);
  const hideBolIssue = () => setBolIssue(false);
  return [bolIssue, showBolIssue, hideBolIssue];
};

const NestedTernary = () => {
  const [bolIssue1, showIssue1, hideIssue1] = useBolIssue();
  const [bolIssue2, showIssue2, hideIssue2] = useBolIssue();
  const [bolIssue3, showIssue3, hideIssue3] = useBolIssue();
  const [bolIssue4, showIssue4, hideIssue4] = useBolIssue();
  const [bolIssue5, showIssue5, hideIssue5] = useBolIssue();
  const [bolIssue6, showIssue6, hideIssue6] = useBolIssue();

  const renderModal = () => {
    if (bolIssue1)
      return <DirectlyModifyingStateModal HideModal={hideIssue1} />;
    if (bolIssue2)
      return <NotHandlingSideEffectsProperlyModal HideModal={hideIssue2} />;
    if (bolIssue3)
      return <NotHandlingSideEffectsProperly2Modal HideModal={hideIssue3} />;
    if (bolIssue4) return <IncorrectlyUpdateState HideModal={hideIssue4} />;
    if (bolIssue5) return <ExpensiveRender HideModal={hideIssue5} />;
    if (bolIssue6) return <NotCleaningSideEffect HideModal={hideIssue6} />;
    return null;
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 d-flex flex-column gap-3">
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue1}
        >
          Directly Modifying State
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue2}
        >
          Not Handling Side Effect Properly
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue3}
        >
          Not Handling Side Effect Properly2
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue4}
        >
          Incorrectly Update State
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue5}
        >
          Expensive Render
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue6}
        >
          Not Cleaning Side Effect
        </Button>
      </div>
      {renderModal()}
    </div>
  );
};

export default NestedTernary;
