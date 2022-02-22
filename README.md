# Beehive API

We have an API that needs to log every single visit to the hive.

## Setup

- Clone this repository
- Install dependencies `npm install`
- Start the server `npm start`

## API

The API consists of a single endpoint which receives data when a bee visits the hive and records the amount of pollen delivered (in nanograms).

### Add Visit

- **method**: POST
- **endpoint**: /api/visits
- **data**: JSON Visit/Audit object
- **result**: JSON object containing the visitId, HTTP Status 201, 500

#### Example

**Data**

```
{
    "beeId":100,
    "timestamp":"Tue Nov 01 2019 09:11:51 GMT-0500 (CDT)",
    "pollen":"10",
}
```

**Request**

     curl -X POST -H "Content-Type: application/json" --data '{"beeId":"100","timestamp":"Tue Nov 01 2019 09:11:51 GMT-0500 (CDT)","pollen":"10"}' http://localhost:3000/api/visits

**Response**

```
{
    "id":22954
}
```
