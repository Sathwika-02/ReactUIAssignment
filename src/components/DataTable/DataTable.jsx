import React from 'react';
import './DataTable.scss'; 
import { useSelector } from 'react-redux';

const DataTable = () => {


    const products = useSelector((state) => state.products.products);

    return (
        <div className='datatable'>
            <h4>Top Selling Products</h4>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                 
                </thead>
                 
                <tbody>
                <tr>
                    <td colSpan={4}>
                       <hr className='horizontal_line'/>
                       </td>
                    </tr>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.quantity}</td>
                            <td>${product.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
