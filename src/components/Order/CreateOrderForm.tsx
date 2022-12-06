import { Button, FormControl, MenuItem, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import CreateOrderInterface from '../../contracts/CreateOrderInterface';
import ProductInterface from '../../contracts/ProductInterface';

interface CreateOrderFormProps {
  products: ProductInterface[];
  onSubmit: (values: CreateOrderInterface) => void;
}

const InitValuesState = {
  full_name: '',
  phone: '',
  product: '',
  recaptcha: '',
};

const CreateOrderForm: FC<CreateOrderFormProps> = ({ products, onSubmit }) => {
  const [values, setValues] = useState(InitValuesState);
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ ...values, product: +values.product });
    setRefreshReCaptcha((r) => !r);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onVerify = useCallback(
    (token: string) => {
      setValues((prevState) => ({
        ...prevState,
        recaptcha: token,
      }));
    },
    [setValues],
  );

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField name="full_name" value={values.full_name} onChange={handleChange} />
        <TextField name="phone" value={values.phone} onChange={handleChange} />
        <Select name="product" value={values.product} onChange={handleChange}>
          {products.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
          <GoogleReCaptcha onVerify={onVerify} action="order" refreshReCaptcha={refreshReCaptcha} />
        </GoogleReCaptchaProvider>
        <Button type="submit">Заказать</Button>
        <Button>Отмена</Button>
      </FormControl>
    </form>
  );
};

export default CreateOrderForm;
