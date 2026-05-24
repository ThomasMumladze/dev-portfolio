// ========== React Hook ========== //
import { useState } from "react";

// ========== Component ========== //
import Button from "../components/Button";
import H3 from "../components/H3";
import Input from "../components/Input";

// ========== Api ========== //
import { SendEmail } from "../assets/api/live/LiveApi";

const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState({
        nameError: "",
        emailError: "",
        messageError: "",
    });

    const [success, setSuccess] = useState(false);

    const handleSendMessage = async () => {
        const errors = {
            nameError: !name.trim() ? "Name is required." : "",
            emailError: !email.trim() ? "Email is required." : "",
            messageError: !message.trim() ? "Message is required." : "",
        };

        setErrorMessage(errors);
        if (errors.nameError || errors.emailError || errors.messageError) return;

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

    return (
        <article className="contact-page">
            <section id="route-pathname">
                <div className="route-pathname">
                    home {">"} <H3 title={location.pathname} />
                </div>
            </section>

            <section id="contact--map">
                <div className="map-iframe">
                    <iframe
                        width="100%"
                        height="600"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=tbilisi&amp;maptype=roadmap&amp;zoom=14"
                    >
                        <a href="https://www.maps.ie/create-google-map/">Embed Google Streetview</a>
                    </iframe>
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
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        ErrorMessage={errorMessage.emailError}
                        isRequired={true}
                        type="email"
                        placeholder="Your Email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="form-group">
                        <div>
                            <H3 title="Message" />
                            <p className="error-message">{errorMessage.messageError}</p>
                        </div>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            name="message"
                            rows={10}
                            required
                        ></textarea>
                    </div>
                    <div className="form-send-btn">
                        <p>{success ? "Email Sent SuccessFully" : ""}</p>
                        <Button title="send message" clickFunction={handleSendMessage} />
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Contact;
