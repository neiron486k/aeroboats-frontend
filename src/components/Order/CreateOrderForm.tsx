import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

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
  loading: boolean;
}

const InitValuesState = {
  full_name: '',
  phone: '',
  product: '',
  recaptcha: '',
};

const CreateOrderForm: FC<CreateOrderFormProps> = ({ products, onSubmit, onClose, onChangeField, errors, loading }) => {
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
    setRefreshReCaptcha((r) => !r);
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
    <form onSubmit={handleSubmit} noValidate>
      <FormControl fullWidth sx={{ '& .MuiTextField-root': { mb: 2 } }}>
        <TextField
          name="full_name"
          label="Ф.И.О"
          required
          value={values.full_name}
          onChange={handleChange}
          error={errors.full_name.length > 0}
          helperText={errors.full_name}
          sx={{ mt: 1 }}
        />
        <TextField
          name="phone"
          label="Телефон"
          required
          value={values.phone}
          onChange={handleChange}
          error={errors.phone.length > 0}
          helperText={errors.phone}
        />
        <GoogleReCaptcha onVerify={onVerify} action="order" refreshReCaptcha={refreshReCaptcha} />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="product-select-label">Товар *</InputLabel>
        <Select
          name="product"
          label="Товар *"
          value={values.product}
          onChange={handleChange}
          error={errors.product.length > 0}
        >
          {products.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
        <Box sx={{ mr: 1, position: 'relative' }}>
          <Button type="submit" variant="contained" color="secondary" disabled={loading}>
            Заказать
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Box>
        <Button variant="contained" onClick={handleClose}>
          Отмена
        </Button>
      </Box>
    </form>
  );
};

export default CreateOrderForm;
