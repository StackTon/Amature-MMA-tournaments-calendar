const host = 'https://baas.kinvey.com/';
const appKey = "kid_BJeRg664Q";
const appSecret = "0840d04393624d4aba597ea2368369b0";

async function register(username, password) {
    const res = await fetch(host + 'user/' + appKey, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Basic " + btoa(appKey + ':' + appSecret)
        },
        body: JSON.stringify({
            username,
            password,
            isAdmin: false
        })
    });
    return await res.json();
}

async function login(username, password) {
    const res = await fetch(host + 'user/' + appKey + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Basic " + btoa(appKey + ':' + appSecret)
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    return await res.json();
}

async function createTournamet(imgUrl, price, name, info, place, date, end = "" ) {

    const res = await fetch(host + 'appdata/' + appKey + '/Tournaments' + end, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        },
        body: JSON.stringify({
            imgUrl,
            price,
            name,
            info,
            place,
            date
        })
    });

    return await res.json();
}

async function getTournaments(){
    const res = await fetch(host + "appdata/" + appKey + "/Tournaments", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
    });

    return await res.json();
}

async function getTournamentsForApproval() {
    const res = await fetch(host + "appdata/" + appKey + "/TournamentsForApproval", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
    });

    return await res.json();
}

async function deleteTournamentById(id, end = "") {
    const res = await fetch(host + "appdata/" + appKey + `/Tournaments${end}/?query={"_id":"${id}"}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
    })

    return await res.json();
}

async function getTournamentById(id) {
    const res = await fetch(host + "appdata/" + appKey + `/Tournaments/?query={"_id":"${id}"}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
    })

    return await res.json();
}

export { register, login, createTournamet, getTournaments, getTournamentsForApproval, deleteTournamentById, getTournamentById };