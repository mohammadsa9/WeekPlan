var pdate;
$(document).ready(function () {
  pdate = $(".example1").persianDatepicker({
    onSelect: doFill,
    inline: false,
    format: "YYYY/MM/DD",
    viewMode: "day",
    initialValue: false,
    autoClose: true,
    position: "auto",
    altFormat: "lll",
    altField: "#altfieldExample",
    onlyTimePicker: false,
    onlySelectOnDate: false,
    calendarType: "persian",
    inputDelay: 800,
    observer: false,
    calendar: {
      persian: {
        locale: "fa",
        showHint: true,
        leapYearMode: "algorithmic",
      },
      gregorian: {
        locale: "en",
        showHint: false,
      },
    },
    navigator: {
      enabled: true,
      scroll: {
        enabled: true,
      },
      text: {
        btnNextText: "<",
        btnPrevText: ">",
      },
    },
    toolbox: {
      enabled: true,
      calendarSwitch: {
        enabled: false,
        format: "MMMM",
      },
      todayButton: {
        enabled: false,
        text: {
          fa: "امروز",
          en: "Today",
        },
      },
      submitButton: {
        enabled: false,
        text: {
          fa: "تایید",
          en: "Submit",
        },
      },
      text: {
        btnToday: "امروز",
      },
    },
    timePicker: {
      enabled: false,
      step: 1,
      hour: {
        enabled: true,
        step: null,
      },
      minute: {
        enabled: true,
        step: null,
      },
      second: {
        enabled: true,
        step: null,
      },
      meridian: {
        enabled: true,
      },
    },
    dayPicker: {
      enabled: true,
      titleFormat: "YYYY MMMM",
    },
    monthPicker: {
      enabled: true,
      titleFormat: "YYYY",
    },
    yearPicker: {
      enabled: true,
      titleFormat: "YYYY",
    },
    responsive: true,
  });
});
$("#start").timepicker({
  timeFormat: "HH:mm",
  interval: 15,
  minTime: "7",
  maxTime: "22:00",
  defaultTime: "7:00",
  startTime: "7:00",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
  change: doEnd
});
$("#end").timepicker({
  timeFormat: "HH:mm",
  interval: 15,
  minTime: "7:15",
  maxTime: "22:00",
  defaultTime: "7:15",
  startTime: "7:15",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
});

var classha = [];

function bottomTable() {
  return `</tbody>`;
}

function topTable() {
  return `<tbody>
<tr class="weekhtr">
  <td class="weekdayhtc">ايام</td>

  <td class="weekhtc" align="right" width="28" height="15px">7</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">8</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">9</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">10</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">11</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">12</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">13</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">14</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">15</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">16</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">17</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">18</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">19</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">20</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">21</td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>

  <td class="weekhtc" align="right" width="28" height="15px">
    &nbsp;
  </td>
</tr>`;
}

function DoDay(dd) {
  //console.log("DDdd : " + classha);
  const dayclass = classha.filter(function (each) {
    return each.days.includes(dd);
  });
  let output = "";
  now = Time("7:00");
  for (let k = 0; k < 60;) {
    dod = 1;
    dayclass.forEach(function (each) {
      //console.log("C " + each.start + ":" + now);
      if (now.getTime() === each.start.getTime()) {
        span = each.duration / 15;
        //console.log("haha");
        output =
          output +
          `<td class="weekboxnormaltc" colspan="${span}">${each.name}</td>`;
        dod = 0;
        k = k + span;
        now = addTime(now, each.duration);
      }
    });
    if (dod === 1) {
      output = output + `<td class="weektc">&nbsp;</td>`;
      now = addTime(now, 15);
      k++;
    }
  }
  return output;
}

function day0Table() {
  return `<tr class="weektaer">
    <td class="weekdaytc" rowspan="1">شنبه</td>${DoDay(0)}</tr>`;
}

