document.addEventListener('DOMContentLoaded', function() {
    var spotifyApi = new SpotifyWebApi();

    var button = document.getElementById("button");
    var buttontwo = document.getElementById("buttontwo");

    var g_access_token = '';
    var g_username = '';

    var client_id = '';
    var redirect_uri = '';

    if (location.host == 'localhost:3000') {
        client_id = '546134a93aca4acfbea0ab794957097a';
        redirect_uri = 'http://127.0.0.1:3000/backfall.html';
    } else {
        client_id = '546134a93aca4acfbea0ab794957097a';
        redirect_uri = 'http://127.0.0.1:3000/backfall.html';
    }

    var doLogin = function(callback) {
        var url = 'https://accounts.spotify.com/authorize?client_id=' + client_id +
            '&response_type=token' +
            '&scope=playlist-read-private%20playlist-modify%20playlist-modify-private' +
            '&redirect_uri=' + encodeURIComponent(redirect_uri);
        var w = window.open(url, 'asdf', 'WIDTH=400,HEIGHT=500');
        w.onbeforeunload = function() {
            console.log("ciao");
            g_access_token = localStorage.getItem('g_access_token');
            spotifyApi.setAccessToken(g_access_token);
        }
    }

    button.onclick = function() {
        doLogin();
    };

    buttontwo.onclick = function() {
        // get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
        spotifyApi.getMyTopArtists('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
            if (err) console.error(err);
            else console.log('Artist albums', data);
        });


    };




}, false);
