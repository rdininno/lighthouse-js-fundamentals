const talkingCalendar = function(date) {
  let dateSep = date.split('/');

  let year = dateSep[0];
  let month = dateSep[1];
  let day = dateSep[2];

  switch(month){
    case '12':
      month = 'December';
      break;
    case '11':
      month = 'November';
      break;
    case '10':
      month = 'October';
      break;
    case '09':
      month = 'September';
    case '08':
      month = 'August';
      break;
    case '07':
      month = 'July';
      break;
    case '06':
      month = 'June';
      break;
    case '05':
      month = 'May';
      break;
    case '04':
      month = 'April';
      break;
    case '03':
      month = 'March';
      break;
    case '02':
      month = 'February';
      break;
    case '01':
      month = 'January';
      break;
  }

  if(day === '01' || day === '21' || day === '31'){
    day = day + 'st';
  } else if(day === '02' || day === '22'){
    day = day + 'nd';
  } else if (day === '03' || day === '23'){
    day = day + 'rd';
  } else {
    day = day + 'th';
  }

  if(day[0] === '0'){
    day = day.substr(1);
  }

  let myDate = month + ' ' + day + ', ' + year;

  return myDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
