import React from "react";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup
} from "react-leaflet";
import "leaflet/dist/images/marker-shadow.png";

const position = [48.08930332178957, -1.6213132083998467];

const SingerMap = () => (
	<React.Fragment>
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: "100%", width: "100%" }}
		>
		    <TileLayer
		    	attribution="Singer"
		    	url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		    />
			<Marker position={position}>
				<Popup>
					Notre magasin se trouve ici !
				</Popup>
			</Marker>
		</MapContainer>
	</React.Fragment>
);

export default SingerMap;