import React from 'react';
import { Table, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const ProductTable = () => {

    const [datas, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:3000/api/product/")
            .then((data) => setData(data.data))
            .finally(() => setLoaded(true));
    }, [])


    const deleteProduct = async (id, isDiscount) => {
       
       if(!isDiscount) {
        await axios.delete(`http://localhost:3000/api/product/${id}`).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          }).finally(() => navigate('/'));
       }
       else {
           alert("You can not delete products with discount!")
       }

    }

    return (
        <>
        <Link to="/add"><Button className="mt-3 mb-3" variant="danger">Add New Product to Database</Button></Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Discount</th>
                        <th>Category Name</th>
                        <th>Category ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        loaded ?
                            datas.products.Items.map((product, i) => (
                                <tr key={i}>
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.isDiscount ? "True" : "False"}</td>
                                    <td>{product.category.categoryName}</td>
                                    <td>{product.category.categoryId}</td>
                                    <td><span onClick={() => deleteProduct(product.productId, product.isDiscount)}><img style={{height: "50px", cursor: "pointer"}} src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt="trash-logo"/></span> <Link to={`/${product.productId}`}><span><img style={{height: "40px"}} src="https://img.icons8.com/ios-filled/100/000000/edit--v1.png" alt="update-logo"/></span></Link></td>
                                </tr>
                            ))

                            : null
                    }



                </tbody>

     


            </Table>

        </>
    )
}

export default ProductTable;
