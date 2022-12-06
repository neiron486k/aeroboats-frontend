import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { useAddNewOrderMutation } from '../../services/order';
import { useGetProductsQuery } from '../../services/product';
import OrderSuccess from './OrderSuccess';

const inputsInitialState = {
  full_name: '',
  phone: '',
  product: '',
  recaptcha: '',
};

const inputErrorsInitialState = {
  full_name: [] as string[],
  phone: [] as string[],
  product: [] as string[],
  recaptcha: [] as string[],
};

const OrderForm: FC = () => {
  const [open, setOpen] = useState(false);
  const { data: products, isSuccess } = useGetProductsQuery(10);
  const [addNewOrder, { error }] = useAddNewOrderMutation();
  const [inputs, setInputs] = useState(inputsInitialState);
  const [inputErrors, setInputErrors] = useState(inputErrorsInitialState);
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsOrderSuccess(false);
  };

  const handleClose = (event: object, reason: string) => {
    if (reason !== 'backdropClick' || isOrderSuccess) {
      setInputErrors(inputErrorsInitialState);
      setInputs(inputsInitialState);
      setOpen(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

    setInputErrors((prevState) => ({
      ...prevState,
      [event.target.name]: [],
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { ...inputs, product: +inputs.product };
    const response = await addNewOrder(data);

    if ('data' in response) {
      setInputs(inputsInitialState);
      setIsOrderSuccess(true);
    }

    setRefreshReCaptcha((r) => !r);
  };

  const onVerify = useCallback(
    (token: string) => {
      setInputs((prevState) => ({
        ...prevState,
        recaptcha: token,
      }));
    },
    [setInputs],
  );

  useEffect(() => {
    if (error && 'data' in error) {
      const errorData = error.data as typeof inputErrorsInitialState;
      setInputErrors({ ...inputErrorsInitialState, ...errorData });
    }
  }, [setInputErrors, error]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
      <Button color="secondary" variant="contained" size="large" sx={{ mt: 1 }} onClick={handleOpen}>
        Заказать
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        {!isOrderSuccess ? (
          <form onSubmit={handleSubmit} noValidate>
            <DialogTitle>Оформление заказа</DialogTitle>
            <DialogContent>
              <FormControl fullWidth sx={{ '& .MuiTextField-root': { mb: 2 } }}>
                <TextField
                  id="fullName"
                  name="full_name"
                  label="Ф.И.О"
                  type="text"
                  required
                  variant="outlined"
                  sx={{ mt: 2 }}
                  onChange={handleChange}
                  error={inputErrors.full_name.length > 0}
                  helperText={inputErrors.full_name}
                />
                <TextField
                  id="phone"
                  name="phone"
                  label="Телефон"
                  type="text"
                  required
                  variant="outlined"
                  onChange={handleChange}
                  error={inputErrors.phone.length > 0}
                  helperText={inputErrors.phone}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="product-select-label">Товар *</InputLabel>
                <Select
                  fullWidth
                  variant="outlined"
                  labelId="product-select-label"
                  id="product-select"
                  name="product"
                  label="Товар *"
                  value={inputs.product}
                  onChange={handleChange}
                  error={inputErrors.product.length > 0}
                >
                  {isSuccess &&
                    products.results.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl>
                <GoogleReCaptcha onVerify={onVerify} action="order" refreshReCaptcha={refreshReCaptcha} />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="contained" color="secondary">
                Заказать
              </Button>
              <Button onClick={(event) => handleClose(event, 'buttonClick')} variant="contained">
                Отмена
              </Button>
            </DialogActions>
          </form>
        ) : (
          <OrderSuccess />
        )}
      </Dialog>
    </GoogleReCaptchaProvider>
  );
};

export default OrderForm;
