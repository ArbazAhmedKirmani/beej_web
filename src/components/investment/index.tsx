const Investment = () => {
  return (
    <>
      <section id="investment">
        <div className="container">
          <h1>Investments</h1>
          <p>
            At Beej Capital, we are passionate about fueling the future of
            financial services by investing in fintech startups that are poised
            to disrupt traditional financial systems. We believe that
            early-stage investment is a powerful catalyst for innovation, and we
            seek to partner with visionary founders who are solving critical
            challenges in the fintech space. Our investment philosophy is
            simple: We back startups with transformative potential. We focus on
            early-stage companies that demonstrate strong product-market fit,
            innovative technology, and a clear path to scalability. We look for
            founders who are not only technically capable but also deeply
            committed to their vision and capable of leading teams through the
            complexities of the startup ecosystem. By providing strategic
            capital and hands-on support, we help our portfolio companies
            achieve their full potential.
          </p>
        </div>
      </section>
      <section className="investment-detail">
        <h1>Our Areas of Focus</h1>
        <div className="focus-areas">
          <div>
            <h4>Digital Payments</h4>
            <p>
              Innovations in mobile payments, blockchain, and financial
              inclusion.
            </p>
          </div>
          <div>
            <h4>Open Banking</h4>
            <p>
              Unlocking new opportunities in open APIs and financial data
              sharing.
            </p>
          </div>
          <div>
            <h4>Financial Inclusion</h4>
            <p>
              Solutions that provide underserved populations access to financial
              services.
            </p>
          </div>
          <div>
            <h4>Blockchain and Web3</h4>
            <p>
              Leveraging decentralized technologies for a new era of financial
              products.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investment;
