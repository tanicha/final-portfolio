export default function ContactMe() {
    return (
        <section id="contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2 className="contact--heading">Contact Me</h2>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">Name</span>
                        <h2> Tani Cha </h2>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <h2> tanijcha@gmail.com </h2>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <h2> (253) 590-9749 </h2>
                    </label>
                </div>
            </form>
        </section>
    );
};