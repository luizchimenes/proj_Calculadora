function calcular(type, value) {
    
    if (type === 'action') {

        if (value === 'c') {
            document.getElementById('input_field').value = '' // Limpa o campo
        }
        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {
            document.getElementById('input_field').value += value
        }
        if (value === '=') {
           let valor_campo =  eval(document.getElementById('input_field').value)
           document.getElementById('input_field').value = valor_campo
        }

    }
    else if (type === 'value') {
        
        document.getElementById('input_field').value += value // Concatena os valores colocados
    }
}