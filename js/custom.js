function logEventGame(id, type){
    analytics.logEvent(id, {
        type: type
    }); 

  }
function loadMainGame(){
    $('#preload').remove();
    $('.game-iframe-container').html('<iframe class="game-iframe" id="game-area" src="https://ubg77.github.io/edit/motoroadrash3d/" width="400" height="800" scrolling="none" frameborder="0" allowfullscreen=""></iframe>');
    logEventGame("road-rash-3d", "play");
    
}
function showGame(slug){
    for (var j=0; j<listGame.length; j++) {
        if (listGame[j].slug == slug) {
            var tmp_url = '';
            if(listGame[j].domain == 1){
                tmp_url = 'https://webglmath.github.io/'+slug+"/";
            } else if(listGame[j].domain == 2){
                tmp_url = 'https://ubg77.github.io/edit/'+slug+"/";
            }  else if(listGame[j].domain == 3){
                tmp_url = 'https://ubg77.github.io/game131022/'+slug+"/";
                
            }  else if(listGame[j].domain == 4){
                tmp_url = 'https://ubg77.github.io/fix/'+slug+"/";
                if(slug.indexOf("fnaf2") != -1){
                    tmp_url = 'https://ubg77.github.io/fix/'+slug;
                }
            }
            logEventGame(slug, "play");
            $('#preload').remove();
            $('.game-iframe-container').html('<iframe class="game-iframe" id="game-area" src="'+tmp_url+'" width="400" height="800" scrolling="none" frameborder="0" allowfullscreen=""></iframe>');
            $("#title").html(listGame[j].title);
            $("html, body").animate({ scrollTop: 0 }, "slow");
            break;
            
        }
    }
}
var listGame;
fetch("game/all.json",{
headers: {
    'Content-Type': 'application/json',
    },
}).then(response => response.json())
.then(data => {
    listGame = data;
});
function searchGame(){
    var x = document.getElementById("searchInput").value;
    console.log(x);
    let html = "";
    document.getElementById('listgame').innerHTML = '';
    for (var j=0; j<listGame.length; j++) {
        if (listGame[j].title.toUpperCase().indexOf(x.toUpperCase()) >= 0) {
            var item = listGame[j];
            var img = item.slug;
            if(item.img){
                img = item.img;
            }
            const htmlItem = `<div class="g-card">
                    <div class="pic">
                    <figure class="ratio ratio-1">
                        <a rel="noindex nofollow" title="${item.title}" onclick="showGame('${item.slug}')">
                        <img src="https://tbg95.co/${item.slug}/logo.png" class="small-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">
                        <a title="${item.title}" rel="noindex nofollow">${item.title}</a>
                    </h3>
        
                    <a class="bt-play" rel="noindex nofollow" title="${item.title}">
                        <img src="/images/play.svg" alt="Play game">
                    </a>
                    </div>
                </div>`;
            const e = document.createElement('div');
            e.className  = "column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile show";
            e.innerHTML = htmlItem;  
            document.getElementById('listgame').appendChild(e);
        }
    }
    
}
function loadSimilar(){
    fetch("game/similar.json",{
        headers: {
            'Content-Type': 'application/json',
            },
    }).then(response => response.json())
    .then(data => {
        listGame = data;
        for (var j=0; j<listGame.length; j++) {
            var item = listGame[j];
            var img = item.slug;
            if(item.img){
                img = item.img;
            }
            const htmlItem = `<a rel="noindex nofollow" title="${item.title}" onclick="showGame('${item.slug}')">
                        <div class="pic">
                            <figure class="ratio ratio-1 circle list-thumbnail">
                            <img src="/images/logo/${img}.png" class="small-thumb" alt="${item.title}">
                            </figure>
                        </div>
                        <div class="text">
                            <h3>
                            <div class="list-title ellipsis">${item.title}</div>
                            </h3>
                            <div class="sub-text ellipsis">Car games</div>
                        </div>
                        </a>`;
            const e = document.createElement('li');
            e.className  = "widget-list-item";
            e.innerHTML = htmlItem;  
            document.getElementById('similar').appendChild(e);
            
        }
    });
}
function loadHot(){
    fetch("game/hot.json",{
        headers: {
            'Content-Type': 'application/json',
            },
    }).then(response => response.json())
    .then(data => {
        listGame = data;
        for (var j=0; j<listGame.length; j++) {
            var item = listGame[j];
            var img = item.slug;
            if(item.img){
                img = item.img;
            }
            const htmlItem = `<a rel="noindex nofollow" title="${item.title}" onclick="showGame('${item.slug}')">
                        <div class="pic">
                            <figure class="ratio ratio-1 circle list-thumbnail">
                            <img src="/images/logo/${img}.png" class="small-thumb" alt="${item.title}">
                            </figure>
                        </div>
                        <div class="text">
                            <h3>
                            <div class="list-title ellipsis">${item.title}</div>
                            </h3>
                            <div class="sub-text ellipsis">Hot</div>
                        </div>
                        </a>`;
            const e = document.createElement('li');
            e.className  = "widget-list-item";
            e.innerHTML = htmlItem;  
            document.getElementById('hotgame').appendChild(e);
            
        }
    });
}
function loadAllGame(){
    fetch("game/all.json",{
        headers: {
            'Content-Type': 'application/json',
            },
        }).then(response => response.json())
    .then(data => {
        listGame = data;
        for (var j=0; j<listGame.length; j++) {
            var item = listGame[j];
            var img = item.slug;
            if(item.img){
                img = item.img;
            }
            const htmlItem = `<div class="g-card">
                    <div class="pic">
                    <figure class="ratio ratio-1">
                        <a rel="noindex nofollow" title="${item.title}" onclick="showGame('${item.slug}')">
                        <img src="/images/logo/${img}.png" class="small-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">
                        <a title="${item.title}"  rel="noindex nofollow">${item.title}</a>
                    </h3>
                    <div class="info">
                        <div class="rating ellipsis">
                            ${item.cat}
                        </div>
                    </div>
                    <a class="bt-play" title="${item.title}" rel="noindex nofollow" onclick="showGame('${item.slug}')">
                        <img src="/images/play.svg" alt="Play game">
                    </a>
                    </div>
                </div>`;
            const e = document.createElement('div');
            e.className  = "column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile show";
            e.innerHTML = htmlItem;  
            document.getElementById('listgame').appendChild(e);
        }
    });
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
function loadCategory(cat){
    var tmp_cat = capitalizeFirstLetter(cat);
    fetch("game/all.json",{
        headers: {
            'Content-Type': 'application/json',
            },
    }).then(response => response.json())
    .then(data => {
        listGame = data;
        document.getElementById('listgame').innerHTML = '';
        logEventGame(cat, "searchCat");
        for (var j=0; j<listGame.length; j++) {
            if (listGame[j].cat.indexOf(tmp_cat) >= 0) {
            var item = listGame[j];
            var img = item.slug;
            if(item.img){
                img = item.img;
            }
            const htmlItem = `<div class="g-card">
                    <div class="pic">
                    <figure class="ratio ratio-1">
                        <a rel="noindex nofollow" title="${item.title}" onclick="showGame('${item.slug}')">
                        <img src="/images/logo/${img}.png" class="small-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">
                        <a rel="noindex nofollow" title="${item.title}">${item.title}</a>
                    </h3>
                    <div class="info">
                        <div class="rating ellipsis">
                            ${item.cat}
                        </div>
                    </div>
                    <a class="bt-play" title="${item.title}" rel="noindex nofollow" onclick="showGame('${item.slug}')">
                        <img src="/images/play.svg" alt="Play game">
                    </a>
                    </div>
                </div>`;
            const e = document.createElement('div');
            e.className  = "column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile show";
            e.innerHTML = htmlItem;  
            document.getElementById('listgame').appendChild(e);
            }
            
        }
        document.getElementById('listgame').scrollIntoView();
    });

}
window.addEventListener('load', function() {
    
    loadSimilar();
    loadHot();
    loadAllGame();
});
