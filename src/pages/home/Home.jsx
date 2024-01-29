import style from "./home.module.css";
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {
  const images = [
    {
      url: "https://github.com/kimcoder/react-simple-image-slider/raw/master/demo.gif",
    },
    { url: "images/2.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];
  return (
    <div className={style.home}>
      <h1>Home</h1>
      <div>
        <SimpleImageSlider
          width={1400}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
}
