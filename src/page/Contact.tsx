import Button from "../components/Button";
import H3 from "../components/H3";
import Input from "../components/Input";

const Contact = () => {
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
                <form>
                    <Input type="text" placeholder="Your Name" label="Name" onChange={() => {}} />
                    <Input type="email" placeholder="Your Email" label="Email" onChange={() => {}} />

                    <div className="form-group">
                        <H3 title="Message" />
                        <textarea id="message" name="message" rows={10} required></textarea>
                    </div>

                    <Button title="send message" onCLick={() => {}} />
                </form>
            </section>
        </article>
    );
};

export default Contact;
