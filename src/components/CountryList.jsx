import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';

// Assuming 'cities' is an array of objects with a unique 'id' for each city
function CountryList() {
  const { cities, isLoading } = useCities();
  // Render the Spinner component while the content is loading
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities?.length)
    return (
      <Message message="Add you first city by clicking on a city in the map " />
    );
  const countries = cities.reduce((accumulator, city) => {
    // Check if the country is already included in the accumulator
    const isCountryIncluded = accumulator.some(
      element => element.country === city.country
    );

    if (!isCountryIncluded) {
      // If not included, spread the existing accumulator and add the new country
      return [...accumulator, { country: city.country, emoji: city.emoji }];
    } else {
      // If included, just return the accumulator as is
      return accumulator;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {' '}
      {countries.map(
        (
          country // Use a unique identifier for 'key' if available
        ) => (
          <CountryItem key={country.country} country={country} />
        )
      )}
    </ul>
  );
}

export default CountryList;
