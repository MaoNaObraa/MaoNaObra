import Input from '../../components/input/Input';
import Navigation from '../../components/navigation/Navigation';
import './anuncioPage.css'



const AnuncioPage = () => {
    return (
        <div>

            <div className='d-flex container pt-4 justify-content-between' id="principal-anuncio">
                <div>
                    <div id='titulo'>
                        <h3 id='text-Principal'>Vamos saber um pouco mais sobre você</h3>
                    </div>
                    <div>
                        <Input id="caixa1" label="Descreva sobre seu trabalho" type="text" />
                        <Input id="caixa2" label="Em qual categoria seu seu serviço se encaixa?" type="text" />
                        <Input id="caixa3" label="Quais serviços você oferece?(Separe cada serviço por virgula)" type="text" placeholder="Pedreiro,Eletricista,Ecanador" />
                    </div>
                    <div className=' p-1 flex-column mt-2'>
                        <div id="titulo2">
                            <h2 id='text2'>Contato</h2>
                        </div>
                        <Input id="Instagram" label="Instagram" type="text" nome="Instagram" placeholder="Digite seu Instagram" />
                        <Input id="Whatsapp" label="Whatsapp" type="text" nome="Whatsapp" placeholder="Digite seu Whatsapp" />
                        <Input id="Telefone" label="Telefone" type="text" nome="Telefone" placeholder="Digite seu Telefone" />
                    </div>
                </div>
                <div className='caixa-titulo'>

                    <div className="caixa-descrição">
                        <h2 class="primeiro">Como Funciona?</h2>

                        <h6><p>Descreva seu trabalho, após seu cadasto
                            seu perfil irá ficar disponível para
                            possíveis clientes próximos a sua área.</p>
                            <p>Caso um cliente queira contratar seu
                                serviço, uma notificação será enviada
                                para o seu e-mail cadastrado, caso aceite
                                o cliente poderá entrar em contato para
                                acordo.</p>
                            <p>Nós do MaoNaObra não nos
                                responsabilizamos com pagamento,
                                apenas divulgamos o seu trabalho.</p></h6>


                    </div>
                </div>



            </div>
        </div>




    );
}

export default AnuncioPage;