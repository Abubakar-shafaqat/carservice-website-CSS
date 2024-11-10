"use client";
import "./about.css";
import Image from "next/image";
import '../component/animation.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      
      <h1 className="company-title">Our Company</h1>
      <p className="company-description">
        At 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨, we pride ourselves on delivering exceptional car servicing solutions. With years of experience in the automotive industry, we specialize in keeping your vehicle in top condition. Whether it’s routine maintenance, diagnostics, repairs, or custom services, our goal is to ensure your car runs smoothly and safely. Our commitment to high-quality service, attention to detail, and customer satisfaction sets us apart as a trusted choice for all your car care needs.
      </p>
      
      <hr className="divider" />
      
      <h1 className="team-title">Our Team</h1>
      <p className="team-description">
        Our team consists of highly skilled technicians who bring expertise and dedication to every service. With years of hands-on experience and the latest tools at their disposal, our technicians are equipped to handle a wide range of car issues, from simple repairs to complex diagnostics. They work with precision and care, ensuring that every job is done right the first time, keeping your car running at its best.
      </p>

      <div className="team-image-container">
        <Image
          src="/ourteam.png"
          alt="Our Team"
          className="team-image"
          width={600}
          height={400}
        />
      </div>

      <hr className="divider" />

      <h1 className="who-we-are-title">Who Are We?</h1>
      <p className="who-we-are-description">
        We are a group of passionate car service experts who truly understand the value of your vehicle. Our mission is to provide hassle-free, reliable, and affordable car services while ensuring the safety and longevity of your car. We take pride in building lasting relationships with our customers, offering personalized services, and making sure your car’s needs are always met with the highest standards.
      </p>

      <hr className="divider" />
      
      <h1 className="why-choose-us-title">Why Choose Us?</h1>
      <div className="benefits-list">
        <ul>
          <li className="benefit-item">→ <b>Experienced Technicians</b>: Our skilled team has years of hands-on experience, ensuring reliable and efficient service.</li>
          <li className="benefit-item">→ <b>High-Quality Service</b>: We use the latest tools and techniques to deliver exceptional car care.</li>
          <li className="benefit-item">→ <b>Transparent Pricing</b>: No hidden costs—just honest and upfront pricing for all our services.</li>
          <li className="benefit-item">→ <b>Customer Satisfaction</b>: We prioritize your needs and guarantee top-notch service to keep you satisfied.</li>
          <li className="benefit-item">→ <b>Comprehensive Services</b>: From routine maintenance to complex repairs, we provide a wide range of car services.</li>
          <li className="benefit-item">→ <b>Trustworthy Solutions</b>: Our commitment to quality and safety ensures that your vehicle is always in good hands.</li>
          <li className="benefit-item">→ <b>Fast Turnaround</b>: We aim to complete repairs and services quickly, getting you back on the road without delay.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
