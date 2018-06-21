var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');
var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');

var _cuId = 0;
var _exId = _cuId;

function tabMenuClick(id){
    function onClickTabMenu(){
        var $el = this;
        if(!$el.classList.contains('selected')){ 
            _cuId = id;
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected');
            $tabContent[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');

            _exId = _cuId;
        }
    }
    $tabMenuEl[id].addEventListener('click', onClickTabMenu);
}
function init(){
    console.log('init');
    for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i);
    }
}
init();

var $btn1 = document.getElementById('btn1');
var $source1 = document.getElementById('source1');
var $tabtarget1= document.getElementById('tab-target1');
var $btn2 = document.getElementById('btn2');
var $source2 = document.getElementById('source2');
var $tabtarget2= document.getElementById('tab-target2');
var $btn3 = document.getElementById('btn3');
var $source3 = document.getElementById('source3');
var $tabtarget3= document.getElementById('tab-target3');
