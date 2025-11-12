export const formatCurrencyCLP = (value) => {
  if (typeof value !== 'number') return value
  return value.toLocaleString('es-CL')
}
