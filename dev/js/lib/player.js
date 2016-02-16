import {getSiblings} from './helpers';

let audio, playerImage, container, playerImageContainer, tracks, extension, pathToTracks, pathToImages, trackNames, volumeSlider, muteBtn, nextBtn, prevBtn

audio = new Audio()
playerImage = new Image()
extension = '.svg'
pathToTracks = '/assets/audio/'
pathToImages = '/assets/img/'
trackNames = [ 'rain', 'night', 'creek', 'fire', 'coffee', 'leaves']

// Dom elements

muteBtn = document.querySelector('.mute')
nextBtn = document.querySelector('.next')
prevBtn = document.querySelector('.prev')
volumeSlider = document.querySelector('.volume-slider')
tracks = Array.from(document.querySelectorAll('.track'))
playerImageContainer = document.querySelector('.player__cover')

function initApp() {
    audio.loop = true
    changeBigIcon('rain')

}

function playTrack(event) {

    let track = event.target
    let trackToPlay = event.target.dataset.value

    if ( audio.muted ) {
        volumeSlider.disabled = false
        audio.muted = false
    }

    audio.src = pathToTracks + trackToPlay + '.mp3'
    audio.play()
    changeBigIcon(trackToPlay)
}

function playNextTrack() {

    let currentSrc   = audio.src.split('/').pop().split('.')[0]
    let currentIndex = trackNames.indexOf(currentSrc)
    let nextIndex = currentIndex + 1

    if (currentIndex == trackNames.length - 1) {
        nextIndex = 0
    }

    audio.src = pathToTracks + trackNames[nextIndex] + '.mp3'

    changeBigIcon(trackNames[nextIndex])
    audio.play()

}

function playPreviousTrack() {
    let currentSrc   = audio.src.split('/').pop().split('.')[0]
    let currentIndex = trackNames.indexOf(currentSrc)
    let previousIndex = currentIndex - 1

    if (currentIndex == 0) {
        previousIndex = trackNames.length - 1
    }

    audio.src = pathToTracks + trackNames[previousIndex] + '.mp3'

    changeBigIcon(trackNames[previousIndex])
    audio.play()
}

function changeBigIcon(imgName) {

    playerImage.src = pathToImages + imgName +'-bg' + extension
    playerImage.style.webkitAnimationDuration = '.6s'
    playerImage.style.webkitAnimationTimingFunction = 'ease-in-out'
    playerImageContainer.appendChild(playerImage)

}

function muteUnmute(event) {

    let currentVolume = volumeSlider.value / 100

    if ( !audio.muted ) {
        audio.muted = true
        volumeSlider.disabled = true
    } else {
        audio.muted = false
        audio.volume = currentVolume
        volumeSlider.disabled = false
    }
}

function changeVolume(event) {

    let newVolume = event.target.value
    audio.volume = newVolume / 100

}


tracks.forEach(function (track) {
    track.addEventListener('click', playTrack);
})
nextBtn.addEventListener('click', playNextTrack);
prevBtn.addEventListener('click', playPreviousTrack);
muteBtn.addEventListener('click', muteUnmute);
volumeSlider.addEventListener('mousemove', changeVolume);
window.onload = initApp()
