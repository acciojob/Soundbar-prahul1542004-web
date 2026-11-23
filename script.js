//your JS code here. If required.
const buttons=document.querySelectorAll(".btn")

const stopButton=document.querySelector(".stop")

let currentAudio=null;

buttons.forEach((button)=>{
	button.addEventListener("click",()=>{
		
	
	if(currentAudio !== null){
		currentAudio.pause()
		currentAudio.currentTime=0
	}

	let soundName=button.dataset.sound

	currentAudio=new Audio(`sound/${soundName}mp3`)

	currentAudio.play()
  })		
})



stopButton.addEventListener("click",()=>{
	if(currentAudio !== null){
		currentAudio.pause()

		currentAudio.currentTime=0
	}
})



