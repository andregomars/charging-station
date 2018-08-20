// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export enum DataSourceType {
  Local,
  Firebase,
  Swagger
}

export const environment = {
  production: false,
  agm: { apiKey: '' },
  firebase: {
    apiKey: 'AIzaSyDv4I7cWjw9KP90dOECFZdaxQWNk6dycGk',
    authDomain: 'chargingstationdemo.firebaseapp.com',
    databaseURL: 'https://chargingstationdemo.firebaseio.com',
    projectId: 'chargingstationdemo',
    storageBucket: 'chargingstationdemo.appspot.com',
    messagingSenderId: '414612664468'
  },
  apiRootLocal: 'assets/data',
  apiRootIocCATS: 'http://localhost/api/rest/v1',
  reportFallbackMonths: 3,
  delayEmulatorTimer: 500,
  spinnerEnabled: true,
  dataSource: DataSourceType.Local
};
