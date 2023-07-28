import './Home.css'

const Home = () => {
    return ( 
        <div className=' d-flex  justify-content-between' id='home-box'>
          <div id='informations' className='d-flex flex-column  align-items-center'>
            <div id='img' className='d-flex mt-5'>
            </div>
               <h3 className='d-flex' id='nome'>Laura Nogueira</h3>
                <h5>28 anos</h5>
                  <h5>Eletricista</h5>
          </div>
          <div id='description' className='d-flex  m-5 flex-column'>
            <div id='alinhar'className='d-flex flex-column m-5 p-2 align-itemns-center'> 
             <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero felis, lacinia dictum mauris vitae,<br/> 
               laoreet dictum est. Proin vestibulum elementum lectus, ut lobortis est luctus ut. Nunc et quam ex. Sed<br/> 
               interdum, nulla at ultrices porttitor, diam felis finibus erat, vel ullamcorper tortor arcu eu ex. In ultrices<br/> 
               purus vitae ullamcorper porta. Aenean porta, ligula nec sodales sodales, lorem nulla efficitur ante, sit<br/> 
               amet bibendum lacus elit ac elit. Cras nec facilisis magna, non pellentesque est. Proin nisl sapien,<br/> 
               pulvinar vel vulputate sed, fermentum eu enim. Curabitur fermentum dui non luctus imperdiet.
             </h5>
               <div className='d-flex p-3 mt-3'>
               <button id='botao-contratar'> Contratar </button>
               </div>
               <div className='d-flex p-5 flex-column'> 
                <h4 id='avaliacao'>23 avaliações</h4>
                <h4 id='estrela'>Estrelasssss</h4>
                <h4 id='comentario'>comentários (10)</h4>
               </div>
             
           </div>   
          </div>
        </div>
     );
}
 
export default Home;  