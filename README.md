# Bank of Flatiron
#### **By Raddames Tonui**


![demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-code-challenge-bank-of-flatiron/demo.gif)

## Project Description
    This is a simple website that:
    A user can:
        - See a table of the transactions.
        - Fill out and submit the form to add a new transaction. 
        - Filter transactions by typing into the search bar. 


## Setup/Installation Requirements
    1. Download zip in the code section of github to your desired folder
    2. Extract the files
    3. Open the folder with vs code.
    4. Then run `node server.js` to run our server. 

## Live link
Deployed Frontend can be accessed here [Front End]()  
Deployed Backend can be accessed here [backend End]()


#### GET /transactions (How json-server looks like)

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
```

Example Response:

```json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
```

## Support and contact details
     email : raddamestonui48@gmail.com
     phone : +254717771461

### License
*Licenced under the MIT Licence
Copyright (c) 2023 **Raddames Tonui
