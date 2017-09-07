import { NgmaptestPage } from './app.po';

describe('ngmaptest App', () => {
  let page: NgmaptestPage;

  beforeEach(() => {
    page = new NgmaptestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
