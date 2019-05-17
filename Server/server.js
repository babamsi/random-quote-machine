const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const bcrypt = require('bcryptjs')
const cors = require('cors')
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');

const {mongoose} = require('./db/mongoose')
const {User} = require('./models/users')


const app = express();
app.use(bodyParser.json())

app.use(cors());
// app.use(express.static('public'))

async function main(texts) {
  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // The text to synthesize
  const text = texts;

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the Text-to-Speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('./public/output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
}


app.post('/users/signup', (req, res) => {
  var body = _.pick(req.body, ['name', 'email', 'password'])
  var user = new User(body)
  user.save().then(() => {
    return user.generateAuthToken()
  }).then(token => {
    res.header('x-auth', token).send({user, token})
  }).catch(e => {
    res.status(400).send(e)
  })
})

app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  User.findByCrendentials(body.email, body.password).then(user => {
    user.removeToken().then(() => {
      return user.generateAuthToken().then(token => {
        res.header('x-auth', token).send({token})
      })
    }, () => {
      res.status(401).send()
    })
    // return user.generateAuthToken().then(token => {
    //   res.header('x-auth', token).send(user)
    // })
  }).catch(e => {
    res.status(400).send()
  })
})

app.listen(3001, () => {
  console.log('Port is running 3001')
})
