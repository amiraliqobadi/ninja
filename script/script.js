const firstStartPage = document.getElementById('firstStartPage');
const levelSelect = document.getElementById('levelSelect');
const PlayBottom = document.querySelector('#firstStartPage > .PlayBottom');

const mapGallery = document.querySelector('#levelSelect .gallery');
const mapMoveRightBtn = document.querySelector('#levelSelect > .mapMoveRightBtn');
const mapMoveLeftBtn = document.querySelector('#levelSelect > .mapMoveLeftBtn');


PlayBottom.onclick = () =>{
    firstStartPage.className = ('hide');
    levelSelect.className = ('show');
}

var mapSliderposition = 1; 

mapMoveRightBtn.onclick = () =>{   
    mapSliderposition = mapSliderposition <=4 ? mapSliderposition + 1 : 4;
    if(mapSliderposition <= 4){ 
    mapGallery.style.backgroundImage = `url(img/mapSlider/0${mapSliderposition}.png)`;
    }
}

mapMoveLeftBtn.onclick = () =>{
    mapSliderposition = mapSliderposition >=1 ? mapSliderposition - 1 : 1;
    if(mapSliderposition >= 1){
        mapGallery.style.backgroundImage = `url(img/mapSlider/0${mapSliderposition}.png)`;
    }
}

