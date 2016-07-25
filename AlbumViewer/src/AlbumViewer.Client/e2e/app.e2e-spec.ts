import { AlbumViewerPage } from './app.po';

describe('album-viewer App', function() {
  let page: AlbumViewerPage;

  beforeEach(() => {
    page = new AlbumViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
