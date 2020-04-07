import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import storeLocations from './data/mapData';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SimpleAlertPrimary } from '../reusableStyles/alerts/SimpleAlerts';
import { Bold, P, H2 } from '../reusableStyles/typography/Typography';
import { CustomH2, CustomH4 } from '../home/HomeStyling';

const Icon = styled(FaMapMarkerAlt)`
  color: ${props => props.theme.colors.primary};
  font-size: 3rem;
`;

const PopupDiv = styled.div``;

const SelectionHighlight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Map1 = ({ title, mapStyle, height, width }) => {
  const [viewport, setViewport] = useState({
    latitude: 53.558542,
    longitude: -113.5376507,
    width: width,
    height: height,
    zoom: 8,
  });

  const [selected, setSelected] = useState(null);
  const selectedHandler = (e, selected) => {
    setSelected(selected);
  };
  return (
    <div>
      {title && (
        <>
          <TitleContainer>
            <CustomH4>Built On Trust</CustomH4>
            <CustomH2>Our Location</CustomH2>
          </TitleContainer>
        </>
      )}

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_TOKEN}
        mapStyle={mapStyle}
        scrollZoom={false}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {storeLocations.map(location => (
          <Marker
            key={location.name}
            latitude={location.coordinates.lat}
            longitude={location.coordinates.long}
          >
            <Icon
              onClick={e => {
                selectedHandler(e, location);
              }}
            />
          </Marker>
        ))}
        {selected && (
          <Popup
            latitude={selected.coordinates.lat}
            longitude={selected.coordinates.long}
            onClose={() => {
              setSelected(null);
            }}
          >
            <PopupDiv>
              <h4> {selected.name}</h4>
              <p> {selected.address} </p>
            </PopupDiv>
          </Popup>
        )}
      </ReactMapGL>

      {selected && (
        <SelectionHighlight>
          <SimpleAlertPrimary>
            <span>
              This is the <Bold>{selected.name} </Bold> location
            </span>
          </SimpleAlertPrimary>
        </SelectionHighlight>
      )}
    </div>
  );
};

export default Map1;
