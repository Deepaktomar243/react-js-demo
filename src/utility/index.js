import {history} from "../managers/history";
import Cookies from "universal-cookie";
import React from "react";
import ToastService from 'react-material-toast';
import {genericConstants} from "../constants";

const toast = ToastService.new({
    place: 'topRight',
    duration: 2,
    maxCount: 2
});
let moment = require('moment');
const cookies = new Cookies();
const utility = {
    generateRandomNumber,
    parseResponse,
    apiFailureToast,
    apiSuccessToast,
    navigateToPath,
    isEmpty,
    isValidIP,
    getMimeType,
    addDaysInTimeStamp,
    generateRandomAlphaNumericString,
};
export default utility;


export const dispatchAction = (type, data) => {
    return dispatch => dispatch({type, data});
};

/**
 * This function is made to handle success and error callback!
 * @param promise
 * @returns {Q.Promise<Array<any>>}
 */
function parseResponse(promise) {
    return promise.then(data => {
        return [null, data];
    }).catch(err => [err]);
}

//TODO: update apiConstant.API_FAILURE
function apiFailureToast(message) {
    toast.error(message ? message : "apiConstant.API_FAILURE");
}

function apiSuccessToast(msg) {
    toast.success(msg ? msg : "apiConstant.API_SUCCESS");
}


function navigateToPath(path) {
    history.push(path)
}


function isValidIP(IP) {
    let reg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return reg.test(IP);
}

function isEmpty(string) {
    return !string || string.trim().length === 0;
}


function generateRandomAlphaNumericString(length) {
    var randomAlphaNumericString = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < length; i++)
        randomAlphaNumericString += charset.charAt(Math.floor(Math.random() * charset.length));
    return randomAlphaNumericString;
}

function generateRandomNumber(length) {
    var randomAlphaNumericString = "";
    var charset = "0123456789";
    for (var i = 0; i < length; i++)
        randomAlphaNumericString += charset.charAt(Math.floor(Math.random() * charset.length));
    return parseInt(randomAlphaNumericString);
}

function addDaysInTimeStamp(date = Date.now(), days = 1) {
    var obj = moment(date);
    let updatedTime = obj.add(days, 'days').format('x');
    return updatedTime;
}

function getMimeType(mimeType) {
    if (!mimeType) return false;
    mimeType = mimeType.toLowerCase();
    if (mimeType.includes(genericConstants.MIME_TYPE.IMAGE))
        return genericConstants.MIME_TYPE.IMAGE;
    else if (mimeType.includes(genericConstants.MIME_TYPE.VIDEO))
        return genericConstants.MIME_TYPE.VIDEO;
    return false;
}
