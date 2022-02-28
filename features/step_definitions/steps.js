const { Person, Network } = require('../../src/shouty.js')
const { Given, When, Then, Before } = require('cucumber')
const { assertThat, is } = require('hamjest')

Before(function () {
  this.network = new Network()
  this.people = {}
})

Given('a person named {word}', function (name) {
  this.people[name] = new Person(this.network)
});

When('Sean shout(s) {string}', function (message) {
  this.people['Sean'].shout(message)
  this.messageFromSean = message
})

Then('Lucy should hear Sean’s message', function () {
  assertThat(this.people['Lucy'].messagesHeard(), is([this.messageFromSean]))
})
