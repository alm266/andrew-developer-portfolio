import { routes } from './app-routing.module';

describe('AppRoutingModule', () => {
  it('should include the portfolio page routes', () => {
    const routePaths = routes.map((route) => route.path);

    expect(routePaths).toEqual([
      '',
      'projects',
      'case-studies',
      'writing',
      'about',
      'resume',
      'contact',
      '**',
    ]);
  });
});
