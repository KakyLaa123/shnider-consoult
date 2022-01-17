let dateText = document.getElementById('date');

let date = new Date();

let dateDate = date.getDate();

const dateDay = date.getDay();

let dateMonth = date.getMonth() + 1;

const dateYear = date.getFullYear();

let dateSale = dateDate + (7 - dateDay + 1);

if(dateDay == 0){
    dateSale = dateDate + 1;
}

if(dateDate > 24){
    dateMonth += 1;
    dateSale = 0 + (7 - dateDay + 1);
}

if(dateSale < 10){
    dateSale = "0" + dateDate;
}

if(dateMonth < 10){
    dateMonth = "0" + dateMonth;
}

dateText.textContent = `${dateSale}.${dateMonth}.${dateYear}`;