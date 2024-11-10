
import "./servives.css"

export default function Services() {
  return (
    <div className="services-container">
      {/* Main Heading */}
      <div className="heading">
        <h1>Our Services</h1>
      </div>

      {/* Services Section */}
      <div className="services-grid">
        {/* Service Card 1 */}
        <div className="service-card">
          <div className="service-image">
            <img 
              src="/oil-change.jpg" 
              alt="Oil Change" 
            />
          </div>
          <h2>Oil Change</h2>
          <p>
            Regular oil changes are essential to keep your engine running smoothly. Our oil change service ensures your engine stays well-lubricated and efficient.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="service-card">
          <div className="service-image">
            <img 
              src="/QualityBrakeService.jpg" 
              alt="Brake Services" 
            />
          </div>
          <h2>Brake Services</h2>
          <p>
            We provide top-notch brake inspection and replacement services to ensure your safety on the road. Don't compromise on brake performance!
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="service-card">
          <div className="service-image">
            <img 
              src="/Tire-Repair-facts.jpg" 
              alt="Tire Services" 
            />
          </div>
          <h2>Tire Services</h2>
          <p>
            Our tire services include balancing, rotation, and replacement. We help you get the best tires to ensure a smooth and safe driving experience.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="service-card">
          <div className="service-image">
            <img 
              src="/diagnostics-01.jpg" 
              alt="Engine Diagnostics" 
            />
          </div>
          <h2>Engine Diagnostics</h2>
          <p>
            Our advanced diagnostic tools help us identify engine issues before they become major problems, ensuring your car stays in peak condition.
          </p>
        </div>

        {/* Service Card 5 */}
        <div className="service-card">
          <div className="service-image">
            <img 
              src="/9-Best-Car-AC-Repair.jpg" 
              alt="AC Repair & Maintenance" 
            />
          </div>
          <h2>AC Repair & Maintenance</h2>
          <p>
            Keep your cabin cool during the summer with our AC repair and maintenance services. We ensure your air conditioning is always working at its best.
          </p>
        </div>

        {/* Service Card 6 */}
        <div className="service-card">
          <div className="service-image">
            <img 
              src="/battery-cnt.jpg" 
              alt="Battery Services" 
            />
          </div>
          <h2>Battery Services</h2>
          <p>
            We provide battery testing, charging, and replacement to ensure your vehicle always starts reliably, even on the coldest mornings.
          </p>
        </div>
      </div>
    </div>
  );
}
