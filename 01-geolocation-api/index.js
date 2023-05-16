// ===================== 01 Geolocation API ===================== //

// // getCurrentPosition
// const curSuccess = (pos) => {
// 	const coords = pos.coords;

// 	console.log(`Latitude: ${coords.latitude}`);
// 	console.log(`Longitude: ${coords.longitude}`);
// 	console.log(`Within: ${coords.accuracy} meters`);
// };

// const curError = (error) => {
// 	console.log(`Error: ${error.code} - ${error.message}`);
// };

// const curOptions = {
// 	enableHighAccuracy: true, // Use GPS if avialable
// 	timeout: 5000, // Time to wait trying for location
// 	maximumAge: 0, // Do not use a cashed position
// };

// navigator.geolocation.getWatchPosition(curSuccess, curError, curOptions);

// watchPosition

const target = {
	latitude: 41.234233,
	longitude: -71.4532345,
};

const watchSuccess = (pos) => {
	const coords = pos.coords;

	if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
		console.log('You have reached your destination');
		navigator.geolocation.clearWatch(id);
	}
};

const watchError = (error) => {
	console.log(`Error: ${error.code} - ${error.message}`);
};

const watchOptions = {
	enableHighAccuracy: true, // Use GPS if avialable
	timeout: 5000, // Time to wait trying for location
	maximumAge: 0, // Do not use a cashed position
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
