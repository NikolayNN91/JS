//current time
function showDate() {
    setInterval(function() {
        document.getElementById('current-time').innerHTML = formatDate();
    }, 1000);
}

function formatDate() {
    var currentDate = new Date();
    var day = zeroFirstFormat(currentDate.getDate());
    var month = zeroFirstFormat(currentDate.getMonth()+1);
    var year = zeroFirstFormat(currentDate.getFullYear());
    var hours = zeroFirstFormat(currentDate.getHours());
    var minuts = zeroFirstFormat(currentDate.getMinutes());
    var seconds = zeroFirstFormat(currentDate.getSeconds());

    var formatedDate = formatDay(currentDate.getDay()) + ' ' + day + "." + month + "." + year + " " + hours + ":" + minuts + ":" + seconds;
    return formatedDate;
}

function formatDay(day) {
    var strDay;
    switch(day) {
        case 1: strDay = 'Пн'; break;
        case 2: strDay = 'Вт'; break;
        case 3: strDay = 'Ср'; break;
        case 4: strDay = 'Чт'; break;
        case 5: strDay = 'Пт'; break;
        case 6: strDay = 'Сб'; break;
        case 7: strDay = 'Вс'; break;
        default: strDay = ''
    }
    return strDay;
}

function zeroFirstFormat(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}