import { Box, Button, Dialog, DialogContent } from '@mui/material';
import React, { FC, useState } from 'react';

import CreateOrderInterface from '../../contracts/CreateOrderInterface';
import { useAddNewOrderMutation } from '../../services/order';
import { useGetProductsQuery } from '../../services/product';
import CreateOrderForm from './CreateOrderForm';

const Order: FC = () => {
  const { data: products, isSuccess } = useGetProductsQuery(10);
  const [addNewOrder, { error }] = useAddNewOrderMutation();
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);

  const handleFormSubmit = async (values: CreateOrderInterface) => {
    const response = await addNewOrder(values);
    // @todo implement logic here
  };

  return (
    <Box>
      <Button color="secondary" variant="contained" size="large" sx={{ mt: 1 }} onClick={handleOpenDialog}>
        Заказать
      </Button>
      <Dialog open={open}>
        <DialogContent>
          {isSuccess && <CreateOrderForm products={products.results} onSubmit={handleFormSubmit} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Order;
