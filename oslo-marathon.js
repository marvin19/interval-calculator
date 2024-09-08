document.addEventListener('DOMContentLoaded', function () {
    const submithalf = document.getElementById('submithalf');

    submithalf.addEventListener('click', function () {
        //const desiredTime = document.getElementById('desiredTime').value;
        const desiredTime = '01:30:00';
        const splitTableBody = document.querySelector('#splitTable tbody');
        splitTableBody.innerHTML = ''; // Clear previous results

        // Converting input time to seconds
        const timeParts = desiredTime.split(':');
        const totalSeconds = (+timeParts[0] * 3600) + (+timeParts[1] * 60) + (+timeParts[2]);
        
        // Half marathon distance in kilometers
        const totalDistance = 21.0975;

        console.log(totalSeconds, totalDistance);
        // Calculate pace per kilometer in seconds
        const pacePerKm = totalSeconds / totalDistance;

        let cumulativeTime = 0;
        for (let km = 1; km <= 21; km++) {
            cumulativeTime += pacePerKm;
            const splitTime = formatTime(pacePerKm, false);
            const cumulativeFormatted = formatTime(cumulativeTime, true);

            // Add new row to table
            const row = `<tr>
                <td>${km}</td>
                <td>${splitTime}</td>
                <td>${cumulativeFormatted}</td>
            </tr>`

            splitTableBody.innerHTML += row;
        };

        function formatTime(seconds, includeHours) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor(seconds % 3600 / 60);
            const s = Math.floor(seconds % 3600 % 60);
            if (includeHours) {
                // cumulative time
                return `${h}:${m}:${s}`;
            } else {
                // pace per kilometer
                return `${m}:${s} /km`;
        }
        }
    }
);
});