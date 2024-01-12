import contactImg from '../../assets/contact.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './contact-banner.css';

const ContactBanner = () => {

  return (
    <section className="contact-banner">
      <div className="container">
        <div className="row py-4 my-3 align-items-center">
            <div className="col-md-6">
                <img src={contactImg} alt="Contac Image" className='img-fluid'/>
            </div>
            <div className="col-md-6">
                <h2 className='text-center'>Contact Us</h2>
                <Form>
                <Form.Group className="mb-3">
                    <div className="form-style d-flex justify-content-around">
                        <div className="form-item">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="John" name="firstName" id="firstName" />
                        </div>
                        <div className="form-item">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Doe" name="lastName" id="lastName" />
                        </div>
                    </div>
                    <div className="form-style d-flex justify-content-around">
                        <div className="form-item">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@mail.com" name="email" id="email" />
                        </div>
                        <div className="form-item">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="+359 88 6747 088" name="phoneNumber" id="phoneNumber"/>
                        </div>
                    </div>
                    
                </Form.Group>

                <Form.Group className="mb-3">
                    <FloatingLabel label="Message" className='form-contact'>
                    <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                    name="comment" id="comment"
                    />
                    <Button variant="danger" type="submit" className='contact_btn'>
                    Submit
                    </Button>
                    </FloatingLabel>
                </Form.Group>
                </Form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
