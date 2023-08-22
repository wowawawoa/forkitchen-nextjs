import { styled } from "@mui/system";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContentContainer = styled("div")(({ theme }) => ({
  padding: "5vw 0",
  margin: "0 auto",
  width: "1000px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    padding: "28px 14px 0",
    width: "100%",
  },
}));

const ContactInfoContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  ">h2": {
    color: "#333",
    fontSize: "28px",
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: 0,
  },
  ">h3": {
    color: "#333",
    margin: "0 0 20px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    padding: "16px 0 0",
  },
  [theme.breakpoints.down("lg")]: {
    ">h2": {
      fontSize: "24px",
    },
  },
}));

const ContactInfoList = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "2vw 0",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    margin: "0 auto",
  },
}));

const ContactInfoListItem = styled("li")(({ theme }) => ({
  margin: "0 0 20px",
  alignItems: "center",
  width: "33%",
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
}));

const DetailedContactInfo = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  paddingTop: "10px",
  ">span": {
    fontSize: "20px",
    lineHeight: "24px",
    color: "#333",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
  },
  ">p": {
    margin: 0,
    color: "#666",
    fontSize: "14px",
    lineHeight: "1.5em",
    fontFamily: "'Mukta Vaani', sans-serif",
  },
  ">p>a": {
    textDecoration: "none",
    color: "#666",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "14px",
    ">span": {
      fontSize: "18px",
      lineHeight: "18px",
      textAlign: "left",
    },
  },
}));

const EmailIcon = styled(EmailOutlinedIcon)(({ theme }) => ({
  fontSize: "40px",
  color: "#f99e01",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

const TelIcon = styled(PhoneInTalkOutlinedIcon)(({ theme }) => ({
  fontSize: "40px",
  color: "#f99e01",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

const AddressIcon = styled(PinDropOutlinedIcon)(({ theme }) => ({
  fontSize: "40px",
  color: "#f99e01",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

const ContactFormContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  padding: "40px",
  boxShadow: "6px 5px 30px 0 rgba(0,0,0,0.12)",
  borderRadius: "4px",
  flexDirection: "column",
  ">h2": {
    color: "#333",
    fontSize: "28px",
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: "0 0 20px",
    lineHeight: "1em",
  },
  ">h3": {
    color: "#666",
    fontFamily: "'Mukta Vaani', sans-serif",
    fontWeight: "normal",
    fontSize: "14px",
    padding: "0 0 1em",
    lineHeight: "1.5em",
    margin: 0,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ContactForm = styled("form")(() => ({
  display: "block",
  ">input": {
    width: "100%",
    border: "1px solid #e5e5e5",
    margin: "0 0 10px 0",
    lineHeight: "46px",
    height: "46px",
    fontSize: "14px",
    padding: "0 10px",
    display: "block",
  },
  ">textarea": {
    width: "100%",
    height: "130px",
    border: "1px solid #e5e5e5",
    margin: "0 0 20px 0",
    fontSize: "14px",
    padding: "10px",
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

const SubmitButton = styled("button")(() => ({
  height: "45px",
  lineHeight: "45px",
  backgroundColor: "#f99e01",
  color: "#fff",
  fontSize: "16px",
  textTransform: "uppercase",
  border: "none",
  cursor: "pointer",
  padding: "0 50px",
  fontFamily: "'Mukta Vaani', sans-serif",
}));

const ContactPageContent = () => {
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
          alert(
            "Sorry! Your request failed to send to us! Please try again!"
          );
          console.log(error.text);
        }
      );
  };

  return (
    <ContentContainer>
      <ContactInfoContainer>
        <h2>Quick Contact</h2>
        <h3>Email us and we&apos;ll get back to you as soon as possible.</h3>
        <ContactInfoList>
          <ContactInfoListItem>
            <TelIcon />
            <DetailedContactInfo>
              <span>Tel</span>
              <p>
                <a href="tel:+61-452110806">(08)7001 6136</a>
              </p>
            </DetailedContactInfo>
          </ContactInfoListItem>
          <ContactInfoListItem>
            <EmailIcon />
            <DetailedContactInfo>
              <span>E-mail</span>
              <p>
                <a href="mailto:forkitchens@hotmail.com">
                  forkitchens@hotmail.com
                </a>
              </p>
            </DetailedContactInfo>
          </ContactInfoListItem>
          <ContactInfoListItem>
            <AddressIcon />
            <DetailedContactInfo>
              <span>Address</span>
              <p>1/25-27 Musgrave Avenue Welland SA 5007</p>
            </DetailedContactInfo>
          </ContactInfoListItem>
        </ContactInfoList>
      </ContactInfoContainer>
      <ContactFormContainer>
        <h2>Contact Form</h2>
        <h3>Fill This So We Can Learn More About You And Your Project.</h3>
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
      </ContactFormContainer>
    </ContentContainer>
  );
};

export default ContactPageContent;
