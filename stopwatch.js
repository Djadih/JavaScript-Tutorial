function StopWatch() {
    this.duration = 0;
    startTime = null;

    // const date = new Date();


    this.start = function() {
        startTime = Date.now();
        console.log(startTime);
    }

    this.stop = function() {
        this.duration = Date.now() - startTime + this.duration;
        console.log(this.duration);
    };
}

let watch = new StopWatch();
// watch.start();
// watch.stop();