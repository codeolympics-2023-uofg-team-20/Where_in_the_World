      // Get the form and input elements
const form = document.querySelector('form');
const flightNumberInput = document.getElementById('flight-number');
      
      // Add an event listener for when the form is submitted
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting   
    const flightNumber = flightNumberInput.value;   
    console.log('Flight Number:', flightNumber);
    const accessKey = '6c1df272c0b28f0fec94b57cedaf67c5';
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${accessKey}&flight_iata=${flightNumber}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0]); // Log the response data to the console
            // Here, you can do something with the response data
            if (data.data[0]['live']) {
                var longitude = data.data[0]['live']['longitude'];
                var latitude = data.data[0]['live']['latitude'];
                var altitude = data.data[0]['live']['altitude'];
                var arrival = data.data[0]["arrival"]["iata"]
                var departure = data.data[0]["departure"]["iata"]

                document.getElementById('results').innerHTML = `<p>Latitude:${latitude}</p>
                                                            <p>Altitude:${altitude}</p>
                                                            <p>Longtitude:${longitude}</p>
                                                            <p>Route:${departure} to ${arrival}`
          
                // Do something with the longitude, latitude, and altitude variables
              } else {
                // If the 'live' property is null, do something else
                alert('Live information not available for this flight')
              }

            
            
          })
    });