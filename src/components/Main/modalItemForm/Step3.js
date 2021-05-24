import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { useData } from './DataContext';
import { Form } from './formComponents/Form';
import { FormContainer } from './formComponents/FormContainer';
import { NumberOfStep } from './formComponents/NumberOfStep';
import { PrimaryButton } from './formComponents/PrimaryButton';

export const Step3 = ({ stateStep, setStateStep}) => {
  const { data, setValues } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      message: data.message,
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    setStateStep(stateStep + 1);
    setValues(data);
  };

  return (<FormContainer>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          variant="outlined"
          margin="normal"
          multiline
          rows="5"
          rowsMax="9"
          fullWidth
          {...register("message")}
          id="message"
          type="text"
          label="Ваше сообщение"
          name="message"
        />
      <PrimaryButton>Дальше</PrimaryButton>
    </Form>
    <NumberOfStep stateStep={stateStep} />
  </FormContainer>)
};