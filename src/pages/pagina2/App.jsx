import './App.scss';
import {Link} from 'react-router-dom'
export default function App() {
    return (
  
  
      <div className='pag2'>
  
      
      <div className="pagina1">
  
            
       
            <div className='inicio'>
  
            <img src="https://acaonsfatima.org.br/wp-content/uploads/2018/11/logo.png" alt="" />
            <h3>React FreiS</h3>
  
            </div>
            
  
  
            <div className='acesso'>
  
              <Link to= '/'>Inicio</Link>
              <Link to= '/sobre'>Sobre</Link>
            </div>
              
          
     
      </div>
  
        <div className='conteudo'>
  
          <h2>Sobre</h2>
  
  
            <div className='quadrados'>
  
              <div className='primeiro'>
  
                 <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. 

Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.
Estamos ansiosos para ver seu progresso e sucesso!</p>
  
                  </div>
  
                 
              
  
              
  
  
            </div>
  
  
  
  
        </div>
  
  
      </div>
  
    );
  }