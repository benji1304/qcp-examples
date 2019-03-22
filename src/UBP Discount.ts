export function onBeforeCalculate(quote, lines, conn) {
        if (lines) {
           lines.forEach((line) => {
            const ubpDiscount = line.record['SBQQ__UbpDiscount__c'];
            if(ubpDiscount) {
              if (line.consumptionSchedules) {
                   line.consumptionSchedules.forEach((cs, index) => {
                        const rates = cs.getRates();
                        if (rates) {
                             rates.forEach((rate, index) => {
                                  const originalPrice = rate.get('SBQQ__Price__c');
                                  // Provide 10% discount
                                  const newPrice = originalPrice* 0.9;
                                  rate.set('SBQQ__Price__c', newPrice);
                             });
                        }
                   });
              }
            } 
          });
        }
  return Promise.resolve();
}