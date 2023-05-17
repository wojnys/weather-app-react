import {API_KEY_DQ} from "./KEYS"

export const apiURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY_DQ,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
 
