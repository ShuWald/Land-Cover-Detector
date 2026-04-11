function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: -100 },
    zoom: 5,
  });
}

window.initMap = initMap; // Define initMap globally for the URL callback to work

async function loadMapsScript() {
  try {
    const response = await fetch("secrets.txt", { cache: "no-store" });
    if (!response.ok) { throw new Error("Couldn't read file");}
    const secrets = await response.text();
    // Use regex to locate line, grouping (.+) to capture API key into match[1]
    const match = secrets.match(/GOOGLE_MAPS_API_KEY\s*=\s*(.+)/); 
    if (!match || !match[1]) { throw new Error("GOOGLE_MAPS_API_KEY not found");}
    const apiKey = match[1].trim();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  } catch (error) {
    console.error("Map setup failed:", error);
  }
}

loadMapsScript();