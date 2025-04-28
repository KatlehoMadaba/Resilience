import { ResilienceTemplatePage } from './app.po';

describe('Resilience App', function() {
  let page: ResilienceTemplatePage;

  beforeEach(() => {
    page = new ResilienceTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
