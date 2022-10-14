import React from "react";
import HomeIcon from "../../../assets/home-outline.svg";
import styles from "../../styles/Nav.module.css";
import Image from "next/image";

type Props = {};

export default function Menu({}: Props) {
  const [isActive, setIsActive] = React.useState("1");

  // const toggleClass = (id: string) => {
  //   setIsActive(!isActive);
  // };

  const values = [
    { id: "1", text: "home" },
    { id: "2", text: "home" },
    { id: "3", text: "home" },
    { id: "4", text: "home" },
    { id: "5", text: "home" },
  ];

  return (
    <div className={styles.navigation}>
      <ul>
        {values.map((val) => (
          <li
            key={val.id}
            id={val.id}
            onClick={() => setIsActive(val.id)}
            className={
              isActive === val.id
                ? `${styles.active} ${styles.list}`
                : styles.list
            }
          >
            <a href="#">
              <span className={styles.icon}>
                <Image src={HomeIcon} width={20} height={20} alt="home" />
              </span>
              <span className={styles.text}>{val.text}</span>
            </a>
          </li>
        ))}

        <div className={styles.indicator}></div>
      </ul>
    </div>
  );
}
