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
  const {
    register,
    handleSubmit,
    watch,

    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { ref, ...rest } = {...register("hasPhone")};

  const [hasPhone] = watch(["hasPhone"]); 

  const onSubmit = (data) => {
    setStateStep(stateStep + 1);
    setValues(data);
  };

  if(!hasPhone && data.phoneNumber){
    delete data.phoneNumber;
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            id="email"
            type="email"
            label="Email"
            {...register('email')}
            required
            error={!!errors.email}
            helperText={errors?.email?.message} />

          <FormControlLabel 
            control={
              <Checkbox 
                defaultValue={data.hasPhone} 
                defaultChecked={data.hasPhone} 
                name="hasPhone" 
                {...rest}
                inputRef={ref} 
                color="primary" />
            }
            label="Ваш телефон"
          />

          {
            hasPhone && (
              <Input
                id="phoneNumber"
                type="tel"
                label="Номер телефона"
                {...register('phoneNumber')}
                onChange={(event) => {
                  event.target.value = normalizePhoneNumber(event.target.value)
                }} />
            )
          }
        </InputWrapper>
        <PrimaryButton>Дальше</PrimaryButton>
      </Form>
      <NumberOfStep stateStep={stateStep} />
    </FormContainer>
  );
};