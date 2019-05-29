// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of the dumb component?"
  },
  {
    type: 'input',
    name: 'path',
    message: 'Whats the subdirectory path? (ui/PATH)'
  }
]
