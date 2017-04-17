import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import AppModule from './example1/app.module';
import AppModule from './example2/app.module';

// =======================================================================
// import styles
// =======================================================================
import './assets/style.scss';

platformBrowserDynamic().bootstrapModule(AppModule);