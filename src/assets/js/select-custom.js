function customSelect () {
  $('select').each(function () {

    var $this = $(this),
      numberOfOptions = $(this).children('option').length;

    $this.addClass('select--hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select__choose"></div>');

    var $select__choose = $this.next('div.select__choose');
    $select__choose.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select__options'
    }).insertAfter($select__choose);

    for (var i = 0; i < numberOfOptions; i++) {
      var classActive = $this.children('option').eq(i).val() === $this.val() ? 'active' : '';
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val(),
        'class': classActive
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $select__choose.click(function (e) {
      e.stopPropagation();
      $(this).toggleClass('active').next('ul.select__options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $listItems.removeClass('active');
      $select__choose.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $(this).addClass('active');
      $list.hide();
    });

    $(document).click(function () {
      $select__choose.removeClass('active');
      $list.hide();
    });
  });
};
customSelect();
