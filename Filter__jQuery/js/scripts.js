$('.filters a').on('click', function() {
  $('.filters li').removeClass('active');
  $(this).parent('li').addClass('active'); // выделяем выбранную категорию

  var cat = $(this).attr('data-filter'); // определяем категорию

  if (cat == 'all') { // если all
    $('.products li').show(); // отображаем все позиции
  } else { // если не all
    $('.products li').hide(); // скрываем все позиции
    $('.products li[data-filter="' + cat + '"]').show(); // и отображаем позиции из соответствующей категории
  }
});