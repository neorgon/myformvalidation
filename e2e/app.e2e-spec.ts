import { Myformsvalidation.NoPage } from './app.po';

describe('myformsvalidation.no App', () => {
  let page: Myformsvalidation.NoPage;

  beforeEach(() => {
    page = new Myformsvalidation.NoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