function day1Table() {
  return `<tr class="weektaer">
    <td class="weekdaytc" rowspan="1">يکشنبه</td>${DoDay(1)}</tr>`;
}

function day2Table() {
  return `<tr class="weektaer">
    <td class="weekdaytc" rowspan="1">دوشنبه</td>${DoDay(2)}</tr>`;
}

function day3Table() {
  return `<tr class="weektaer">
    <td class="weekdaytc" rowspan="1">سه&nbsp;شنبه</td>${DoDay(3)}</tr>`;
}

function day4Table() {
  return `<tr class="weektaer">
    <td class="weekdaytc" rowspan="1">چهارشنبه</td>${DoDay(4)}</tr>`;
}

function day5Table() {
  return `<tr class="weektaer">
    <td class="weekdaytc" rowspan="1">پنج&nbsp;شنبه</td>${DoDay(5)}</tr>`;
}

function day6Table() {
  return `<tr class="weektaer">
    <td class="weekdaytc" rowspan="1">جمعه</td>${DoDay(6)}</tr>`;
}
// Listen for form submit
const myForm = document.querySelector("#form");
const tableData = document.querySelector("#fill");
const table = document.querySelector("#table");
const table2 = document.querySelector("#table2");
const datex = document.querySelector(".fa-window-close");
const date = document.querySelector(".example1");

const ss = document.querySelector("#start");
const ss2 = document.querySelector("#emt_start");
const ee = document.querySelector("#end");
myForm.addEventListener("submit", onSubmit);
datex.addEventListener("click", doClear);
//date.addEventListener("click", doFill);
//ss.addEventListener("click", doFF);
//ss.addEventListener("blur", doEnd);
//ss2.addEventListener("blur", doEnd2);

/*
$("#start").on("click mousedown mouseup focus blur keydown change", function (
  e
) {
  console.log(e);
});
*/

function deleteItem(e) {
  classha.splice(e, 1);
  reloadALL();
}

async function doEnd() {
  try {
    $("#end").timepicker("destroy");
  } catch {}
  setTimeout(function () {
    ntime = solidTime(addTime(Time($("#start").val()), 15));
    $("#end").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      minTime: ntime,
      maxTime: "22:00",
      defaultTime: ntime,
      startTime: ntime,
      dynamic: true,
      dropdown: true,
      scrollbar: true,
    });
  }, 100);
}

function solidTime(d) {
  return d.toLocaleTimeString("it-IT").slice(0, -3);
}

function doClear() {
  const date = document.querySelector(".example1");
  const emt_start = document.querySelector("#emt_start");
  const emt_end = document.querySelector("#emt_end");
  date.value = "-";
  emt_start.value = "";
  emt_end.value = "";
  try {
    $("#emt_start").timepicker("destroy");
    $("#emt_end").timepicker("destroy");
  } catch {}
}

function doFill() {
  //console.log("change");
  $("#emt_start").timepicker({
    timeFormat: "HH:mm",
    interval: 15,
    minTime: "7",
    maxTime: "22:00",
    defaultTime: "7:00",
    startTime: "7:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
    change: doEnd2
  });
  $("#emt_end").timepicker({
    timeFormat: "HH:mm",
    interval: 15,
    minTime: "7:15",
    maxTime: "22:00",
    defaultTime: "7:15",
    startTime: "7:15",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
}
async function doEnd2() {
  try {
    $("#emt_end").timepicker("destroy");
  } catch {}
  setTimeout(function () {
    //console.log("Here:" + solidTime(addTime(Time(e.target.value), 15)));
    ntime = solidTime(addTime(Time($("#emt_start").val()), 15));
    $("#emt_end").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      minTime: ntime,
      maxTime: "22:00",
      defaultTime: ntime,
      startTime: ntime,
      dynamic: true,
      dropdown: true,
      scrollbar: true,
    });
  }, 100);
}
class Class {
  constructor(
    name,
    start_time,
    duration,
    days,
    exam_date,
    exam_start,
    exam_end
  ) {
    this.name = name;
    this.start = start_time;
    this.duration = duration;
    this.days = days;
    this.exam_date = new Date(exam_date);
    this.exam_start = exam_start;
    this.exam_end = exam_end;
  }

