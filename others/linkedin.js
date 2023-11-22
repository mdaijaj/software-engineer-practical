const { Builder, By, Key, until } = require('selenium-webdriver');

async function applyToJob(jobTitle, jobLocation, coverLetter) {
  // Set up Selenium WebDriver
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open LinkedIn website
    await driver.get('https://www.linkedin.com');

    // Perform login (you may need to adjust the selectors and provide valid credentials)
    await driver.findElement(By.id('session_key')).sendKeys('aijaj18@navgurukul.org');
    await driver.findElement(By.id('session_password')).sendKeys('aijaj@#123', Key.RETURN);

    // Wait for the user to log in
    await driver.wait(until.titleContains('LinkedIn'), 5000);

    // Search for jobs
    await driver.findElement(By.id('global-nav-typeahead')).sendKeys(jobTitle, Key.RETURN);
    await driver.findElement(By.css('.jobs-search-box__location')).sendKeys(jobLocation, Key.RETURN);

    // Wait for search results
    await driver.wait(until.titleContains(`${jobTitle} Jobs`), 5000);

    // Click on the first job listing
    const firstJobListing = await driver.findElement(By.css('.job-card-container__link'));
    await firstJobListing.click();

    // Click on the "Easy Apply" button
    const easyApplyButton = await driver.findElement(By.css('.jobs-easy-apply-button'));
    await easyApplyButton.click();

    // Wait for the application form to load
    await driver.wait(until.elementLocated(By.css('.jobs-apply-form')), 5000);

    // Fill out the application form
    const coverLetterInput = await driver.findElement(By.css('.jobs-apply-form__textarea'));
    await coverLetterInput.sendKeys(coverLetter);

    // Submit the application
    const submitButton = await driver.findElement(By.css('.jobs-apply-form__submit-button'));
    await submitButton.click();

    console.log('Application submitted successfully!');
  } finally {
    // Quit the WebDriver
    await driver.quit();
  }
}

// Example usage
const jobTitle = 'Software Engineer';
const jobLocation = 'San Francisco';
const coverLetter = 'Hello, I am interested in the Software Engineer position...';
applyToJob(jobTitle, jobLocation, coverLetter);
