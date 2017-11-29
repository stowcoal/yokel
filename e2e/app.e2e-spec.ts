import { YokelPage } from './app.po';

describe('yokel App', function() {
  let page: YokelPage;

  beforeEach(() => {
    page = new YokelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
