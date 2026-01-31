let selectedCar = "";
let parkingId = "";

function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function selectCar(car) {
    selectedCar = car;
    parkingId = car.substring(0, 2).toUpperCase() + Math.floor(Math.random() * 10000);
    document.getElementById("generatedId").innerText = parkingId;
    goToScreen('screen-id');
}

function selectZone(zone) {
    alert("Zone selected: " + zone + "\nNext: Parking slot grid (coming next phase)");
}