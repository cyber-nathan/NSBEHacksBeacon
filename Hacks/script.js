var date = document.getElementById("date");
var youtubeLink = ["https://www.youtube.com/watch?v=_eKTOMhpy2w", "https://www.youtube.com/watch?v=kqtD5dpn9C8", "https://www.youtube.com/watch?v=9VJJSCVH_Wk", "https://www.youtube.com/watch?v=U9YKY7fdwyg", "https://www.youtube.com/watch?v=umWJCOh_oE4&t=18s", "https://www.youtube.com/watch?v=ujREEgxEP7g", "https://www.youtube.com/watch?v=T9efJ868yxo", "https://www.youtube.com/watch?v=lTRiuFIWV54&t=11s", "https://www.youtube.com/watch?v=CNbklPRdT4Y", "https://www.youtube.com/watch?v=VWw_1-gEdLA" ];
var selectedLink;


var moodQuestions = document.getElementById("moodQuestions");
var selectedMood;
var elaborateText = document.getElementById("elaborateText");

var activityQuestions = document.getElementById("activityQuestions");
var selectedActivity;

var results = document.getElementById("results");
var moods = document.getElementsByName('mood');
var activities = document.getElementsByName('activity');

var moodResult = document.getElementById("moodResult");
var elaborateResult = document.getElementById("elaborateResult");
var activityResult = document.getElementById("activityResult");

var reflectText = document.getElementById("reflectText");

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}
date.innerHTML = dateToYMD(new Date());

function submitMood() {
	for (var i = 0; i < moods.length; i++){
		if(moods[i].checked){
			selectedMood = moods[i].value;
		}
	}
	if (selectedMood == undefined) {
		alert("Please select an option!");
	}
	else if (elaborateText.value == "") {
		alert("Please elaborate on your mood!");
	}
	else {
		moodQuestions.style.display = "none";
		activityQuestions.style.display = "block";
	}	
}


function submitActivity() {
	for (var i = 0; i < activities.length; i++){
		if(activities[i].checked){
			selectedActivity = activities[i].value;
            selectedLink = youtubeLink[i];
            document.getElementById("videoMedia").href = selectedLink;
		}
	}
	if (selectedActivity == undefined) {
		alert("Please select an option!");
	}
	else {
		moodResult.innerHTML += "Your Mood: " + "<br>" + selectedMood + "<br></br>";
		elaborateResult.innerHTML += "What Impacted Your Mood: " + "<br>" + elaborateText.value + "<br></br>";
		activityResult.innerHTML += "Selected Activity: " + "<br>" + selectedActivity + "<br></br>";


	
		activityQuestions.style.display = "none";
		results.style.display = "block";
	}	
}
function backToMoodPage() {
	moodQuestions.style.display = "block";
	activityQuestions.style.display = "none";
}

function backToHome() {
	if (reflectText.value == "") {
		alert("Please type a reflection!")
	}
	else {
		alert('Thank you for reflecting! This will be saved to your account.');
		window.location.href = 'index.html';
	}
}

function resetPage() {
	location.reload();
}