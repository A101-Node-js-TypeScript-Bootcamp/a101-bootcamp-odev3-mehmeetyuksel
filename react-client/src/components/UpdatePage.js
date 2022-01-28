import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {Form, Button, Container} from "react-bootstrap"
function UpdatePage() {

    const navigate = useNavigate();
    const { id } = useParams();
    
    const [stock, setStock] = useState();
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3000/api/product/${id}`).then((data) => setStock(data.data.data.Item.stock)).finally(() => setLoaded(true))
        }
        fetchData();
    }, [id])
    
    const onChange = (e) => {
        setStock(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put('http://localhost:3000/api/product/', {
            productId : id,
            stock : stock
        }).catch(function (error) {
         console.log(error);
       })
       .finally(() => navigate('/') )
    }
  
  return <Container>
  {
      loaded ?
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Stock</Form.Label>
    <Form.Control type="text" value={stock} onChange={onChange} />
    <Form.Text className="text-muted">
      Change the stock number of the product.
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Save
  </Button>
</Form>  : null
  
  }
  
  </Container>;
}

export default UpdatePage;






/*await axios.put('http://localhost:3000/api/product/', {
           productId : id,
           stock : newStock
       }).catch(function (error) {
        console.log(error);
      })
      .finally(() => handleClose())*/