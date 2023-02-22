$(document).ready(function () {
  $('.reviews__items').slick({
    adaptiveHeight: true,
  })

  $('.blog__btn').click(function () {
    $(this).hide()
    $(this).prev().addClass('active')
  })

  $('.blog__item').click(function () {
    $('.modal__image img').attr('src', ' ')
    $('.modal__info').html(' ')
    let itemImage = $(this).find('img').attr('src')
    let itemText = $(this).find('span').html()
    $('.modal__image img').attr('src', itemImage)
    $('.modal__info').html(itemText)
  })

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show')
      }
    })
  }
  let options = { threshold: [0.5] }
  let observer = new IntersectionObserver(onEntry, options)
  let elements = document.querySelectorAll('.element-animation')
  for (let elm of elements) {
    observer.observe(elm)
  }

  $('.footer__top').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top,
      },
      500
    )

    return false
  })

  $('.header__nav li a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 20,
      },
      500
    )

    return false
  })

  $('.header__contacts').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top,
      },
      500
    )

    return false
  })
})
