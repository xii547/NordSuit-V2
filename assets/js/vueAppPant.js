var app = new Vue({
  el: '#app',
  data: {
    fitting: 'imge/pant/front/fit/length_long+cut_slim.png',
    rise: '',
    pantbottom: '',
    pleat: '',
    fastening:
      'imge/pant/front/PantsFastening/fastening_center+visible_button.png',
    backpocket: '',
    sidepocket: 'imge/pant/front/SidePockets/front_pocket+diagonal.png',
    cuff: '',
    suspenderbutton: '',
    bfitting: 'imge/pant/back/fit/length_long+cut_slim.png',
    bcuff: '',
    bpocket: '',
    fittingPicked: '',
    risePicked: '',
    pantbottomPicked: '',
    pleatPicked: '',
    fasteningPicked: '',
    backpocketPicked: '',
    sidepocketPicked: '',
    cuffPicked: '',
    suspenderbuttonPicked: '',

    fittingvariants: [
      {
        variantId: 'ft1',
        variantType: 'Slim Fit',
      },
      {
        variantId: 'ft2',
        variantType: 'Normal Fit',
      },
    ],

    risevariants: [
      {
        variantId: 'rs1',
        variantType: 'High On Waist',
      },
      {
        variantId: 'rs2',
        variantType: 'Medium Rise',
      },
      {
        variantId: 'rs3',
        variantType: 'Low On Waist',
      },
    ],

    pantbottomvariants: [
      {
        variantId: 'pb1',
        variantType: 'No Break',
      },
      {
        variantId: 'pb2',
        variantType: 'Half Break',
      },
      {
        variantId: 'pb3',
        variantType: 'Full Break',
      },
    ],

    pleatvariants: [
      {
        variantId: 'pt1',
        variantType: 'No Pleats',
      },
      {
        variantId: 'pt2',
        variantType: 'Pleated',
      },
      {
        variantId: 'pt3',
        variantType: 'Double Pleats',
      },
    ],

    fasteningvariants: [
      {
        variantId: 'fs1',
        variantType: 'Centered',
        variantImage2: '',
      },
      {
        variantId: 'fs2',
        variantType: 'Off-Centered',
        variantImage2: '',
      },
      {
        variantId: 'fs3',
        variantType: 'No Button',
        variantImage2: '',
      },
      {
        variantId: 'fs4',
        variantType: 'Off-Centered Buttonless',
        variantImage2: '',
      },
    ],

    sidepocketvariants: [
      {
        variantId: 'sp1',
        variantType: 'Diagonal',
        variantImage: '',
      },
      {
        variantId: 'sp2',
        variantType: 'Rounded',
        variantImage: '',
      },
    ],

    backpocketvariants: [
      {
        variantId: 'bp1',
        variantType: 'No Pockets',
        variantImage: '',
      },
      {
        variantId: 'bp2',
        variantType: 'Double-Welted Pocket With Button',
        variantImage: '',
      },
      {
        variantId: 'bp3',
        variantType: 'Patched',
        variantImage: '',
      },
      {
        variantId: 'bp4',
        variantType: 'Flap Pockets',
        variantImage: '',
      },
      {
        variantId: 'bp5',
        variantType: 'Double Welted Pocket With Button X2',
        variantImage: '',
      },
      {
        variantId: 'bp6',
        variantType: 'Patched X2',
        variantImage: '',
      },
      {
        variantId: 'bp7',
        variantType: 'Flap Pockets X2',
        variantImage: '',
      },
    ],
    cuffvariants: [
      {
        variantId: 'c1',
        variantType: 'No Pant Cuffs',
      },
      {
        variantId: 'c2',
        variantType: 'With Pant Cuffs',
      },
    ],
    suspenderbuttonvariants: [
      {
        variantId: 'sb1',
        variantType: 'No',
      },
      {
        variantId: 'sb2',
        variantType: 'Yes',
      },
    ],
  },

  methods: {
    updateProduct(variantImage) {
      // fittings

      if (document.getElementById('ft1').checked) {
        this.fitting = 'imge/pant/front/fit/length_long+cut_slim.png'
        this.bfitting = 'imge/pant/back/Fit/length_long+cut_slim.png'
      } else if (document.getElementById('ft2').checked) {
        this.fitting = 'imge/pant/front/fit/length_long+cut_regular.png'
        this.bfitting = 'imge/pant/back/Fit/length_long+cut_regular.png'
      }
      //pleats
      if (document.getElementById('pt1').checked) {
        this.pleat = ''
      } else if (document.getElementById('pt2').checked) {
        this.pleat = 'imge/pant/front/pleat/pleats_single.png'
      } else if (document.getElementById('pt3').checked) {
        this.pleat = 'imge/pant/front/pleat/pleats_double.png'
      }

      //fastening
      if (document.getElementById('fs1').checked) {
        this.fastening =
          'imge/pant/front/PantsFastening/fastening_center+visible_button.png'
      } else if (document.getElementById('fs2').checked) {
        this.fastening =
          'imge/pant/front/PantsFastening/fastening_moved+visible_button.png'
      } else if (document.getElementById('fs3').checked) {
        this.fastening =
          'imge/pant/front/PantsFastening/fastening_center+hidden_button.png'
      } else if (document.getElementById('fs4').checked) {
        this.fastening =
          'imge/pant/front/PantsFastening/fastening_moved+hidden_button.png'
      }

      //back pocket

      if (document.getElementById('bp1').checked) {
        this.backpocket = ''
      } else if (document.getElementById('bp2').checked) {
        this.backpocket =
          'imge/pant/back/BackPockets/back_pocket+1+type_button.png'
      } else if (document.getElementById('bp3').checked) {
        this.backpocket =
          'imge/pant/back/BackPockets/back_pocket+1+type_patched.png'
      } else if (document.getElementById('bp4').checked) {
        this.backpocket =
          'imge/pant/back/BackPockets/back_pocket+1+type_flap.png'
      } else if (document.getElementById('bp5').checked) {
        this.backpocket =
          'imge/pant/back/BackPockets/back_pocket+2+type_button.png'
      } else if (document.getElementById('bp6').checked) {
        this.backpocket =
          'imge/pant/back/BackPockets/back_pocket+2+type_patched.png'
      } else if (document.getElementById('bp7').checked) {
        this.backpocket =
          'imge/pant/back/BackPockets/back_pocket+2+type_flap.png'
      }

      //side

      if (document.getElementById('sp1').checked) {
        this.sidepocket =
          'imge/pant/front/SidePockets/front_pocket+diagonal.png'
      } else if (document.getElementById('sp2').checked) {
        this.sidepocket = 'imge/pant/front/SidePockets/front_pocket+rounded.png'
      }

      //cuffs
      if (document.getElementById('c1').checked) {
        this.cuff = ''
        this.bcuff = ''
      } else if (document.getElementById('c2').checked) {
        this.cuff = 'imge/pant/front/Cuffs/cuffs+length_long+cut_slim.png'
        this.bcuff = 'imge/pant/back/Cuffs/cuffs+length_long+cut_slim.png'
      }
      //method end
    },

    modalFunction() {
      this.fittingPicked = $("input[name='fitting']:checked").val()
      this.risePicked = $("input[name='rise']:checked").val()
      this.pantbottomPicked = $("input[name='pantbottom']:checked").val()
      this.pleatPicked = $("input[name='pleat']:checked").val()
      this.fasteningPicked = $("input[name='fastening']:checked").val()
      this.backpocketPicked = $("input[name='backpocket']:checked").val()
      this.sidepocketPicked = $("input[name='sidepocket']:checked").val()
      this.cuffPicked = $("input[name='cuff']:checked").val()
      this.suspenderbuttonPicked = $(
        "input[name='suspenderbutton']:checked"
      ).val()
    },
  },
})
