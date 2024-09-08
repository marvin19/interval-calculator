document.addEventListener('DOMContentLoaded', function () {
    const submit = document.getElementById('submit');

    submit.addEventListener('click', function () {
        const fiveK = 5;
        let input = document.getElementById('pace').value;

        // Transform input to km/h
        let minute = parseInt(input.split(':')[1]);
        let second = parseInt(input.split(':')[2]);

        // Convert time into hours
        let timeInHours = (minute / 60) + (second / 3600);

        // Calculate pace in km/h
        const pace = fiveK / timeInHours;

        const intervals = [
            { distance: 0.1, id: '100t', speedIncrease: 15 },
            { distance: 0.2, id: '200t', speedIncrease: 12 },
            { distance: 0.4, id: '400t', speedIncrease: 10 },
            { distance: 0.8, id: '800t', speedIncrease: 8 },
            { distance: 1, id: '1000t', speedIncrease: 5 },
        ];

        // Loop through the intervals and calculate the output for each table cell.
        intervals.forEach(interval => {
            const { minutes, seconds, adjustedSpeed } = calculateIntervalTime(interval.distance, interval.speedIncrease);
            const pacePerKm = convertSpeedToPace(adjustedSpeed);

            document.querySelector(`.interval[data-distance="${interval.distance * 1000}"][data-type="time"]`).innerHTML = `${minutes}:${seconds}`;
            document.querySelector(`.interval[data-distance="${interval.distance * 1000}"][data-type="kmh"]`).innerHTML = `${adjustedSpeed.toFixed(2)} km/h`;
            document.querySelector(`.interval[data-distance="${interval.distance * 1000}"][data-type="pace"]`).innerHTML = `${pacePerKm.minutes}:${pacePerKm.seconds} /km`;
        });

        // Calculate times for different intervals with speed increases
        function calculateIntervalTime(distance, speedIncrease) {
            let adjustedSpeed = pace * (1 + (speedIncrease / 100));
            let timeInHours = distance / adjustedSpeed;
            let timeInMinutes = timeInHours * 60;
            let minutes = Math.floor(timeInMinutes);
            let seconds = Math.round((timeInMinutes - minutes) * 60);
            return { minutes, seconds, adjustedSpeed };
        }

        // Convert the speed to pace
        function convertSpeedToPace(speedKmH) {
            let timePerKm = 60 / speedKmH;
            let minutes = Math.floor(timePerKm);
            let seconds = Math.round((timePerKm - minutes) * 60);
            return { minutes, seconds };
        }
    });
});