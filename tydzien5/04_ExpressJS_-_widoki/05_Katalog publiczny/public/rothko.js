const smallBlack = document.createRange().createContextualFragment(
    `<div class="small-black" style="position: absolute; bottom: 20px; left: 20px; width: 360px; height: 160px; background-color: #1B1B1B; box-shadow: 0 0 10px 10px #35261A"></div>`);
  const smallRed =  document.createRange().createContextualFragment(
    `<div class="small-red" style="position: absolute; top: 20px; left: 20px; width: 360px; height: 560px; background-color: #E43732; box-shadow: 0 0 10px 10px #DC4A30"></div>`);
  
  document.getElementById('canvas').style.position = "absolute";
  document.getElementById('canvas').style.top = 0;
  document.getElementById('canvas').style.left = 0;
  document.getElementById('canvas').style.width = '400px';
  document.getElementById('canvas').style.height = '800px';
  document.getElementById('canvas').style.backgroundColor = '#EA6F4E';
  
  document.getElementById('canvas').appendChild(smallBlack);
  document.getElementById('canvas').append(smallRed);