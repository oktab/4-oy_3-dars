// let textArea = document.querySelector('#text');
// let playButton = document.querySelector('#playButton');
// let voiceSelect = document.querySelector('#voiceSelect');
// let voices = new SpeechSynthesisUtterance(textArea.value);

// playButton.addEventListener('click', () => {
//     speechSynthesis.speak(voices);
//     let myvoice = speechSynthesis.getVoices();
//     console.log(myvoice);
// });

// function populateVoiceList() {
//     if (typeof speechSynthesis === "undefined") {
//         return;
//     }

//     const voices = speechSynthesis.getVoices();
//     voices.forEach(item => {
//         const option = document.createElement("option");
//         option.textContent += item;
//         voiceSelect.append(option);
//     });
// }

// populateVoiceList();

// let textArea = document.querySelector('#text');
// let playButton = document.querySelector('#playButton');
// let voiceSelect = document.querySelector('#voiceSelect');
// let voices = new SpeechSynthesisUtterance(textArea.value);

// playButton.addEventListener('click', () => {
//     speechSynthesis.speak(voices);
//     let myvoice = speechSynthesis.getVoices();
//     console.log(myvoice);
// });

// function populateVoiceList() {
//     if (typeof speechSynthesis === "undefined") {
//         return;
//     }

//     const voices = speechSynthesis.getVoices();
//     voices.forEach(item => {
//         const option = document.createElement("option");
//         option.textContent += item;
//         voiceSelect.append(option);
//     });
// }

// populateVoiceList();


let textArea = document.querySelector('#text');
let playButton = document.querySelector('#playButton');
let voiceSelect = document.querySelector('#voiceSelect');
let utterance = new SpeechSynthesisUtterance();

// Play tugmasiga ovozli talaffuzni bog'lash
playButton.addEventListener('click', () => {
    // Matnni olish
    utterance.text = textArea.value;

    // Tanlangan ovozni o'rnatish
    const selectedVoice = speechSynthesis.getVoices()[voiceSelect.selectedIndex];
    utterance.voice = selectedVoice;

    // Matnni ovozda o'qish
    speechSynthesis.speak(utterance);
});

// Tillar ro'yxatini yuklash
function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
        return;
    }

    const voices = speechSynthesis.getVoices();

    // Har bir ovoz uchun option yaratish
    voices.forEach(voice => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`; // Ovoz nomi va tili
        option.value = voice.name; // Ovoz nomini value sifatida saqlash
        voiceSelect.append(option);
    });
}

// Ovozlar yuklanganda ro'yxatni yangilash
speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

// Hodisani qo'lda ishga tushirish (agar kerak bo'lsa)
populateVoiceList();

