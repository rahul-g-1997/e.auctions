import style from "./home.module.css";
// import SimpleImageSlider from "react-simple-image-slider";
// import img1 from "../../assets/slider1.jpg";
// import img2 from "../../assets/slider2.jpg";
// import img3 from "../../assets/slider3.png";
// import img4 from "../../assets/slider4.jpg";
import traveller from "../../assets/traveller.png";
import Counter from "../../components/counter/Counter";
import Signin from "../../components/signin/signin";
import NotificationSlider from "../../components/notificationSlider/NotificationSlider";
// import Notificationbar from "../../components/headers/Notificationbar";
// import useResizeObserver from "use-resize-observer";
export default function Home() {
  // const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];
  const cards = [
    {
      title: "Auctions Published",
      count: 1347,
      logo: "http://",
    },
    {
      title: "Number of beaders",
      count: 1347,
      logo: "http://",
    },
    {
      title: "Auctions Published",
      count: 1347,
      logo: "http://",
    },
    {
      title: "Auctions Awarded",
      count: 1347,
      logo: "http://",
    },
    {
      title: "Number of beaders",
      count: 1347,
      logo: "http://",
    },
    {
      title: "Auctions Published",
      count: 1347,
      logo: "http://",
    },
    {
      title: "Auctions Awarded",
      count: 1347,
      logo: "http://",
    },
  ];
  // const { ref, width = 1, height = 1 } = useResizeObserver();

  return (
    <div className={style.home}>
      {/* <div className={style.sli}>
         <Notificationbar /> 
        <div
          ref={ref}
          className="card_imgBox"
          style={{ width: "100%", height: "400px" }}
        >
          <SimpleImageSlider
            className="card_img"
            width={width}
            height={height}
            images={images}
            showBullets={true}
            showNavs={true}
            loop={true}
            slideDuration={0.7}
            autoPlay={true}
          />
        </div>
      </div> */}
      <div className={style.section1st}>
        <NotificationSlider />
        <Signin />
      </div>
      <section className={style.roadmap}>
        <h1 className={style.roadmapheading}>
          <span className={"material-symbols-outlined"}>route</span>
          <span> ROAD MAP </span>
        </h1>

        <div className={style.roadmap}>
          <div className={style.roadmapitem}>
            <div className="step-description">
              <h3>Registration</h3>
              <p>Sign up or log in to participate in the auction.</p>
            </div>
          </div>

          <div className={style.roadmapitem}>
            <div className="step-description">
              <h3>Item Listing</h3>
              <p>
                Sellers list their items with detailed descriptions and images.
              </p>
            </div>
          </div>

          <div className={style.roadmapitem}>
            <div className="step-description">
              <h3>Bidding</h3>
              <p>
                Buyers place bids on their desired items within the auction
                period.
              </p>
            </div>
          </div>

          <div className={style.roadmapitem}>
            <div className="step-description">
              <h3>Winning Bid</h3>
              <p>Identify the highest bidder and winning bid for each item.</p>
            </div>
          </div>

          <div className={style.roadmapitem}>
            <div className="step-description">
              <h3>Payment</h3>
              <p>Facilitate the payment process for the winning bidders.</p>
            </div>
          </div>

          <div className={style.roadmapitem}>
            <div className="step-description">
              <h3>Delivery</h3>
              <p>Arrange for the delivery or pickup of purchased items.</p>
            </div>
          </div>

          <div className={style.timelinedivider}>
            <div className={style.timelinetraveller}>
              <img src={traveller} style={{ transform: "rotate(270deg)" }} />
            </div>
          </div>
        </div>
      </section>

      <div className={style.container}>
        {cards.map((card, i) => (
          <div className={style.card} key={i}>
            <h2>{card.title}</h2>
            <p>Count: {card.count}</p>
            <p>Logo: {card.logo}</p>
          </div>
        ))}
      </div>
      <Counter />
    </div>
  );
}
