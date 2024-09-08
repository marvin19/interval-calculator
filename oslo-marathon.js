document.addEventListener('DOMContentLoaded', function () {
    const submithalf = document.getElementById('submithalf');

    submithalf.addEventListener('click', function () {
        //const desiredTime = document.getElementById('desiredTime').value;
        const desiredTime = '01:30:00';
        const splitTableBody = document.querySelector('#splitTable tbody');
        const summaryDiv = document.querySelector('#summary');

        // Clear previous results
        splitTableBody.innerHTML = ''; 
        summaryDiv.innerHTML = '';

        // Converting input time to seconds
        const timeParts = desiredTime.split(':');
        const totalSeconds = (+timeParts[0] * 3600) + (+timeParts[1] * 60) + (+timeParts[2]);
        
        // Half marathon distance in kilometers
        const totalDistance = 21.0975;

        // Calculate pace per kilometer in seconds
        const pacePerKm = totalSeconds / totalDistance;

        let cumulativeTime = 0;
        let summary = {
            '5K': '',
            '10K': '',
            '15K': '',
            '20K': '',
            'race': ''
        };

        for (let km = 1; km <= 21; km++) {
            cumulativeTime += pacePerKm;

            const splitTime = formatTime(pacePerKm, false);
            const cumulativeFormatted = formatTime(cumulativeTime, true);

            // Capture summary times for 5k, 10k, 15k, 20k and finish
            if(km === 5) summary['5K'] = cumulativeFormatted;
            if(km === 10) summary['10K'] = cumulativeFormatted;
            if(km === 15) summary['15K'] = cumulativeFormatted;
            if(km === 20) summary['20K'] = cumulativeFormatted;
            if(km === 21) summary['race'] = cumulativeFormatted;

            // Add new row to table
            const row = `<tr>
                <td>${km}</td>
                <td>${splitTime}</td>
                <td>${cumulativeFormatted}</td>
            </tr>`

            splitTableBody.innerHTML += row;
        };

        // Add last row to talbe (0.0975 km)
        const partialDistance = 0.0975;
        const finalSplitTime = pacePerKm * partialDistance;
        cumulativeTime += finalSplitTime;
        //const finalFormattedSplit = formatTime(finalSplitTime, false);
        const finalCumulativeFormatted = formatTime(cumulativeTime, true);
        const averagePaceLastSplit = formatTime(pacePerKm, false);
        

        const finalRow = `<tr>
            <td>${partialDistance.toFixed(3)}</td>
            <td>${averagePaceLastSplit}</td>
            <td>${finalCumulativeFormatted}</td>
        `;

        splitTableBody.innerHTML += finalRow;

        summaryDiv.innerHTML = `
            <h2>Summary</h2>
            <p><span>5 km:</span> ${summary['5K']}</p>
            <p><span>10 km:</span> ${summary['10K']}</p>
            <p><span>15 km:</span> ${summary['15K']}</p>
            <p><span>20 km: </span>${summary['20K']}</p>
            <p><span>Halvmaraton: </span>${summary['race']}</p>
        `;

        function formatTime(seconds, includeHours) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = Math.floor(seconds % 3600 % 60);

            // Double digits for minutes and seconds
            const paddedM = m.toString().padStart(2, '0');
            const paddedS = s.toString().padStart(2, '0');

            if (includeHours) {
                // cumulative time
                return `${h}:${paddedM}:${paddedS}`;
            } else {
                // pace per kilometer
                return `${paddedM}:${paddedS} /km`;
        }
        }
    }
);
});