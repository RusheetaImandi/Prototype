function getBusData(starting, ending) {
  // Bus data based on routes
  const buses = [
    {
      start: 'gajuwaka',
      end: 'yendada',
      busNumber: '111V',
      busName: 'Kurmanpalem to Vijayanagram',
      seatsAvailable: 10,
      totalWeight: 3000,
      time: 5,
      location: { lat: 17.683482975584397, lng: 83.19348885642955 },
    },
    {
      start: 'yendada',
      end: 'rtc complex',
      busNumber: '222R',
      busName: 'Tagarapuvalasa to RTC Complex',
      seatsAvailable: 5,
      totalWeight: 3500,
      time: 8,
      location: { lat: 17.797372627588604, lng: 83.2095 },
    },
    {
      start: 'gajuwaka',
      end: 'yendada',
      busNumber: '411V',
      busName: 'Kurmanpalem to Vizianagaram',
      seatsAvailable: 5,
      totalWeight: 3500,
      time: 10,
      location: { lat: 17.6903, lng: 83.2064 },
    },
    {
      start: 'gajuwaka',
      end: 'yendada',
      busNumber: '111',
      busName: 'Kurmanpalem to Tagarapuvalasa',
      seatsAvailable: 5,
      totalWeight: 3500,
      time: 12,
      location: { lat: 17.6858, lng: 83.2187 },
    },
    {
      start: 'yendada',
      end: 'maddilapalem',
      busNumber: '222R',
      busName: 'Tagarapuvalasa to RTC Complex',
      seatsAvailable: 8,
      totalWeight: 3500,
      time: 7,
      location: { lat: 17.6985, lng: 83.2095 },
    },
    {
      start: 'yendada',
      end: 'rtc complex',
      busNumber: '999',
      busName: 'Bheemili to Complex',
      seatsAvailable: 15,
      totalWeight: 4000,
      time: 6,
      location: { lat: 17.7065, lng: 83.2226 },
    },
    {
      start: 'NAD',
      end: 'Pendurthi',
      busNumber: '541',
      busName: 'Maddilapalem to Kothavalasa',
      seatsAvailable: 6,
      totalWeight: 3500,
      time: 5,
      location: { lat: 17.744558060424225, lng: 83.23692908695142 },
    },
    {
      start: 'Zilla Parishad',
      end: 'Gopalapatnam',
      busNumber: '28Z/H',
      busName: 'Zilla Parishad to Simhachalam Hill',
      seatsAvailable: 10,
      totalWeight: 4000,
      time: 7,
      location: { lat: 17.711010422439255, lng: 83.31313124782794 },
    },
    {
      start: 'Simhachalam',
      end: 'NAD',
      busNumber: '6',
      busName: 'Simhachalam to Ohpo',
      seatsAvailable: 6,
      totalWeight: 3500,
      time: 5,
      location: { lat: 17.771284976298094, lng: 83.23623461637177 },
    },
    {
      start: 'MVP complex',
      end: 'Akkapalam',
      busNumber: '540',
      busName: 'MVP to Simhachalam ',
      seatsAvailable: 10,
      totalWeight: 4000,
      time: 3,
      location: { lat: 17.74132199978333, lng: 83.33431812070044 },
    },
    {
      start: 'Pendhurthi',
      end: 'Sicinda',
      busNumber: '55k',
      busName: 'Kothavalasa to Sicinda ',
      seatsAvailable: 5,
      totalWeight: 3500,
      time: 5,
      location: { lat: 17.800411147858807, lng: 83.2101727456542, },
    },
    {
      start: 'RTC Complex',
      end: 'Rushikonda',
      busNumber: '900k',
      busName: 'RTC Complex to Bhimili ',
      seatsAvailable: 5,
      totalWeight: 4000,
      time: 3,
      location: { lat: 17.72439282150517, lng: 83.30786462045259 },
    },
    {
      start: 'Anakapalle',
      end: 'Chodavaram',
      busNumber: '300',
      busName: 'RTC Complex to Chodavaram ',
      seatsAvailable: 10,
      totalWeight: 4000,
      time: 10,
      location: { lat: 17.68802708147968, lng: 83.00824658617478 },
    },
    {
      start: 'NAD',
      end: 'Simhachalam',
      busNumber: '28',
      busName: 'RK Beach to Simhachalam ',
      seatsAvailable: 15,
      totalWeight: 3500,
      time: 5,
      location: { lat: 17.742788347962282, lng: 83.23513052582035 },
    },
    {
      start: 'NAD',
      end: 'Scindia',
      busNumber: '55',
      busName: 'Simhachalam to Scindia ',
      seatsAvailable: 4,
      totalWeight: 4000,
      time: 5,
      location: { lat: 17.744035841753696, lng: 83.2279304523357 },
    },
    {
      start: 'Gopalapatnam',
      end: 'ohpo',
      busNumber: '5',
      busName: 'Pendurthi to Ohpo ',
      seatsAvailable: 4,
      totalWeight: 4000,
      time: 5,
      location: { lat: 17.755925828720247, lng: 83.21709508814519 },
    },
    {
      start: 'Akkayapalam',
      end: 'rtc complex',
      busNumber: '48A',
      busName: 'Madhavadara to Ohpo',
      seatsAvailable: 5,
      totalWeight: 3500,
      time: 8,
      location: { lat: 17.740637085758852, lng: 83.29995071618372 },
    },
  ];

  return buses.filter(bus =>
    bus.start.toLowerCase() === starting.toLowerCase() &&
    bus.end.toLowerCase() === ending.toLowerCase()
  );
}

function displayBuses(buses) {
  const busList = document.getElementById('bus-list');
  busList.innerHTML = ''; // Clear previous bus info

  if (buses.length > 0) {
    buses.forEach(bus => {
      const busInfo = document.createElement('div');
      busInfo.className = 'bus-info';
      busInfo.innerHTML = `
        <strong>Bus Number:</strong> ${bus.busNumber}<br>
        <strong>Bus Name:</strong> ${bus.busName}<br>
        <strong>Seats Available:</strong> ${bus.seatsAvailable}<br>
        <strong>Arriving in:</strong> ${bus.time} minutes<br>
        <strong>Total Weight:</strong> ${bus.totalWeight} kg<br>
        <button onclick="viewLocation(${bus.location.lat}, ${bus.location.lng})">View Location</button>
      `;
      busList.appendChild(busInfo);
    });
  } else {
    busList.innerHTML = '<p>No buses available for the selected route.</p>';
  }
}

function viewLocation(lat, lng) {
  const url = `https://www.google.com/maps?q=${lat},${lng}`;
  window.open(url, '_blank'); // Open in a new tab
}

function goBack() {
  window.history.back();
}
