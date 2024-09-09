import React from "react";
import ImageZoom from "react-image-zooom";

const Map = ({url}) => {
    return (
        <div className="map_container">
            <ImageZoom src={url} alt="Vrioskan World Map"/>
        </div>
  );
}

export default Map;