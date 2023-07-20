import './PrestadorServico.css'

const PrestadorServico = ({name, text, funcao, nota}) => {
    return ( 
        <>
             <main class='d-flex justify-content-center align-items-center'>
           
           <div class='card'>
           
           
            <div class='imagem'>
               <div class='d-flex justify-content-end'>
               <div id='star' class='d-flex justify-content-center m-2'>

                 <h5 id='avaliation' class='m-1'>{nota}</h5>
               </div>
               </div>
            </div>

            <div class='p-3'>
             <div>
               <h5 id='Nome' >{name}</h5>
                <p id="text" >{text}</p>
             </div>
             <div class='d-flex flex-column'>
               <p id='services'>serviços:</p>
                <h5 id='function' >{funcao}</h5>
            </div>
            </div>
             <div>
               <button id='botão' type="button">Contratar</button>
             </div>
           
           </div>
          
               
       
       </main>
        </>
     );
}
 
export default PrestadorServico;