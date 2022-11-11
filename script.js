    const entrada = document.getElementById('texto-tarefa');

    const botao = document.getElementById('criar-tarefa');

    const btnLimpaLista = document.getElementById('apaga-tudo');

    const listaOrdenada = document.getElementById('lista-tarefas');

    const btnLimpaCompletos = document.getElementById('remover-finalizados');

    
    botao.addEventListener('click', criarElemento);

    function criarElemento() {
        const itemLista = document.createElement('li');
        itemLista.innerText = entrada.value;
        itemLista.addEventListener('click', corDeFundo);
        listaOrdenada.appendChild(itemLista);
        entrada.value = "";
    }

     function corDeFundo(event) {
        let  linha =document.querySelectorAll('li');
             for (let index = 0; index < linha.length;index += 1){
                linha[index].style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor ='rgb(128,128,128)'
    }

    listaOrdenada.addEventListener ('dblclick', function(evento){
    	  let classe = evento.target;
    	  if (classe.classList.contains('completed')) {
        classe.classList.remove('completed');
          } else {
            classe.classList.add('completed');
              }
            }) ;

    btnLimpaLista.addEventListener('click', limpaLista)       
    function limpaLista() {
      listaOrdenada.innerHTML = '';
    }

    btnLimpaCompletos.addEventListener('click', limpaCompletos)
    function limpaCompletos() {
      let  linha =document.querySelectorAll('li');
             for (let index = 0; index < linha.length;index += 1){
                if (linha[index].classList.contains('completed')){
                  linha[index].remove();
                }
        }
    }
