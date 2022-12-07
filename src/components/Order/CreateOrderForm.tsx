import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import CreateOrderInterface from '../../contracts/CreateOrderInterface';
import ProductInterface from '../../contracts/ProductInterface';

export interface FormErrors {
  full_name: string[];
  phone: string[];
  product: string[];
}

interface CreateOrderFormProps {
  products: ProductInterface[];
  errors: FormErrors;
  onSubmit: (values: CreateOrderInterface) => void;
  onClose: () => void;
  onChangeField: (field: string) => void;
}

const InitValuesState = {
  full_name: '',
  phone: '',
  product: '',
  recaptcha: '',
};

const CreateOrderForm: FC<CreateOrderFormProps> = ({ products, onSubmit, onClose, onChangeField, errors }) => {
  const [values, setValues] = useState(InitValuesState);
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ ...values, product: +values.product });
    setRefreshReCaptcha((r) => !r);
  };

  const handleClose = () => {
    onClose();
    setValues(InitValuesState);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

    onChangeField(event.target.name);
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
      <FormControl fullWidth sx={{ '& .MuiTextField-root': { mb: 2 } }}>
        <TextField
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
          error={errors.full_name.length > 0}
          helperText={errors.full_name}
        />
        <TextField
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone.length > 0}
          helperText={errors.phone}
        />
        <Select name="product" value={values.product} onChange={handleChange} error={errors.product.length > 0}>
          {products.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
          <GoogleReCaptcha onVerify={onVerify} action="order" refreshReCaptcha={refreshReCaptcha} />
        </GoogleReCaptchaProvider>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
        <Button type="submit" variant="contained" color="secondary" sx={{ mr: 1 }}>
          Заказать
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Отмена
        </Button>
      </Box>
    </form>
  );
};

export default CreateOrderForm;
