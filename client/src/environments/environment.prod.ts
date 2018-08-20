export enum DataSourceType {
  Local,
  Firebase,
  Swagger
}

export const environment = {
  production: true,
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
  delayEmulatorTimer: 0,
  spinnerEnabled: true,
  dataSource: DataSourceType.Firebase
};
