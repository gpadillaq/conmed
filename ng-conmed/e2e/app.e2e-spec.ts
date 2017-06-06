import { NgConmedPage } from './app.po';

describe('ng-conmed App', () => {
  let page: NgConmedPage;

  beforeEach(() => {
    page = new NgConmedPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
