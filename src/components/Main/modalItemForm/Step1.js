import { FormContainer } from './formComponents/FormContainer';
import { Form } from './formComponents/Form';
import { Input } from './formComponents/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useData } from './DataContext';
import { PrimaryButton } from './formComponents/PrimaryButton';
import { InputWrapper } from './formComponents/InputWrapper';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import { UserAgreementLabel } from './formComponents/UserAgreementLabel';
import { NumberOfStep } from './formComponents/NumberOfStep';

const schema = yup.object().shape({
  firstName: yup
   .string()
   .matches(/^([^0-9]*)$/, "Имя не может содержать цифры")
   .required("Поле, обязательное для заполнения"),
  lastName: yup
   .string()
   .matches(/^([^0-9]*)$/, "Фамилия не может содержать цифры")
   .required("Поле, обязательное для заполнения"),
  userAgreement: yup.bool().oneOf([true], "Вы должны дать согласие на обработку персональных данных"),
});

export const Step1 = ({ stateStep, setStateStep }) => {
  const { data, setValues } = useData();
  const { register, handleSubmit, formState: {
    errors,
  } } = useForm({
    defaultValues: { 
      firstName: data.firstName, 
      lastName: data.lastName,
      userAgreement: data.userAgreement,
     },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { ref, ...rest } = register("userAgreement");

  const onSubmit = (data) => {
    setStateStep(stateStep + 1);
    setValues(data);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            {...register("firstName")}
            id="firstName"
            type="text"
            label="Имя"
            name="firstName"
            required
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
          />
          <Input
            {...register("lastName")}
            id="lastName"
            type="text"
            label="Фамилия"
            name="lastName"
            required
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
          />
          <FormControl>
            <FormControlLabel 
              control={
                <Checkbox 
                  id="userAgreement"
                  name="userAgreement"
                  defaultValue={data.userAgreement} 
                  defaultChecked={data.userAgreement}
                  {...rest}
                  inputRef={ref}
                  color="primary" />
              }
              label={<UserAgreementLabel  hasUserAgreement={!!errors.userAgreement}/>}
            />
            <FormHelperText
              error
            >{errors.userAgreement?.message}</FormHelperText>
          </FormControl>
        </InputWrapper>
        <PrimaryButton>Дальше</PrimaryButton>
      </Form>
      <NumberOfStep stateStep={stateStep} />
    </FormContainer>
  )
}