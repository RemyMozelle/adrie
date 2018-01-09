import './menuMeubles.html';
import Images from '../../../../../../api/images';

Template.menuMeubles.helpers({
  countMeubles() {
    let count = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'meubles') {
        count.push(element)
      }
    })
    return count.length
  }
})