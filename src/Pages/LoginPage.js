import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import "./styles.css";

function LoginPage() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validatePassword = (value) =>{
    if (value.length < 6) {
        return 'Password should be at-least 6 characters.';
      } else if (
        !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
      ) {
        return 'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.';
      }
      return true;
  }

  return (
    <Container className="my-4">
        <Row>
            <Col xs={3}/>
            <Col xs={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label style={{float:'left'}}>Email</Form.Label>
    <Form.Control 
      type="email"
      name="email" 
      ref={register({required:'Email is required', pattern: ({value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message:"Email is not valid!"})})} 
      placeholder="Enter email" />
      {errors.email && <p className="errorMsg">{errors.email.message}</p>}  
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label style={{float:'left'}}>Password</Form.Label> 
    <Form.Control 
      type="password" 
      name="password" 
      ref={register({required:'Password is required', validate:validatePassword})} 
      placeholder="Password" />
      {errors.password && <p className="errorMsg">{errors.password.message}</p>}  
    </Form.Group>
    <div style={{float:'right'}}>
        <Button className="btn btn-sm btn-success" type="submit">Login</Button>
    </div>
    </Form>
            </Col>
            <Col xs={3}/>
        </Row>
    </Container>
  );
}

export default LoginPage;