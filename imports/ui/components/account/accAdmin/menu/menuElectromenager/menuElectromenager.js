import './menuElectromenager.html';
import Images from '../../../../../../api/images';

Template.menuElectromenager.helpers({
  countElectromenager() {
    let count = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'electromenager') {
        count.push(element)
      }
    })
    return count.length
  }
})