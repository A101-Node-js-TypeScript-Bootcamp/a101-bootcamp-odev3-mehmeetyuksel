import React, {useState} from 'react';
import {Form, Button, Container} from "react-bootstrap";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"
function AddingForm() {

const [form, setForm] = useState({productName: "", stock: "", isDiscount: "true", categoryId : "", categoryName: ""})
const navigate = useNavigate();

const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({...form, [e.target.name] : e.target.value})
}
 
const handleSubmit = async  (event) => {
    event.preventDefault();

  await axios.post('http://localhost:3000/api/product/', {
            stock: form.stock,
            productName: form.productName,
            isDiscount: form.isDiscount,
            category : {
              categoryId: form.categoryId,
              categoryName: form.categoryName
            }          
      }
       ).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      }).finally(() => navigate('/'));
}


  return <Container>
  

  <Form>


  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" name="productName" value={form.productName} onChange = {onChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Stock</Form.Label>
    <Form.Control type="text" name="stock" value={form.stock} onChange = {onChange}/>
  </Form.Group>


  <Form.Label>Discount</Form.Label>
  <Form.Select aria-label="Default select example" name="isDiscount"  value={form.discount} onChange = {onChange}>
    <option value="true">True</option>
    <option value="false">False</option>    
  </Form.Select>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Category ID</Form.Label>
    <Form.Control type="text" name="categoryId" value={form.categoryId} onChange = {onChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="text" name="categoryName" value={form.categoryName} onChange = {onChange}/>
  </Form.Group>
  
  <Link to="/"><Button variant="danger" className='mx-3'>Cancel</Button></Link>

  <Button variant="primary" type="submit" className='mx-3' onClick={handleSubmit}>
    Submit
  </Button>

</Form>
  
  
  
  
  </Container>;
}

export default AddingForm;
