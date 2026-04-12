const location = { lat: 40, lng: -100 };

function initMapByType(containerId, type, mapLocation = location) {
  const container = document.getElementById(containerId);
  if (!container) { return; }
  if (type === "streetview") {
    const streetViewService = new google.maps.StreetViewService();
    const panorama = new google.maps.StreetViewPanorama(container, {
      addressControl: true,
      linksControl: true,
      panControl: true,
      motionTracking: false,
      visible: true,
    });

    streetViewService.getPanorama(
      {
        location: mapLocation,
        radius: 1000,
        source: google.maps.StreetViewSource.OUTDOOR,
      },
      (data, status) => {
        if (status === google.maps.StreetViewStatus.OK && data?.location?.pano) {
          panorama.setPano(data.location.pano);
          panorama.setPov({ heading: 20, pitch: 0 });
          panorama.setZoom(1);
          return;
        }
        container.textContent = "Street View imagery could not be loaded at this location.";
      }
    );
    return;
  }

  const mapOptions = {
    center: mapLocation,
    zoom: 5,
  };
  if (type === "2dtiles") {
    mapOptions.renderingType = "RASTER";
    mapOptions.mapTypeId = "roadmap";
  }
  new google.maps.Map(container, mapOptions);
}

function initMap() {
  //initMapByType("map-js", "js", location);
  //initMapByType("map-2dtiles", "2dtiles", location);
  //initMapByType("map-streetview", "streetview", location);
}

window.initMap = initMap; // Define initMap globally for the URL callback to work

async function loadMapsScript(type = "js") {
  try {
    const response = await fetch("secrets.txt", { cache: "no-store" });
    if (!response.ok) { throw new Error("Couldn't read file");}
    const secrets = await response.text();
    // Use regex to locate line, grouping (.+) to capture API key into match[1]
    const match = secrets.match(/GOOGLE_MAPS_API_KEY\s*=\s*(.+)/); 
    if (!match || !match[1]) { throw new Error("GOOGLE_MAPS_API_KEY not found");}
    const apiKey = match[1].trim();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/${type}?key=${encodeURIComponent(apiKey)}&callback=initMap&v=weekly`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  } catch (error) {
    console.error("Map setup failed:", error);
  }
}

loadMapsScript();