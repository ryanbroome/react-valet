# ParkPilot

## ParkPilot URL`https://parkpilot.onrender.com`

## API URL `https://park-pilot.onrender.com`

## Description

Valet parking vehicle inventory tracking software. For use by field staff to track vehicle's parked data

## Features

Authentication to keep transactions protected and only accessible to users registered to those locations. Transactions are also stamped by the logged in user that creates them.

Add a transaction, a vehicle, a location.

View all transactions for logged in users location.

Search transactions by customers phone number.

LostKeys recall the last ten transactions by logged in user and display in reverse chronological order to check those vehicles and find the missing keys.

Features coming
sms ability to and from customers
weather forecast
manager dashboard to observe multiple locations activity
damage assessments during checkin
styling updates
training videos / daily safety topics pop up

## Testing

Testing files are saved in their respective Component locations. Each Component file has testing files.

To run all tests

npm test

## Standard User Flow

User registers a new account or logs in with credentials. User is directed to the 'active' vehicles for their location. User can choose to review vehicles and check them out as customers leave or to add a new vehicle. User can register new locations and share the locationId for new users to register for that location.

See upcoming features for more info on what is to come.

## Technology stack

React
Express
Node.js
postgresql

## Installation

npm install

## Running the application

npm start

## Folder structure

### API

api class with methods for calling api

### Auth

auth components login register

### Forms

Add, update and search form Components

### Homepage

Homepage, About Components

### Images

All image files used in the Application 

### Location

LocationCard and Detail Components

### Profile

ProfileDetail Components

### Routes-Navigation

Navhead navbar, navigation routes and NotFound Components

### Transactions

TransactionList, TransactionCard and TransactionDetail components
