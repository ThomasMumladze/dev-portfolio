import H3 from "../components/H3";

const Contact = () => {
    return (
        <article className="contact-page">
            <section id="contact--map">
                <div className="route-pathname">
                    home {">"} <H3 title={location.pathname} />
                </div>

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
        </article>
    );
};

export default Contact;
