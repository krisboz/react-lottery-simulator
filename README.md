# Lottery Simulator made with React

Live preview: https://krisboz.github.io/react-lottery-simulator/

It is a copy of the Eurojackpot system where the user picks
5 numbers in the range of 1-5 and 2 euro numbers 1-12.

For state management I've decided to use Redux, even though in this case it's a bit of an overkill, I thought it a good opportunity to learn.

Client side routing is done with the help of react-router-dom

Big part of the app is the random generation of tickets. In the helpers folder there is generateTicket.js which generates tickets completely functionally. In a little side quest for optimization I tried implementing the Fisher Yates shuffle thinking it would help optimize execution time however on a sample of 1.000.000 tickets the regular function ends in 540ms, whereas the fisher yates shuffle ends in 3830ms. It was a good learning experience but since the fisher yates shuffle is better at sorting gigantic arrays than making small ones I ended up using the functional approach, but I leave the fisherYatesGenTicket for anyone to see.
