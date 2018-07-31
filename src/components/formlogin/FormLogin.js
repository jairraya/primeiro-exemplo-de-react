import './FormLogin.css';

class FormLogin extends Component{
    construtor(){
        this.usuario = '';
        this.senha = '';
    }

    preencherUsuario(){
        
    }

    render(){
        return(
            <div className="login">
                <h2>Digite seus dados para o login</h2>
                <input type="text" name="username" id="username" >
            </div>    
        )
    }
}