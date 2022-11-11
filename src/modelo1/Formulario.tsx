import { useFormulario } from './useFormulario';
import { profissoes, nomeProfissao, linguagens, linguagensSelecionadas, sexos } from '../api';

interface IData {
  username: string;
  email: string;
  password: string;
  idade: string;
  profissao: number;
  linguagens_pref: number[];
  sexo: string;
} 

const dataInicial = {
  username: '',
  email: '',
  password: '',
  idade: '',
  profissao: 0,
  linguagens_pref: [],
  sexo: ''
}

export const Formulario = () => {

  const { formState, onInputChange, onCheckboxChange, onSelectChange, onInputRadio } = useFormulario<IData>(dataInicial);

  const { username, email, password, idade, profissao, linguagens_pref, sexo } = formState;

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if(checked) {

      if(!linguagens_pref.includes(+value))  {
        linguagens_pref.push(+value);
      }
       
    } else {

      const index = linguagens_pref.findIndex(element => element === +value);
      linguagens_pref.splice(index, 1)

    }

    onCheckboxChange(name, linguagens_pref)
  }

  return (
    <>
      <h1>Preenchimento de Formulário</h1>
      <hr />

      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={ onInputChange }
        />

        <input
          type="email"
          className="form-control mt-4"
          placeholder="wsantos@gmail.com"
          name="email"
          value={email}
          onChange={ onInputChange }
        />

        <input
          type="password"
          className="form-control mt-4"
          placeholder="Senha"
          name="password"
          value={password}
          onChange={ onInputChange }
        />

        <input
          type="number"
          className="form-control mt-4"
          placeholder="Idade"
          name="idade"
          value={idade}
          onChange={ onInputChange }
        />

        <select className="form-select mt-4" name="profissao" value={profissao} onChange={ onSelectChange }>
          <option value="0">Selecione</option>
          {
            profissoes.map(profissao => (
              <option key={profissao.id} value={profissao.id}>{profissao.nome}</option>
            ))
          }
        </select>

        <h5 className="mt-4">Linguagens preferidas</h5>
        {
          linguagens.map(linguagem => (
            <div key={ linguagem.id } className="form-check mt-4">
              <input 
                className="form-check-input" 
                type="checkbox" 
                name="linguagens_pref"
                value={ linguagem.id }
                onChange={ handleChangeCheckbox }
              />

              <label className="form-check-label">
                { linguagem.nome }
              </label>
            </div>
          ))
        }

        <h5 className="mt-4">Sexo</h5>

        {
          sexos.map((sexo, index) => (
            <div key={ index } className="form-check">
              <input className="form-check-input" type="radio" name="sexo" value={ sexo } onChange={ onInputRadio } />
              <label className="form-check-label" >{ sexo }</label>
            </div>
          ))
          
        }
      </div>

      <hr />

      <div className="mt-4">
        <h2>Respostas</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            <span style={{ fontWeight: 'bold' }}>Username: </span>
            <span>{username}</span>
          </p>

          <p>
            <span style={{ fontWeight: 'bold' }}>E-mail: </span>
            <span>{email}</span>
          </p>

          <p>
            <span style={{ fontWeight: 'bold' }}>Password: </span>
            <span>{password}</span>
          </p>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            <span style={{ fontWeight: 'bold' }}>Idade: </span>
            <span>{idade}</span>
          </p>

          <p>
            <span style={{ fontWeight: 'bold' }}>Profissão: </span>
            <span>{profissao ? nomeProfissao(profissao) : ''}</span>
          </p>

          <p>
            <span style={{ fontWeight: 'bold' }}>Linguagens: </span>
            <span>{ linguagensSelecionadas(linguagens_pref) }</span>
          </p>
          
          <p>
            <span style={{ fontWeight: 'bold' }}>Sexo: </span>
            <span>{ sexo }</span>
          </p>

        </div>
      </div>
    </>
  )
}