  end() {
    return new Date(this.start.getTime() + this.duration * 60000);
  }
  examName() {
    if (this.exam_date == "-")
      return "-";
    else {
      let st = solidTime(this.exam_start);
      let en = solidTime(this.exam_end);
      try {
        let k = this.exam_date.toLocaleDateString("en-US");
        return moment.from(k, 'en', 'MM/DD/YYYY').format('jMM/jDD') + "</br>" + st + "-" + en;
      } catch {
        return "-";
      }
    }
  }
}

function emptyTime(n) {
  let a = "";
  for (let i = 0; i < n; i++) a = a + `<td class="weektc">&nbsp;</td>`;
  return a;
}

const nameIn = document.querySelector("#name");
const startIn = document.querySelector("#start");
const emt_startIn = document.querySelector("#emt_start");
const emt_endIn = document.querySelector("#emt_end");
const endIn = document.querySelector("#end");
//const durIn = document.querySelector('#dur');
const emtDateIn = document.querySelector("#emtDate");
const week0 = document.querySelector("#weekday-0");
const week1 = document.querySelector("#weekday-1");
const week2 = document.querySelector("#weekday-2");
const week3 = document.querySelector("#weekday-3");
const week4 = document.querySelector("#weekday-4");
const week5 = document.querySelector("#weekday-5");
const week6 = document.querySelector("#weekday-6");
const week = document.querySelector("#week");

function getDays(week0, week1, week2, week3, week4, week5, week6) {
  days = [];
  if (week0) days.push(0);
  if (week1) days.push(1);
  if (week2) days.push(2);
  if (week3) days.push(3);
  if (week4) days.push(4);
  if (week5) days.push(5);
  if (week6) days.push(6);
  return days;
}

function Tadakhol(start1, start2, end1, end2) {
  if (
    (start2 >= start1 && end2 <= end1) ||
    (start2 <= start1 && end2 >= end1) ||
    (start2 < end1 && end2 > start1) ||
    (start2 > start1 && end2 < end1)
  )
    return true;
  return false;
}

async function handleData(name, start, dur, days, emt, emtS, emtE) {
  if (name.length == 0) {
    alert("لطفا اسم درس را وارد کنید");
    return false;
  }
  if (start < Time("7:00") || start > Time("21:00")) {
    alert("زمان شروع کلاس باید بین 7:00 تا 21:00 باشد");
    return false;
  }
  if (start.getMinutes() % 15 != 0) {
    alert("دقیقه شروع کلاس باید مضربی از 15 باشد (7:45)");
    return false;
  }
  if (dur % 15 != 0 || dur == 0) {
    alert("مدت کلاس باید ضریبی از 15 باشد (15و30و45و60و...)");
    return false;
  }
  end = new Date(start.getTime() + dur * 60000);
  //console.log("end : " + end);
  if (end > Time("22:00")) {
    alert("کلاس باید تا قبل از ساعت 22 پایان یابد");
    return false;
  }
  if (days.length == 0) {
    alert("حداقل یک روز از هفته باید انتخاب شود");
    return false;
  }
  let exit = false;
  classha.forEach(async function (each) {
    //console.log(`start:${each.start} | end:${each.end()}`);
    if (Tadakhol(each.start, start, each.end(), end)) {
      Cday = false;
      each.days.forEach(async function (day) {
        if (days.includes(day)) Cday = true;
      });
      if (Cday) {
        alert("زمان کلاس تداخل دارد با " + " " + each.name);
        exit = true;
        return false;
      }
    }
  });
  classha.forEach(async function (each) {
    //console.log(`start:${each.start} | end:${each.end()}`);
    if (Tadakhol(each.exam_start, emtS, each.exam_end, emtE)) {
      //console.log(each.exam_start + ":" + emtS + "|" + each.exam_end + ":" + emtE);
      Cday = false;
      if (emt.exam_date != "-" && emt != "-")
        if (emt.getTime() == each.exam_date.getTime()) {
          Cday = true;
          if (Cday) {
            alert("زمان امتحان تداخل دارد با" + " " + each.name);
            exit = true;
            return false;
          }
        }
    }
  });
  if (date.value != "-") {
    if (emtS.length < 2 || emtE.length < 2)
      alert("ساعت امتحان را نیز مشخص کنید");
  }
  if (!exit) classha.push(new Class(name, start, dur, days, emt, emtS, emtE));
}

