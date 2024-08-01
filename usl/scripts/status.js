let statussolara = true
let statuswave = false
let statusceleryq = true

if (statusceleryq === true) {
    statuscelery.classList.add("online")
    statustextcelery.textContent = "Online"
} else if (statusceleryq === false) {
    statuscelery.classList.add("offline")
    statustextcelery.textContent = "Offline"
}

if (statuswave === true) {
    statuswav.classList.add("online")
    statustextwave.textContent = "Online"
} else if (statuswave === false) {
    statuswav.classList.add("offline")
    statustextwave.textContent = "Offline"
}
    
if (statussolara === true) {
    statussol.classList.add("online")
    statustext.textContent = "Online"
} else if (statussolara === false) {
    statussol.classList.add("offline")
    statustext.textContent = "Offline"
}
