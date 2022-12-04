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
import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { useAddNewOrderMutation } from '../services/order';
import { useGetProductsQuery } from '../services/product';

const Order: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: products, isSuccess } = useGetProductsQuery(10);
  const [addNewOrder, { isLoading, error }] = useAddNewOrderMutation();
  const [product, setProduct] = useState('');
  const [inputs, setInputs] = useState({
    full_name: '',
    phone: '',
    product,
    recaptcha: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { ...inputs, product: +product };
    await addNewOrder(data);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = event.target.value.toString();
    setProduct(value);

    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
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

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
      <Button color="secondary" variant="contained" size="large" sx={{ mt: 1 }} onClick={handleOpen}>
        Заказать
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <form onSubmit={handleSubmit}>
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
              />
              <TextField
                id="phone"
                name="phone"
                label="Телефон"
                type="text"
                required
                variant="outlined"
                onChange={handleChange}
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
                value={product}
                onChange={handleSelectChange}
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
              <GoogleReCaptcha onVerify={onVerify} action="order" />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button type="submit" variant="contained" color="secondary">
              Заказать
            </Button>
            <Button onClick={handleClose} variant="contained">
              Отмена
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </GoogleReCaptchaProvider>
  );
};

export default Order;
