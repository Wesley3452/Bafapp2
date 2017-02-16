import { Bafapp2Page } from './app.po';

describe('bafapp2 App', function() {
  let page: Bafapp2Page;

  beforeEach(() => {
    page = new Bafapp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