function Time(time) {
  return new Date("01/01/2000 " + time);
}

function addTime(time, min) {
  return new Date(time.getTime() + min * 60000);
}

function EnDigit(str) {
  var e = "۰".charCodeAt(0);
  str = str.replace(/[۰-۹]/g, function (t) {
    return t.charCodeAt(0) - e;
  });
  e = "٠".charCodeAt(0);
  str = str.replace(/[٠-٩]/g, function (t) {
    return t.charCodeAt(0) - e;
  });
  return str;
}

function showClassHa() {
  function compare(a, b) {
    if (a.exam_date.getTime() < b.exam_date.getTime()) {
      return -1;
    }
    if (a.exam_date.getTime() > b.exam_date.getTime()) {
      return 1;
    }
    return 0;
  }

  function tt() {
    classha.forEach(function (v, i) {
      if (isNaN(v.exam_date.getTime())) { //test to see if the id is 3
        classha.push(classha[i]); //push the object to the last position
        classha.splice(i, 1); //remove the object from the current position
      }
    });
  }
  tt();
  tt();
  classha.sort(compare);


  let head = `<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">نام درس</th>
    <th scope="col">تاریخ امتحان</th>
    <th scope="col">حذف</th>
  </tr>
</thead>
<tbody>`;
  let body = ``;
  let foot = ` </tbody>`;
  for (let i = 0; i < classha.length; i++) {
    console.log(isNaN(classha[i].exam_date.getTime()));
    body = body + `
    <tr>
    <th scope="row">${i+1}</th>
    <td>${classha[i].name}</td>
    <td>${classha[i].examName()}</td>
    <td>
      <button type="button" onclick="deleteItem(${i})" class="btn btn-danger smallb">
        <i class="fa fa-times"></i>
      </button>
    </td>
    </tr>`;
  }
  return head + body + foot;
}

function onSubmit(e) {
  e.preventDefault();
  //console.log("Submit");
  var state = pdate.getState();
  mdate = moment(EnDigit(date.value), "jYYYY/jMM/jDD");
  //console.log("Date" + mdate.format());
  const days = getDays(
    week0.checked,
    week1.checked,
    week2.checked,
    week3.checked,
    week4.checked,
    week5.checked,
    week6.checked
  );
  outdate = new Date(mdate);
  if (date.value == "-") outdate = "-";
  dur_value =
    (Time(endIn.value).getTime() - Time(startIn.value).getTime()) / 60000;
  handleData(
    nameIn.value,
    Time(startIn.value),
    dur_value,
    days,
    outdate,
    Time(emt_startIn.value),
    Time(emt_endIn.value)
  );
  reloadALL();
  console.log(classha);
}

function reloadALL() {
  const data =
    topTable() +
    day0Table() +
    day1Table() +
    day2Table() +
    day3Table() +
    day4Table() +
    day5Table() +
    day6Table() +
    bottomTable();
  $("#table td").remove();
  table.innerHTML = data;


  const data2 = showClassHa();
  $("#table2 td").remove();
  $("#table2 th").remove();
  table2.innerHTML = data2;
}