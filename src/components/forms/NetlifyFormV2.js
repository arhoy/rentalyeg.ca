import React, { useState } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby-link';

import { ButtonStyle3 } from '../reusableStyles/buttons/Button';

// Function to Make Netlify Submission and Gatsby Work
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Form = styled.form`
  color: #aaaaaa;
`;

const Row = styled.div`
  display: flex;
`;

const Field = styled.div`
  width: 100%;
  & .hidden {
    display: none;
  }
`;

const Label = styled.label`
  padding: 1rem;
  display: block;
  outline: none;
  font-size: 1.5rem;
  color: white;
  & h6 {
    margin-bottom: 3px;
    font-weight: 500;
    font-size: 1.5rem;
  }
  & input,
  textarea {
    padding: 0.5rem;
    width: 100%;
    outline: none;
    border: none;

    font-family: Poppins, Roboto;
    font-size: 1.6rem;
  }
`;

const FormTitle = styled.h4`
  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin: 0 1rem;
  letter-spacing: 5px;
  font-weight: 600;
  font-size: 3rem;
  color: ${props => (props.color ? props.color : props.theme.colors.secondary)};
`;

const TextArea = styled.textarea`
  background: #f1f9ff;
  height: 10rem;

  &::placeholder {
    color: inherit;
    text-indent: 1rem;
  }
`;
const Input = styled.input`
  padding-left: 1rem;
  background: #f1f9ff;
  color: #aaaaaa;

  outline: none;
  border: none;
  &::placeholder {
    color: inherit;
    text-indent: 1rem;
  }
`;

const Button = styled(ButtonStyle3)`
  width: 100%;
  text-transform: uppercase;
  border-radius: 3rem;
  background: ${props =>
    props.color ? props.color : props.theme.colors.secondary};
`;

const NetlifyFormV2 = ({ title, color, background }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    };

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        message: userData.message,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <Container>
      <FormTitle color={color}>{title || 'How Can We Help?'}</FormTitle>
      <Form
        name="contact-2"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
        onSubmit={handleSubmit}
      >
        <Field className="hidden">
          <Label className="hidden">
            Hidden Honey Bot Spam Field: <input name="bot-field" />
          </Label>
        </Field>

        <Row>
          <Field>
            <Label>
              <h6> First Name *:</h6>

              <Input
                onChange={event => setFirstName(event.target.value)}
                background={background}
                color={color}
                placeholder="First Name"
                type="text"
                name="firstName"
                required
              />
            </Label>
          </Field>
          <Field>
            <Label>
              <h6> Last Name *:</h6>

              <Input
                onChange={event => setLastName(event.target.value)}
                background={background}
                color={color}
                placeholder="Last Name"
                type="text"
                name="lastName"
                required
              />
            </Label>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>
              <h6> Phone Number *:</h6>

              <Input
                onChange={event => setPhoneNumber(event.target.value)}
                background={background}
                color={color}
                placeholder="Phone Number"
                type="text"
                name="phoneNumber"
                required
              />
            </Label>
          </Field>
          <Field>
            <Label>
              <h6> Email Address *:</h6>

              <Input
                onChange={event => setEmail(event.target.value)}
                background={background}
                color={color}
                placeholder="Email Address"
                type="email"
                name="email"
                required
              />
            </Label>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>
              <h6>Message:</h6>

              <TextArea
                onChange={event => setMessage(event.target.value)}
                background={background}
                color={color}
                placeholder=""
                name="message"
                required
                minLength="10"
                maxLength="1000"
              />
            </Label>
          </Field>
        </Row>

        <Field>
          <Button type="submit">Send Your Message</Button>
        </Field>
      </Form>
    </Container>
  );
};

export { NetlifyFormV2 };
