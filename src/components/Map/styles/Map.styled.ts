import { COLORS, SIZE, MEDIA, HEIGHT } from "@/theme";
import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";

export const Text = styled.p`
  color: ${COLORS.bgc};
`;
export const HomeMapContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${MEDIA.laptop} {
    flex-direction: row;
  }
`;
export const HomeMapItem = styled.div`
  width: 100%;
  height: ${HEIGHT.mapTabl};
  @media ${MEDIA.laptop} {
    height: ${HEIGHT.mapLeptop};
  }
`;

export const HomeMapContacts = styled(HomeMapItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${MEDIA.laptop} {
    justify-content: center;
    gap: 20px;
    a,
    p {
      font-size: ${SIZE.m};
    }
  }
`;

export const Title = styled.h2`
  font-size: ${SIZE.l};
  @media ${MEDIA.laptop} {
    font-size: ${SIZE.xl};
  }
`;

export const mapContainer = { width: "100%", height: "100%" };

export const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];
