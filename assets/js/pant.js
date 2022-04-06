var action = false,
  clicked = false
var Owl = {
  init: function () {
    Owl.carousel()
  },

  carousel: function () {
    var owl
    var el = document.getElementsByClassName('owl-item')
    var elBtn = document.getElementsByClassName('owlPrev')
    $(document).ready(function () {
      owl = $('.owlCarousel').owlCarousel({
        items: 1,
        center: true,
        nav: false,
        dots: true,
        margin: 10,
        mouseDrag: false,
        touchDrag: false,
        dotsContainer: '.test',
        navText: ['prev', 'next'],
      })

      $('.owlNext').on('click', function () {
        owl.trigger('next.owl.carousel', 500)
      })

      $('.owlPrev').on('click', function () {
        owl.trigger('prev.owl.carousel', 500)
      })

      $('.progress-reports-bar').on('click', 'li', function (e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300])
      })

      //my preview customize

      function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(
          ' ' + elem.className + ' '
        )
      }

      $('.owlNext , .progress-reports-bar , .owlPrev').click(function () {
        app.modalFunction()
        if (hasClass(el[0], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.bar1').addClass('active')
          $(
            '.bar2 , .bar3 , .bar4 , .bar5 , .bar6 , .bar7, .bar8, .bar9, .bar10'
          ).removeClass('active')
          /*              $(".progress-bar").width('15.28%');*/ //use this if want prgoressbar at botom later
        } else if (hasClass(el[1], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.bar1 , .bar2').addClass('active')
          $(
            '.bar3 , .bar4 , .bar5 , .bar6 , .bar7, .bar8, .bar9, .bar10'
          ).removeClass('active')
        } else if (hasClass(el[2], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.bar1 , .bar2 , .bar3 ').addClass('active')
          $('.bar4 , .bar5 , .bar6 , .bar7, .bar8, .bar9, .bar10').removeClass(
            'active'
          )
        } else if (hasClass(el[3], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.bar1 , .bar2 , .bar3 , .bar4').addClass('active')
          $('.bar5 , .bar6 , .bar7, .bar8, .bar9, .bar10').removeClass('active')
        } else if (hasClass(el[4], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.bar1 , .bar2 , .bar3 , .bar4 , .bar5').addClass('active')
          $('.bar6 , .bar7, .bar8, .bar9, .bar10').removeClass('active')
        } else if (hasClass(el[5], 'active')) {
          $('.frontCarousel').hide().removeClass('activeC')
          $('.backCarousel').show().addClass('activeC')
          $('.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6').addClass('active')
          $('.bar7, .bar8, .bar9, .bar10').removeClass('active')
        } else if (hasClass(el[6], 'active')) {
          $('.frontCarousel').show().addClass('activeC')
          $('.backCarousel').hide().removeClass('activeC')

          $('.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6 , .bar7').addClass(
            'active'
          )
          $('.bar8, .bar9, .bar10').removeClass('active')
        } else if (hasClass(el[7], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $(
            '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6 , .bar7, .bar8'
          ).addClass('active')
          $('.bar9, .bar10').removeClass('active')
        } else if (hasClass(el[8], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $(
            '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6 , .bar7, .bar8, .bar9'
          ).addClass('active')
          $('.bar10').removeClass('active')
        } else if (hasClass(el[9], 'active')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $(
            '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6 , .bar7, .bar8, .bar9, .bar10'
          ).addClass('active')
          $('#owlNext').hide()
          $('#owlSubmit').show()
          $(function () {
            $('.updateF').click(function () {
              if ($(this).is(':checked')) {
                $('#owlSubmit').hide()
                $('#owlUpdate').show()
              }
            })
          })
        }
      })

      $('.owlSubmit').click(function () {
        app.modalFunction()
        $('#Mymodal').modal('show')
      })

      $('.updateC').click(function () {
        $('.backCarousel').hide().removeClass('activeC')
        $('.frontCarousel').show().addClass('activeC')
        $('#owlPrev').show()

        $('.owlSubmit').show()
        $('.updateC').hide()
        app.modalFunction()
        $('.updateF').prop('checked', false)
        $('#myCarousel').trigger('to.owl.carousel', 9)

        $('#owlUpdate').hide()
      })

      $('#owlUpdate').click(function () {
        $('#owlPrev').hide()
        $('#owlUpdate').hide()
        $('#updateC').show()
        if (document.getElementById('fittingF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 0)
        }

        if (document.getElementById('riseF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 1)
        }

        if (document.getElementById('pantbottomF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 2)
        }

        if (document.getElementById('pleatF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 3)
        }

        if (document.getElementById('fasteningF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 4)
        }

        if (document.getElementById('backpocketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 5)
          $('.frontCarousel').hide().removeClass('activeC')
          $('.backCarousel').show().addClass('activeC')
        }

        if (document.getElementById('sidepocketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 6)

          $('.frontCarousel').hide().removeClass('activeC')
          $('.backCarousel').show().addClass('activeC')
        }
        if (document.getElementById('cuffF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 7)

          $('.frontCarousel').hide().removeClass('activeC')
          $('.backCarousel').show().addClass('activeC')
        }
        if (document.getElementById('suspenderbuttonF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 8)

          $('.frontCarousel').hide().removeClass('activeC')
          $('.backCarousel').show().addClass('activeC')
        }
      })

      $('input[type="radio"]').click(function () {
        $('.owlUpdate').hide()
      })

      $('.owlPrev, .progress-reports-bar').click(function () {
        $('#owlNext').show()
        $('#owlSubmit').hide()
        $('#owlUpdate').hide()
      })

      $('.onC').click(function () {
        $('.frontCarousel').hide().removeClass('activeC')
        $('.backCarousel').show().addClass('activeC')
      })

      $('.offC').click(function () {
        $('.backCarousel').hide().removeClass('activeC')
        $('.frontCarousel').show().addClass('activeC')
      })
    })
  },
}

//

//owl

$(document).ready(function () {
  Owl.init()
})

//default check

function check() {
  document.getElementById('jfitting').firstChild.checked = true
  document.getElementById('jrise').firstChild.checked = true
  document.getElementById('jpantbottom').firstChild.checked = true
  document.getElementById('jpleat').firstChild.checked = true
  document.getElementById('jfastening').firstChild.checked = true
  document.getElementById('jbackpocket').firstChild.checked = true
  document.getElementById('jsidepocket').firstChild.checked = true
  document.getElementById('jcuff').firstChild.checked = true
  document.getElementById('jsuspenderbutton').firstChild.checked = true
}
