import { useState } from 'react';
import { Result } from './Result';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

export const ItemForm = ({ toggleModal }) => {
  const [ stateStep, setStateStep ] = useState(1);

  return (
    <>
      {stateStep === 1 && <Step1 
                            stateStep={stateStep} 
                            setStateStep={setStateStep}
                          />}
      {stateStep === 2 && <Step2 
                            stateStep={stateStep} 
                            setStateStep={setStateStep}
                          />}
      {stateStep === 3 && <Step3 
                            stateStep={stateStep} 
                            setStateStep={setStateStep}
                          />}
      {stateStep === 4 && <Step4
                            stateStep={stateStep} 
                            setStateStep={setStateStep}
                          />}
      {stateStep === 5 && <Result 
                            stateStep={stateStep} 
                            setStateStep={setStateStep}
                            toggleModal={toggleModal} 
                          />}
    </>
  );
};