export default {
    getRandomWYR() {  //returns a promise
        return fetch('/wyr').then(response => {
            return response.json();
        })
    }
}
