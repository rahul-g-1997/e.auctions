import style from "./home.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.png";
import img4 from "../../assets/slider4.jpg";
import Counter from "../../components/counter/Counter";
import Notificationbar from "../../components/headers/Notificationbar";
import { AuctionRoadmap } from "../../components/auctionRoadmap/AuctionRoadmap";

export default function Home() {
  const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];
  const cards = [
    {
      title: "Auctions Starting Today",
      count: 1347,
      logo: "http://",
    },
    {
      title: "Auctions Closing Today",
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
      title: "abc",
      count: 1347,
      logo: "http://",
    },
    {
      title: "abc",
      count: 1347,
      logo: "http://",
    },
    {
      title: "abc",
      count: 1347,
      logo: "http://",
    },
    
  ];
  return (
    <div className={style.home}>
      <div className={style.sli}>
        <Notificationbar />
        <SimpleImageSlider
          width={1416}
          height={400}
          images={images}
          showBullets={true}
          showNavs={true}
          loop={true}
          slideDuration={0.7}
          autoPlay={true}
        />
      </div>
      <AuctionRoadmap />
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
