import Link from 'next/link';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-heading">About Us</h2>
          <p className="footer-text">
            At 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨, we provide top-notch car services including maintenance, repairs, and diagnostics to ensure your vehicle is always in perfect condition. We are committed to delivering reliable, efficient, and affordable solutions to keep your car running smoothly for years to come.
          </p>
          <p className="footer-text">Our expert technicians are available to help with all types of car issues, no matter how big or small.</p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h2 className="footer-heading"> Our Services </h2>
          <ul className="footer-list">
            <li><Link href="/services" className="footer-link">Routine Maintenance</Link></li>
            <li><Link href="/services" className="footer-link">Brake Repairs</Link></li>
            <li><Link href="/services" className="footer-link">Engine Diagnostics</Link></li>
            <li><Link href="/services" className="footer-link">Oil Changes</Link></li>
            <li><Link href="/services" className="footer-link">Transmission Repair</Link></li>
            <li><Link href="/services" className="footer-link">Tire Services</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <p className="footer-text">Get in touch with us for all your car service needs! We're here to help you keep your vehicle in the best possible shape.</p>
          <p className="footer-text">Email: <Link href="mailto:bakarabumuhammad78@gmail.com" className="footer-link">bakarabumuhammad78@gmail.com</Link></p>
          <p className="footer-text">Phone: <a href="tel:+923012229525" className="footer-link">+92 3282513267</a></p>
          <p className="footer-text">Visit us: Industrial Area, Korangi, Karachi</p>

          {/* Social Media Links */}
          <div className="social-links">
            <Link href="https://www.facebook.com/share/R9pR49U3WiL5KMT8/" className="social-link">Facebook</Link>
            <Link href="https://www.instagram.com/baka.r7002/profilecard/?igsh=ZTN0M3RuNnUycG8w" className="social-link">Instagram</Link>
            <Link href="https://www.linkedin.com/in/abu-bakar-0404022b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link">Linkedin</Link>
          </div>
        </div>
      </div>
      <hr />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>@𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 © 2024 All Rights Reserved</p>
        <p className="created-by">created by ABUBAKAR</p>
      </div>
    </footer>
  );
};

export default Footer;
