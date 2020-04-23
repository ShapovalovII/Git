const { ta } = require('trueautomation-helper');
const sharedStepAction = require('../../../lib/sharedSteps/sharedFunction.js')

describe('Name1111', () => {
  
  beforeEach(() => {
    browser.url('https://google.com');
  });

  
  
  it('Name1', () => {
    $(ta('My_Tests:Name1111:qInput011432101012')).click();
    $(ta('My_Tests:Name1111:qInput011432101012')).setValue('sadsdd');
    $(ta('My_Tests:Name1111:btnKInput0114321022610')).click();
  });

});
