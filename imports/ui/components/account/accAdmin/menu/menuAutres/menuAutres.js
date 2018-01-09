import './menuAutres.html'
import Images from '../../../../../../api/images';

Template.menuAutres.helpers({
  countAutres() {
    let count = []
    Images.find().forEach(element => {
      if (element.meta.categorie == 'autres') {
        count.push(element)
      }
    })
    return count.length
  }
})
