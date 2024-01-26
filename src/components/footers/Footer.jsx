import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.sparshtech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sparsh Technologies
        </a>
        . All Rights Reserved.
      </p>
    </div>
  );
}
