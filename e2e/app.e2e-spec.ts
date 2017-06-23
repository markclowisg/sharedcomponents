import { SharedComponentsPage } from './app.po';

describe('shared-components App', () => {
  let page: SharedComponentsPage;

  beforeEach(() => {
    page = new SharedComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
