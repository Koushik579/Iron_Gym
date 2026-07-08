import "./Map.css";

function Map() {
    return (
        <section className="map_section">

            <div className="section_heading">
                <span className="section_tag">FIND US</span>

                <h2>Visit Iron Gym</h2>

                <p>
                    Conveniently located in the heart of the city.
                    Stop by for a workout or speak with one of our trainers.
                </p>
            </div>

            <div className="map_container">

                <iframe
                    title="Iron Gym Location"
                    src="https://www.google.com/maps?q=Rajkot,Gujarat&output=embed"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>

        </section>
    );
}

export default Map;