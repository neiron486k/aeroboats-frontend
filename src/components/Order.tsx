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
import React, { FC, useState } from 'react';

import { useGetProductsQuery } from '../services/product';

const Order: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: products, isSuccess } = useGetProductsQuery(10);
  const [selectValue, setSelectValue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = event.target.value.toString();
    setSelectValue(value);
  };

  return (
    <>
      <Button color="secondary" variant="contained" size="large" sx={{ mt: 1 }} onClick={handleOpen}>
        Заказать
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Оформление заказа</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ '& .MuiTextField-root': { mb: 2 } }}>
            <TextField id="fullName" label="Ф.И.О" type="text" required variant="outlined" sx={{ mt: 2 }} />
            <TextField id="phone" label="Телефон" type="text" required variant="outlined" />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="product-select-label">Товар *</InputLabel>
            <Select
              fullWidth
              variant="outlined"
              labelId="product-select-label"
              id="product-select"
              label="Товар *"
              value={selectValue}
              onChange={handleSelectChange}
            >
              {isSuccess &&
                products.results.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button type="submit">Заказать</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Order;
