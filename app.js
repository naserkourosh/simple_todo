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

        let removeSpan = document.createElement('span');
        removeSpan.style.color = 'red';
        removeSpan.innerHTML = ' &#10007; '

        pTag.appendChild(removeSpan);

        removeSpan.addEventListener('click' , deleted);
        function deleted(){
            pTag.remove()
        }



        let doneSpan = document.createElement('span');
        doneSpan.style.color = 'green';
        doneSpan.innerHTML = ' &#10003; '

        pTag.appendChild(doneSpan);

        doneSpan.addEventListener('click', done);
        function done() {
            span.style.textDecoration = 'line-through';
            span.style.color = 'green';
        }
    }
}