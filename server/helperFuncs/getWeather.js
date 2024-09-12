async function getWeatherJSON(location, APIserv='forecast') {
    const baseURL = process.env.WEATHER_API_BASE_URL;
    const API_KEY = process.env.WEATHER_API_KEY;

    let date = new Date();
    
    try {
        let url = `${baseURL}${APIserv}.json?key=${API_KEY}&q=${location}&aqi=no`;
        if (date !== '') {
            url += `&dt=${date}`;
        }
        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return data
    } catch (error) {
        console.error('Error:', error);
        return 'No information found.'
    }
}