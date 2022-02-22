import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const ContactContainer = styled.div`
  /* min-height: 70vh; */

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  abbr {
    text-decoration: none;
  }
  li {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 1rem;
  }
  label {
    text-align: left;
    margin: 0 0 1rem;
  }
  input,
  textarea {
    border: 1px solid gray;
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: #eeeeee;
  }
  input {
  }
  abbr[title] {
    text-decoration: none;
  }
  button {
    border-radius: 0.5em;
    padding: 0.5em;
    cursor: pointer;
    border: 1px solid gray;
    background-color: lightskyblue;
    &:hover {
      background-color: lightseagreen;
      color: white;
    }
  }
  * + h1 {
    margin-top: 3em;
  }
`;

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Us" />

    <ContactContainer>
      <h1>Contact Form</h1>
      <p>Use the form below to get in touch with us:</p>
      <form
        name="webContact"
        method="post"
        data-netlify="true"
        action="/contactSuccess"
        netlify-honeypot="bot-field"
      >
        {/* hidden input for netlify */}
        <input type="hidden" name="form-name" value="webContact" />

        <ul>
          <li style={{ visibility: `hidden`, display: `none` }}>
            <label htmlFor="bot-field">
              <input name="bot-field" />
            </label>
          </li>
          <li>
            <label htmlFor="name">Full name:</label>
            <input type="text" name="name" />
          </li>
          <li>
            <label htmlFor="email">email:</label>
            <input type="text" name="email" />
          </li>
          <li>
            <label htmlFor="phone">phone: </label>
            <input type="text" name="phone" />
          </li>
          <li>
            <label htmlFor="subject">Subject: </label>
            <input type="text" name="subject" />
          </li>
          <li>
            <label htmlFor="message">Message: </label>
            <textarea name="message" rows="4"></textarea>
          </li>
          <li>
            <button type="submit">Send Message</button>
          </li>
        </ul>
      </form>
      <h1>File Upload</h1>
      <p>
        <a href="https://www.dropbox.com/request/FL93CCTD7UCysvFI2Pp6">
          Click here
        </a>{" "}
        to upload files to us.
      </p>
    </ContactContainer>
  </Layout>
);

export default ContactPage;
