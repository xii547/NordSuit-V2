// filter


$(".modalFilterbtn").click(function(){
  $(".filterModal").toggle();
});

$('.modalFilterbtn').click(function(){
	$('#mymodal2').modal({show:true});
})
// $(".modalFilterbtn").click(function(){
//     // $(".fabricModal").addClass("bd-example-modal-lg");
//     // $(".modal-content-1").toggleClass("modalpullRight");
//     // $(".modal-dialog").addClass("modal-lg");
//     // $(".modal-dialog").toggleClass("modal-lg");
// });

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allRadio = document.querySelectorAll('input[type=radio]');
var allfilter = Array.from(document.querySelectorAll('.filter'));
var checked = {};

getChecked('type');
getChecked('color');
getChecked('material');
getChecked('pattern');
getChecked('season');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});
Array.prototype.forEach.call(allRadio, function (el) {
    el.addEventListener('change', toggleCheckbox);
  });
function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allfilter.map(function (el) {
    var type = checked.type.length ? _.intersection(Array.from(el.classList), checked.type).length : true;
    var color = checked.color.length ? _.intersection(Array.from(el.classList), checked.color).length : true;
    var material = checked.material.length ? _.intersection(Array.from(el.classList), checked.material).length : true;
    var pattern = checked.pattern.length ? _.intersection(Array.from(el.classList), checked.pattern).length : true;
    var season = checked.season.length ? _.intersection(Array.from(el.classList), checked.season).length : true;
    if (type && color && material && pattern && season) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}