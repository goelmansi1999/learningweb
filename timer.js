var i= 0;
var images= [];
var time= 3000;
images[0]="assests/aaa.jpg";
images[1]="assests/cc.png";
images[2]="assests/hello.png";
images[3]="assests/certi.png";
images[4]="assests/video.jpeg";


function changeImg()
{
  document.slide.src=images[i];  
  if( i < images.length-1)
  {
    i++;
  }else
  {
    i=0;
  }
  setTimeout("changeImg()",time);

}
window.onload=changeImg;