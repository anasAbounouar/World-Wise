import { useParams, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      map lat = {lat}{' '}
      <button onClick={() => setSearchParams({ lat: 19, lng: 20 })}>
        click me
      </button>
    </div>
  );
}

export default Map;
