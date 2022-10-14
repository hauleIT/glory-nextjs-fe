import React from "react";
import styles from "../../styles/Iphone.module.css";
import BossAvt from "../../assets/buffalo.gif";
import RejectCallIcon from "../../assets/reject-call.svg";
import AcceptCallIcon from "../../assets/accept-call.svg";
import Image from "next/image";

type Props = {};

export default function Iphone14({}: Props) {
  const [isActive, setIsActive] = React.useState(false);
  const changeActive = () => {
    setIsActive(!isActive);
  };

  const [isLock, setUnLock] = React.useState(true);
  const changeLock = () => {
    setUnLock(!isLock);
  };

  return (
    <>
      <div className={styles.iphone}>
        <div
          className={
            isLock ? styles.box : `${styles.box} ${styles.unlockActive}`
          }
        >
          <div className={styles.inner}>
            <div
              onClick={changeActive}
              className={
                isActive
                  ? `${styles.island_popup} ${styles.active}`
                  : styles.island_popup
              }
            >
              <div className={styles.content}>
                <div className={styles.details}>
                  <div className={styles.imgBx}>
                    {/* <Image src={BossAvt} alt="boss" width="35px" height="35px" /> */}
                  </div>
                  <p>Boss Calling</p>
                </div>
                <div className={styles.action}>
                  <Image
                    className={styles.red}
                    src={RejectCallIcon}
                    alt="boss"
                    width="15px"
                    height="15px"
                  />
                  <Image
                    className={styles.green}
                    src={AcceptCallIcon}
                    alt="boss"
                    width="15px"
                    height="15px"
                  />
                </div>
              </div>
            </div>
          </div>

          <i className={`${styles.btn} ${styles.btn1}`}></i>
          <i className={`${styles.btn} ${styles.btn2}`}></i>
          <i className={`${styles.btn} ${styles.btn3}`}></i>
          <i className={styles.rightSideBtn} onClick={changeLock}></i>
        </div>
      </div>
      <div
        className={isLock ? styles.lock : styles.unlock}
        onClick={changeLock}
      >
        <p>Press to unlock screen</p>
      </div>
    </>
  );
}
