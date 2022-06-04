import React from 'react';
import { Map, YMaps, Placemark } from 'react-yandex-maps';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function YandexMap({ currentCamp, mapZoom }) {
  const camps = useSelector((state) => state.camps.camps);
  return (
    <YMaps query={{ load: 'package.full' }}>
      <Map
        width="100%"
        height="20rem"
        state={{
          controls: ['zoomControl', 'fullscreenControl'],
          center: [
            currentCamp?.latitude || 53.892925,
            currentCamp?.longitude || 27.493793,
          ],
          zoom: mapZoom,
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        {camps.map((camp) => (
          <Placemark
            key={camp.id}
            geometry={[camp.latitude, camp.longitude]}
            properties={{
              hintContent: camp.street,
              balloonContent: camp.type,
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            options={{ iconColor: 'gold' }}
            camp={camp}
          />
        ))}
      </Map>
    </YMaps>
  );
}

YandexMap.propTypes = {
  mapZoom: PropTypes.number.isRequired,
  currentCamp: PropTypes.exact({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
export default YandexMap;
