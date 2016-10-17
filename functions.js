//These functions change the buttons

function changeValues1(message)
{
	document.getElementById("choice1").value = message;
}

function changeValues2(message)
{
	document.getElementById("choice2").value = message;
}

function changeValues3(message)
{
	document.getElementById("choice3").value = message;
}

function changeValues4(message)
{
	document.getElementById("choice4").value = message;
}

//These functions hide the buttons

function hide1()
{
	document.getElementById("choice1").style.display="none";
}

function hide2()
{
	document.getElementById("choice2").style.display="none";
}

function hide3()
{
	document.getElementById("choice3").style.display="none";
}

function hide4()
{
	document.getElementById("choice4").style.display="none";
}

//These functions show the buttons

function show1()
{
	document.getElementById("choice1").style.display="block";
}

function show2()
{
	document.getElementById("choice2").style.display="block";
}

function show3()
{
	document.getElementById("choice3").style.display="block";
}
			
function show4()
{
	document.getElementById("choice4").style.display="block";
}

//These functions change color, such as background and text color

function changeBackgroundColor(color)
{
   document.body.style.background = color;
}

function changeTextColor(color)
{
	document.getElementById("scenetext").style.color = color;
}

//These functions involve the text input box

function hideTextInput()
{
	document.getElementById("textInputSection").style.display="none";
}

function showTextInput()
{
	document.getElementById("textInputSection").style.display="block";
}

function getTextInput()
{
	return document.getElementById("textInput").value;
}

//These functions are related to content, such as pictures, flash animations, etc.

function hideContent()
{
	document.getElementById("content").style.display="none";
}

function showContent()
{
	document.getElementById("content").style.display="block";
}
