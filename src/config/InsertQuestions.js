const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://usertkmont:BR54321@cluster0.ztnmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("HelpEnem");
    const collection = database.collection("Questoes");

    const questoes = [
      {
        id: 1,
        categoria: "Matemática",
        enunciado: "Para melhorar o fluxo de ônibus em uma avenida que tem dois semáforos...",
        opcoes: ["A) 1,35", "B) 3,00", "C) 9,00", "D) 12,60", "E) 13,80"],
        resposta_correta: "B"
      },
      {
        id: 2,
        categoria: "Matemática",
        enunciado: "Uma caneca com água fervendo é retirada de um forno de micro-ondas...",
        opcoes: ["A) a = 20; b = log(0,5)", "B) a = 100; b = 0,5", "C) a = 20; b = 0,5^(1/10)", "D) a = 20; b = 40 ^(1/10)/80", "E) a = 20; b = 40"],
        resposta_correta: "C"
      },
      {
        id: 3,
        categoria: "Matemática",
        enunciado: "Brasil fecha 2020 entre os maiores recicladores de latas de alumínio...",
        opcoes: ["A) 1,0 × 10^4 ton", "B) 3,9 × 10^5 ton", "C) 5,0 × 10^5 ton", "D) 1,9 × 10^6 ton", "E) 2,0 × 10^7 ton"],
        resposta_correta: "D"
      },
      {
        id: 4,
        categoria: "Ciências",
        enunciado: "Um estudante comprou uma cafeteira elétrica de 700 W de potência...",
        opcoes: ["A) 100%", "B) 75%", "C) 60%", "D) 7,5%", "E) 5,1%"],
        resposta_correta: "C"
      },
      {
        id: 5,
        categoria: "Ciências",
        enunciado: "Impactos do microplástico: A ação de fatores abióticos aliada à biodeterioração...",
        opcoes: ["A) ósseo", "B) nervoso", "C) epitelial", "D) adiposo", "E) sanguíneo"],
        resposta_correta: "D"
      },
      {
        id: 6,
        categoria: "Inglês",
        enunciado: "Holy War: Oh, so we can hate each other and fear each other...",
        opcoes: ["A) mudança de comportamento", "B) panorama de conflitos", "C) rotina de isolamento", "D) perspectiva bélica", "E) cenário religioso"],
        resposta_correta: "A"
      },
      {
        id: 7,
        categoria: "Inglês",
        enunciado: "A carta da editora Stephanie Allen-Nichols à escritora Alice Walker tem o propósito de...",
        opcoes: ["A) problematizar o enredo de sua obra", "B) acusar o recebimento de seu manuscrito", "C) solicitar a revisão ortográfica de seu texto", "D) informar a transferência de seu livro a outra editora", "E) comunicar a recusa da publicação de seu romance"],
        resposta_correta: "B"
      },
      {
        id: 8,
        categoria: "Literatura",
        enunciado: "Data venia: Conheci Bentinho e Capitu nos meus curiosos e antigos quinze anos...",
        opcoes: ["A) relaciona aspectos centrais da obra original e, então, reafirma o ponto de vista adotado.", "B) explica os pontos de vista de críticos da literatura e, por fim, os redimensiona na discussão.", "C) introduz elementos relevantes da história e, na sequência, apresenta motivos para refutá-los.", "D) justifica as razões pelas quais adotou certa abordagem e, em seguida, reconsidera tal escolha.", "E) contextualiza o enredo de forma subjetiva e, na conclusão, explicita o foco narrativo a ser assumido."],
        resposta_correta: "A"
      },
      {
        id: 9,
        categoria: "Língua Portuguesa",
        enunciado: "Se você é feito de música, este texto é pra você...",
        opcoes: ["A) contradição, ao associar o coração despedaçado à alegria.", "B) metáfora, ao citar a imagem da metamorfose ambulante.", "C) intertextualidade, ao resgatar versos de letras de canções.", "D) enumeração, ao mencionar diferentes ritmos musicais.", "E) hipérbole, ao falar em 'sofrência', 'tragédias' e 'afogados'."],
        resposta_correta: "C"
      },
      {
        id: 10,
        categoria: "Língua Portuguesa",
        enunciado: "pessoas com suas malas, mochilas e valises chegam e se vão...",
        opcoes: ["A) buscarem novos encontros.", "B) fugirem da própria identidade.", "C) procurarem lugares inexplorados.", "D) partirem em experiências inusitadas.", "E) desaparecerem da vida em sociedade."],
        resposta_correta: "B"
      },
      {
        id: 11,
        categoria: "História",
        enunciado: "Com a proximidade do final do século XIX, amplificam-se as expectativas...",
        opcoes: ["A) expansão estratégica do imperialismo.", "B) ascensão gradual do mercantilismo.", "C) laicidade da educação.", "D) retomada do absolutismo.", "E) visão republicana de nação."],
        resposta_correta: "E"
      },
      {
        id: 12,
        categoria: "Geografia",
        enunciado: "TEXTO I: Um terremoto de magnitude 5,9 atingiu a cidade de Valparaíso...",
        opcoes: ["A) Planícies costeiras.", "B) Bacias continentais.", "C) Zonas de subducção.", "D) Áreas de denudação.", "E) Vertentes escarpadas."],
        resposta_correta: "C"
      },
      {
        id: 13,
        categoria: "Geografia",
        enunciado: "Moradores usaram as redes sociais para relatar tremores de terra no interior de São Paulo...",
        opcoes: ["A) Planícies costeiras.", "B) Bacias continentais.", "C) Zonas de subducção.", "D) Áreas de denudação.", "E) Vertentes escarpadas."],
        resposta_correta: "C"
      }
    ];

    const result = await collection.insertMany(questoes);
    console.log(`${result.insertedCount} questões inseridas com sucesso!`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
