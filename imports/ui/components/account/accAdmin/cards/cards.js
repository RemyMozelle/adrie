import './cards.html';
//collections images de la bdd
import Images from '../../../../../api/images';

/**
 * CARDS TOUTES LES CATEGORIES
 */
Template.cards.helpers({
  showAll() {
    return Images.find({});
  }
}) 

Template.cards.events({
  'click .delete'(e) {
    e.preventDefault();
    Images.remove(this._id)
  },
  'click .marker'(e) {
    $(`#map${this._id}`).toggle();
    
    let map = new google.maps.Map(document.querySelector(`#map${this._id}`), {
      zoom: 17,
      center: { lat: this.meta.lat, lng: this.meta.lng },
    });
    let marker = new google.maps.Marker({
      position: { lat: this.meta.lat, lng: this.meta.lng },
      map: map
    }); 
  }  
}) // END CARDS CATEGORIES

/**
 * CARDS INFORMATIQUE
 */
Template.cardsInformatique.helpers({
  showInformatique() {
    let informatique = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'informatique') {
        informatique.push(element)
      }
    });
    return informatique
  }
})

Template.cardsInformatique.events({
  'click .delete'(e) {
    e.preventDefault();
    Images.remove(this._id)
  },
  'click .marker'(e) {
    $(`#map${this._id}`).toggle();

    let map = new google.maps.Map(document.querySelector(`#map${this._id}`), {
      zoom: 17,
      center: { lat: this.meta.lat, lng: this.meta.lng },
    });
    let marker = new google.maps.Marker({
      position: { lat: this.meta.lat, lng: this.meta.lng },
      map: map
    });

  }
}) // END CARDS INFORMATIQUE

/**
 * CARDS ELECTROMENAGER
 */
Template.cardsElectromenager.helpers({
  showElectromenager() {
    let electromenager = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'electromenager') {
        electromenager.push(element)
      }
    });
    return electromenager
  }
})

Template.cardsElectromenager.events({
  'click .delete'(e) {
    e.preventDefault();
    Images.remove(this._id)
  },
  'click .marker'(e) {
    $(`#map${this._id}`).toggle();

    let map = new google.maps.Map(document.querySelector(`#map${this._id}`), {
      zoom: 17,
      center: { lat: this.meta.lat, lng: this.meta.lng },
    });
    let marker = new google.maps.Marker({
      position: { lat: this.meta.lat, lng: this.meta.lng },
      map: map
    });

  }
}) // END CARDS ELECTROMENAGER

/**
 * CARDS MEUBLES
 */
Template.cardsMeubles.helpers({
  showMeubles() {
    let meubles = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'meubles') {
        meubles.push(element)
      }
    });
    return meubles
  }
})

Template.cardsMeubles.events({
  'click .delete'(e) {
    e.preventDefault();
    Images.remove(this._id)
  },
  'click .marker'(e) {
    $(`#map${this._id}`).toggle();

    let map = new google.maps.Map(document.querySelector(`#map${this._id}`), {
      zoom: 17,
      center: { lat: this.meta.lat, lng: this.meta.lng },
    });
    let marker = new google.maps.Marker({
      position: { lat: this.meta.lat, lng: this.meta.lng },
      map: map
    });

  }
}) // END CARDS MEUBLES

/**
 * CARDS AUTRES
 */
Template.cardsAutres.helpers({
  showAutres() {
    let autres = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'autres') {
        autres.push(element)
      }
    });
    return autres
  }
})

Template.cardsAutres.events({
  'click .delete'(e) {
    e.preventDefault();
    Images.remove(this._id)
  },
  'click .marker'(e) {
    $(`#map${this._id}`).toggle();

    let map = new google.maps.Map(document.querySelector(`#map${this._id}`), {
      zoom: 17,
      center: { lat: this.meta.lat, lng: this.meta.lng },
    });
    let marker = new google.maps.Marker({
      position: { lat: this.meta.lat, lng: this.meta.lng },
      map: map
    });

  }
}) // END CARDS AUTRES