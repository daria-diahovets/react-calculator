import { useEffect, useRef, useState } from "react";
import "./MenuControl.css";
import { observer } from "mobx-react-lite";
import themes, { type TTheme } from "./store/themes";
import sounds from "./store/sounds";

const THEMES_BTN = [
  "blue-theme",
  "green-theme",
  "yellow-theme",
  "pink-theme",
  "purple-theme",
];

const MenuControl = observer(() => {
  const [isMusicOn, setIsMusicOn] = useState<boolean>(false);
  const [isMenuThemesVisible, setIsMenuThemesVisible] =
    useState<boolean>(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    musicRef.current = new Audio("sounds/music.mp3");
    musicRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (!musicRef.current) return;

    if (isMusicOn) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }
  }, [isMusicOn]);

  const toggleMusic = () => {
    sounds.playClick();
    setIsMusicOn((prev) => !prev);
  };
  const toggleMenuThemesVisible = () => {
    sounds.playClick();
    setIsMenuThemesVisible((prev) => !prev);
  };

  return (
    <div className="menu">
      <div className="theme">
        <button onClick={toggleMenuThemesVisible}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 2H30V4H32V2Z" fill="currentColor" />
            <path d="M34 2H32V4H34V2Z" fill="currentColor" />
            <path d="M30 4H28V6H30V4Z" fill="currentColor" />
            <path d="M32 4H30V6H32V4Z" fill="currentColor" />
            <path d="M34 4H32V6H34V4Z" fill="currentColor" />
            <path d="M36 4H34V6H36V4Z" fill="currentColor" />
            <path d="M28 6H26V8H28V6Z" fill="currentColor" />
            <path d="M30 6H28V8H30V6Z" fill="currentColor" />
            <path d="M32 6H30V8H32V6Z" fill="currentColor" />
            <path d="M34 6H32V8H34V6Z" fill="currentColor" />
            <path d="M36 6H34V8H36V6Z" fill="currentColor" />
            <path d="M38 6H36V8H38V6Z" fill="currentColor" />
            <path d="M26 8H24V10H26V8Z" fill="currentColor" />
            <path d="M28 8H26V10H28V8Z" fill="currentColor" />
            <path d="M30 8H28V10H30V8Z" fill="currentColor" />
            <path d="M32 8H30V10H32V8Z" fill="currentColor" />
            <path d="M34 8H32V10H34V8Z" fill="currentColor" />
            <path d="M36 8H34V10H36V8Z" fill="currentColor" />
            <path d="M38 8H36V10H38V8Z" fill="currentColor" />
            <path d="M24 10H22V12H24V10Z" fill="currentColor" />
            <path d="M26 10H24V12H26V10Z" fill="currentColor" />
            <path d="M28 10H26V12H28V10Z" fill="currentColor" />
            <path d="M30 10H28V12H30V10Z" fill="currentColor" />
            <path d="M32 10H30V12H32V10Z" fill="currentColor" />
            <path d="M34 10H32V12H34V10Z" fill="currentColor" />
            <path d="M36 10H34V12H36V10Z" fill="currentColor" />
            <path d="M22 12H20V14H22V12Z" fill="currentColor" />
            <path d="M24 12H22V14H24V12Z" fill="currentColor" />
            <path d="M26 12H24V14H26V12Z" fill="currentColor" />
            <path d="M28 12H26V14H28V12Z" fill="currentColor" />
            <path d="M30 12H28V14H30V12Z" fill="currentColor" />
            <path d="M32 12H30V14H32V12Z" fill="currentColor" />
            <path d="M34 12H32V14H34V12Z" fill="currentColor" />
            <path d="M20 14H18V16H20V14Z" fill="currentColor" />
            <path d="M22 14H20V16H22V14Z" fill="currentColor" />
            <path d="M24 14H22V16H24V14Z" fill="currentColor" />
            <path d="M26 14H24V16H26V14Z" fill="currentColor" />
            <path d="M28 14H26V16H28V14Z" fill="currentColor" />
            <path d="M30 14H28V16H30V14Z" fill="currentColor" />
            <path d="M32 14H30V16H32V14Z" fill="currentColor" />
            <path d="M16 16H14V18H16V16Z" fill="currentColor" />
            <path d="M18 16H16V18H18V16Z" fill="currentColor" />
            <path d="M20 16H18V18H20V16Z" fill="currentColor" />
            <path d="M22 16H20V18H22V16Z" fill="currentColor" />
            <path d="M24 16H22V18H24V16Z" fill="currentColor" />
            <path d="M26 16H24V18H26V16Z" fill="currentColor" />
            <path d="M28 16H26V18H28V16Z" fill="currentColor" />
            <path d="M30 16H28V18H30V16Z" fill="currentColor" />
            <path d="M14 18H12V20H14V18Z" fill="currentColor" />
            <path d="M20 18H18V20H20V18Z" fill="currentColor" />
            <path d="M22 18H20V20H22V18Z" fill="currentColor" />
            <path d="M24 18H22V20H24V18Z" fill="currentColor" />
            <path d="M26 18H24V20H26V18Z" fill="currentColor" />
            <path d="M28 18H26V20H28V18Z" fill="currentColor" />
            <path d="M10 20H8V22H10V20Z" fill="currentColor" />
            <path d="M12 20H10V22H12V20Z" fill="currentColor" />
            <path d="M22 20H20V22H22V20Z" fill="currentColor" />
            <path d="M24 20H22V22H24V20Z" fill="currentColor" />
            <path d="M26 20H24V22H26V20Z" fill="currentColor" />
            <path d="M8 22H6V24H8V22Z" fill="currentColor" />
            <path d="M14 22H12V24H14V22Z" fill="currentColor" />
            <path d="M24 22H22V24H24V22Z" fill="currentColor" />
            <path d="M6 24H4V26H6V24Z" fill="currentColor" />
            <path d="M16 24H14V26H16V24Z" fill="currentColor" />
            <path d="M20 24H18V26H20V24Z" fill="currentColor" />
            <path d="M24 24H22V26H24V24Z" fill="currentColor" />
            <path d="M6 26H4V28H6V26Z" fill="currentColor" />
            <path d="M18 26H16V28H18V26Z" fill="currentColor" />
            <path d="M22 26H20V28H22V26Z" fill="currentColor" />
            <path d="M6 28H4V30H6V28Z" fill="currentColor" />
            <path d="M16 28H14V30H16V28Z" fill="currentColor" />
            <path d="M20 28H18V30H20V28Z" fill="currentColor" />
            <path d="M6 30H4V32H6V30Z" fill="currentColor" />
            <path d="M14 30H12V32H14V30Z" fill="currentColor" />
            <path d="M16 30H14V32H16V30Z" fill="currentColor" />
            <path d="M20 30H18V32H20V30Z" fill="currentColor" />
            <path d="M6 32H4V34H6V32Z" fill="currentColor" />
            <path d="M12 32H10V34H12V32Z" fill="currentColor" />
            <path d="M14 32H12V34H14V32Z" fill="currentColor" />
            <path d="M20 32H18V34H20V32Z" fill="currentColor" />
            <path d="M4 34H2V36H4V34Z" fill="currentColor" />
            <path d="M18 34H16V36H18V34Z" fill="currentColor" />
            <path d="M6 36H4V38H6V36Z" fill="currentColor" />
            <path d="M8 36H6V38H8V36Z" fill="currentColor" />
            <path d="M10 36H8V38H10V36Z" fill="currentColor" />
            <path d="M12 36H10V38H12V36Z" fill="currentColor" />
            <path d="M14 36H12V38H14V36Z" fill="currentColor" />
            <path d="M16 36H14V38H16V36Z" fill="currentColor" />
          </svg>
        </button>
        <div className={`themes ${isMenuThemesVisible ? "visible" : ""}`}>
          {THEMES_BTN.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                themes.changeTheme(item as TTheme);
                sounds.playClick();
              }}
              className={`${themes.theme === item ? "active" : ""}`}
            >
              ✓
            </span>
          ))}
        </div>
      </div>
      <button onClick={toggleMusic}>
        {isMusicOn ? (
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7 6.30005H12.6V8.40005H14.7V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M16.8 6.30005H14.7V8.40005H16.8V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M18.9 6.30005H16.8V8.40005H18.9V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M21 6.30005H18.9V8.40005H21V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M23.1 6.30005H21V8.40005H23.1V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M25.2 6.30005H23.1V8.40005H25.2V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M27.3 6.30005H25.2V8.40005H27.3V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M29.4 6.30005H27.3V8.40005H29.4V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M31.5 6.30005H29.4V8.40005H31.5V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M33.6 6.30005H31.5V8.40005H33.6V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M14.7 8.3999H12.6V10.4999H14.7V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M16.8 8.3999H14.7V10.4999H16.8V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M18.9 8.3999H16.8V10.4999H18.9V8.3999Z"
              fill="currentColor"
            />
            <path d="M21 8.3999H18.9V10.4999H21V8.3999Z" fill="currentColor" />
            <path
              d="M23.1 8.3999H21V10.4999H23.1V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M25.2 8.3999H23.1V10.4999H25.2V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M27.3 8.3999H25.2V10.4999H27.3V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M29.4 8.3999H27.3V10.4999H29.4V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M31.5 8.3999H29.4V10.4999H31.5V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M33.6 8.3999H31.5V10.4999H33.6V8.3999Z"
              fill="currentColor"
            />
            <path d="M14.7 10.5H12.6V12.6H14.7V10.5Z" fill="currentColor" />
            <path d="M16.8 10.5H14.7V12.6H16.8V10.5Z" fill="currentColor" />
            <path d="M18.9 10.5H16.8V12.6H18.9V10.5Z" fill="currentColor" />
            <path d="M21 10.5H18.9V12.6H21V10.5Z" fill="currentColor" />
            <path d="M23.1 10.5H21V12.6H23.1V10.5Z" fill="currentColor" />
            <path d="M25.2 10.5H23.1V12.6H25.2V10.5Z" fill="currentColor" />
            <path d="M27.3 10.5H25.2V12.6H27.3V10.5Z" fill="currentColor" />
            <path d="M29.4 10.5H27.3V12.6H29.4V10.5Z" fill="currentColor" />
            <path d="M31.5 10.5H29.4V12.6H31.5V10.5Z" fill="currentColor" />
            <path d="M33.6 10.5H31.5V12.6H33.6V10.5Z" fill="currentColor" />
            <path
              d="M14.7 12.6001H12.6V14.7001H14.7V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M16.8 12.6001H14.7V14.7001H16.8V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M18.9 12.6001H16.8V14.7001H18.9V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M21 12.6001H18.9V14.7001H21V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M23.1 12.6001H21V14.7001H23.1V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M25.2 12.6001H23.1V14.7001H25.2V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M27.3 12.6001H25.2V14.7001H27.3V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M29.4 12.6001H27.3V14.7001H29.4V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M31.5 12.6001H29.4V14.7001H31.5V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M33.6 12.6001H31.5V14.7001H33.6V12.6001Z"
              fill="currentColor"
            />
            <path d="M14.7 14.7H12.6V16.8H14.7V14.7Z" fill="currentColor" />
            <path d="M33.6 14.7H31.5V16.8H33.6V14.7Z" fill="currentColor" />
            <path d="M14.7 16.8H12.6V18.9H14.7V16.8Z" fill="currentColor" />
            <path d="M33.6 16.8H31.5V18.9H33.6V16.8Z" fill="currentColor" />
            <path
              d="M14.7 18.8999H12.6V20.9999H14.7V18.8999Z"
              fill="currentColor"
            />
            <path
              d="M33.6 18.8999H31.5V20.9999H33.6V18.8999Z"
              fill="currentColor"
            />
            <path d="M14.7 21H12.6V23.1H14.7V21Z" fill="currentColor" />
            <path d="M33.6 21H31.5V23.1H33.6V21Z" fill="currentColor" />
            <path
              d="M14.7 23.1001H12.6V25.2001H14.7V23.1001Z"
              fill="currentColor"
            />
            <path
              d="M33.6 23.1001H31.5V25.2001H33.6V23.1001Z"
              fill="currentColor"
            />
            <path d="M14.7 25.2H12.6V27.3H14.7V25.2Z" fill="currentColor" />
            <path d="M33.6 25.2H31.5V27.3H33.6V25.2Z" fill="currentColor" />
            <path d="M8.4 27.3H6.3V29.4H8.4V27.3Z" fill="currentColor" />
            <path d="M10.5 27.3H8.4V29.4H10.5V27.3Z" fill="currentColor" />
            <path d="M12.6 27.3H10.5V29.4H12.6V27.3Z" fill="currentColor" />
            <path d="M14.7 27.3H12.6V29.4H14.7V27.3Z" fill="currentColor" />
            <path d="M27.3 27.3H25.2V29.4H27.3V27.3Z" fill="currentColor" />
            <path d="M29.4 27.3H27.3V29.4H29.4V27.3Z" fill="currentColor" />
            <path d="M31.5 27.3H29.4V29.4H31.5V27.3Z" fill="currentColor" />
            <path d="M33.6 27.3H31.5V29.4H33.6V27.3Z" fill="currentColor" />
            <path
              d="M6.3 29.3999H4.2V31.4999H6.3V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M8.4 29.3999H6.3V31.4999H8.4V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M10.5 29.3999H8.4V31.4999H10.5V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M12.6 29.3999H10.5V31.4999H12.6V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M14.7 29.3999H12.6V31.4999H14.7V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M25.2 29.3999H23.1V31.4999H25.2V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M27.3 29.3999H25.2V31.4999H27.3V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M29.4 29.3999H27.3V31.4999H29.4V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M31.5 29.3999H29.4V31.4999H31.5V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M33.6 29.3999H31.5V31.4999H33.6V29.3999Z"
              fill="currentColor"
            />
            <path d="M6.3 31.5H4.2V33.6H6.3V31.5Z" fill="currentColor" />
            <path d="M8.4 31.5H6.3V33.6H8.4V31.5Z" fill="currentColor" />
            <path d="M10.5 31.5H8.4V33.6H10.5V31.5Z" fill="currentColor" />
            <path d="M12.6 31.5H10.5V33.6H12.6V31.5Z" fill="currentColor" />
            <path d="M14.7 31.5H12.6V33.6H14.7V31.5Z" fill="currentColor" />
            <path d="M25.2 31.5H23.1V33.6H25.2V31.5Z" fill="currentColor" />
            <path d="M27.3 31.5H25.2V33.6H27.3V31.5Z" fill="currentColor" />
            <path d="M29.4 31.5H27.3V33.6H29.4V31.5Z" fill="currentColor" />
            <path d="M31.5 31.5H29.4V33.6H31.5V31.5Z" fill="currentColor" />
            <path d="M33.6 31.5H31.5V33.6H33.6V31.5Z" fill="currentColor" />
            <path
              d="M8.4 33.6001H6.3V35.7001H8.4V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M10.5 33.6001H8.4V35.7001H10.5V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M12.6 33.6001H10.5V35.7001H12.6V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M27.3 33.6001H25.2V35.7001H27.3V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M29.4 33.6001H27.3V35.7001H29.4V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M31.5 33.6001H29.4V35.7001H31.5V33.6001Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4 6.30005H6.3V8.40005H8.4V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M14.7 6.30005H12.6V8.40005H14.7V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M16.8 6.30005H14.7V8.40005H16.8V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M18.9 6.30005H16.8V8.40005H18.9V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M21 6.30005H18.9V8.40005H21V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M23.1 6.30005H21V8.40005H23.1V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M25.2 6.30005H23.1V8.40005H25.2V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M27.3 6.30005H25.2V8.40005H27.3V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M29.4 6.30005H27.3V8.40005H29.4V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M31.5 6.30005H29.4V8.40005H31.5V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M33.6 6.30005H31.5V8.40005H33.6V6.30005Z"
              fill="currentColor"
            />
            <path
              d="M10.5 8.3999H8.4V10.4999H10.5V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M16.8 8.3999H14.7V10.4999H16.8V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M18.9 8.3999H16.8V10.4999H18.9V8.3999Z"
              fill="currentColor"
            />
            <path d="M21 8.3999H18.9V10.4999H21V8.3999Z" fill="currentColor" />
            <path
              d="M23.1 8.3999H21V10.4999H23.1V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M25.2 8.3999H23.1V10.4999H25.2V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M27.3 8.3999H25.2V10.4999H27.3V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M29.4 8.3999H27.3V10.4999H29.4V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M31.5 8.3999H29.4V10.4999H31.5V8.3999Z"
              fill="currentColor"
            />
            <path
              d="M33.6 8.3999H31.5V10.4999H33.6V8.3999Z"
              fill="currentColor"
            />
            <path d="M12.6 10.5H10.5V12.6H12.6V10.5Z" fill="currentColor" />
            <path d="M18.9 10.5H16.8V12.6H18.9V10.5Z" fill="currentColor" />
            <path d="M21 10.5H18.9V12.6H21V10.5Z" fill="currentColor" />
            <path d="M23.1 10.5H21V12.6H23.1V10.5Z" fill="currentColor" />
            <path d="M25.2 10.5H23.1V12.6H25.2V10.5Z" fill="currentColor" />
            <path d="M27.3 10.5H25.2V12.6H27.3V10.5Z" fill="currentColor" />
            <path d="M29.4 10.5H27.3V12.6H29.4V10.5Z" fill="currentColor" />
            <path d="M31.5 10.5H29.4V12.6H31.5V10.5Z" fill="currentColor" />
            <path d="M33.6 10.5H31.5V12.6H33.6V10.5Z" fill="currentColor" />
            <path
              d="M14.7 12.6001H12.6V14.7001H14.7V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M23.1 12.6001H21V14.7001H23.1V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M25.2 12.6001H23.1V14.7001H25.2V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M27.3 12.6001H25.2V14.7001H27.3V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M29.4 12.6001H27.3V14.7001H29.4V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M31.5 12.6001H29.4V14.7001H31.5V12.6001Z"
              fill="currentColor"
            />
            <path
              d="M33.6 12.6001H31.5V14.7001H33.6V12.6001Z"
              fill="currentColor"
            />
            <path d="M16.8 14.7H14.7V16.8H16.8V14.7Z" fill="currentColor" />
            <path d="M33.6 14.7H31.5V16.8H33.6V14.7Z" fill="currentColor" />
            <path d="M18.9 16.8H16.8V18.9H18.9V16.8Z" fill="currentColor" />
            <path d="M33.6 16.8H31.5V18.9H33.6V16.8Z" fill="currentColor" />
            <path
              d="M14.7 18.8999H12.6V20.9999H14.7V18.8999Z"
              fill="currentColor"
            />
            <path
              d="M21 18.8999H18.9V20.9999H21V18.8999Z"
              fill="currentColor"
            />
            <path
              d="M33.6 18.8999H31.5V20.9999H33.6V18.8999Z"
              fill="currentColor"
            />
            <path d="M14.7 21H12.6V23.1H14.7V21Z" fill="currentColor" />
            <path d="M23.1 21H21V23.1H23.1V21Z" fill="currentColor" />
            <path d="M33.6 21H31.5V23.1H33.6V21Z" fill="currentColor" />
            <path
              d="M14.7 23.1001H12.6V25.2001H14.7V23.1001Z"
              fill="currentColor"
            />
            <path
              d="M25.2 23.1001H23.1V25.2001H25.2V23.1001Z"
              fill="currentColor"
            />
            <path
              d="M33.6 23.1001H31.5V25.2001H33.6V23.1001Z"
              fill="currentColor"
            />
            <path d="M14.7 25.2H12.6V27.3H14.7V25.2Z" fill="currentColor" />
            <path d="M27.3 25.2H25.2V27.3H27.3V25.2Z" fill="currentColor" />
            <path d="M33.6 25.2H31.5V27.3H33.6V25.2Z" fill="currentColor" />
            <path d="M8.4 27.3H6.3V29.4H8.4V27.3Z" fill="currentColor" />
            <path d="M10.5 27.3H8.4V29.4H10.5V27.3Z" fill="currentColor" />
            <path d="M12.6 27.3H10.5V29.4H12.6V27.3Z" fill="currentColor" />
            <path d="M14.7 27.3H12.6V29.4H14.7V27.3Z" fill="currentColor" />
            <path d="M29.4 27.3H27.3V29.4H29.4V27.3Z" fill="currentColor" />
            <path
              d="M6.3 29.3999H4.2V31.4999H6.3V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M8.4 29.3999H6.3V31.4999H8.4V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M10.5 29.3999H8.4V31.4999H10.5V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M12.6 29.3999H10.5V31.4999H12.6V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M14.7 29.3999H12.6V31.4999H14.7V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M25.2 29.3999H23.1V31.4999H25.2V29.3999Z"
              fill="currentColor"
            />
            <path
              d="M31.5 29.3999H29.4V31.4999H31.5V29.3999Z"
              fill="currentColor"
            />
            <path d="M6.3 31.5H4.2V33.6H6.3V31.5Z" fill="currentColor" />
            <path d="M8.4 31.5H6.3V33.6H8.4V31.5Z" fill="currentColor" />
            <path d="M10.5 31.5H8.4V33.6H10.5V31.5Z" fill="currentColor" />
            <path d="M12.6 31.5H10.5V33.6H12.6V31.5Z" fill="currentColor" />
            <path d="M14.7 31.5H12.6V33.6H14.7V31.5Z" fill="currentColor" />
            <path d="M25.2 31.5H23.1V33.6H25.2V31.5Z" fill="currentColor" />
            <path d="M27.3 31.5H25.2V33.6H27.3V31.5Z" fill="currentColor" />
            <path d="M33.6 31.5H31.5V33.6H33.6V31.5Z" fill="currentColor" />
            <path
              d="M8.4 33.6001H6.3V35.7001H8.4V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M10.5 33.6001H8.4V35.7001H10.5V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M12.6 33.6001H10.5V35.7001H12.6V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M27.3 33.6001H25.2V35.7001H27.3V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M29.4 33.6001H27.3V35.7001H29.4V33.6001Z"
              fill="currentColor"
            />
            <path
              d="M35.7 33.6001H33.6V35.7001H35.7V33.6001Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <button onClick={() => sounds.toggleSound()}>
        {sounds.isSoundOn ? (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6H18V8H20V6Z" fill="currentColor" />
            <path d="M22 6H20V8H22V6Z" fill="currentColor" />
            <path d="M18 8H16V10H18V8Z" fill="currentColor" />
            <path d="M22 8H20V10H22V8Z" fill="currentColor" />
            <path d="M28 8H26V10H28V8Z" fill="currentColor" />
            <path d="M16 10H14V12H16V10Z" fill="currentColor" />
            <path d="M22 10H20V12H22V10Z" fill="currentColor" />
            <path d="M30 10H28V12H30V10Z" fill="currentColor" />
            <path d="M14 12H12V14H14V12Z" fill="currentColor" />
            <path d="M22 12H20V14H22V12Z" fill="currentColor" />
            <path d="M32 12H30V14H32V12Z" fill="currentColor" />
            <path d="M8 14H6V16H8V14Z" fill="currentColor" />
            <path d="M10 14H8V16H10V14Z" fill="currentColor" />
            <path d="M12 14H10V16H12V14Z" fill="currentColor" />
            <path d="M22 14H20V16H22V14Z" fill="currentColor" />
            <path d="M32 14H30V16H32V14Z" fill="currentColor" />
            <path d="M6 16H4V18H6V16Z" fill="currentColor" />
            <path d="M8 16H6V18H8V16Z" fill="currentColor" />
            <path d="M10 16H8V18H10V16Z" fill="currentColor" />
            <path d="M22 16H20V18H22V16Z" fill="currentColor" />
            <path d="M26 16H24V18H26V16Z" fill="currentColor" />
            <path d="M34 16H32V18H34V16Z" fill="currentColor" />
            <path d="M6 18H4V20H6V18Z" fill="currentColor" />
            <path d="M8 18H6V20H8V18Z" fill="currentColor" />
            <path d="M10 18H8V20H10V18Z" fill="currentColor" />
            <path d="M22 18H20V20H22V18Z" fill="currentColor" />
            <path d="M28 18H26V20H28V18Z" fill="currentColor" />
            <path d="M34 18H32V20H34V18Z" fill="currentColor" />
            <path d="M6 20H4V22H6V20Z" fill="currentColor" />
            <path d="M8 20H6V22H8V20Z" fill="currentColor" />
            <path d="M10 20H8V22H10V20Z" fill="currentColor" />
            <path d="M22 20H20V22H22V20Z" fill="currentColor" />
            <path d="M28 20H26V22H28V20Z" fill="currentColor" />
            <path d="M34 20H32V22H34V20Z" fill="currentColor" />
            <path d="M6 22H4V24H6V22Z" fill="currentColor" />
            <path d="M8 22H6V24H8V22Z" fill="currentColor" />
            <path d="M10 22H8V24H10V22Z" fill="currentColor" />
            <path d="M22 22H20V24H22V22Z" fill="currentColor" />
            <path d="M26 22H24V24H26V22Z" fill="currentColor" />
            <path d="M34 22H32V24H34V22Z" fill="currentColor" />
            <path d="M8 24H6V26H8V24Z" fill="currentColor" />
            <path d="M10 24H8V26H10V24Z" fill="currentColor" />
            <path d="M12 24H10V26H12V24Z" fill="currentColor" />
            <path d="M22 24H20V26H22V24Z" fill="currentColor" />
            <path d="M32 24H30V26H32V24Z" fill="currentColor" />
            <path d="M14 26H12V28H14V26Z" fill="currentColor" />
            <path d="M22 26H20V28H22V26Z" fill="currentColor" />
            <path d="M32 26H30V28H32V26Z" fill="currentColor" />
            <path d="M16 28H14V30H16V28Z" fill="currentColor" />
            <path d="M22 28H20V30H22V28Z" fill="currentColor" />
            <path d="M30 28H28V30H30V28Z" fill="currentColor" />
            <path d="M18 30H16V32H18V30Z" fill="currentColor" />
            <path d="M22 30H20V32H22V30Z" fill="currentColor" />
            <path d="M28 30H26V32H28V30Z" fill="currentColor" />
            <path d="M20 32H18V34H20V32Z" fill="currentColor" />
            <path d="M22 32H20V34H22V32Z" fill="currentColor" />
          </svg>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6H18V8H20V6Z" fill="currentColor" />
            <path d="M22 6H20V8H22V6Z" fill="currentColor" />
            <path d="M18 8H16V10H18V8Z" fill="currentColor" />
            <path d="M22 8H20V10H22V8Z" fill="currentColor" />
            <path d="M16 10H14V12H16V10Z" fill="currentColor" />
            <path d="M22 10H20V12H22V10Z" fill="currentColor" />
            <path d="M14 12H12V14H14V12Z" fill="currentColor" />
            <path d="M22 12H20V14H22V12Z" fill="currentColor" />
            <path d="M8 14H6V16H8V14Z" fill="currentColor" />
            <path d="M10 14H8V16H10V14Z" fill="currentColor" />
            <path d="M12 14H10V16H12V14Z" fill="currentColor" />
            <path d="M22 14H20V16H22V14Z" fill="currentColor" />
            <path d="M26 14H24V16H26V14Z" fill="currentColor" />
            <path d="M34 14H32V16H34V14Z" fill="currentColor" />
            <path d="M6 16H4V18H6V16Z" fill="currentColor" />
            <path d="M8 16H6V18H8V16Z" fill="currentColor" />
            <path d="M10 16H8V18H10V16Z" fill="currentColor" />
            <path d="M22 16H20V18H22V16Z" fill="currentColor" />
            <path d="M28 16H26V18H28V16Z" fill="currentColor" />
            <path d="M32 16H30V18H32V16Z" fill="currentColor" />
            <path d="M6 18H4V20H6V18Z" fill="currentColor" />
            <path d="M8 18H6V20H8V18Z" fill="currentColor" />
            <path d="M10 18H8V20H10V18Z" fill="currentColor" />
            <path d="M22 18H20V20H22V18Z" fill="currentColor" />
            <path d="M30 18H28V20H30V18Z" fill="currentColor" />
            <path d="M6 20H4V22H6V20Z" fill="currentColor" />
            <path d="M8 20H6V22H8V20Z" fill="currentColor" />
            <path d="M10 20H8V22H10V20Z" fill="currentColor" />
            <path d="M22 20H20V22H22V20Z" fill="currentColor" />
            <path d="M30 20H28V22H30V20Z" fill="currentColor" />
            <path d="M6 22H4V24H6V22Z" fill="currentColor" />
            <path d="M8 22H6V24H8V22Z" fill="currentColor" />
            <path d="M10 22H8V24H10V22Z" fill="currentColor" />
            <path d="M22 22H20V24H22V22Z" fill="currentColor" />
            <path d="M28 22H26V24H28V22Z" fill="currentColor" />
            <path d="M32 22H30V24H32V22Z" fill="currentColor" />
            <path d="M8 24H6V26H8V24Z" fill="currentColor" />
            <path d="M10 24H8V26H10V24Z" fill="currentColor" />
            <path d="M12 24H10V26H12V24Z" fill="currentColor" />
            <path d="M22 24H20V26H22V24Z" fill="currentColor" />
            <path d="M26 24H24V26H26V24Z" fill="currentColor" />
            <path d="M34 24H32V26H34V24Z" fill="currentColor" />
            <path d="M14 26H12V28H14V26Z" fill="currentColor" />
            <path d="M22 26H20V28H22V26Z" fill="currentColor" />
            <path d="M16 28H14V30H16V28Z" fill="currentColor" />
            <path d="M22 28H20V30H22V28Z" fill="currentColor" />
            <path d="M18 30H16V32H18V30Z" fill="currentColor" />
            <path d="M22 30H20V32H22V30Z" fill="currentColor" />
            <path d="M20 32H18V34H20V32Z" fill="currentColor" />
            <path d="M22 32H20V34H22V32Z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
});

export default MenuControl;
