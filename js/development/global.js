$(document).ready(function() {
  $(".button--read-more").click(function() {
    var _this = $(this),
    parentElm = _this.parents('.intro__accordian'),
    externalContent = parentElm.find('.intro__additional-content'),
    parentIsActive = parentElm.hasClass('is-active');

    if (parentIsActive) {
      //Stuff to do when btn is in the read more state
      _this.html("Read More +");
      parentElm.removeClass("is-active");
      externalContent.slideUp('fast');
    } else {
      //Stuff to do when btn is in the read less state
      _this.html("Read Less -");
      externalContent.slideDown('fast');
      parentElm.addClass("is-active");
    }
  });
});