import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
const REACT_APP_GOOGLE_MAP_KEY=process.env.REACT_APP_GOOGLE_MAP_KEY;

const containerStyle = {
  width: '800px',
  height: '600px'
};

const defaultPosition = {
  lat: 37.5665,
  lng: 126.9780
};

function GoogleCode() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:REACT_APP_GOOGLE_MAP_KEY  // 여기에 자신의 Google Maps API 키를 입력하세요.
  });

  const [map, setMap] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchMarker, setSearchMarker] = useState(null);

  useEffect(() => {
    if (map && searchMarker) {
      map.panTo(searchMarker.getPosition());
    }
  }, [map, searchMarker]);

  const handleSearch = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchInput }, (results, status) => {
      if (status === 'OK') {
        const { geometry } = results[0];
        const position = {
          lat: geometry.location.lat(),
          lng: geometry.location.lng()
        };
        setSearchMarker(new window.google.maps.Marker({ position, map }));
      } else {
        alert('검색 결과가 없습니다.');
      }
    });
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return isLoaded ? (
    <div>
      <input
        type="text"
        placeholder="장소를 검색하세요"
        value={searchInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultPosition}
        zoom={13}
        onLoad={map => setMap(map)}
      >
        {searchMarker && <Marker position={searchMarker.getPosition()} />}
      </GoogleMap>
    </div>
  ) : <></>;
}

export default GoogleCode;