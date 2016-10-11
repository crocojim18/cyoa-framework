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
	document.getElementById("choice1").style.visibility="hidden";
}

function hide2()
{
	document.getElementById("choice2").style.visibility="hidden";
}

function hide3()
{
	document.getElementById("choice3").style.visibility="hidden";
}

function hide4()
{
	document.getElementById("choice4").style.visibility="hidden";
}

//These functions show the buttons

function show1()
{
	document.getElementById("choice1").style.visibility="visible";
}

function show2()
{
	document.getElementById("choice2").style.visibility="visible";
}

function show3()
{
	document.getElementById("choice3").style.visibility="visible";
}
			
function show4()
{
	document.getElementById("choice4").style.visibility="visible";
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
	document.getElementById("textInput").style.visibility="hidden";
}

function showTextInput()
{
	document.getElementById("textInput").style.visibility="visible";
}

function getTextInput()
{
	return document.getElementById("textInput").value;
}

//These functions are related to content, such as pictures, flash animations, etc.

function hideContent()
{
	document.getElementById("content").style.visibility="hidden";
}
