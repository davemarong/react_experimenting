import React from "react";

export const ControlledOnboardingFlow = ({
  children,
  currentStepIndex,
  nextStep,
}) => {
  const StepElement = React.Children.toArray(children);

  return <>{React.cloneElement(StepElement[currentStepIndex], { nextStep })}</>;
};
