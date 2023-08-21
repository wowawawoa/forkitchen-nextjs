import { styled } from "@mui/system";
// import { Link } from "react-router-dom";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FooterContainer = styled("footer")(({ theme }) => ({
  padding: "40px 0 0",
  backgroundColor: "#222",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 0 0",
  },
}));

const InfoContainer = styled("div")(({ theme }) => ({
  width: "1260px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    flexDirection: "column",
  },
}));

const InfoItemContainer = styled("div")(({ theme }) => ({
  ">h4": {
    fontSize: "21px",
    textTransform: "uppercase",
    padding: "0 0 20px",
    color: "#fff",
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 500,
    lineHeight: "1.5em",
    margin: 0,
  },
  ">p": {
    color: "#fff",
    opacity: 0.7,
    fontSize: "14px",
    padding: 0,
    margin: 0,
    fontFamily: "'Mukta Vaani', sans-serif",
    lineHeight: "1.5em",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "0 14px",
    ">h4": {
      textAlign: "center",
    },
  },
}));

const ContactList = styled("ul")(() => ({
  margin: 0,
  padding: 0,
}));

const ContactListItem = styled("li")(() => ({
  listStyle: "none",
  margin: "0 0 10px",
  padding: 0,
  ">p": {
    color: "#fff",
    opacity: 0.7,
    fontSize: "14px",
    padding: 0,
    margin: 0,
    fontFamily: "'Mukta Vaani', sans-serif",
    lineHeight: "1.5em",
  },
}));

const QuickLinkItem = styled(Link)(() => ({
  fontSize: "14px",
  display: "block",
  margin: "0 20px 10px 0",
  padding: "0 0 0 15px",
  color: "#fff",
  opacity: 0.7,
  textDecoration: "none",
  fontFamily: "'Mukta Vaani', sans-serif",
  lineHeight: "1.5em",
  position: "relative",
  "::before": {
    content: '""',
    display: "block",
    width: "6px",
    height: "6px",
    border: "1px solid #fff",
    transform: "rotate(45deg)",
    position: "absolute",
    left: 0,
    top: "8px",
  },
}));

const ContactForm = styled("form")(() => ({
  display: "block",
  ">input": {
    background: "none",
    width: "100%",
    border: "1px solid rgba(238, 238, 238, 0.5)",
    margin: "0 0 10px 0",
    lineHeight: "36px",
    height: "36px",
    fontSize: "14px",
    padding: "0 0 0 10px",
    color: "#fff",
  },
  ">textarea": {
    background: "none",
    width: "100%",
    border: "1px solid rgba(238, 238, 238, 0.5)",
    margin: "0 0 20px 0",
    fontSize: "14px",
    padding: "10px",
    color: "#fff",
    display: "block",
  },
  ">textarea:focus, >input:focus": {
    outline: "none",
  },
  ">textarea::selection, >input::selection": {
    color: "#fff",
    backgroundColor: "#f99e01",
  },
}));

const SubmitButton = styled("button")(({ theme }) => ({
  width: "150px",
  height: "40px",
  lineHeight: "40px",
  backgroundColor: "#f99e01",
  color: "#fff",
  fontSize: "14px",
  textTransform: "uppercase",
  border: "none",
  outline: "none",
  [theme.breakpoints.down("lg")]: {
    display: "block",
    margin: "0 auto",
  },
}));

const CopyrightContainer = styled("div")(({ theme }) => ({
  margin: "20px auto 0",
  borderTop: "1px solid rgba(255, 255, 255, 0.3)",
  width: "100%",
  ">p": {
    lineHeight: "50px",
    fontSize: "14px",
    color: "#fff",
    opacity: 0.8,
    width: "100%",
    textAlign: "center",
    margin: 0,
    padding: 0,
  },
  ">p>em": {
    fontSize: "14px",
    color: "#fff",
    opacity: 0.8,
    paddingLeft: "1em",
    fontStyle: "normal",
  },
  [theme.breakpoints.down("lg")]: {
    ">p>em": {
      display: "block",
      lineHeight: "14px",
      paddingBottom: "14px",
    },
  },
}));

const Footer = () => {
  const mobileMatch = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75yozfi",
        "template_ojh1kkx",
        form.current,
        "craJ6dJSJNvj2yJHU"
      )
      .then(
        (result) => {
          alert(
            "Your request has been sent to us! We will get back to you as soon as possible! Thanks!"
          );
          setName("");
          setEmail("");
          setTelephone("");
          setMessage("");
        },
        (error) => {
          alert("Sorry, your request has not been sent! Please try again!");
          console.log(error.text);
        }
      );
  };

  return (
    <FooterContainer>
      {mobileMatch ? (
        <InfoContainer>
          <InfoItemContainer>
            <h4>Send Message</h4>
            <ContactForm ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="*Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="*Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <textarea
                name="message"
                placeholder="*Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <SubmitButton type="submit">Send</SubmitButton>
            </ContactForm>
          </InfoItemContainer>
        </InfoContainer>
      ) : (
        <InfoContainer>
          <InfoItemContainer style={{ width: "22%" }}>
            <h4>About Us</h4>
            <p>
              Whether you require readymade or custom kitchen renovation for
              your home, For Kitchen can undertake it from planning to
              completion stage, providing an ageless masterpiece made just for
              you. Our expert kitchen designers will guarantee your kitchen
              renovation experience is not only gentle and cost-effective but
              also attractive, both in functionality and looks.
            </p>
          </InfoItemContainer>
          <InfoItemContainer style={{ width: "24%" }}>
            <h4>Contact Us</h4>
            <ContactList>
              <ContactListItem>
                <p>Tel : (08)7001 6136</p>
              </ContactListItem>
              <ContactListItem>
                <p>E-mail : forkitchens@hotmail.com</p>
              </ContactListItem>
              <ContactListItem>
                <p>Address : 1/25-27 Musgrave Avenue Welland SA 5007</p>
              </ContactListItem>
            </ContactList>
          </InfoItemContainer>
          <InfoItemContainer style={{ width: "16%" }}>
            <h4>Quick Link</h4>
            <QuickLinkItem href="/">Home</QuickLinkItem>
            <QuickLinkItem href="/about">About Us</QuickLinkItem>
            <QuickLinkItem href="/kitchens">Kitchens</QuickLinkItem>
            <QuickLinkItem href="/gallery">Galley</QuickLinkItem>
            <QuickLinkItem href="/contact">Contact Us</QuickLinkItem>
          </InfoItemContainer>
          <InfoItemContainer style={{ width: "25%" }}>
            <h4>Send Message</h4>
            <ContactForm ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="*Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="*Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <textarea
                name="message"
                placeholder="*Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <SubmitButton type="submit">Send</SubmitButton>
            </ContactForm>
          </InfoItemContainer>
        </InfoContainer>
      )}
      <CopyrightContainer>
        <p>
          Copyright © | For Kitchen PTY LTD <em>ABN 18 622 303 342</em>
        </p>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
