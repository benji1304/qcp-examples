// https://developer.salesforce.com/docs/atlas.en-us.cpq_dev_plugins.meta/cpq_dev_plugins/cpq_plugins_parent.htm
/*
 * This is a sample plugin for use in the new JavaScript Quote Calculator. It exports all of the methods that
 * the calculator will look for, and documents their parameters and return types.
 *
 * These methods are all optional. One may export any, all, or none of them in order to achieve the desired behavior.
 *
 * Note that the plugin is an ES6 module. It is transpiled via Babel, and thus it is module-scoped by default. One may
 * use any elements of the ES6 language or syntax. However, the plugin must be able to run in both Browser and Node
 * environments. This means that one cannot expect browser global variables such as window to be available.
 */


/// DEBUG ///
const DEBUG = true;

 /** Log to console if debug is enabled */
function debug(...args) {
    if(DEBUG) {
        console.log(...args);
    }
}

/**
 * This method is called by the calculator when the plugin is initialized.
 * @param {QuoteLineModel[]} quoteLineModels An array containing JS representations of all lines in a quote
 * @returns {Promise}
 */
export function onInit(quoteLineModels) {
  return new Promise((resolve, reject) => {
    // Perform logic here and resolve promise
    resolve();
  });
}

/**
 * This method is called by the calculator before calculation begins, but after formula fields have been evaluated.
 * @param {QuoteModel} quoteModel JS representation of the quote being evaluated
 * @param {QuoteLineModel[]} quoteLineModels An array containing JS representations of all lines in the quote
 * @returns {Promise}
 */
export function onBeforeCalculate(quoteModel, quoteLineModels) {
  return new Promise((resolve, reject) => {
    // Perform logic here and resolve promise
    resolve();
  });
}

/**
 * This method is called by the calculator before price rules are evaluated.
 * @param {QuoteModel} quoteModel JS representation of the quote being evaluated
 * @param {QuoteLineModel[]} quoteLineModels An array containing JS representations of all lines in the quote
 * @returns {Promise}
 */
export function onBeforePriceRules(quoteModel, quoteLineModels) {
  return new Promise((resolve, reject) => {
    // Perform logic here and resolve promise
    resolve();
  });
}

/**
 * This method is called by the calculator after price rules are evaluated.
 * @param {QuoteModel} quoteModel JS representation of the quote being evaluated
 * @param {QuoteLineModel[]} quoteLineModels An array containing JS representations of all lines in the quote
 * @returns {Promise}
 */
export function onAfterPriceRules(quoteModel, quoteLineModels) {
  return new Promise((resolve, reject) => {
    // Perform logic here and resolve promise
    resolve();
  });
}

/**
 * This method is called by the calculator after calculation has completed, but before formula fields are
 * re-evaluated.
 * @param {QuoteModel} quoteModel JS representation of the quote being evaluated
 * @param {QuoteLineModel[]} quoteLineModels An array containing JS representations of all lines in the quote
 * @returns {Promise}
 */
export function onAfterCalculate(quoteModel, quoteLineModels) {
  return new Promise((resolve, reject) => {
    // Perform logic here and resolve promise
    resolve();
  });
}
