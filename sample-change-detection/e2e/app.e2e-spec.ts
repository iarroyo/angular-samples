import { SampleChangeDetectionPage } from './app.po';

describe('sample-change-detection App', () => {
  let page: SampleChangeDetectionPage;

  beforeEach(() => {
    page = new SampleChangeDetectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
