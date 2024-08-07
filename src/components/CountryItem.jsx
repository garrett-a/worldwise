import styles from "./CountryItem.module.css";
/* eslint-disable react/prop-types */

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};
function CountryItem({ country }) {
  console.log(country);
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
