// ========== React Hook ========== //
import { useEffect, useState } from "react";

// ========== Component ========== //
import Button from "../components/Button";
import H3 from "../components/H3";
import Input from "../components/Input";
import TextArea from "../components/Textarea";

// ========== Api ========== //
import { SendEmail, GetContact } from "../assets/api/LiveApi";

// ========== React Router ========== //
import { Link } from "react-router";

// ========== React Icon ========== //
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

// ========== Interface ========== //
import type { ContactInfo } from "../types/contactType";

const Contact = () => {
    const [contactData, setContactData] = useState<ContactInfo>();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState({
        nameError: "",
        emailError: "",
        incoRrectEmail: "",
        messageError: "",
    });

    const [success, setSuccess] = useState(false);

    const handleSendMessage = async () => {
        const errors = {
            nameError: !name.trim() ? "Name is required." : "",
            emailError: !email.trim() ? "Email is required." : "",
            incoRrectEmail: !/\S+@\S+\.\S+/.test(email) ? "invalid email" : "",
            messageError: !message.trim() ? "Message is required." : "",
        };

        setErrorMessage(errors);
        if (errors.nameError || errors.emailError || errors.messageError || errors.incoRrectEmail) return;

        try {
            await SendEmail(name, email, message);
            setName("");
            setEmail("");
            setMessage("");
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 1500);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        GetContact().then((res) => setContactData(res));
    }, []);
    return (
        <article className="contact-page">
            <section id="route-pathname">
                <div className="route-pathname">
                    home {">"} <H3 title={location.pathname} />
                </div>
            </section>

            <section id="contact--info">
                <div className="contact--info--wrapper">
                    <div>
                        <SiMaildotru />
                        <p>{contactData?.email}</p>
                    </div>
                    <div>
                        <FaMapMarkerAlt />
                        <p>{contactData?.location}</p>
                    </div>

                    {contactData?.socialUrl?.gitHub ? (
                        <Link to={contactData.socialUrl.gitHub} target="_blank">
                            <FaGithub /> github
                        </Link>
                    ) : null}

                    {contactData?.socialUrl?.linkedIn ? (
                        <Link to={contactData.socialUrl.linkedIn} target="_blank">
                            <FaLinkedin /> LinkedIn
                        </Link>
                    ) : null}
                    {contactData?.socialUrl?.instagram ? (
                        <Link to={contactData.socialUrl.instagram} target="_blank">
                            <FaInstagram /> Instagram
                        </Link>
                    ) : null}
                </div>
            </section>

            <section id="Email">
                <div className="form">
                    <Input
                        ErrorMessage={errorMessage.nameError}
                        isRequired={true}
                        type="text"
                        placeholder="Your Name"
                        label="Name"
                        value={name}
                        onChangeFunc={setName}
                    />

                    <Input
                        ErrorMessage={`${errorMessage.emailError || errorMessage.incoRrectEmail}`}
                        isRequired={true}
                        type="email"
                        placeholder="Your Email"
                        label="Email"
                        value={email}
                        onChangeFunc={setEmail}
                    />

                    <div className="form-group">
                        <TextArea
                            errorMessage={errorMessage.messageError}
                            label="message"
                            placeholder="enter message"
                            textAreValue={message}
                            textAreaOnChange={(e) => setMessage(e.target.value)}
                            textAreaRow={10}
                        />
                    </div>
                    <div className="form-send-btn">
                        <p>{success ? "Email Sent SuccessFully" : ""}</p>
                        <Button children="send message" clickFunction={handleSendMessage} />
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Contact;
