# Risk Ledger Spotify API Exercise

## Framework and Tools
For this project I used:
- Vue 3 as the main framework, using the new Composition API
- Vue Router for routing management
- Pinia for the state management
- SASS for basic styling

All of this set up using Vite

## IDE Used
For this project I used [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 

## How to Setup
Check out the project either from [GitHub](https://github.com/Ibz786/riskledger-spotify) or you can load in the source [dist file](https://github.com/Ibz786/riskledger-spotify/tree/trunk/dist) from my GitHub

Using the Github repo directly, checkout the files into a folder called: `risk-ledger-spotify` and run
```sh
npm install
```
Once that's done, if you wish to run it in dev mode, simply run
```sh
npm run dev
```
It should run on `localhost:3000`. Please note, this is important as the Spotify API requires this for the callback

## Things I missed out on
> Just to note, I ran out of time to complete some parts of the exercise, whilst I would've liked to have at least visited but didn't get the chance to. Most of my time was taken up with the Spotify API. It took me a bit of time to get the whole API working the way I needed
### Testing
Unfortunately, I ran out of time, and I wasn't able to include testing as part of this coding excerise. However, I feel for the most part that I have made my code testable. Had I had enough time to I would've added testing using Vitest
Since I've used Vue 3 and Vite for this project, the best option would've been to include Vitest. It is Jest compatiable and so it works well with those who are familiar with its syntax and can migrate their workflow over to Vitest

I would have set up the testing using the following folder structure. I would have had a folder called `test` in the main `src/`

From there, I would mimic the key folders that I have i.e. `components`, `services`, `views` etc.
In each folder, I would then have a `.spec.js` file to correspond with the files that are in its counter part i.e.

`src/components/Header.vue` -> `tests/components/Header.spec.js`

### Security 
To acheive a state of the feature being able to retain its state and information even after being refreshed, I had to stored some key things in the Localstorage.
The user's token was stored in the Localstorage. Whilst I had logic implemented that this token is only stored there when they log in and cleared when they log out, the token is still stored in Localstorage so they can revist the dashboard area without needing to log back in. Although, the token has an expiry of an hour. Perhaps I could have used Session Storage
### Improvements
- I did not have time to style the UI the way I wanted. I would have loved to have included a nice UI as part of my work and give the whole feature a more of intuitive Dashboard feel, whilst as the same time, complimenting the design with a theme similar to that of Spotify itself
- I wasn't able to do the bonus part, which I would have loved to acheive
- As mentioned previously I would have loved to have included good testing for all the components, views etc. that I created
- To improve the this mini web-app, I feel it would have been better to have also created a back-end in Node.js / Express.js to much better handle the Token and Authentication and make it more secure
    - This is based on another security issue to consider is that the Client ID from the Spotify API. This is currently exposed and anyone can view the code and see it. Stricly speaking this should have placed in a `.env` file for development purposes and then in production, this should be hosted against the production server's environment variables, which then the server can refer to
