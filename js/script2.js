var app = new Vue({
	el: '#app2',

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

		stylevariants: [						
			{
				variantId: 18,
				variantType: 'Single Breasted 1 Button',
				variantImage2: 'imge/front/front/neck_single_breasted+buttons_1+lapel_medium+style_lapel_notch.png'
			},			
			{
				variantId: 19,
				variantType: 'Single Breasted 2 Button',
				variantImage2: 'imge/front/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png'
			},			
			{
				variantId: 20,
				variantType: 'Single Breasted 3 Button',
				variantImage2: 'imge/front/front/neck_single_breasted+buttons_3+lapel_medium+style_lapel_notch.png'
			},			
			{
				variantId: 21,
				variantType: 'Double Breasted 2 Button',
				variantImage2: 'imge/front/front/neck_double_breasted+buttons_2+lapel_medium+style_lapel_notch.png'
			},			
			{
				variantId: 22,
				variantType: 'Double Breasted 4 Button',
				variantImage2: 'imge/front/front/neck_double_breasted+buttons_4+lapel_medium+style_lapel_notch.png'
			},				
			{
				variantId: 23,
				variantType: 'Double Breasted 6 Button',
				variantImage2: 'imge/front/front/neck_double_breasted+buttons_6+lapel_medium+style_lapel_notch.png'
			}	
			],		


		fittingvariants: [
			{
				variantId: 1,
				variantType: 'Slim Fit',
			},			
			{
				variantId: 2,
				variantType: 'Regular Fit',
			},			
			],			

		bfittingvariants: [
			{
				variantId: 991,
				variantType: 'Slim Fit',
			},			
			{
				variantId: 992,
				variantType: 'Regular Fit',
			},			
			],			



		lapelvariants: [
			{
				variantId: 121,
				variantType: 'Notch',
				variantImage2: ''
			},			
			{
				variantId: 232,
				variantType: 'Peak',
				variantImage2: ''
			},				
			{
				variantId: 235,
				variantType: 'Shawl',
				variantImage2: ''
			},			
			],	


		pocketvariants: [						
			{
				variantId: 101,
				variantType: 'No Pockets',
			},			
			{
				variantId: 102,
				variantType: 'With Flap',
			},			
			{
				variantId: 103,
				variantType: 'Double Welted',
			},			
			{
				variantId: 104,
				variantType: 'Patched',
			},			
			{
				variantId: 105,
				variantType: 'With Flap X3',
			},				
			{
				variantId: 106,
				variantType: 'Double Welted X3',
			}	
			],	
		

		breastpocketvariants: [								
			{
				variantId: 251,
				variantType: 'No',
				variantImage2: ''
			},			
			{
				variantId: 252,
				variantType: 'Yes',
				variantImage2: 'imge/front/front/breast_pocket_classic.png'
			},
			{
				variantId: 253,
				variantType: 'Patched',
				variantImage2: 'imge/front/front/breast_pocket_patched_1.png'
			},			
			{
				variantId: 254,
				variantType: 'Patched X2',
				variantImage2: 'imge/front/front/breast_pocket_patched_2.png'
			}

			],


		sleevebuttonvariants: [								
			{
				variantId: 2223,
				variantType: 'No Button',
				variantImage: ''
			},			
			{
				variantId: 2224,
				variantType: '2 Button',
				variantImage: 'imge/back/sleeves+buttons_2.png'
			},
			{
				variantId: 2225,
				variantType: '3 Buttons',
				variantImage: 'imge/back/sleeves+buttons_3.png'
			},			
			{
				variantId: 2226,
				variantType: '4 Buttons',
				variantImage: 'imge/back/sleeves+buttons_4.png'
			}
			],	

		ventvariants: [								
			{
				variantId: 1122,
				variantType: 'Center Vent',
				variantImage: 'imge/back/bottom+length_long+back_style_center_vent.png'
			},			
			{
				variantId: 1123,
				variantType: 'Side Vents',
				variantImage: 'imge/back/bottom+length_long+back_style_side_vents.png'
			}
			],
	},

		methods:
		{

		updateProduct2(variantImage2){

			var x = document.getElementsByClassName("Svariant");
			var y = document.getElementsByClassName("Lvariant");
			var i;


		// style and lapels


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

		if (document.getElementById("1").checked){
				this.fittings = '';
			}
		else if (document.getElementById("2").checked) {
			this.fittings = 'imge/front/front/body_baggy.png';
		}		

		//backfittings

		if (document.getElementById("991").checked){
				this.bfittings = '';
			}
		else if (document.getElementById("992").checked) {
			this.bfittings = 'imge/back/body_baggy.png';
		}		
		else if (document.getElementById("992").checked && document.getElementById("1123").checked) {
			this.bfittings = 'imge/back/body_baggy+length_long+back_style_side_vents.png';
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


		if (document.getElementById("105").checked) {
			this.pockets = 'imge/front/front/hip_pockets_with_flap+fit_slim.png';
			this.pocketsx = 'imge/front/front/hip_pockets_with_flap_slanted+fit_slim+third.png';

			}
		else if (document.getElementById("106").checked) {
			this.pocketsx = 'imge/front/front/hip_pockets_double_welt+fit_slim+third.png';
			this.pockets = 'imge/front/front/hip_pockets_double_welt+fit_slim.png';
			}
		else if (document.getElementById("101").checked){
			this.pockets = '';
			this.pocketsx = '';
		}				
		else if (document.getElementById("102").checked){
			this.pockets = 'imge/front/front/hip_pockets_with_flap+fit_slim.png';
			this.pocketsx = '';
		}			
		else if (document.getElementById("103").checked){
			this.pockets = 'imge/front/front/hip_pockets_double_welt+fit_slim.png';
			this.pocketsx = '';
		}			
		else if (document.getElementById("104").checked){
			this.pockets = 'imge/front/front/hip_pockets_patched+fit_slim.png';
			this.pocketsx = '';
		}					




		//breastpockets

		if (document.getElementById("252").checked) {
				this.breastpockets =  'imge/front/front/breast_pocket_classic.png';
		}
		else if (document.getElementById("253").checked) {
				this.breastpockets =  'imge/front/front/breast_pocket_patched_1.png';
		}
		else if (document.getElementById("254").checked) {
				this.breastpockets =  'imge/front/front/breast_pocket_patched_2.png';
		}				
		else if (document.getElementById("251").checked) {
				this.breastpockets =  '';
		}		

			//method end
	},

		updateProductV(variantImage){
			this.bbottom = variantImage
	},

		updateProductB(variantImage){
			this.bsbuttons = variantImage
	}



	}

});







		// default choice

function check() {
  document.getElementById("jlapels").firstChild.checked = true;
  document.getElementById("jstyles").firstChild.checked = true;
  document.getElementById("jfittings").firstChild.checked = true;
  document.getElementById("jpockets").firstChild.checked = true;
  document.getElementById("jbpockets").firstChild.checked = true;
  document.getElementById("jbsbuttons").firstChild.checked = true;
  document.getElementById("jbvents").firstChild.checked = true;
  document.getElementById("jbfittings").firstChild.checked = true;
}

function frontDisplay(){
  document.getElementById('frontImg').style.display ='block';
  document.getElementById('frontDetails').style.display ='block';
  document.getElementById('backImg').style.display ='none';
  document.getElementById('backDetails').style.display ='none';
}
function backDisplay(){
  document.getElementById('frontImg').style.display = 'none';
  document.getElementById('frontDetails').style.display = 'none';
  document.getElementById('backImg').style.display = 'block';
  document.getElementById('backDetails').style.display = 'block';
}