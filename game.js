var scene = 0;
var pic = "firstPic.png";
			
//Begin actual game content

function changeScene(choice)
{
	//The basic outline goes like this
	//if (scene == 0)
	//{
	//	if (choice==1)
	//	{
	//		scene = 1;
	//		message = "Put your message here";
	//		changeValues1('Button text here');
	//		pic = "newPic.png";
	//	}
	//}
				
	
	document.getElementById("scenetext").innerHTML = message;
	document.getElementById("sceneimg").src = pic;
}