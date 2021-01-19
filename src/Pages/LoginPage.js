import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import "./styles.css";

function LoginPage() {
  const { register, handleSubmit, errors } = useForm();
  const [password, setPassword] = useState('')

  const onLogin = (data) => {
    console.log(data);
  };

  const onRegister = (data) => {
    console.log(data);
  };

  const validatePassword = (value) =>{
    if (value.length < 6) {
        return 'Password should be at-least 6 characters.';
      } else if (
        !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
      ) {
        return 'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.';
      } else {
        setPassword(value)
      }
      return true;
  }

  const confirmPassword = (value) => {
      if(password !== value){
          return 'Confirm password should match with Password!'
      } return true;
  }

  return (
    <Container className="my-4">
        <Row>
            <Col xs={3}/>
            <Col xs={6}>
            <Form onSubmit={handleSubmit(onLogin)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                         type="email"
                         name="email" 
                         ref={register({required:'Email is required', pattern: ({value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message:"Email is not valid!"})})} 
                         placeholder="Enter email" />
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}  
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
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
        <Row className="my-4">
            <Col xs={3}/>
            <Col xs={6}>
            <Form onSubmit={handleSubmit(onRegister)}>
                <Form.Group controlId="formBasicName">
                    <Form.Control 
                         type="text"
                         name="name" 
                         ref={register({required:'Name is required'})} 
                         placeholder="Full Name" />
                    {errors.name && <p className="errorMsg">{errors.name.message}</p>}  
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                         type="email"
                         name="registerEmail" 
                         ref={register({required:'Email is required', pattern: ({value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message:"Email is not valid!"})})} 
                         placeholder="Enter email" />
                    {errors.registerEmail && <p className="errorMsg">{errors.registerEmail.message}</p>}  
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                         type="password" 
                         name="registerPassword" 
                         ref={register({required:'Password is required', validate:validatePassword})} 
                         placeholder="Password" />
                    {errors.registerPassword && <p className="errorMsg">{errors.registerPassword.message}</p>}  
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                         type="password" 
                         name="confirmPassword" 
                         ref={register({required:'Confirm password is required', validate:confirmPassword})} 
                         placeholder="Password" />
                    {errors.confirmPassword && <p className="errorMsg">{errors.confirmPassword.message}</p>}  
                </Form.Group>
                <div style={{float:'right'}}>
                    <Button className="btn btn-sm btn-primary" type="submit">Signup</Button>
                </div>
            </Form>
            </Col>
            <Col xs={3}/>
        </Row>
    </Container>
  );
}

export default LoginPage;