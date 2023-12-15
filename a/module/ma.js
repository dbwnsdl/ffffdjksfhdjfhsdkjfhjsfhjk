export function html(text){
    document.addEventListener("DOMContentLoaded", function() {
        document.body.insertAdjacentHTML('beforeend', text)
    })
}

export function style(text){
    document.addEventListener("DOMContentLoaded", function() {
        document.body.insertAdjacentHTML('beforeend', '<style>' + text + '</style>')
    })
}