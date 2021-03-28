var app = new Vue({ 
    el: '#app',
    data: {

        styles: 'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png',
        bstyles: 'imge/back/neck.png',
        fittings: '',
        bfittings: '',
        stylesx:'',
        lapels:'' ,
        sleeves: 'imge/front/front/interior+sleeves.png',
        bsleeves: 'imge/back/sleeves+buttons_0.png',
        bottom: 'imge/front/front/bottom_single_breasted+length_long+hemline_open.png',
        bbottom: 'imge/back/bottom+length_long+back_style_center_vent.png',
        bsbuttons: '',
        pockets: '',
        pocketsx: '',
        breastpockets: '',
        stylePicked: '',
        lapelPicked: '',
        fittingPicked: '',
        bpocketPicked: '',
        bsbuttonPicked: '',
        ventPicked: '',
        pocketPicked: '',



        stylevariants: [                        
            {
                variantId: 's1',
                variantType: 'Single Breasted 1 Button',
                variantImage2: 'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png'
            },          
            {
                variantId: 's2',
                variantType: 'Single Breasted 2 Button',
                variantImage2: 'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png'
            },          
            {
                variantId: 's3',
                variantType: 'Single Breasted 3 Button',
                variantImage2: 'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png'
            },          
            {
                variantId: 's4',
                variantType: 'Double Breasted 2 Button',
                variantImage2: 'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_notch.png'
            },          
            {
                variantId: 's5',
                variantType: 'Double Breasted 4 Button',
                variantImage2: 'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_notch.png'
            },              
            {
                variantId: 's6',
                variantType: 'Double Breasted 6 Button',
                variantImage2: 'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_notch.png'
            }   
        ],

        fittingvariants: [
            {
                variantId: 'f1',
                variantType: 'Slim Fit',
            },          
            {
                variantId: 'f2',
                variantType: 'Regular Fit',
            },          
            ],          

        bfittingvariants: [
            {
                variantId: 'bf1',
                variantType: 'Slim Fit',
            },          
            {
                variantId: 'bf2',
                variantType: 'Regular Fit',
            },          
            ],  


        lapelvariants: [
            {
                variantId: 'l1',
                variantType: 'Notch',
                variantImage2: ''
            },          
            {
                variantId: 'l2',
                variantType: 'Peak',
                variantImage2: ''
            },              
            {
                variantId: 'l3',
                variantType: 'Shawl',
                variantImage2: ''
            }           
        ],


        pocketvariants: [                       
            {
                variantId: 'p1',
                variantType: 'No Pockets',
            },          
            {
                variantId: 'p2',
                variantType: 'With Flap',
            },          
            {
                variantId: 'p3',
                variantType: 'Double Welted',
            },          
            {
                variantId: 'p4',
                variantType: 'Patched',
            },          
            {
                variantId: 'p5',
                variantType: 'With Flap X3',
            },              
            {
                variantId: 'p6',
                variantType: 'Double Welted X3',
            }   
            ],  
        

        breastpocketvariants: [                             
            {
                variantId: 'bp1',
                variantType: 'No',
                variantImage2: ''
            },          
            {
                variantId: 'bp2',
                variantType: 'Yes',
                variantImage2: 'imge/front/front/breast_pocket_classic.png'
            },
            {
                variantId: 'bp3',
                variantType: 'Patched',
                variantImage2: 'imge/front/front/breast_pocket_patched_1.png'
            },          
            {
                variantId: 'bp4',
                variantType: 'Patched X2',
                variantImage2: 'imge/front/front/breast_pocket_patched_2.png'
            }

            ],


        sleevebuttonvariants: [                             
            {
                variantId: 'sb1',
                variantType: 'No Button',
                variantImage: ''
            },          
            {
                variantId: 'sb2',
                variantType: '2 Button',
                variantImage: 'imge/back/sleeves+buttons_2.png'
            },
            {
                variantId: 'sb3',
                variantType: '3 Buttons',
                variantImage: 'imge/back/sleeves+buttons_3.png'
            },          
            {
                variantId: 'sb4',
                variantType: '4 Buttons',
                variantImage: 'imge/back/sleeves+buttons_4.png'
            }
            ],  

        ventvariants: [                             
            {
                variantId: 'v1',
                variantType: 'Center Vent',
                variantImage: 'imge/back/bottom+length_long+back_style_center_vent.png'
            },          
            {
                variantId: 'v2',
                variantType: 'Side Vents',
                variantImage: 'imge/back/bottom+length_long+back_style_side_vents.png'
            }
            ]


    },



        methods:
        {

        updateProduct(variantImage){
          var x = document.getElementsByClassName("Svariant");
          var y = document.getElementsByClassName("Lvariant");
          var i;




        if (y[0].checked && x[0].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png';
            }   
        else if (y[1].checked && x[0].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_peak.png';
            }           
        else if (y[2].checked && x[0].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_round.png';
            }

        else if(y[0].checked && x[1].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png';
            }
        else if (y[1].checked && x[1].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_peak.png';

            }           
        else if (y[2].checked && x[1].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_round.png';
            }

        else if (y[0].checked && x[2].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png';
            }
        else if (y[1].checked && x[2].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_peak.png';
            }           
        else if (y[2].checked && x[2].checked) {
            this.styles = 'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_round.png';
            }
        
        else if(y[0].checked && x[3].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_notch.png';
            }
        else if (y[1].checked && x[3].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_peak.png';
            }           
        else if (y[2].checked && x[3].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_round.png';
        }       
        else if(y[0].checked && x[4].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_notch.png';
            }
        else if (y[1].checked && x[4].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_peak.png';
            }           
        else if (y[2].checked && x[4].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_round.png';
            }   

        else if(y[0].checked && x[5].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_notch.png';
            }
        else if (y[1].checked && x[5].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_peak.png';
            }           
        else if (y[2].checked && x[5].checked) {
            this.styles = 'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_round.png';
            }




      // fittings 

        if (document.getElementById("f1").checked){
                this.fittings = '';
                this.bfittings = '';
            }
        else if (document.getElementById("f2").checked) {
            this.fittings = 'imge/front/front/body_baggy.png';
            this.bfittings = 'imge/back/body_baggy.png';
        }       


        //bottom

        for (i=0; i<3 ; i++){

        if(x[i].checked) {
                this.bottom = 'imge/front/front/bottom_single_breasted+length_long+hemline_open.png';
                }
            };
        for (i=3; i<6 ; i++){
            if (x[i].checked) {
                this.bottom = 'imge/front/front/bottom_double_breasted+length_long.png';
            }
        };




        // pockets


        if (document.getElementById("p5").checked) {
            this.pockets = 'imge/front/front/hip_pockets_with_flap+fit_slim.png';
            this.pocketsx = 'imge/front/front/hip_pockets_with_flap_slanted+fit_slim+third.png';
            }
        else if (document.getElementById("p6").checked) {
            this.pocketsx = 'imge/front/front/hip_pockets_double_welt+fit_slim+third.png';
            this.pockets = 'imge/front/front/hip_pockets_double_welt+fit_slim.png';
            }
        else if (document.getElementById("p1").checked){
            this.pockets = '';
            this.pocketsx = '';
        }               
        else if (document.getElementById("p2").checked){
            this.pockets = 'imge/front/front/hip_pockets_with_flap+fit_slim.png';
            this.pocketsx = '';
        }           
        else if (document.getElementById("p3").checked){
            this.pockets = 'imge/front/front/hip_pockets_double_welt+fit_slim.png';
            this.pocketsx = '';
        }           
        else if (document.getElementById("p4").checked){
            this.pockets = 'imge/front/front/hip_pockets_patched+fit_slim.png';
            this.pocketsx = '';
        }                   




        //breastpockets

        if (document.getElementById("bp2").checked) {
                this.breastpockets =  'imge/front/front/breast_pocket_classic.png';
        }
        else if (document.getElementById("bp3").checked) {
                this.breastpockets =  'imge/front/front/breast_pocket_patched_1.png';
        }
        else if (document.getElementById("bp4").checked) {
                this.breastpockets =  'imge/front/front/breast_pocket_patched_2.png';
        }               
        else if (document.getElementById("bp1").checked) {
                this.breastpockets =  '';
        }     


        //method end
    },

        updateProductV(variantImage){
            this.bbottom = variantImage
    },

        updateProductB(variantImage){
            this.bsbuttons = variantImage
    },

        modalFunction(){
           this.stylePicked = $("input[name='styles']:checked").val();
           this.lapelPicked = $("input[name='lapels']:checked").val();
           this.fittingPicked = $("input[name='fittings']:checked").val();
           this.bpocketPicked = $("input[name='breastpockets']:checked").val();
           this.pocketPicked = $("input[name='pockets']:checked").val();
           this.bsbuttonPicked = $("input[name='sleevebuttons']:checked").val();
           this.ventPicked = $("input[name='vents']:checked").val();
    },
},

});





