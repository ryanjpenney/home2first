"use client";

import {
  Map,
  MapArc,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
} from "@/components/ui/mapcn-map-arc";

// Home2First equipment pipeline: gear collected in Phoenix, AZ ships to
// youth academies in the Dominican Republic.
const hub = { name: "Phoenix, AZ — Balsz District", lng: -112.0667, lat: 33.4453 };
const destinations = [
  { name: "Santo Domingo", lng: -69.9312, lat: 18.4861 },
  { name: "San Pedro de Macorís", lng: -69.3086, lat: 18.4539 },
];
const arcs = destinations.map((dest) => ({
  id: dest.name,
  from: [hub.lng, hub.lat] as [number, number],
  to: [dest.lng, dest.lat] as [number, number],
}));

export default function H2FImpactMapDemo() {
  return (
    <div className="h-[626px] w-full overflow-hidden bg-background">
      <Map center={[-90.5, 27]} zoom={3.6} theme="light">
        <MapArc
          data={arcs}
          curvature={0.2}
          paint={{ "line-color": "#E6001A", "line-width": 2.5, "line-dasharray": [2, 2] }}
          interactive={false}
        />
        <MapMarker longitude={hub.lng} latitude={hub.lat}>
          <MarkerContent>
            <div className="size-4 rounded-full border-2 border-white bg-[#E6001A] shadow-md" />
            <MarkerLabel position="top" className="bg-white/90 rounded-sm px-1.5 py-0.5 text-[11px] font-bold backdrop-blur">
              {hub.name}
            </MarkerLabel>
          </MarkerContent>
        </MapMarker>
        {destinations.map((dest) => (
          <MapMarker key={dest.name} longitude={dest.lng} latitude={dest.lat}>
            <MarkerContent>
              <div className="size-3 rounded-full border-2 border-white bg-[#E6001A] shadow" />
              <MarkerLabel position="top" className="bg-white/90 rounded-sm px-1.5 py-0.5 text-[11px] font-bold backdrop-blur">
                {dest.name}
              </MarkerLabel>
            </MarkerContent>
          </MapMarker>
        ))}
        <MapControls position="bottom-right" showZoom />
      </Map>
    </div>
  );
}

export { H2FImpactMapDemo };
