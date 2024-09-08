document.addEventListener('DOMContentLoaded', function () {
    const submithalf = document.getElementById('submithalf');
    const buttons = document.querySelectorAll('.split-buttons button');
    const summaryDiv = document.querySelector('#summary');
    let selectedPercentage = 0; // Default to 0% (even splits)
    let selectedStrategy = 'even'; // Default strategy text


    function calculateSplits() {
        // Get desired time from user or set default
        const desiredTime = document.getElementById('desiredTime').value || '01:30:00';
        const splitTableBody = document.querySelector('#splitTable tbody');

        // Clear previous results
        splitTableBody.innerHTML = ''; 
        summaryDiv.innerHTML = '';

        // Convert input time to seconds
        const timeParts = desiredTime.split(':');
        const totalSeconds = (+timeParts[0] * 3600) + (+timeParts[1] * 60) + (+timeParts[2]);

        // Half marathon distance in kilometers
        const totalDistance = 21.0975;

        // Calculate the base pace per kilometer
        const basePacePerKm = totalSeconds / totalDistance;

        let cumulativeTime = 0;
        let summary = {
            '5K': '',
            '10K': '',
            '15K': '',
            '20K': '',
            'race': ''
        };

        let paces = []; // To store all paces for adjustments
        let totalPaceSum = 0; // Sum of all paces for normalization

        // Calculate dynamic paces per km with adjustment
        let paceAdjustmentFactor = (selectedPercentage / 100) / totalDistance; // Adjustment factor per kilometer

        for (let km = 1; km <= 21; km++) {
            // Adjust pace for positive/negative splits
            let adjustment = 1 + paceAdjustmentFactor * (km - 1);
            let adjustedPace = basePacePerKm * adjustment;
            paces.push(adjustedPace);
            totalPaceSum += adjustedPace;
        }

        // Add the final fractional split distance to paces (for 0.0975 km)
        const finalDistance = 0.0975;
        let adjustedFinalSplitPace = basePacePerKm * finalDistance * (1 + paceAdjustmentFactor * 21);
        paces.push(adjustedFinalSplitPace);
        totalPaceSum += adjustedFinalSplitPace;

        // Normalize the total time to match the target race time
        let normalizationFactor = totalSeconds / totalPaceSum; // Factor to ensure total time matches desired time
        let normalizedCumulativeTime = 0;

        // Update split table with normalized paces
        for (let km = 1; km <= 21; km++) {
            let normalizedPace = paces[km - 1] * normalizationFactor; // Apply normalization factor
            normalizedCumulativeTime += normalizedPace;

            const splitTime = formatTime(normalizedPace, false);
            const cumulativeFormatted = formatTime(normalizedCumulativeTime, true);

            // Capture summary times for 5k, 10k, 15k, 20k, and finish
            if (km === 5) summary['5K'] = cumulativeFormatted;
            if (km === 10) summary['10K'] = cumulativeFormatted;
            if (km === 15) summary['15K'] = cumulativeFormatted;
            if (km === 20) summary['20K'] = cumulativeFormatted;
            if (km === 21) summary['race'] = cumulativeFormatted;

            // Add new row to the table
            const row = `<tr>
                <td>${km}</td>
                <td>${splitTime}</td>
                <td>${cumulativeFormatted}</td>
            </tr>`;
            splitTableBody.innerHTML += row;
        }

        // Handle the last fractional part (0.0975 km)
        let normalizedFinalSplit = paces[21] * normalizationFactor; // Normalize the last part
        normalizedCumulativeTime += normalizedFinalSplit;
        const finalCumulativeFormatted = formatTime(normalizedCumulativeTime, true);
        const averagePaceLastSplit = formatTime(paces[21] * normalizationFactor / finalDistance, false);

        const finalRow = `<tr>
            <td>${finalDistance.toFixed(3)}</td>
            <td>${averagePaceLastSplit}</td>
            <td>${finalCumulativeFormatted}</td>
        `;
        splitTableBody.innerHTML += finalRow;

        // Update summary
        summaryDiv.innerHTML = `
            <h2>Summary (${selectedStrategy} split)</h2>
            <p><span>5 km:</span> ${summary['5K']}</p>
            <p><span>10 km:</span> ${summary['10K']}</p>
            <p><span>15 km:</span> ${summary['15K']}</p>
            <p><span>20 km: </span>${summary['20K']}</p>
            <p><span>Half Marathon: </span>${summary['race']}</p>
        `;
    }

    // Function to format seconds into hh:mm:ss or mm:ss
    function formatTime(seconds, includeHours) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);

        // Ensure two digits for minutes and seconds
        const paddedM = m.toString().padStart(2, '0');
        const paddedS = s.toString().padStart(2, '0');

        if (includeHours) {
            return `${h}:${paddedM}:${paddedS}`;
        } else {
            return `${paddedM}:${paddedS} /km`;
        }
    }

    // Event listener for the submit button
    submithalf.addEventListener('click', function () {
        calculateSplits(); // Calculate even splits on initial submit
    });

    // Event listeners for each percentage button
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            // Set selected percentage based on button clicked
            selectedStrategy = button.innerText;
            switch(button.id) {
                case 'n5': selectedPercentage = -5; break;
                case 'n3': selectedPercentage = -3; break;
                case 'n1': selectedPercentage = -1; break;
                case 'default': selectedPercentage = 0; break;
                case 'p1': selectedPercentage = 1; break;
                case 'p3': selectedPercentage = 3; break;
                case 'p5': selectedPercentage = 5; break;
            }

            // Recalculate splits with the new percentage
            calculateSplits();
        });
    });
});
