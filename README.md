# Digitoo assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
based on [these specifications](https://github.com/Applifting/fullstack-exercise).
To setup the project:

```shell script
git clone https://github.com/zuffik/digitoo-exercise.git
cd digitoo-exercise
yarn
yarn start     # to start application
               # or 
yarn storybook # to start storybook
```

But before startup you need to fill in environment variables:

```dotenv
REACT_APP_TENANT_ID=
REACT_APP_API_KEY=
```


## Problems with api

* `DELETE /images/:imageId` returns http code `405`
* `GET /articles` items don't contain `imageId`
