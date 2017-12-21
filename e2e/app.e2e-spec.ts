import { ProDemoPage } from './app.po';

describe('pro-demo App', function() {
  let page: ProDemoPage;

  beforeEach(() => {
    page = new ProDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
