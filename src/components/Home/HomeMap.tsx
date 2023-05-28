import { useState } from "react";
import Section from "../common/styles/Section.styled";
import Container from "../common/styles/Container.styled";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  Text,
  mapStyles,
  mapContainer,
  HomeMapContainer,
  HomeMapItem,
} from "./styles/HomeMap.styled";
const center = {
  lat: 50.456855,
  lng: 30.436125,
};

export default function HomeMap() {
  const [open, isOpen] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkLjWfBn4lLDrga-bk8pe9vIzFGvwWmis",
  });

  return (
    <Section>
      <HomeMapContainer>
        <HomeMapItem></HomeMapItem>
        <HomeMapItem>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={mapContainer}
              center={center}
              zoom={14}
              options={{ styles: mapStyles }}
            >
              <Marker position={center} onClick={() => isOpen(true)}>
                {open && isLoaded ? (
                  <InfoWindow onCloseClick={() => isOpen(false)}>
                    <Text>test</Text>
                  </InfoWindow>
                ) : null}
              </Marker>
            </GoogleMap>
          )}
        </HomeMapItem>
      </HomeMapContainer>
    </Section>
  );
}
