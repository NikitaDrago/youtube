var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  var playerMobile;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '700',
      width: '1363',
      videoId: '6CDIl_vpZp8'
    });
    playerMobile = new YT.Player('ytplayermobile', {
      height: '700',
      width: '1363',
      videoId: '6CDIl_vpZp8'
    });
  }
  