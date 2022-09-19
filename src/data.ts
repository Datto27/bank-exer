import { AccountI, ServiceI, TransactionI, UserI } from "./dataTypes"


export const users:UserI[] = [
  {
    id: "4ee68c82-507b-4eec-84c0-d524da8123a1",
    name: "test user",
    password: "test123",
    pid: "20001033500",
    accounts: [],
    transactions: [],
    servicePayments: []
  },
  {
    "id": "283c4df1-1453-434a-8a5a-b6f11e8f1cea",
    "name": "test user 2",
    "password": "test123",
    "pid": "20001044200",
    "accounts": [],
    "transactions": [],
    "servicePayments": []
  }
]

export const accounts:AccountI[] = [
  {
    "id": "ea0f844e-b1dd-4d4d-842a-018daf917412",
    "pid": "20001033500",
    "userId": "4ee68c82-507b-4eec-84c0-d524da8123a1",
    "cardCode": "000000000000",
    "accountNumber": "31624e09-8e91-4c15-9764-62c2cb1608ea",
    "balance": 1000
  },
  {
    "id": "b7c6835c-94eb-46c6-a303-e749e3ba3dc5",
    "pid": "20001033500",
    "userId": "4ee68c82-507b-4eec-84c0-d524da8123a1",
    "cardCode": "110111111111",
    "accountNumber": "e5adda66-d29a-4ed0-ad59-c90ec970ba90",
    "balance": 1000
  },
  {
    "id": "1d32100a-dcc5-4ba0-95d0-4b8753c494cc",
    "pid": "20001044200",
    "userId": "283c4df1-1453-434a-8a5a-b6f11e8f1cea",
    "cardCode": "110100111111",
    "accountNumber": "6b095caf-d8c0-4dea-80cc-a914df5e6956",
    "balance": 500
  }
]

export const transactions:TransactionI[] = [
  {
    "id": "48ab5f03-4862-43da-8b07-4f43ab26f27f",
    "senderId": "4ee68c82-507b-4eec-84c0-d524da8123a1",
    "senderAccountId": "ea0f844e-b1dd-4d4d-842a-018daf917412",
    "reciverId": "283c4df1-1453-434a-8a5a-b6f11e8f1cea",
    "reciverAccountId": "1d32100a-dcc5-4ba0-95d0-4b8753c494cc",
    "amount": 400,
    "date": "2022-09-18T12:42:16.175Z"
  },
  {
    "id": "cb64c451-4fbb-458f-9a3e-fff81d1bdab4",
    "senderId": "4ee68c82-507b-4eec-84c0-d524da8123a1",
    "senderAccountId": "ea0f844e-b1dd-4d4d-842a-018daf917412",
    "reciverId": "283c4df1-1453-434a-8a5a-b6f11e8f1cea",
    "reciverAccountId": "1d32100a-dcc5-4ba0-95d0-4b8753c494cc",
    "amount": 500,
    "date": "2022-09-18T12:46:25.702Z"
  }
]

export const services: ServiceI[] = [
  {
    id: "1",
    name: "internet",
    type: "comunal",
  } 
]