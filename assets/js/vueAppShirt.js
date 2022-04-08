var app = new Vue({
  el: '#app',
  data: {
    collar: 'imge/shirt/front/collar/new_kent.png',
    cuff: 'imge/shirt/front/sleeve/sleeves_long+cuffs_classic.png',
    sleeve: '',
    tuck: 'imge/shirt/front/tuck/tucked.png',
    chestpocket: '',
    bcollar: 'imge/shirt/back/collar/necklines_1_button.png',
    bcuff: 'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_squared.png',
    btuck: 'imge/shirt/back/tuck/fit_fit+inside.png',
    collarPicked: '',
    cuffPicked: '',
    sleevePicked: '',
    tuckPicked: '',
    chestpocketPicked: '',

    collarvariants: [
      {
        variantId: 'cl1',
        variantType: 'New Kent',
      },
      {
        variantId: 'cl2',
        variantType: 'Kent Collar',
      },
      {
        variantId: 'cl3',
        variantType: 'Button Down',
      },
      {
        variantId: 'cl4',
        variantType: 'Stand-Up Collar',
      },
      {
        variantId: 'cl5',
        variantType: 'Wing Collar',
      },
      {
        variantId: 'cl6',
        variantType: 'Rounded Collar',
      },
    ],

    cuffvariants: [
      {
        variantId: 'cf1',
        variantType: 'Single Cuff 1 Button',
      },
      {
        variantId: 'cf2',
        variantType: 'Single Cuff 2 Buttons',
      },
      {
        variantId: 'cf3',
        variantType: 'Two Button Cut',
      },
      {
        variantId: 'cf4',
        variantType: 'Rounded 1 Button',
      },
      {
        variantId: 'cf5',
        variantType: 'Double Squared French Cuff',
      },
    ],

    sleevevariants: [
      {
        variantId: 'sv1',
        variantType: 'Long',
      },
      {
        variantId: 'sv2',
        variantType: 'Short',
      },
    ],

    tuckvariants: [
      {
        variantId: 'tc1',
        variantType: 'Tucked',
        variantImage: 'imge/shirt/front/tuck/tucked.png',
      },
      {
        variantId: 'tc2',
        variantType: 'Untucked',
        variantImage: 'imge/shirt/front/tuck/untucked.png',
      },
    ],

    chestpocketvariants: [
      {
        variantId: 'cp1',
        variantType: 'No Pocket',
      },
      {
        variantId: 'cp2',
        variantType: 'Standard',
      },
    ],
  },

  methods: {
    updateProduct(variantImage) {
      //tucks
      if (document.getElementById('tc1').checked) {
        this.tuck = 'imge/shirt/front/tuck/tucked.png'
        this.btuck = 'imge/shirt/back/tuck/fit_fit+inside.png'
      } else if (document.getElementById('tc2').checked) {
        this.tuck = 'imge/shirt/front/tuck/untucked.png'
        this.btuck =
          'imge/shirt/back/tuck/fit_fit+bottom_cut_modern+outside.png'
      }

      //sleeves
      if (document.getElementById('sv1').checked) {
        this.cuff = 'imge/shirt/front/sleeve/sleeves_long+cuffs_classic.png'
        this.bcuff =
          'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_squared.png'
      } else if (document.getElementById('sv2').checked) {
        this.cuff = 'imge/shirt/front/sleeve/sleeves_short.png'
        this.bcuff = 'imge/shirt/back/sleevebutton/sleeves_short.png'
      }

      if (document.getElementById('cf1').checked) {
        this.bcuff =
          'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_squared.png'
      } else if (document.getElementById('cf2').checked) {
        this.bcuff =
          'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_squared_2_buttons.png'
      } else if (document.getElementById('cf3').checked) {
        this.bcuff =
          'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_cut_2_buttons.png'
      } else if (document.getElementById('cf4').checked) {
        this.bcuff =
          'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_rounded.png'
      } else if (document.getElementById('cf5').checked) {
        this.bcuff =
          'imge/shirt/back/sleevebutton/sleeves_long+cuffs_style_squared_double_french_cuff.png'
      }
      //chestpocket
      if (document.getElementById('cp1').checked) {
        this.chestpocket = ''
      } else if (document.getElementById('cp2').checked) {
        this.chestpocket =
          'imge/shirt/front/pocket/pockets_1+pockets_type_straight.png'
      }

      //collar

      if (document.getElementById('cl1').checked) {
        this.collar = 'imge/shirt/front/collar/new_kent.png'
        this.bcollar = 'imge/shirt/back/collar/necklines_1_button.png'
      } else if (document.getElementById('cl2').checked) {
        this.collar = 'imge/shirt/front/collar/kent_collar.png'
        this.bcollar = 'imge/shirt/back/collar/necklines_1_button.png'
      } else if (document.getElementById('cl3').checked) {
        this.collar = 'imge/shirt/front/collar/button_down.png'
        this.bcollar = 'imge/shirt/back/collar/necklines_1_button.png'
      } else if (document.getElementById('cl4').checked) {
        this.collar = 'imge/shirt/front/collar/standup_collar.png'
        this.bcollar = 'imge/shirt/back/collar/necklines_mao.png'
      } else if (document.getElementById('cl5').checked) {
        this.collar = 'imge/shirt/front/collar/wing_collar.png'
        this.bcollar = 'imge/shirt/back/collar/necklines_1_button.png'
      } else if (document.getElementById('cl6').checked) {
        this.collar = 'imge/shirt/front/collar/rounded_collar.png'
        this.bcollar = 'imge/shirt/back/collar/necklines_1_button.png'
      }

      //method end
    },

    modalFunction() {
      this.collarPicked = $("input[name='collar']:checked").val()
      this.cuffPicked = $("input[name='cuff']:checked").val()
      this.sleevePicked = $("input[name='sleeve']:checked").val()
      this.tuckPicked = $("input[name='tuck']:checked").val()
      this.chestpocketPicked = $("input[name='chestpocket']:checked").val()
    },
  },
})
