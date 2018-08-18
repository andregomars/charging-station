export const navItems = [
  {
    title: true,
    name: 'Home'
  },
  {
    name: 'Main',
    url: '/main',
    icon: 'fa fa-home'
  },
  {
    name: 'Stations',
    url: '/stations',
    icon: 'fa fa-battery'
  },
  {
    name: 'Schedule',
    url: '/schedule',
    icon: 'fa fa-calendar-check-o'
  },
  {
    name: 'Malfunctions',
    url: '/malfunctions',
    icon: 'fa fa-exclamation-triangle'
  },
  {
    name: 'Logs',
    url: '/logs',
    icon: 'fa fa-file-text-o'
  },
  {
    name: 'Statistics',
    url: '/statistics',
    icon: 'fa fa-area-chart'
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'fa fa-envelope'
  },
  {
    name: 'Setting',
    icon: 'fa fa-gear',
    children: [
      {
        name: 'General',
        url: '/setting',
        icon: 'fa fa-angle-right'
      },
      {
        name: 'Station',
        url: '/setting/station',
        icon: 'fa fa-angle-right'
      },
      {
        name: 'Vehicle',
        url: '/setting/vehicle',
        icon: 'fa fa-angle-right'
      }
    ]
  },
  {
    name: 'Admin setting',
    url: '/adminsetting',
    icon: 'fa fa-users'
  },
  {
    name: 'More',
    title: true
  },
  {
    name: 'Manual',
    url: '/manual',
    icon: 'fa fa-book'
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'fa fa-user'
  }
];
