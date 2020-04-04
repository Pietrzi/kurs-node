class Task {
  start() {
    console.log('Started');
  }
  stop() {
    console.log('Stopped');
  }
  pause() {
    console.log('Paused');
  }
  resume() {
    console.log('Resumed');
  }
}

const task = new Task();
task.start();
task.pause();
task.resume();
task.pause();
task.resume();
task.stop();
