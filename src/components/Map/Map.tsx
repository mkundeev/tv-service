import { useState } from "react";
import { useRouter } from "next/router";
import Section from "../common/styles/Section.styled";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import * as Styled from "./styles/Map.styled";
import Phone from "../Header/Phone";
import WorkHours from "../Header/WorkHours";

const center = {
  lat: 50.456855,
  lng: 30.436125,
};

export default function HomeMap() {
  const [open, isOpen] = useState(false);
  const { locale } = useRouter();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
  });

  return (
    <Section $screenHeight={true}>
      <Styled.HomeMapContainer>
        <Styled.HomeMapContacts>
          <Styled.Title>
            {locale === "ua" ? "Контакти" : "Контакты"}
          </Styled.Title>
          <p>
            {locale === "ua"
              ? "Проспект Перемоги 60, м.Київ"
              : "Проспект Победы 60, г.Киев"}
          </p>
          <a href="mailto: rizotv@gmail.com">rizotv@gmail.com</a>
          <WorkHours iconSize={40} />
          <Phone iconSize={40} />
        </Styled.HomeMapContacts>
        <Styled.HomeMapItem>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={Styled.mapContainer}
              center={center}
              zoom={14}
              options={{ styles: Styled.mapStyles }}
            >
              <Marker position={center} onClick={() => isOpen(true)}>
                {open && isLoaded ? (
                  <InfoWindow onCloseClick={() => isOpen(false)}>
                    <Styled.Text>test</Styled.Text>
                  </InfoWindow>
                ) : null}
              </Marker>
            </GoogleMap>
          )}
        </Styled.HomeMapItem>
      </Styled.HomeMapContainer>
    </Section>
  );
}
