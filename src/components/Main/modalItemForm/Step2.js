import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Form } from './formComponents/Form';
import { FormContainer } from './formComponents/FormContainer';
import { Input } from './formComponents/Input';
import { PrimaryButton } from './formComponents/PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useData } from './DataContext';
import { InputWrapper } from './formComponents/InputWrapper';
import { NumberOfStep } from './formComponents/NumberOfStep';

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email должен быть корректным")
    .required("Поле, обязательное для заполнения")
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if(!phoneNumber) return value;

  return (
    phoneNumber.formatInternational()
  );
};

export const Step2 = ({ stateStep, setStateStep }) => {
  const { data, setValues } = useData();
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone"); 

  const onSubmit = (data) => {
    setStateStep(stateStep + 1);
    setValues(data);
  };

  if(!hasPhone && data.phoneNumber){
    delete data.phoneNumber;
  }

  return <FormContainer>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <FormControlLabel 
          control={
            <Checkbox 
              defaultValue={data.hasPhone} 
              defaultChecked={data.hasPhone} 
              name="hasPhone" 
              inputRef={register} 
              color="primary" />
          }
          label="Ваш телефон"
        />

        {
          hasPhone && (
            <Input 
              ref={register}
              id="phoneNumber"
              type="tel"
              label="Номер телефона"
              name="phoneNumber"
              onChange={(event) => {
                event.target.value = normalizePhoneNumber(event.target.value)
              }}
            />
          )
        }
      </InputWrapper>
      <PrimaryButton>Дальше</PrimaryButton>
    </Form>
    <NumberOfStep stateStep={stateStep} />
  </FormContainer>
};