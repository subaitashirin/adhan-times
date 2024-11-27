// this is the enter button press search event
var go = document.getElementById("search-btn");
var txt = document.getElementById("input-text");

txt.addEventListener("keypress", function (event) {
	if (event.key == 'Enter')
		go.click();
});

const autoDetectFunction = () => {

	const errorText = document.getElementById('error-text');
	const show7days = document.getElementById('show7days');
	const engDate = document.getElementById('engData');
	const arabicDate = document.getElementById('arabicData');
	const addTime = document.getElementById('addTime');
	const addBtn = document.getElementById('add-btn');
	const location = document.getElementById('location');
	const loadingText = document.getElementById('loading-text');

	errorText.innerHTML = "";
	show7days.innerHTML = "";
	engDate.innerHTML = "";
	arabicDate.innerHTML = "";
	addTime.innerHTML = "";
	addBtn.innerHTML = "";
	location.innerHTML = "";
	loadingText.innerHTML = "";

	let lat, lng;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}

	function showPosition(position) {
		lat = position.coords.latitude, lng = position.coords.longitude;
		// console.log(lat, lng);
		fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=ee1acb6433cc02ae271c36476be1234a`)
			.then(res => res.json())
			.then(data => autoDetect(data[0].name, lat, lng));
	}
}

const autoDetect = (city, lat, lng) => {
	if (city == 'Chattogram') city = "chittagong";
	AdhanTimes(city, lat, lng);
}


const callError = (path) => {
	spinnerControl("d-block", "d-none");
	var interval_id = window.setInterval(() => { }, 99999);
	for (var i = 0; i < interval_id; i++)
		window.clearInterval(i);
	const SearchText1 = document.getElementById('input-text');
	const errorText = document.getElementById('error-text');
	const show7days = document.getElementById('show7days');
	const engDate = document.getElementById('engData');
	const arabicDate = document.getElementById('arabicData');
	const addTime = document.getElementById('addTime');
	const addBtn = document.getElementById('add-btn');
	const location = document.getElementById('location');
	const loadingText = document.getElementById('loading-text');
	document.getElementById('geolocationGo').style.display = "inline";
	SearchText1.innerHTML = "";
	errorText.innerHTML = "";
	show7days.innerHTML = "";
	engDate.innerHTML = "";
	arabicDate.innerHTML = "";
	addTime.innerHTML = "";
	addBtn.innerHTML = "";
	SearchText1.value = "";
	location.innerHTML = "";
	loadingText.innerHTML = "";
	let div = document.createElement('div');
	div.classList.add('error-div');
	if (path == 1) {
		div.innerHTML = `
            <h3 class="px-3">We can not auto locate your current city</h3>
            <h4 class="mt-4">Please try searching by city name</h4>
            <video class="mt-3" src="vid/Productive Muslim Animation 2 - Pray Fajr On Time_Trim.mp4"
            autoplay loop muted></video>
            <p class="mt-4">[2:3-5] who believe in the unseen, observe the Contact Prayers (Salat), and from our provisions to them, they give to charity. And they believe in what was revealed to you, and in what was revealed before you, and with regard to the Hereafter, they are absolutely certain. These are guided by their Lord; these are the winners.</p>
        `
		errorText.appendChild(div);
	}
	else {
		div.innerHTML = `
            <h3>No Result Found</h3>
            <h4 class="mt-4">Enter a proper city name</h4>
            <video class="mt-3" src="vid/Productive Muslim Animation 2 - Pray Fajr On Time_Trim.mp4"
            autoplay loop muted></video>
            <p class="mt-4">[2:3-5] who believe in the unseen, observe the Contact Prayers (Salat), and from our provisions to them, they give to charity. And they believe in what was revealed to you, and in what was revealed before you, and with regard to the Hereafter, they are absolutely certain. These are guided by their Lord; these are the winners.</p>
        `
		errorText.appendChild(div);
	}
}

// spinner js
function spinnerControl(remove, add) {
	const spinner = document.getElementById("spinner");
	spinner.classList.remove(remove);
	spinner.classList.add(add);
}

const AdhanTimes = async (city, lat, lng) => {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		const newColorScheme = event.matches ? "dark" : "light";
		// console.log(newColorScheme);
	});

	spinnerControl("d-none", "d-block");

	var interval_id = window.setInterval(() => { }, 99999);
	for (var i = 0; i < interval_id; i++)
		window.clearInterval(i);


	let SearchText = (document.getElementById('input-text').value).toLowerCase();
	const SearchText1 = document.getElementById('input-text');
	const errorText = document.getElementById('error-text');
	const show7days = document.getElementById('show7days');
	const engDate = document.getElementById('engData');
	const arabicDate = document.getElementById('arabicData');
	const addTime = document.getElementById('addTime');
	const addBtn = document.getElementById('add-btn');
	const location = document.getElementById('location');
	const loadingText = document.getElementById('loading-text');
	SearchText1.innerHTML = "";
	errorText.innerHTML = "";
	show7days.innerHTML = "";
	engDate.innerHTML = "";
	arabicDate.innerHTML = "";
	addTime.innerHTML = "";
	addBtn.innerHTML = "";
	location.innerHTML = "";
	SearchText1.value = "";
	loadingText.innerHTML = "";
	document.getElementById('locPid').style.display = "none";

	let today = new Date();
	let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	let tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);

	let date1 = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();

	// console.log(date)

	let newYear, newMonth, newDate, newYear1, newMonth1, newDate1;

	newYear = parseInt(newYear);
	console.log(date)
	if (date.length == 10) newDate = parseInt(date[8] + date[9]);
	else newDate = parseInt(date[7]);

	if (date[6] != '-') newMonth = parseInt(date[5] + date[6]);
	else newMonth = parseInt(date[5]);

	newYear1 = parseInt(newYear1);
	if (date1.length == 9) newDate1 = parseInt(date1[7] + date1[8]);
	else newDate1 = parseInt(date1[7]);

	if (date1[6] != '-') newMonth = parseInt(date1[5] + date1[6]);
	else newMonth1 = parseInt(date1[5]);

	let dateArr = date.split('-'), dateArr1 = date1.split('-')

	newDate = dateArr[2], newDate1 = dateArr1[2]
	newMonth = dateArr[1], newMonth1 = dateArr1[1]
	newYear = dateArr[0], newYear1 = dateArr1[0]

	if (city != undefined) {
		SearchText = city;
		document.getElementById('geolocationGo').style.display = "none";
	}
	else {
		document.getElementById('geolocationGo').style.display = "inline";
	}

	// console.log(newDate, newMonth, newYear, newDate1, newMonth1, newYear1);

	const url = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lng}&method=2&month=${newMonth}&year=${newYear}`;
	const url1 = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lng}&method=2&month=${newMonth1}&year=${newYear1}`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		const res1 = await fetch(url1);
		const data1 = await res1.json();
		// console.log(data.data, data1.data, SearchText)
		showToday(data.data, data1.data, SearchText, newDate, newMonth, newYear, newDate1, newMonth1, newYear1);
	}
	catch (error) {
		if (city != undefined) callError(1)
		else callError(2);
	}
}

function tConv24(time24) {
	var ts = time24;
	var H = +ts.substr(0, 2);
	var h = (H % 12) || 12;
	h = (h < 10) ? ("0" + h) : h;
	var ampm = H < 12 ? " AM" : " PM";
	ts = h + ts.substr(2, 3) + ampm;
	return ts;
};

const showToday = async (props, props1, city, newDate, newMonth, newYear, newDate1, newMonth1, newYear1) => {

	console.log(newDate)
	spinnerControl("d-block", "d-none");
	console.log(props, props1, city)
	const Ptime = [];
	let cityName = city;
	let name = city[0].toUpperCase();
	city = city.substring(1);
	name += city.toLowerCase();

	const location = document.getElementById('location');
	location.innerHTML = "";
	let div0 = document.createElement('div');
	div0.innerHTML = `
        <div class="flex">
            <h3><i class="fa-solid fa-map-location-dot fa-2x"></i></h3>
            <h3 class="city">${name}</h3>
        </div>
    `
	location.appendChild(div0);

	const engDate = document.getElementById('engData');
	const arabicDate = document.getElementById('arabicData');
	let div1 = document.createElement('div');
	div1.classList.add('engDate');
	div1.innerHTML = `
        <h4>English: <span id="todayDateEng">${props[newDate - 1]?.date?.gregorian?.date}<span></h4>

    `
	engDate.appendChild(div1);
	let div2 = document.createElement('div');
	div2.classList.add('arabicDate');
	div2.innerHTML = `
        <h4>Arabic: <span id="todayDateArabic">${props[newDate - 1]?.date?.hijri?.date}<span></h4>
    `
	arabicDate.appendChild(div2);

	let newDay;
	const d = new Date();
	let day = d.getDay();
	if (day == 0) newDay = "Sunday"
	if (day == 1) newDay = "Monday"
	if (day == 2) newDay = "Tuesday"
	if (day == 3) newDay = "Wednesday"
	if (day == 4) newDay = "Thursday"
	if (day == 5) newDay = "Friday"
	if (day == 6) newDay = "Saturday"

	const Sunrise = props[newDate - 1]?.timings?.Sunrise.split(' ');

	const Sunset = props[newDate - 1]?.timings?.Sunset.split(' ');
	const Fajr = props[newDate - 1]?.timings?.Fajr.split(' ');
	const Dhuhr = props[newDate - 1]?.timings?.Dhuhr.split(' ');
	const Asr = props[newDate - 1]?.timings?.Asr.split(' ');
	const Maghrib = props[newDate - 1]?.timings?.Maghrib.split(' ');
	const Isha = props[newDate - 1]?.timings?.Isha.split(' ');
	console.log(tConv24(Fajr[0]), tConv24(Dhuhr[0]), tConv24(Asr[0]), tConv24(Maghrib[0]), tConv24(Isha[0]));

	const addTime = document.getElementById('addTime');
	let div3 = document.createElement('div');
	div3.innerHTML = `
	    <p class="modal-header text-center">${newDay}</p>
	    <div class=row my-4>
	    <div class="col-6 col-lg-6 flex-column card today p-5"><i class="day fa-solid fa-sun fa-2x mb-2"></i>Sunrise <span class="todayDate">${tConv24(Sunrise[0])}</span></div>
	    <div class="col-6 col-lg-6 flex-column card today p-5"><i class="night fa-solid fa-moon fa-2x"></i>Sunset <span class="todayDate">${tConv24(Sunset[0])}</span></div>
	    </div>
	    <div class="row justify-content-center">
	        <div class="col-6 col-md-4 col-lg-3 card today p-5"><i class="fajr fa-brands fa-ussunnah fa-2x mb-2"></i>Fajr <span class="todayDate">${tConv24(Fajr[0])}</span></div>
	        <div class="col-6 col-md-4 col-lg-3 card today p-5"><i class="day fa-solid fa-sun fa-2x mb-2"></i>Dhuhr <span class="todayDate">${tConv24(Dhuhr[0])}</span></div>
	        <div class="col-6 col-md-4 col-lg-3 card today p-5"><i class="day fa-solid fa-cloud-sun fa-2x mb-2"></i>Asr <span class="todayDate">${tConv24(Asr[0])}</span></div>
	        <div class="col-6 col-md-4 col-lg-3 card today p-5"><i class="night fa-solid fa-cloud-moon fa-2x mb-2"></i>Maghrib <span class="todayDate">${tConv24(Maghrib[0])}</span></div>
	        <div class="col-6 col-md-4 col-lg-3 card today p-5"><i class="night fa-solid fa-moon fa-2x mb-2"></i>Isha <span class="todayDate">${tConv24(Isha[0])}</span></div>
	    </div>
	`
	addTime.appendChild(div3);

	// const addBtn = document.getElementById('add-btn');
	// let div4 = document.createElement('div');
	// div4.innerHTML = `
	//     <button onclick=showMore("${cityName}") class="button-33 flex justify-content-center my-3">Show More</button>
	// `
	// addBtn.appendChild(div4);

	const locUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee1acb6433cc02ae271c36476be1234a&units=metric`;
	const res = await fetch(locUrl);
	const loc = await res.json();

	const timer = async () => {
		Ptime.push(Fajr[0]);
		Ptime.push(Dhuhr[0]);
		Ptime.push(Asr[0]);
		Ptime.push(Maghrib[0]);
		Ptime.push(Isha[0]);

		let lng = loc.coord.lon, lat = loc.coord.lat, newDateArray = [];
		const timeUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=2GC7SAB583B7&format=json&by=position&lat=${lat}&lng=${lng}`;

		const res = await fetch(timeUrl);
		const data = await res.json();

		let time = (data.formatted.split(" "))[1];
		// console.log(time);

		let fajrH = parseInt(Ptime[0][0] + Ptime[0][1]), fajrMin = parseInt(Ptime[0][3] + Ptime[0][4]);
		let dhuhrH = parseInt(Ptime[1][0] + Ptime[1][1]), dhuhrMin = parseInt(Ptime[1][3] + Ptime[1][4]);
		let asrH = parseInt(Ptime[2][0] + Ptime[2][1]), asrMin = parseInt(Ptime[2][3] + Ptime[2][4]);
		let maghribH = parseInt(Ptime[3][0] + Ptime[3][1]), maghribMin = parseInt(Ptime[3][3] + Ptime[3][4]);
		let ishaH = parseInt(Ptime[4][0] + Ptime[4][1]), ishaMin = parseInt(Ptime[4][3] + Ptime[4][4]);
		// let xH = parseInt(time[0] + time[1]), xMin = parseInt(time[3] + time[4]);
		let diffH = 0, diffMin = 0, xH, xMin, prayerName, currently;
		// let xH = parseInt("11"), xMin = parseInt("05"), diffH, diffMin;

		xH = time[0];
		if (time[1] != ":") xH += time[1];
		if (time[2] != ":") {
			xMin = time[2];
			if (time[3] != ":") xMin += time[3];
		}
		else {
			xMin = time[3];
			if (time[4] != ":") xMin += time[4];
		}
		xH = parseInt(xH), xMin = parseInt(xMin);

		// console.log(fajrH, fajrMin);
		// console.log(dhuhrH, dhuhrMin);
		// console.log(asrH, asrMin);
		// console.log(maghribH, maghribMin);
		// console.log(ishaH, ishaMin);
		// console.log(xH, xMin);

		if (((xH > fajrH) || (xH == fajrH && xMin >= fajrMin)) && ((xH < dhuhrH) || (xH == dhuhrH && xMin < dhuhrMin))) {
			currently = "Fajr";
			prayerName = "Dhuhr";
			if (xH != dhuhrH) {
				diffH = dhuhrH - xH - 1;
				diffMin = (60 - xMin) + dhuhrMin;
			}
			else {
				diffH = 0;
				diffMin = dhuhrMin - xMin;
			}
		}
		else if (((xH > dhuhrH) || (xH == dhuhrH && xMin >= dhuhrMin)) && ((xH < asrH) || (xH == asrH && xMin < asrMin))) {
			currently = "Dhuhr";
			prayerName = "Asr";
			if (xH != asrH) {
				diffH = asrH - xH - 1;
				diffMin = (60 - xMin) + asrMin;
			}
			else {
				diffH = 0;
				diffMin = asrMin - xMin;
			}
		}
		else if (((xH > asrH) || (xH == asrH && xMin >= asrMin)) && ((xH < maghribH) || (xH == maghribH && xMin < maghribMin))) {
			currently = "Asr";
			prayerName = "Maghrib";
			if (xH != maghribH) {
				diffH = maghribH - xH - 1;
				diffMin = (60 - xMin) + maghribMin;
			}
			else {
				diffH = 0;
				diffMin = maghribMin - xMin;
			}
		}
		else if (((xH > maghribH) || (xH == maghribH && xMin >= maghribMin)) && ((xH < ishaH) || (xH == ishaH && xMin < ishaMin))) {
			currently = "Maghrib";
			prayerName = "Isha";
			if (xH != ishaH) {
				diffH = ishaH - xH - 1;
				diffMin = (60 - xMin) + ishaMin;
			}
			else {
				diffH = 0;
				diffMin = ishaMin - xMin;
			}
		}
		else {
			currently = "Isha";
			prayerName = "Fajr";
			if (xH != fajrH) {

				if (xH > fajrH) diffH = (24 - xH) + fajrH - 1;
				else diffH = fajrH - xH - 1;
				diffMin = (60 - xMin) + fajrMin;
			}
			else {
				diffH = 0;
				diffMin = (fajrMin - xMin);
			}
		}


		let seconds = (diffH * 3600) + (diffMin * 60);
		const loadingText = document.getElementById('loading-text');
		let hour = xH, min = xMin, second = 0;

		const incrementSeconds = async () => {

			loadingText.innerHTML = "";
			if (seconds == 1) {
				// console.log("GG", seconds);
				loadingText.innerText = "";
				clearInterval(cancel);
				timer();
			}
			let minutes = parseInt(seconds / 60), hours = parseInt(minutes / 60), sec = seconds;
			seconds--;
			let newTime = "";
			if (hour < 10) newTime += "0";
			newTime += hour;
			newTime += ":";
			if (min < 10) newTime += "0";
			newTime += min;
			newTime += ":00";
			// console.log(newTime);
			// console.log(seconds);
			let div = document.createElement('div');
			div.classList.add("loadingText");
			div.innerHTML = `
                <div>
                    <p class="today currentlyDiv"><span class="dynamic">${currently}</span></p>
                    <p class="today"><span class="dynamic">${prayerName}</span></p>
                    <p class="my-5 fs-3">Prayer Time In</p>
                    <div class="row mt-5 justify-content-center">
                        <div class="col-sm-12 col-md-12 col-lg-3 p-0 dynamicDiv today"><span class="dynamic">${hours}</span>  Hours</div>
                        <div class="col-sm-12 col-md-12 col-lg-3 p-0 dynamicDiv today"><span class="dynamic">${(minutes % 60)}</span>  Minutes</div>
                        <div class="col-sm-12 col-md-12 col-lg-3 p-0 dynamicDiv today"><span class="dynamic">${(sec % 60)}</span>  Seconds</div>
                    </div>
                </div>
            `;
			loadingText.appendChild(div);
		}

		let cancel = setInterval(incrementSeconds, 1000);
	}
	timer();
}

