const perguntas = [
  {
    pergunta: 'Qual é o nome completo do protagonista de Naruto?',
    respostas: ['Naruto Uzumaki', 'Naruto Namikaze', 'Naruto Senju'],
    correta: 0
  },
  {
    pergunta: 'Quem é o sensei de Naruto na Academia Ninja?',
    respostas: ['Kakashi Hatake', 'Jiraiya', 'Iruka Umino'],
    correta: 2
  },
  {
    pergunta: 'Qual é o nome do clã de Sasuke Uchiha?',
    respostas: ['Clã Senju', 'Clã Hyuga', 'Clã Uchiha'],
    correta: 2
  },
  {
    pergunta: 'Qual é o nome do jutsu de assinatura de Sasuke?',
    respostas: ['Rasengan', 'Chidori', 'Kage Bunshin no Jutsu'],
    correta: 1
  },
  {
    pergunta: 'Quem é o líder da Akatsuki?',
    respostas: ['Zabuza Momochi', 'Itachi Uchiha', 'Pain (Nagato)'],
    correta: 2
  },
  {
    pergunta: 'Qual é o bijuu (demônio com cauda) dentro de Naruto?',
    respostas: ['Kurama', 'Matatabi', 'Shukaku'],
    correta: 0
  },
  {
    pergunta: 'Qual é o nome da aldeia ninja onde Naruto e seus amigos vivem?',
    respostas: ['Aldeia da Folha', 'Aldeia da Areia', 'Aldeia da Nuvem'],
    correta: 0
  },
  {
    pergunta: 'Quem é conhecido como o Copy Ninja em Naruto?',
    respostas: ['Jiraiya', 'Kakashi Hatake', 'Orochimaru'],
    correta: 1
  },
  {
    pergunta: 'Qual é a habilidade especial de Rock Lee?',
    respostas: ['Genjutsu', 'Taijutsu', 'Ninjutsu'],
    correta: 1
  },
  {
    pergunta:
      'Qual é o nome do mentor de Naruto no modo de controle da Kyuubi?',
    respostas: ['Killer Bee', 'Hiruzen Sarutobi', 'Jiraiya'],
    correta: 0
  }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    )
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = event => {
      const estaCorreta = event.target.value == item.correta //true ou false

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //Coloca pergunta na tela
  quiz.appendChild(quizItem)
}
