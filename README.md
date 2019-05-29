# components

_A test component library with component viewer_

[![NPM](https://img.shields.io/npm/v/components.svg)](https://www.npmjs.com/package/components)

### Generators

We use the awesome [hygen](http://www.hygen.io/) generator to automatically create components, stories and tests.

The generators live alongside this project in the `/_templates` folder. The available generators are:

```bash
# Generate a dumb/presentational component
npm run generate:component:dumb

# Generate a higher-order component
npm run generate:component:hoc
```

### Releases

We use [release-it](https://github.com/release-it/release-it) to manage GitHub and NPM releases. The `release-it` commands will automatically generate tags, releases, and a [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) CHANGELOG with one command. The available release commands are:

```bash
# Patch release (X.X.Y) - Used for minor bug fixes
npm run release:patch

# Minor release (X.Y.X) - Used for new features and backward-compatible changes
npm run release:minor

# Major release (Y.X.X) - Used for breaking, backward-incompatible changes
npm run release:major
```

## License

MIT © [masiamj](https://github.com/masiamj)
