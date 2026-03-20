// flight management functions

const apiUrl = 'https://flightwatcher-jcharles.onrender.com';

// Load flights from the API
async function loadFlights() {
    try {
        const response = await fetch(`${apiUrl}/flights`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const flights = await response.json();
        return flights;
    } catch (error) {
        console.error('Error loading flights:', error);
    }
}

// Add a new flight
async function addFlight(flight) {
    try {
        const response = await fetch(`${apiUrl}/flights`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(flight),
        });
        if (!response.ok) {
            throw new Error('Error adding flight');
        }
        const newFlight = await response.json();
        return newFlight;
    } catch (error) {
        console.error('Error adding flight:', error);
    }
}

// Delete a flight
async function deleteFlight(flightId) {
    try {
        const response = await fetch(`${apiUrl}/flights/${flightId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error deleting flight');
        }
    } catch (error) {
        console.error('Error deleting flight:', error);
    }
}

// Load alerts from the API
async function loadAlerts() {
    try {
        const response = await fetch(`${apiUrl}/alerts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const alerts = await response.json();
        return alerts;
    } catch (error) {
        console.error('Error loading alerts:', error);
    }
}