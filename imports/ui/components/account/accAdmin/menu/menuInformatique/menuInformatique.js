import './menuInformatique.html';
import Images from '../../../../../../api/images';

Template.menuInformatique.helpers({
  countInformatique() {
    let count = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'informatique') {
        count.push(element)
      }
    })
    return count.length
  }
})