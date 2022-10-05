# Axios bug hunter

In this short exercise you need to find all the bugs and make sure you can list all characters, create a new character, update a character and delete one of them.

We'll be using the same API as the class example with [https://ih-crud-api.herokuapp.com/characters/](https://ih-crud-api.herokuapp.com/characters/)

### Bugs, bugs and more bugs

- [ ] As you can see when you click the link on the home page you get a 404 error. This means the route doesn't exist, but if we check `characters.routes.js` we can see the route exists already.
<br>

- [ ] After we fix our first bug we can see the app is crashing directly, read the error, found the bug and fix it (I was typing in a hurry and used the wrong syntax, in this context, for that one).
<br>

- [ ] Ok, we fixed the syntax mistakes, now what? The server it's still crashing, why? Read the `TypeError` the code on `characters.routes.js` is missing a key point at the end.
<br>

- [ ] Nice, everything is working!! But when we try to click on the link on the home page we still got a problem saying that the route doesn't exist.
  - Compare the url on the browser and on the `.get('/')`
  - All our routes should be `http://localhost:3000/characters`, how we can achieve that without changing the routes inside the parenthesis on `characters.routes.js`?
<br>

- [ ] How many bugs you get on the code Felipe? Now everything should be fine, so why the code is breaking? Check the terminal and see what is the problem.
<br>

- [ ] Ok, we fixed the problem on the route, now what? Check the view and correct my mistake there :D
<br>

- [ ] Try to create a new char => GODDAMMIT FELIPE!! after creating a character the user should be redirected to the characters list page.
<br>

- [ ] Try to edit your newly created character and yes, you guessed right, another bug :D Check the url that you got on the browser and after that check the route. `Hint: A form shouldn't send the information on the navigation bar`
<br>

- [ ] After you fix the form you'll need to also fix the route, because even if you're getting information from the request you don't have an update on the character. `Hint: Check the method being used`
<br>


### Bonus

- [ ] Up to you now implement the functionality to delete a character.
<br>

- [ ] How you could make the code DRYer?

  - Remove some inconsistency
  - Reuse some pieces of code
<br>

- [ ] If you need to change the API call, it would be a pain to change in all the places, you could use a `variable` in this case, but if you need that info across different files / folders we can have a little bit of repetition so try to create a `environment variable` that will hold the `BASE_URL`.
<br>

- [ ] Change all the calls of axios to a service, so if you need to change to another library you could change in a single place :D
