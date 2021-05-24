import { useForm } from 'react-hook-form';
import { useData } from './DataContext';
import { FileInput } from './formComponents/FileInput';
import { Form } from './formComponents/Form';
import { FormContainer } from './formComponents/FormContainer';
import { InputWrapper } from './formComponents/InputWrapper';
import { NumberOfStep } from './formComponents/NumberOfStep';
import { PrimaryButton } from './formComponents/PrimaryButton';

export const Step4 = ({ stateStep, setStateStep }) => {
  const { data, setValues } = useData()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files
    }
  });

  const onSubmit = (data) => {
    setStateStep(stateStep + 1);
    setValues(data);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <FileInput name="files" control={control} />
        </InputWrapper>
        <PrimaryButton>Дальше</PrimaryButton>
      </Form>
      <NumberOfStep stateStep={stateStep} />
    </FormContainer>
   )
};