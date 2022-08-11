<h1 align="center">💸 Money Tracker </h1>
<p align="center">
  <img src="/public/toReadme/#.gif">gif
</p>

## :books: Informações
Um site para controlar as despesas ou ganhos. Este projeto foi utilizado react com typescript e funcionalidades com styled components. A aula foi orientada pelo Bonieky Lacerda.

## :crossed_swords: Desafio
Criar a área para inserir as informações no sistema de controle.

### Solução
Etapa 1: Dentro da pasta 'components' deverá criar uma pasta para inserir as informações sobre a data, categoria, título e o valor (InputArea). Já na pasta 'helpers', no arquivo 'dateFilter', exportar a "const" para ajustar o dia, mês e ano.

```
export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
```

Etapa 2: Por fim, na pasta 'InputArea', no arquivo 'index.tsx', criar todo o funcionamento interno para as informações que serão inseridas.

```
export const InputArea = ({ onAdd }: Props) => {
    const [dateField, setDateField] = useState('');
    
<C.InputLabel>
    <C.InputTitle>Data</C.InputTitle>
    <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
</C.InputLabel>

(...)
```

Para informações mais detalhadas clique em: <a href="https://github.com/LipeCll/money-tracker-ts/commit/35ec271bb4a14872cddd761263efc8cf4c4719c7">Commit solução</a>

## :pushpin: Tecnologias
<ul>
  <li><a href="https://pt-br.reactjs.org/docs/getting-started.html">React</a></li>
  <li><a href="https://www.typescriptlang.org/docs/">Typescript</a></li>
  <li><a href="https://styled-components.com/docs">Styled Components</a></li>
</ul>
