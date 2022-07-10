import React, {FC} from 'react';
import {Link, useParams} from "react-router-dom"

const Product: FC = () => {
    const {id} = useParams();

    return (
        <div>
            Product {id}
            <Link to="/">Home</Link>
        </div>
    );
};

export default Product;