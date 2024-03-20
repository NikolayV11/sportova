/* eslint-disable react/jsx-no-undef */
import React from "react";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import styles from "./Map.module.scss";

export function Maps() {
  return (
    <YMaps>
      <Map
        width={700}
        height={418}
        defaultState={{
          center: [56.335425, 43.915831],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}>
        <Placemark defaultGeometry={[56.335425, 43.915831]} />
      </Map>
    </YMaps>
  );
}