function checkLeapYear(year) {
	if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
		return true;
	}
	return false;
}

const showMore = async name => {
	console.log(name)
	const addBtn = document.getElementById('add-btn');
	addBtn.innerHTML = "";
	let today = new Date();
	let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

	console.log(date);
	let year = date[0] + date[1] + date[2] + date[3];
	year = parseInt(year);
	let leapYEar = checkLeapYear(year), dateInt, monthInt, limDate, newYear, newMonth, newDate;
	if (date.length == 10) dateInt = parseInt(date[8] + date[9]);
	else dateInt = parseInt(date[7]);

	if (date[6] != '-') monthInt = parseInt(date[5] + date[6]);
	else monthInt = parseInt(date[5]);

	if (monthInt != 1 && monthInt != 3 && monthInt != 5 && monthInt != 5 && monthInt != 7 && monthInt != 8 && monthInt != 10 && monthInt != 12) limDate = 31;
	else if (monthInt == 2) {
		if (leapYEar == true) limDate = 29;
		else limDate = 28;
	}
	else limDate = 30;
	if (dateInt + 7 > limDate) {
		if (monthInt == 12) {
			newYear = year + 1;
			newMonth = 1;
			newDate = 7 - (limDate - dateInt);
		}
		else {
			newYear = year;
			newMonth = monthInt + 1;
			newDate = 7 - (limDate - dateInt + 1);
		}
	}
	else {
		newYear = year;
		newMonth = monthInt;
		newDate = 7 + dateInt;
	}
	// const res = await fetch(`https://api.aladhan.com/v1/calendarByAddress?address=${name}&method=2&month=${date[5]}&year=${date[0] + date[1] + date[2] + date[3]}`); 30 days
	// const data = await res.json();

	// console.log(newDate, newMonth, newYear);
	// console.log(dateInt, monthInt, year);

	const SearchText = (document.getElementById('input-text').value);
	const url = `https://api.pray.zone/v2/times/dates.json?city=${name}&start=${year}-${monthInt}-${dateInt}&end=${newYear}-${newMonth}-${newDate}`
	// console.log(url);
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	showData(data.results.datetime);
}

