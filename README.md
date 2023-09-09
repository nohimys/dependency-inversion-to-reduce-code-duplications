# Dependency Inversion to Reduce Code Duplications - Component Development

When you get a requirement to develop a sharable component, the number of consumers is much less at the beginning. It's likely to be 2 consumers in the initial stage. There's a downside to this.
1. Usually, a sharable component should be as generic as possible, so many consumers can leverage that easily. 
2. At the same time, it should be as plug & playable as possible, so the consumers do not have to do a lot when implementing it.

This is where it gets trickier. When you handle more scenarios within the component to make it plug & playable, you’re making it less generic for future consumers. So these are two sides of a coin & the hard part is, capturing the sweet spot, without over-engineering as well.

## See the full article at [Dependency Inversion to Reduce Code Duplications - Component Development](https://medium.com/@nohim.godage/dependency-inversion-to-reduce-code-duplications-component-development-e356e728057f)

How to run this project:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.