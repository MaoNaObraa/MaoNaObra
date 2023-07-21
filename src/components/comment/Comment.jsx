import './Comment.css'

const Comment = ({ Nome, Avaliacao, Comentario }) => {
    return (
            <div className="d-flex border align-items-center" id='comentario'>

                <div id="foto-comentario-box" className=''>
                    <div id="foto-comentario">

                    </div>

                </div>
                <div className='d-flex flex-column'>
                    <h4>{Nome}</h4>
                    <h5>{Avaliacao}</h5>

                    <p>
                        {Comentario}
                    </p>
                </div>
            </div>
    );
}

export default Comment;