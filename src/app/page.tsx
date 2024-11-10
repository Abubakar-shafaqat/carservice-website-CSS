
import "./page.css";
import '../app/component/animation.css'
export default function Main() {
  return (
    <div className="page">
       <div className="main-container">
<div className="desktop-only">
     
        {/* pc*/}
        <div className="text-section-desktop">
          <p className="title">
            <span className="highlight">First</span>
            <span className="regular">Class</span>
            <span className="highlight">Car</span><br />
            <span className="regular">Servicing</span>
          </p>

          <p className="description">
            Your Mechanics – Offering comprehensive car repair and maintenance solutions, delivered conveniently to your doorstep. Whether you’re at home or in the office, we ensure your vehicle is expertly serviced to keep it running smoothly.
          </p>

          <div className="button-container">
            <a href="tel:+92 3282513267" className="contact-button">Contact Us</a>
          </div>
        </div>
      </div>
      

        {/* Mobile Version */}

        <div className="mobile-only">

        <div className="text-section-mobile">
          <p className="titleM">
            <span className="highlightM">First</span>
            <span className="regularM">Class</span>
            <span className="highlightM">Car</span>
            <span className="regularM">Servicing</span>
          </p>

          <p className="descriptionM">
            Your Mechanics – Offering comprehensive car repair and maintenance solutions, delivered conveniently to your doorstep. Whether you’re at home or in the office, we ensure your vehicle is expertly serviced to keep it running smoothly.
          </p>
          <a href="tel:+92 3282513267" className="contact-button">Contact Us</a>

         
        </div>
        </div>
        </div>

        {/* pc */}

        <div className="desktop-only">
            <div className="info-section-desktop">
        <h1 className="sections-title">What we do?</h1>
        <p className="section-text">
        We provide all types of car repair services to keep your vehicle running smoothly. From regular maintenance like oil changes and tire rotations to bigger repairs for the engine, brakes, or electrical systems, we do it all. Our skilled team is here to make sure your car is safe and reliable. We believe in honest work and putting our customers first. This means you can trust us to take good care of your car and explain everything in a clear way. Whether your car needs a quick fix or a major repair, we’re here to help you with friendly, reliable service. Choose 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 for car repair services you can count on. We’re committed to making sure you leave happy and confident in your car’s performance.
        </p>
        <div className="explore-button-container">
          <a href="/services" className="explore-button">Explore More →</a>
        </div>
      </div>
      

      <img src="/do.webp" alt="What we do" className="info-image-desktop" />
      </div>

      {/* Mobile  */}
      <div className="mobile-only">
      <div className="info-section mobile">
        <h1 className="section-title"><b> What we do?</b></h1>
        <p className="section-text">
        We provide all types of car repair services to keep your vehicle running smoothly. From regular maintenance like oil changes and tire rotations to bigger repairs for the engine, brakes, or electrical systems, we do it all. Our skilled team is here to make sure your car is safe and reliable. We believe in honest work and putting our customers first. This means you can trust us to take good care of your car and explain everything in a clear way. Whether your car needs a quick fix or a major repair, we’re here to help you with friendly, reliable service. Choose 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 for car repair services you can count on. We’re committed to making sure you leave happy and confident in your car’s performance.
        </p>
        <div className="explore-button-container">
          <a href="/services" className="explore-button">Explore More →</a>
        </div>
      </div>
      <div className="Ima">

      <img src="/do.webp" alt="What we do" className="info-image mobile" /> </div>
</div>





    </div>
  );
}