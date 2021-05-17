# Rock, Paper, Scissors

### Deployed at

https://q-rock-paper-scissors.web.app/

### How to run/test locally

```
npm install
npm start
```

### Run Storybook

```
npm run storybook
```

### Run tests

```
npm test
```

## Notes

I used create-react-app as the base, with typescript.

Because of the countdown, I know that setTimeout/setInterval are not accurate so I thought of using Rx which guarantees the intervals are correct.

I therefore decided to use the opportunity to try out redux-observable - something that's been on my radar to try out for a while. It's possibly overkill for the use-case; I could have just used Rx with redux-thunk or searched for another timer library that guarantees accuracy, but as I say I took the opportunity to try it out redux-observable.

I did consider trying out x-state as I've seen that you use that, however I didn't want to go down a rabbit hole with something I didn't already know. With redux-observable I already knew Redux and RxJS so the redux-observable part is just a thin layer on top of those.

## What I would have added/finished with more time

1. I'm aware that visually it's not that accurate to the specs - especially font weights and padding. I'd have spent more time getting this accurate in a real world project.

2. The Start page icons and the replay icons could have been merged together. This was on my list to do and probably wouldn't have taken that long, but I just wanted to finish and thought it was probably sufficient if I just explained I would have done it.

3. I wanted to have a test for the countdown, using the Rx TestScheduler.

4. Better code organisation - I've got some styled components in "primitives.tsx" but then some are inline within other components.

5. Accessibility - specifically being able to tab around, alt text.

## Stretch goals

1. Mobile support. I wanted to make it responsive so that you could play it on a mobile device. I did start this off, but didn't get that far. It would have required quite a bit of work changing the sizes of the icons and boxes.

2. Page speed - The code could have been split so the initial screen loads first, then the main game is a separate bundle.