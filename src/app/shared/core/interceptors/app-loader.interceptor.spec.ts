import { TestBed } from '@angular/core/testing';

import { AppLoaderInterceptor } from './app-loader.interceptor';

describe('AppLoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppLoaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppLoaderInterceptor = TestBed.inject(AppLoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
