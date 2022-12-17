import { Box, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { FC, useState } from 'react';

import CreateOrderInterface from '../../contracts/CreateOrderInterface';
import { useAddNewOrderMutation } from '../../services/order';
import { useGetProductsQuery } from '../../services/product';
import CreateOrderForm, { FormErrors } from './CreateOrderForm';
import OrderSuccess from './OrderSuccess';

interface Error {
  error: {
    data: FormErrors;
  };
}

const FormErrorsInit = {
  full_name: [],
  phone: [],
  product: [],
};

const Order: FC = () => {
  const { data: products, isSuccess } = useGetProductsQuery(10);
  const [addNewOrder, { isLoading }] = useAddNewOrderMutation();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>(FormErrorsInit);
  const [orderCreated, setOrderCreated] = useState(false);

  const handleOpenDialog = () => setOpen(true);

  const handleCloseDialog = () => {
    setOpen(false);
    setErrors(FormErrorsInit);
  };

  const handleCloseOrderSuccess = () => {
    setOpen(false);

    const timer = setTimeout(() => {
      setOrderCreated(false);
    }, 300);

    return () => clearTimeout(timer);
  };

  const handleFormSubmit = async (values: CreateOrderInterface) => {
    const response = await addNewOrder(values);
    const errorObj = (response as Error).error;

    if (errorObj) {
      setErrors({ ...FormErrorsInit, ...errorObj.data });
    } else {
      setOrderCreated(true);
    }
  };

  const handleChangeField = (field: string) => {
    setErrors((prevState) => ({
      ...prevState,
      [field]: [],
    }));
  };

  return (
    <Box>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        sx={{ mt: 1 }}
        onClick={handleOpenDialog}
        disabled={isLoading}
      >
        Заказать
      </Button>
      <Dialog open={open} maxWidth="xs" fullWidth>
        {!orderCreated && <DialogTitle sx={{ p: 2 }}>Оформить заказ</DialogTitle>}
        {!orderCreated ? (
          <DialogContent sx={{ p: 2 }}>
            {isSuccess && (
              <CreateOrderForm
                products={products.results}
                errors={errors}
                onSubmit={handleFormSubmit}
                onClose={handleCloseDialog}
                onChangeField={handleChangeField}
              />
            )}
          </DialogContent>
        ) : (
          <OrderSuccess onClose={handleCloseOrderSuccess} />
        )}
      </Dialog>
    </Box>
  );
};
export default Order;
