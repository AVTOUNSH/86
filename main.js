var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var block_image_object =""

function new_image()
{
	fabric.image.fromURL('BirthdayImgae.jpg', function(img) {
      block_image_object = Img;

      block_image_object.scaleToWidth(700);
      block_image_object.scaleToHeight(510);
      block_image_object.set({
          top : 0
         left : 0

    });
    canvas.Add(block_image_object);
 });  
}

function playSound(){
    x.play();
   console.log("play");
}
