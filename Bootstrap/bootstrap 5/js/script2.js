const smBtn = document.querySelector('.btn-small')
const logo = document.querySelector('.logo')

smBtn.onclick = () => {
    if (logo.classList.contains('fade')) {
        logo.classList.replace('fade', 'show')
    } else {
        logo.classList.replace('show', 'fade')
    }
}

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    let crd = pos.coords;

    console.log('Sua posição atual é:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('Mais ou menos ' + crd.accuracy + ' metros.');
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);