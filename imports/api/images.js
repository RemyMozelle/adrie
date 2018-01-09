import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import SimpleSchema from 'simpl-schema';

configImages = {
  debug: false,  
  collectionName: 'images',
  allowClientCode: true, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024 * 1024 * 10 && /png|jpe?g/i.test(file.extension)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  }
};

if (Meteor.isDevelopment) {
  configImages.storagePath = '/home/timoz974/app/sites/MONGODB/METEOR/test/adrie/public/uploads';
}

const Images = new FilesCollection(configImages, {
  collectionName: configImages.collectionName
});

const meta = new SimpleSchema({
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  categorie: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  },
  etat: {
    type: String,
    required: false
  }
});

const imageSchema = _.extend(Images.schema, {
  meta
});

Images.collection.attachSchema(new SimpleSchema(imageSchema));

Meteor.methods({
  addDescription: (data) => {
    let tab = []
    //recupère tous les elements de images
    Images.find().forEach(element => {
      //met dans le tableau vide les elements images
      tab.push(element);
    }); 

    //permet de recupèrer le dernier id pour update la card et afficher la descriptions
    let findImage = Images.findOne({ _id: tab[tab.length - 1]._id })
    let photo = Images.update(
      { _id: findImage._id},
      {
        $set: {
          meta: {
            lat: findImage.meta.lat,
            lng: findImage.meta.lng,
            categorie: findImage.meta.categorie,
            desc: data.dataDesc,
            etat: data.etat
          }
        }
      }
    )
  },
  
});

if (Meteor.isServer) {
  Images.denyClient();
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });
} else {
  Meteor.subscribe('files.images.all');
}

export default Images;