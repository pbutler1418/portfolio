import React, { Component } from "react";
import { Form, Input, Label, Button, FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GitHub, Linkedin, Mail } from "react-feather";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message,
    });
  }
  render() {
    return (
      <>
        <h1>Contact Me </h1>
        {/* <script src="https://unpkg.com/feather-icons"></script> */}
        <div className="myPages">
          <a href="https://github.com/pbutler1418">
          <GitHub
            className="hvr-bob"
            href="https://github.com/pbutler1418"
            size={200}
            />
          </a>
          <div className = "mail">
          <Mail
              size={200}
              className="hvr-bob"/>
            <h2 className = "firstPageDivs">Reach Out!</h2>
            <h2 className = "firstPageDivs">pbutler1418@gmail.com</h2>
            </div>
          <a href="https://www.linkedin.com/in/pierce-butler-801184133/">
          <Linkedin
            className="hvr-bob"
            href="https://www.linkedin.com/in/pierce-butler-801184133/"
            size={200}
          />
          </a>
        </div>

        {/* <Form onSubmit={this.handleSubmit} style = {{width: '600px'}}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="mail">Email:</Label>
          <Input type="email" name="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <Input type="textarea" name="message" onChange={this.handleChange} />
        </FormGroup>

        <Button>Submit</Button>
      </Form> */}
      </>
    );
  }
}

export default Contact;
