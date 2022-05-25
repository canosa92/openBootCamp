let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.368667,
        lng: -8.417372,
      map,
      title: "Riazores",
    }})
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 40.4165,
        lng: -3.70256,
      },
      map,
      title: "Los Madriles",
    })
  );
  markers.push(
    new google.maps.Marker({
        position: {
            lat: 39.53611111,
            lng: 2.717222222 ,
        },
        map,
        title:"Canpas"
    })
  );
}

