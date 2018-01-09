import './map.html';
import Images from '../../../../api/images'

if (Meteor.isClient) {
  const MAP_ZOOM = 17;

  Meteor.startup(function () {
    console.log(GoogleMaps);
    GoogleMaps.load({
      //clé pour API
      key: "AIzaSyAxWp_fcpj1OogBMlbHWsr9GRMYV8cKHqE"
    });
  });
  
  Template.map.onCreated(function () {
    GoogleMaps.ready('map', function (map) {
      let latLng = Geolocation.latLng();
      //met un marqueur de geolocalisation
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(latLng.lat, latLng.lng),
        map: map.instance
      });
    });
  });

  Template.map.helpers({
    //renvoi une erreur n'arrive pas a se charger
    geolocationError: function () {
      let error = Geolocation.error();
      return error && error.message;
    },

    mapOptions: function () {
      let latLng = Geolocation.latLng();
      //initialise la map avec les coordonées puis place le curseur sur le centre de la carte
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });

  Template.map.helpers({
    mapOptions: function () {
      let latLng = Geolocation.latLng();
      //initialise la map avec les coordonées puis place le curseur sur le centre de la carte
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });
}