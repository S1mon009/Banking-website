"use strict";

const accounts = {
  0: {
    Name: "Simon",
    login: "si",
    PIN: 1111,
    locale: "pl-PL",
    currency: "PLN",
    loans: 0,
    avatar: "img/avatar-male.jpg",
    loginHistory: [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2021-02-05T16:33:06.386Z",
      "2021-04-10T14:43:26.374Z",
      "2022-06-25T18:49:59.371Z",
      "2022-06-26T12:01:20.894Z",
    ],
    movements: [5000, 3000, -170, -800, -1000, 4000, -30, 500],
    movementsDates: [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2021-02-05T16:33:06.386Z",
      "2021-04-10T14:43:26.374Z",
      "2022-06-25T18:49:59.371Z",
      "2022-06-26T12:01:20.894Z",
    ],
  },
  1: {
    Name: "Ewa",
    login: "ew",
    PIN: 2222,
    locale: "en-US",
    currency: "USD",
    loans: 0,
    avatar: "img/avatar-female.jpg",
    loginHistory: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-05-27T17:01:17.194Z",
      "2022-06-09T23:36:17.929Z",
      "2022-06-12T10:51:36.790Z",
    ],
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    movementsDates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-05-27T17:01:17.194Z",
      "2022-06-09T23:36:17.929Z",
      "2022-06-12T10:51:36.790Z",
    ],
  },
};
let currentAccount = accounts[0];
