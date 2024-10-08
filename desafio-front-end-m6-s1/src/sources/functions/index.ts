export const removeMask = (value: string) => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
    let intValue = parseInt(value)
    return intValue 
  }

export const mask = (value: string | number) => {
    let string = value.toString()
    
    string = string.replace('.', '').replace(',', '').replace(/\D/g, '')

    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options).format(
      parseFloat(string) / 100
    )
  
    return 'R$ ' + result
  }