import getOptions from '../cache'

export const getPaymentMethods = async () => {
    const options = await getOptions();
    return options.optionsPageOptions.fieldGroupOptions.paymentMethods;
}