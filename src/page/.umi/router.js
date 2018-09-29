import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layout').default,
    "routes": [
      {
        "path": "/",
        "component": require('../HelloWorld').default,
        "exact": true
      },
      {
        "path": "/helloworld",
        "component": require('../HelloWorld').default,
        "exact": true
      },
      {
        "path": "/Home",
        "routes": [
          {
            "path": "/home/index",
            "component": require('../Home/Index').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('C:/Users/Justmydream/Desktop/github/react-admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('C:/Users/Justmydream/Desktop/github/react-admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('C:/Users/Justmydream/Desktop/github/react-admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
