export const AuctionRoadmap = () => {
  return (
    <div className="auction-roadmap">
      <h2>Road Map</h2>
      <div className="roadmap-item">
        <div className="step-number">1</div>
        <div className="step-description">
          <h3>Registration</h3>
          <p>Sign up or log in to participate in the auction.</p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="step-number">2</div>
        <div className="step-description">
          <h3>Item Listing</h3>
          <p>Sellers list their items with detailed descriptions and images.</p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="step-number">3</div>
        <div className="step-description">
          <h3>Bidding</h3>
          <p>
            Buyers place bids on their desired items within the auction period.
          </p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="step-number">4</div>
        <div className="step-description">
          <h3>Winning Bid</h3>
          <p>Identify the highest bidder and winning bid for each item.</p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="step-number">5</div>
        <div className="step-description">
          <h3>Payment</h3>
          <p>Facilitate the payment process for the winning bidders.</p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="step-number">6</div>
        <div className="step-description">
          <h3>Delivery</h3>
          <p>Arrange for the delivery or pickup of purchased items.</p>
        </div>
      </div>
    </div>
  );
};
