import Cookies from 'universal-cookie';
import sessionStorage from 'sessionstorage';

const cookies = new Cookies();

export const sessionManager = {
    setDataInCookies,
    getDataFromCookies,
    removeDataFromCookies,
};

function setDataInCookies(data, key) {
    cookies.set(key, JSON.stringify(data), {path: '/'});
}

function setDataForDomainInCookies(data, key, domain) {
    cookies.set(key, JSON.stringify(data), {domain: domain, path: '/'});
}

function getDataFromCookies(key) {
    return cookies.get(key)
}

function removeDataFromCookies(key) {
    cookies.remove(key, {path: '/'});
}

function setDataInSession(key, value) {
    sessionStorage.setItem(key, value);
}

function getDataFromSession(key) {
    sessionStorage.getItem(key);
}

