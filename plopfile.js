module.exports = function (plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of your new component?',
        validate: (value) => {
          if (/.+/.test(value.trim())) { return true }
          return 'Component name is required.'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{ componentName }}/{{ componentName }}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{ componentName }}/{{ componentName }}.d.ts',
        templateFile: 'templates/component/component.d.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{ componentName }}/{{ componentName }}.test.tsx',
        templateFile: 'templates/component/component.test.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{ componentName }}/index.ts',
        templateFile: 'templates/component/index.ts.hbs',
        abortOnFail: true,
      }
    ]
  })
};
