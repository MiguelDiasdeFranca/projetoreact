
import './App.scss';
import { Link } from 'react-router-dom'


export default function App() {


  





  return (


    <div className='total'>


      <div className="pagina1">



        <div className='inicio'>

          <img src="https://acaonsfatima.org.br/wp-content/uploads/2018/11/logo.png" alt="" />
          <h3>React FreiS</h3>

        </div>



        <div className='acesso'>

          <Link to='/'>Inicio</Link>
          <Link to='/sobre'>Sobre</Link>
        </div>



      </div>

      <div className='conteudo'>

        <h2>Escolha um treino...</h2>


        <div className='quadrados'>


          <Link to='/exercicio1'>

            <div className='primeiro' >

              <div className='cor'>


              </div>
              <div className='texto'>

                <h5 >cupom de desconto</h5>

                <p>exercicio 1</p>

              </div>


            </div>


          </Link>

          <Link to='/exercicio2'>

            <div className='primeiro' >

              <div className='cor1'>


              </div>
              <div className='texto'>

                <h5 >Converter kg/gramas</h5>

                <p>exercicio 2</p>

              </div>


            </div>



          </Link>

          <Link to='/exercicio3'>

            <div className='primeiro' >

              <div className='cor2'>


              </div>
              <div className='texto'>

                <h5 >Exercicio açai</h5>

                <p>exercicio 3</p>

              </div>


            </div>



          </Link>


        </div>




      </div>


    </div>

  );
}


