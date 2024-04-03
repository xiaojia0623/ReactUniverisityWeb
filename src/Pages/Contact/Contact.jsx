import React from 'react'
import './Contact.css'
import { Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import LondonLocationImg from '../../utils/images/London-location.jpg'
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg'
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg'


function Contact() {
  return (
    <div className='contact-page'>
      <header className="height-75">
        <div className="container h-100 d-flex justify-content-center align-items-center text-light flex-column">
          <h1 className='text-center fw-semibold'>Get in Touch</h1>
          <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, quos. Recusandae placeat voluptatibus corrupti consectetur animi velit perspiciatis, blanditiis cum praesentium voluptas? Molestiae officia animi nulla perferendis reiciendis perspiciatis voluptas.</p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form id='contact-form'>
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='First Name' />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Last Name' />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email' />
            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='Your Address' />
          </Form.Group>

          <Row className='mb-3'>
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Location</Form.Label>
              <Form.Select defaultValue="London">
                <option>London</option>
                <option>Manchester</option>
                <option>Liverpool</option>
              </Form.Select>
            </Col>

            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placeholder='Postcode' />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant='danger btn-lg' type='submit'>Submit</Button>
        </Form>
      </div>

      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className='text-center mb-5'>Our Location</h2>
          <div className="row g-4">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={LondonLocationImg} className='img-fluid' alt="" />
              <h3 className='text-center mt-3'>London</h3>
            </div>

            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={ManchesterLocationImg} className='img-fluid' alt="" />
              <h3 className='text-center mt-3'>Manchester</h3>
            </div>

            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
              <h3 className='text-center mt-3'>Liverpool</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact