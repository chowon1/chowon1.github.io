var $btItem = document.getElementById('bt_open');
var $sideItem1 = document.getElementById('side_item1');
var $sideItemList1 = $sideItem1.querySelectorAll('li');
var $sideItem2 = document.getElementById('side_item2');
var $sideItemList2 = $sideItem2.querySelectorAll('li');
var $sideItem3 = document.getElementById('side_item3');
var $sideItemList3 = $sideItem3.querySelectorAll('li');

function onClickBtMenu(event){
    $sideItem1.classList.add('open');
    $sideItem2.classList.add('open');
    $sideItem3.classList.add('open');
}
$btItem.addEventListener('click', onClickBtMenu);

/*modal*/
const myBtn = document.querySelector('#myBtn');
const closeBtn = document.querySelector('.modal_close');
const modal = document.querySelector('.modal');

function toggleModal(){
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }    
}

myBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

// Youtube API 연결
var tag = document.createElement('script');
      
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '400',
     width: '600',
     videoId: 'uh2mr3zoSCA',
    //  유튜브 주소 입력
     playerVars : {
       autoplay : 2,
    //  대기 시간
       controls : 0,
       rel : 0,
       fs : 0,
       modestbranding : 0,
       showinfo: 0
     } 
    //  events: {
    //    'onReady': onPlayerReady,
    //    'onStateChange': onPlayerStateChange
    //  }
   });
 }

 function onPlayerReady(event) {
   event.target.playVideo();
 }

 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }














var $gallery = document.getElementById('gallery');
var $view = $gallery.querySelector('.view');
var $viewContainer = $view.querySelector('.view-container');
var $viewItem = $viewContainer.querySelectorAll('.view-item');
var $list = $gallery.querySelector('.list');
var $listItem = $list.querySelectorAll('a');

var _galleryW = 900;
var _cuId = 0;
var _exId = 0;
var _max = $viewItem.length;
function galleryResize(){
    $viewContainer.style.width = _galleryW * _max + 'px';
    for(var i = 0; i < $viewItem.length; i++){
        $viewItem[i].style.width = _galleryW + 'px';
    }
}
function gallerySlide(){
    var duration = 400 + 200 * Math.abs(_cuId - _exId);
    $viewContainer.style.transform = 'translate3d('+ _galleryW * _cuId * -1 + 'px, 0, 0)';
    $viewContainer.style.transitionProperty = 'transform';
    $viewContainer.style.transitionDuration = duration + 'ms';
    $viewContainer.style.transitionTimeFunction = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';

}
$viewContainer.addEventListener('transitionend', function(){
    $viewContainer.style.transitionProperty = null;
    $viewContainer.style.transitionDuration = null;
    $viewContainer.style.transitionTimeFunction = null;
});

function listClick(id){
    function onClickList(event){
        event.preventDefault();
        var $el = this, $parent = $el.parentElement;
        if(!$parent.classList.contains('selected')){
            _cuId = id;
            $listItem[_exId].parentElement.classList.remove('selected');
            $parent.classList.add('selected');
            gallerySlide();
            _exId = _cuId;
        }
    }
    $listItem[id].addEventListener('click', onClickList);
}

function init(){
    console.log('초기화');
    galleryResize();
    for(var i = 0; i < $listItem.length; i++){
        listClick(i);
    }
}
init();