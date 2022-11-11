export const profissoes = [
  { id: 1, nome: 'Gerente de Projeto' },
  { id: 2, nome: 'Scrum Master' },
  { id: 3, nome: 'Product Owner' },
  { id: 4, nome: 'Desenvolvedor' },
];

export const nomeProfissao = (id_profissao: number) => {
  const profissao = profissoes.filter((profissao) => profissao.id == id_profissao);
  return profissao[0].nome
}

export const linguagens = [
  { id: 1, nome: 'JavaScript' },
  { id: 2, nome: 'Java' },
  { id: 3, nome: 'PHP' },
  { id: 4, nome: 'Python' }
]

export const linguagensSelecionadas = (selecionados: number[]) => {

  let grupo: string[] = [];

  selecionados.map(elemento => {
    let desc = linguagens.filter((linguagem) => linguagem.id == elemento);
    grupo.push(desc[0].nome);
  });

  return grupo.join(', ');
}

export const sexos = ['Feminino', 'Masculino'];