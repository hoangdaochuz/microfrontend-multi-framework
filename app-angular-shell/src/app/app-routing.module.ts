import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

const routes: Routes = [
  {
    path: 'angular',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      remoteName: 'AppAngularMfe',
      exposedModule: './web-components',
      elementName: 'angular1-element',
      type: 'module',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:8080/remoteEntry.js',
      remoteName: 'AppReact2Mfe',
      exposedModule: './web-components',
      elementName: 'react2-element',
      type: 'module',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
