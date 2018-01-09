import './menuAllcategory.html';
import Images from '../../../../../../api/images';

Template.menuAllcategory.helpers({
  countAllCategory() {
    return Images.find().count()
  }
})