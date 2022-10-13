function loadGame(){
    fetch("data/game.json",{
        headers: {
            'Content-Type': 'application/json',
          },
    }).then(response => response.json())
    .then(data => {
        let html = "";
        
        data.forEach((item) =>{
            const htmlItem = `<div class="g-card">
            <div class="pic">
              <figure class="ratio ratio-1">
                <a onclick="loadDetail('${item.slug}')">
                  <img src="/image/${item.slug}.png" class="small-thumb" alt="${item.title}">
                </a>
              </figure>
            </div>
            <div class="g-info">
              <h3 class="grid-title ellipsis">
                <a onclick="loadDetail('${item.slug}')">${item.title}</a>
              </h3>
              <a onclick="loadDetail('${item.slug}')" class="bt-play">
                <img src="play.svg" alt="icon play">
              </a>
            </div>
          </div>`;
            
            html = htmlItem;
            const e = document.createElement('div');
            e.className  = "column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile show";
            e.innerHTML = html;  
            document.getElementById('listing1').appendChild(e);
        });
        
    })
}
function loadDetail(slug){
    var html = ` <iframe class="game-iframe iframeloader" id="game-area" src="https://game.tinglybubbleshooter.info/${slug}/" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen="" tabindex="0"></iframe>`;
    document.getElementById("loadgame").innerHTML = html;
    document.getElementById('loadgame').scrollIntoView();
}
window.addEventListener('load', function() {
    loadGame();
})
function open_fullscreen() {
	let game = document.getElementById("game-area");
	if (game.requestFullscreen) {
	  game.requestFullscreen();
	} else if (game.mozRequestFullScreen) { /* Firefox */
	  game.mozRequestFullScreen();
	} else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	  game.webkitRequestFullscreen();
	} else if (game.msRequestFullscreen) { /* IE/Edge */
	  game.msRequestFullscreen();
	}
};
function loadMainGame(){
    var html = `<iframe class="game-iframe iframeloader" id="game-area" src="https://b854ca15.bubble-shooter.pages.dev/" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen="" tabindex="0"></iframe>`;
    document.getElementById("loadgame").innerHTML = html;
    document.getElementById('loadgame').scrollIntoView();
}