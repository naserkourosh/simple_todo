function add(e){
    // e.preventDefault;
    let input = document.getElementById('inputText').value
    
    let div = document.querySelector('div');
    
    if(input === ""){
        alert('لطفا فیلد را پر کنید!')
    } else{
        let pTag = document.createElement('p');
        let span = document.createElement('span');
        let content = document.createTextNode(input);

        span.appendChild(content);
        pTag.appendChild(span);
        div.appendChild(pTag);
    }
}