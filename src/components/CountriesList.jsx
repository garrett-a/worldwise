/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CityItem from "./CityItem";
import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

// eslint-disable-next-line react/prop-types
export default function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ul className={styles.countriesList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
