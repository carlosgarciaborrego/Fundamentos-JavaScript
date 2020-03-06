var signo = prompt('¿Cuál es tu signo?')

console.log(signo)


switch (signo){
    case 'acuario':
        console.log('El que salga para acuario')
        break
    case 'geminis':
    case 'géminis':
        console.log('El que sea para géminis')
        break
    default:
        console.log('El resto')
}
