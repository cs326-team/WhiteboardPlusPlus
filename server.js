const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

const LoginSchemaTypes = {
        name: 'required',
        password: 'required'
    };
function validateLogin (login)
{
    for(const field in login)
    {
        const type = loginSchemaTypes[field];
        if(!type) //Should the type not exist, remove it since it is not required
        {
            delete login[field];
        }
        else if (type ==='required' && !login[field]) //The type is set to required, but we are not supplied it
        {
            return `${field} is required.`;
        }
        //Should probably use regex to validate the characters of the username/password to prevent sql/js injection here.
        //Talk to blake about if this is where we should handle this or if it should be handled by the front-end input-collection.
        //IE: We can validate the data before creating the query, or we could create the query and validate it before sending it to the DB.
    }
    return null;
}

app.listen(3000, function () {
    console.log('App started on port 3000');
});