const showData = data => {
	let days = [];
	const d = new Date();
	let day = d.getDay();
	if (day == 0) {
		days.push("Monday"), days.push("Tuesday"), days.push("Wednesday"), days.push("Thursday"), days.push("Friday"), days.push("Saturday"), days.push("Sunday");
	}
	else if (day == 1) {
		days.push("Tuesday"), days.push("Wednesday"), days.push("Thursday"), days.push("Friday"), days.push("Saturday"), days.push("Sunday"), days.push("Monday");
	}
	else if (day == 2) {
		days.push("Wednesday"), days.push("Thursday"), days.push("Friday"), days.push("Saturday"), days.push("Sunday"), days.push("Monday"), days.push("Tuesday");
	}
	else if (day == 3) {
		days.push("Thursday"), days.push("Friday"), days.push("Saturday"), days.push("Sunday"), days.push("Monday"), days.push("Tuesday"), days.push("Wednesday");
	}
	else if (day == 4) {
		days.push("Friday"), days.push("Saturday"), days.push("Sunday"), days.push("Monday"), days.push("Tuesday"), days.push("Wednesday"), days.push("Thursday");
	}
	else if (day == 5) {
		days.push("Saturday"), days.push("Sunday"), days.push("Monday"), days.push("Tuesday"), days.push("Wednesday"), days.push("Thursday"), days.push("Friday");
	}
	else if (day == 6) {
		days.push("Sunday"), days.push("Monday"), days.push("Tuesday"), days.push("Wednesday"), days.push("Thursday"), days.push("Friday"), days.push("Saturday");
	}
	console.log(days)
	const show7days = document.getElementById('show7days');
	let div1 = document.createElement('div');
	div1.classList.add('show7days');
	div1.innerHTML = `
        <p id="next7days" class="text-center modal-header justify-content-center">Next 7 days Prayer Times</p>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner py-4">
                <div class="carousel-item active">
                    <div class="card align-items-center my-3">
                        <h2>${days[0]}</h2>
                        <h3 class="my-2">${data[1].date.gregorian}</h3>
                        <h4 class="my-2">${data[1].date.hijri}</h4>
                        <div class="row my-3">
                            <div class="col-sm-12 col-md-6">
                                <p>SunRise: <span class="todayDate">${tConv24(data[1].times.Sunrise)}</span></p>    
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <p>Sunset: <span class="todayDate">${tConv24(data[1].times.Sunset)}</span></p>    
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Fajr: <span class="todayDate">${tConv24(data[1].times.Fajr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Dhuhr: <span class="todayDate">${tConv24(data[1].times.Dhuhr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Asr: <span class="todayDate">${tConv24(data[1].times.Asr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Maghrib: <span class="todayDate">${tConv24(data[1].times.Maghrib)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Isha: <span class="todayDate">${tConv24(data[1].times.Isha)}</span></h4></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card align-items-center my-3">
                        <h2>${days[1]}</h2>
                        <h3 class="my-2">${data[2].date.gregorian}</h3>
                        <h4 class="my-2">${data[2].date.hijri}</h4>
                        <div class="row my-3">
                            <div class="col-sm-12 col-md-6">
                                <p>SunRise: <span class="todayDate">${tConv24(data[2].times.Sunrise)}</span></p>    
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <p>Sunset: <span class="todayDate">${tConv24(data[2].times.Sunset)}</span></p>    
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Fajr: <span class="todayDate">${tConv24(data[2].times.Fajr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Dhuhr: <span class="todayDate">${tConv24(data[2].times.Dhuhr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Asr: <span class="todayDate">${tConv24(data[2].times.Asr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Maghrib: <span class="todayDate">${tConv24(data[2].times.Maghrib)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Isha: <span class="todayDate">${tConv24(data[2].times.Isha)}</span></h4></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card align-items-center my-3">
                        <h2>${days[2]}</h2>
                        <h3 class="my-2">${data[3].date.gregorian}</h3>
                        <h4 class="my-2">${data[3].date.hijri}</h4>
                        <div class="row my-3">
                            <div class="col-sm-12 col-md-6">
                                <p>SunRise: <span class="todayDate">${tConv24(data[3].times.Sunrise)}</span></p>    
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <p>Sunset: <span class="todayDate">${tConv24(data[3].times.Sunset)}</span></p>    
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Fajr: <span class="todayDate">${tConv24(data[3].times.Fajr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Dhuhr: <span class="todayDate">${tConv24(data[3].times.Dhuhr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Asr: <span class="todayDate">${tConv24(data[3].times.Asr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Maghrib: <span class="todayDate">${tConv24(data[3].times.Maghrib)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Isha: <span class="todayDate">${tConv24(data[3].times.Isha)}</span></h4></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card align-items-center my-3">
                        <h2>${days[3]}</h2>
                        <h3 class="my-2">${data[4].date.gregorian}</h3>
                        <h4 class="my-2">${data[4].date.hijri}</h4>
                        <div class="row my-3">
                            <div class="col-sm-12 col-md-6">
                                <p>SunRise: <span class="todayDate">${tConv24(data[4].times.Sunrise)}</span></p>    
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <p>Sunset: <span class="todayDate">${tConv24(data[4].times.Sunset)}</span></p>    
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Fajr: <span class="todayDate">${tConv24(data[4].times.Fajr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Dhuhr: <span class="todayDate">${tConv24(data[4].times.Dhuhr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Asr: <span class="todayDate">${tConv24(data[4].times.Asr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Maghrib: <span class="todayDate">${tConv24(data[4].times.Maghrib)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0"><h4>Isha: <span class="todayDate">${tConv24(data[4].times.Isha)}</span></h4></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card align-items-center my-3">
                        <h2>${days[4]}</h2>
                        <h3 class="my-2">${data[5].date.gregorian}</h3>
                        <h4 class="my-2">${data[5].date.hijri}</h4>
                        <div class="row my-3">
                            <div class="col-sm-12 col-md-6">
                                <p>SunRise: <span class="todayDate">${tConv24(data[5].times.Sunrise)}</span></p>    
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <p>Sunset: <span class="todayDate">${tConv24(data[5].times.Sunset)}</span></p>    
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Fajr: <span class="todayDate">${tConv24(data[5].times.Fajr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Dhuhr: <span class="todayDate">${tConv24(data[5].times.Dhuhr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Asr: <span class="todayDate">${tConv24(data[5].times.Asr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Maghrib: <span class="todayDate">${tConv24(data[5].times.Maghrib)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Isha: <span class="todayDate">${tConv24(data[5].times.Isha)}</span></h4></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card align-items-center my-3">
                        <h2>${days[5]}</h2>
                        <h3 class="my-2">${data[6].date.gregorian}</h3>
                        <h4 class="my-2">${data[6].date.hijri}</h4>
                        <div class="row my-3">
                            <div class="col-sm-12 col-md-6">
                                <p>SunRise: <span class="todayDate">${tConv24(data[6].times.Sunrise)}</span></p>    
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <p>Sunset: <span class="todayDate">${tConv24(data[6].times.Sunset)}</span></p>    
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Fajr: <span class="todayDate">${tConv24(data[6].times.Fajr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Dhuhr: <span class="todayDate">${tConv24(data[6].times.Dhuhr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Asr: <span class="todayDate">${tConv24(data[6].times.Asr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Maghrib: <span class="todayDate">${tConv24(data[6].times.Maghrib)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Isha: <span class="todayDate">${tConv24(data[6].times.Isha)}</span></h4></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card align-items-center my-3">
                        <h2>${days[6]}</h2>
                        <h3 class="my-2">${data[7].date.gregorian}</h3>
                        <h4 class="my-2">${data[7].date.hijri}</h4>
                        <div class="row my-3">
                            <div class="col-sm-12 col-md-6">
                                <p>SunRise: <span class="todayDate">${tConv24(data[7].times.Sunrise)}</span></p>    
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <p>Sunset: <span class="todayDate">${tConv24(data[7].times.Sunset)}</span></p>    
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Fajr: <span class="todayDate">${tConv24(data[7].times.Fajr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Dhuhr: <span class="todayDate">${tConv24(data[7].times.Dhuhr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Asr: <span class="todayDate">${tConv24(data[7].times.Asr)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Maghrib: <span class="todayDate">${tConv24(data[7].times.Maghrib)}</span></h4></div>
                            <div class="col-sm-12 col-md-4 col-lg-3 p-0 show7day"><h4>Isha: <span class="todayDate">${tConv24(data[7].times.Isha)}</span></h4></div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev text-danger" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next text-danger" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `
	show7days.appendChild(div1);
}