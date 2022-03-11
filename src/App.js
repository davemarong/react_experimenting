import { useState } from "react";

import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ nextStep, onFinish }) => {
  return (
    <>
      <h1>Step 1</h1>
      <button
        onClick={() => {
          nextStep({ stepOne: "Dave" });
        }}
      >
        Next
      </button>
    </>
  );
};
const StepTwo = ({ nextStep, onFinish }) => {
  return (
    <>
      <h1>Step 2</h1>
      <button
        onClick={() => {
          nextStep({ stepTwo: 100 });
        }}
      >
        Next
      </button>
    </>
  );
};
const StepThree = ({ nextStep, onFinish }) => {
  return (
    <>
      <h1>Step 3</h1>
      <button
        onClick={() => {
          nextStep({ stepThree: "Skien" });
        }}
      >
        Next
      </button>
    </>
  );
};
const StepFour = ({ nextStep, onFinish }) => {
  return (
    <>
      <h1>Step 4</h1>
      <button
        onClick={() => {
          nextStep({ stepFour: "Adele" });
        }}
      >
        Next
      </button>
    </>
  );
};
const StepFive = ({ nextStep, onFinish }) => {
  return (
    <>
      <h1>Step 5</h1>
      <button
        onClick={() => {
          onFinish({ stepFive: "Iselin" });
        }}
      >
        Finish
      </button>
    </>
  );
};

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [onboardingFlow, setOnboardingFlow] = useState({});

  const nextStep = (stepData) => {
    setCurrentStepIndex(currentStepIndex + 1);
    setOnboardingFlow({ ...onboardingFlow, ...stepData });
  };
  const onFinish = (stepData) => {
    setOnboardingFlow({ ...onboardingFlow, ...stepData });
    alert("You are done, dude!");
  };
  console.log(onboardingFlow);
  return (
    <div>
      <ControlledOnboardingFlow
        currentStepIndex={currentStepIndex}
        nextStep={nextStep}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <StepFive onFinish={onFinish} />
      </ControlledOnboardingFlow>
    </div>
  );
}

export default App;
