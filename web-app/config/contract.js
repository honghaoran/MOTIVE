const web3 = require('./web3setup');
const keys = require('../config/keys');

const abi = [{"constant":false,"inputs":[{"name":"_username","type":"string"}],"name":"addUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_userRated","type":"string"}],"name":"getIntegerRating","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ratingFrom","type":"string"},{"name":"_userRated","type":"string"},{"name":"data","type":"uint256"}],"name":"addRating","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_username","type":"string"}],"name":"getUserTimesVoted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userRated","type":"string"}],"name":"getRatingParameters","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_username","type":"string"}],"name":"getUserRating","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"rating_from","type":"string"},{"indexed":true,"name":"rating_to","type":"string"},{"indexed":false,"name":"rating","type":"uint256"}],"name":"RatingActivity","type":"event"}]
const address = keys.CONTRACT_ADDRESS;
const cont = new web3.eth.Contract(abi , address);

module.exports = cont;
