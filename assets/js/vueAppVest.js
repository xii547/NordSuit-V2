var app = new Vue({
  el: '#app',
  data: {
    styles:
      'imge/vest/top-lapel-no/neck_single_breasted+buttons_3+style_lapel_no.png',
    fittings: '',
    bfittings: '',
    lapels: '',
    sleeves: '',
    bsleeves: 'imge/vest/back/shirt_to_pants.png',
    bstyles: 'imge/vest/back/vest_back.png',
    bottom: 'imge/vest/bottom/bottom_single_breasted+edge_straight.png',
    bbottom: 'imge/vest/back/vest_back.png',
    pockets: '',
    pocketsx: '',
    breastpockets:
      'imge/vest/front/breast_pocket_classic+neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png',
    stylePicked: '',
    lapelPicked: '',
    lapelwidthPicked: '',
    bpocketPicked: '',
    edgePicked: '',
    pocketPicked: '',

    stylevariants: [
      {
        variantId: 's1',
        variantType: 'Single Breasted 3 Button',
        variantImage2:
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_3+lapel_narrow+style_lapel_notch.png',
      },
      {
        variantId: 's2',
        variantType: 'Single Breasted 4 Button',
        variantImage2:
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_4+lapel_narrow+style_lapel_notch.png',
      },
      {
        variantId: 's3',
        variantType: 'Single Breasted 5 Button',
        variantImage2:
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_5+lapel_narrow+style_lapel_notch.png',
      },
      {
        variantId: 's4',
        variantType: 'Single Breasted 6 Button',
        variantImage2:
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_6+lapel_narrow+style_lapel_notch.png',
      },
      {
        variantId: 's5',
        variantType: 'Double Breasted 4 Button',
        variantImage2:
          'imge/vest/top-lapel-notch/slim/neck_double_breasted+buttons_4+lapel_narrow+style_lapel_notch.png',
      },
      {
        variantId: 's6',
        variantType: 'Double Breasted 6 Button',
        variantImage2:
          'imge/vest/top-lapel-notch/slim/neck_double_breasted+buttons_6+lapel_narrow+style_lapel_notch.png',
      },
    ],

    lapelwidthvariants: [
      {
        variantId: 'f1',
        variantType: 'Slim Fit',
      },
      {
        variantId: 'f2',
        variantType: 'Standard Fit',
      },
    ],

    lapelvariants: [
      {
        variantId: 'l1',
        variantType: 'No Lapel',
        variantImage2: '',
      },
      {
        variantId: 'l2',
        variantType: 'Notched',
        variantImage2: '',
      },
      {
        variantId: 'l3',
        variantType: 'Peak',
        variantImage2: '',
      },
      {
        variantId: 'l4',
        variantType: 'Shawl',
        variantImage2: '',
      },
    ],

    pocketvariants: [
      {
        variantId: 'p1',
        variantType: 'No Pockets',
      },
      {
        variantId: 'p2',
        variantType: 'Welt Pocket',
      },
      {
        variantId: 'p3',
        variantType: 'Double Welt',
      },
      {
        variantId: 'p4',
        variantType: 'With Flap',
      },
      {
        variantId: 'p5',
        variantType: 'With Pockets X3',
      },
      {
        variantId: 'p6',
        variantType: 'Double Welt X3',
      },
      {
        variantId: 'p7',
        variantType: 'With Flaps X3',
      },
    ],
    edgevariants: [
      {
        variantId: 'e1',
        variantType: 'Straight',
        variantImage:
          'imge/vest/bottom/bottom_single_breasted+edge_straight.png',
      },
      {
        variantId: 'e2',
        variantType: 'Diagonal',
        variantImage:
          'imge/vest/bottom/bottom_single_breasted+edge_diagonal.png',
      },
      {
        variantId: 'e3',
        variantType: 'Rounded',
        variantImage:
          'imge/vest/bottom/bottom_single_breasted+edge_rounded.png',
      },
    ],
    breastpocketvariants: [
      {
        variantId: 'bp1',
        variantType: 'Yes',
        variantImage:
          'imge/vest/front/breast_pocket_classic+neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png',
      },
      {
        variantId: 'bp2',
        variantType: 'No',
        variantImage: '',
      },
    ],
  },

  methods: {
    updateProduct(variantImage) {
      var x = document.getElementsByClassName('Svariant')
      var y = document.getElementsByClassName('Lvariant')
      var z = document.getElementsByClassName('Fvariant')
      var w = document.getElementsByClassName('Bvariant')

      if (y[0].checked && x[0].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_3+style_lapel_no.png'
      } else if (y[1].checked && x[0].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_3+lapel_narrow+style_lapel_notch.png'
      } else if (y[2].checked && x[0].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/slim/neck_single_breasted+buttons_3+lapel_narrow+style_lapel_peak.png'
      } else if (y[3].checked && x[0].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/slim/neck_single_breasted+buttons_3+lapel_narrow+style_lapel_round.png'
      } else if (y[0].checked && x[1].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_4+style_lapel_no.png'
      } else if (y[1].checked && x[1].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_4+lapel_narrow+style_lapel_notch.png'
      } else if (y[2].checked && x[1].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/slim/neck_single_breasted+buttons_4+lapel_narrow+style_lapel_peak.png'
      } else if (y[3].checked && x[1].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/slim/neck_single_breasted+buttons_4+lapel_narrow+style_lapel_round.png'
      } else if (y[0].checked && x[2].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_5+style_lapel_no.png'
      } else if (y[1].checked && x[2].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_5+lapel_narrow+style_lapel_notch.png'
      } else if (y[2].checked && x[2].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/slim/neck_single_breasted+buttons_5+lapel_narrow+style_lapel_peak.png'
      } else if (y[3].checked && x[2].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/slim/neck_single_breasted+buttons_5+lapel_narrow+style_lapel_round.png'
      } else if (y[0].checked && x[3].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_6+style_lapel_no.png'
      } else if (y[1].checked && x[3].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/slim/neck_single_breasted+buttons_6+lapel_narrow+style_lapel_notch.png'
      } else if (y[2].checked && x[3].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/slim/neck_single_breasted+buttons_6+lapel_narrow+style_lapel_peak.png'
      } else if (y[3].checked && x[3].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/slim/neck_single_breasted+buttons_5+lapel_narrow+style_lapel_round.png'
      } else if (y[0].checked && x[4].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_double_breasted+buttons_4+style_lapel_no.png'
      } else if (y[1].checked && x[4].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/slim/neck_double_breasted+buttons_4+lapel_narrow+style_lapel_notch.png'
      } else if (y[2].checked && x[4].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/slim/neck_double_breasted+buttons_4+lapel_narrow+style_lapel_peak.png'
      } else if (y[3].checked && x[4].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/slim/neck_double_breasted+buttons_4+lapel_narrow+style_lapel_round.png'
      } else if (y[0].checked && x[5].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_double_breasted+buttons_6+style_lapel_no.png'
      } else if (y[1].checked && x[5].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/slim/neck_double_breasted+buttons_6+lapel_narrow+style_lapel_notch.png'
      } else if (y[2].checked && x[5].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/slim/neck_double_breasted+buttons_6+lapel_narrow+style_lapel_peak.png'
      } else if (y[3].checked && x[5].checked && z[0].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/slim/neck_double_breasted+buttons_6+lapel_narrow+style_lapel_round.png'
      } else if (y[0].checked && x[0].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_3+style_lapel_no.png'
      } else if (y[1].checked && x[0].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/standard/neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png'
      } else if (y[2].checked && x[0].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/standard/neck_single_breasted+buttons_3+lapel_medium+style_lapel_peak.png'
      } else if (y[3].checked && x[0].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/standard/neck_single_breasted+buttons_3+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[1].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_4+style_lapel_no.png'
      } else if (y[1].checked && x[1].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/standard/neck_single_breasted+buttons_4+lapel_medium+style_lapel_notch.png'
      } else if (y[2].checked && x[1].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/standard/neck_single_breasted+buttons_4+lapel_medium+style_lapel_peak.png'
      } else if (y[3].checked && x[1].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/standard/neck_single_breasted+buttons_4+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[2].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_5+style_lapel_no.png'
      } else if (y[1].checked && x[2].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/standard/neck_single_breasted+buttons_5+lapel_medium+style_lapel_notch.png'
      } else if (y[2].checked && x[2].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/standard/neck_single_breasted+buttons_5+lapel_medium+style_lapel_peak.png'
      } else if (y[3].checked && x[2].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/standard/neck_single_breasted+buttons_5+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[3].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_single_breasted+buttons_6+style_lapel_no.png'
      } else if (y[1].checked && x[3].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/standard/neck_single_breasted+buttons_6+lapel_medium+style_lapel_notch.png'
      } else if (y[2].checked && x[3].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/standard/neck_single_breasted+buttons_6+lapel_medium+style_lapel_peak.png'
      } else if (y[3].checked && x[3].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/standard/neck_single_breasted+buttons_5+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[4].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_double_breasted+buttons_4+style_lapel_no.png'
      } else if (y[1].checked && x[4].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/standard/neck_double_breasted+buttons_4+lapel_medium+style_lapel_notch.png'
      } else if (y[2].checked && x[4].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/standard/neck_double_breasted+buttons_4+lapel_medium+style_lapel_peak.png'
      } else if (y[3].checked && x[4].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/standard/neck_double_breasted+buttons_4+lapel_medium+style_lapel_round.png'
      } else if (y[0].checked && x[5].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-no/neck_double_breasted+buttons_6+style_lapel_no.png'
      } else if (y[1].checked && x[5].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-notch/standard/neck_double_breasted+buttons_6+lapel_medium+style_lapel_notch.png'
      } else if (y[2].checked && x[5].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-peak/standard/neck_double_breasted+buttons_6+lapel_medium+style_lapel_peak.png'
      } else if (y[3].checked && x[5].checked && z[1].checked) {
        this.styles =
          'imge/vest/top-lapel-shawl/standard/neck_double_breasted+buttons_6+lapel_medium+style_lapel_round.png'
      }

      //   // fittings

      //   if (document.getElementById('f1').checked) {
      //     this.fittings = ''
      //     this.bfittings = ''
      //   } else if (document.getElementById('f2').checked) {
      //     this.fittings = 'imge/front/front/body_baggy.png'
      //     this.bfittings = 'imge/back/body_baggy.png'
      //   }

      //bottom

      for (i = 0; i < 4; i++) {
        if (x[i].checked) {
          if (w[0].checked) {
            this.bottom =
              'imge/vest/bottom/bottom_single_breasted+edge_straight.png'
          } else if (w[1].checked) {
            this.bottom =
              'imge/vest/bottom/bottom_single_breasted+edge_diagonal.png'
          } else if (w[2].checked) {
            this.bottom =
              'imge/vest/bottom/bottom_single_breasted+edge_rounded.png'
          }
        }
      }
      for (i = 4; i < 6; i++) {
        if (x[i].checked) {
          if (w[0].checked) {
            this.bottom =
              'imge/vest/bottom/bottom_double_breasted+edge_straight.png'
          } else if (w[1].checked) {
            this.bottom =
              'imge/vest/bottom/bottom_double_breasted+edge_diagonal.png'
          } else if (w[2].checked) {
            this.bottom =
              'imge/vest/bottom/bottom_double_breasted+edge_rounded.png'
          }
        }
      }

      // pockets

      if (document.getElementById('p5').checked) {
        this.pocketsx = 'imge/vest/pockets/hip_pockets_welt+third.png'
        this.pockets = 'imge/vest/pockets/hip_pockets_welt.png'
      } else if (document.getElementById('p6').checked) {
        this.pocketsx = 'imge/vest/pockets/hip_pockets_double_welt+third.png'
        this.pockets = 'imge/vest/pockets/hip_pockets_double_welt.png'
      } else if (document.getElementById('p7').checked) {
        this.pocketsx = 'imge/vest/pockets/hip_pockets_with_flap+third.png'
        this.pockets = 'imge/vest/pockets/hip_pockets_with_flap.png'
      } else if (document.getElementById('p1').checked) {
        this.pockets = ''
        this.pocketsx = ''
      } else if (document.getElementById('p2').checked) {
        this.pockets = 'imge/vest/pockets/hip_pockets_welt.png'
        this.pocketsx = ''
      } else if (document.getElementById('p3').checked) {
        this.pockets = 'imge/vest/pockets/hip_pockets_double_welt.png'
        this.pocketsx = ''
      } else if (document.getElementById('p4').checked) {
        this.pockets = 'imge/vest/pockets/hip_pockets_with_flap.png'
        this.pocketsx = ''
      }

      //breastpockets

      if (document.getElementById('bp1').checked) {
        this.breastpockets =
          'imge/vest/front/breast_pocket_classic+neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png'
      } else if (document.getElementById('bp2').checked) {
        this.breastpockets = ''
      }

      //method end
    },

    modalFunction() {
      this.stylePicked = $("input[name='styles']:checked").val()
      this.lapelPicked = $("input[name='lapels']:checked").val()
      this.lapelwidthPicked = $("input[name='lapelwidth']:checked").val()
      this.bpocketPicked = $("input[name='breastpockets']:checked").val()
      this.pocketPicked = $("input[name='pockets']:checked").val()
      this.edgePicked = $("input[name='edge']:checked").val()
    },
  },
})
