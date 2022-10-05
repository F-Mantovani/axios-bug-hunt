# Axios bug hunter

In this exercise you need to find all the bugs and make sure you can list all characters, create a new character, update a character and delete one of them.

We'll be using the same API as the class example with [https://ih-crud-api.herokuapp.com/characters/](https://ih-crud-api.herokuapp.com/characters/)

If you need to refresh the methods and paths checkout the student portal :) 

### Bugs, bugs and more bugs

- [ ] As you can see when you click the link on the home page you get a 404 error. This means the route doesn't exist, but if we check `characters.routes.js` we can see the route exists already.

<details> 
  <summary> Spoiler: Solution </summary>

  on the `app.js` add

  ```javascript
    const charRoutes = require('./routes/characters.routes.js')
    app.use('/', charRoutes)
  ```

</details>

- [ ] After we fix our first bug we can see the app is crashing directly, read the error, found the bug and fix it (I was typing in a hurry and used the wrong syntax, in this context, for that one).

<details> 
  <summary> Spoiler: Solution </summary>

  on the `characters.routes.js` change:

  change from:
  ```javascript
    import axios from 'axios'
  ```
  to:
  ```javascript
    const axios = require('axios')
  ```

</details>


- [ ] Ok, we fixed the syntax mistakes, now what? The server it's still crashing, why? Read the `TypeError` the code on `characters.routes.js` is missing a key point at the end.

<details> 
  <summary> Spoiler: Solution </summary>

  on the `characters.routes.js` add:

  ```javascript
    module.exports = router
  ```

</details>

- [ ] Nice, everything is working!! But when we try to click on the link on the home page we still got a problem saying that the route doesn't exist.
  - Compare the url on the browser and on the `.get('/')`
  - All our routes should be `http://localhost:3000/characters`, how we can achieve that without changing the routes inside the parenthesis on `characters.routes.js`?

<details> 
  <summary> Spoiler: Solution </summary>

  on the `app.js` change to:

  ```javascript
    app.use('/characters', charRoutes)
  ```

</details> 

- [ ] How many bugs you get on the code Felipe? Now everything should be fine, so why the code is breaking? Check the terminal and see what is the problem.

<details> 
  <summary> Spoiler: Solution </summary>

  on the `characters.routes.js` (remove the slash at the beginning of the `res.render()`) change to:

  ```javascript
     res.render('characters/list', {characters: response.data})
  ```

</details> 

- [ ] Ok, we fixed the problem on the route, now what? Check the view and correct my mistake there :D

<details> 
  <summary> Spoiler: Solution </summary>

  on the `list.hbs` change the `#` for a `/` on the closing `each`:

  ```hbs
    {{#each characters}}
      <p> {{this.name}} </p>
      <a href="/characters/{{this.id}}/details"> More Details  </a>
    {{/each}}
  ```

</details> 

- [ ] Try to create a new char => GODDAMMIT FELIPE!! after creating a character the user should be redirected to the characters list page.

<details> 
  <summary> Spoiler: Solution </summary>

  on the `characters.routes.js` on the post route that create a character add a `/` on the redirect:

  ```javascript
    res.redirect('/characters')
  ```

</details> 


- [ ] Try to edit your newly created character and yes, you guessed right, another bug :D Check the url that you got on the browser and after that check the route. `Hint: A form shouldn't send the information on the navigation bar`

<details> 
  <summary> Spoiler: Solution </summary>

  on the `edit-character.hbs` change the `METHOD` from `GET` to `POST`:

  ```hbs
<form action="/characters/{{id}}/edit" method="POST">
  ```

</details> 

- [ ] After you fix the form you'll need to also fix the route, because even if you're getting information from the request you don't have an update on the character. `Hint: Check the method being used`

<details> 
  <summary> Spoiler: Solution </summary>

  on the `characters.routes.js` on the post route that updates a character change the method to PUT:

  ```javascript
    axios
    .put(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`, updatedCharacter)
  ```

</details> 

### Bonus

- [ ] Up to you now implement the functionality to delete a character.

- [ ] How you could make the code DRYer?
  - Remove some inconsistency
  - Reuse some pieces of code

- [ ] If you need to change the API call, it would be a pain to change in all the places, you could use a `variable` in this case, but if you need that info across different files / folders we can have a little bit of repetition so try to create a `environment variable` that will hold the `BASE_URL`.

- [ ] Change all the calls of axios to a service, so if you need to change to another library you could change in a single place :D
