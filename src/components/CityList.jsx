import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from './Message';

// Assuming 'cities' is an array of objects with a unique 'id' for each city
function CityList({ cities, isLoading }) {
  // Render the Spinner component while the content is loading
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities?.length)
    return (
      <Message message="Add you first city by clicking on a city in the map " />
    );
  return (
    <ul className={styles.cityList}>
      {cities?.length > 0 ? (
        cities.map(city => (
          // Use a unique identifier for 'key' if available
          <CityItem key={city.id} city={city} />
        ))
      ) : (
        <li>No cities available</li>
      )}
    </ul>
  );
}

export default CityList;
