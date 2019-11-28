(function() {
    var video = document.getElementById('video')
    document.addEventListener('scroll', function(evt) {
        console.dir(video);

        screen: () => ({
            width: window.innerWidth ||
              document.documentElement.clientWidth ||
              screen.width,
            height: window.innerHeight ||
              document.documentElement.clientHeight ||
              screen.height,
          }),

        var videoRef = video.getBoundingClientRect();
        var videoVisibleHeight = videoRef.height / 2;
        var videoTopOffset = videoRef.top;
        return (videoTopOffset > 0 && videoTopOffset < videoVisibleHeight) ? this.video.play() : this.video.pause()
    })
})();
