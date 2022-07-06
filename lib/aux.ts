export const getFormatedPrice = (currency: string, price: number) => {
  const correctCurrency = currency == "ARS" ? "$" : "USD"
  return `${correctCurrency} ${price}`
}

export const getConditionFormat = (condition: string) => {
  const formattedCondition = condition == "new" ? "Nuevo" : "Usado"
  return formattedCondition 
}