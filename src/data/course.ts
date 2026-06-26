import type { CourseModule } from '../types/course'

export const courseModules: CourseModule[] = [
  {
    id: 'fondamenta',
    title: 'Modulo 1 · Le fondamenta',
    subtitle: 'Volt, Ampere, Ohm e Watt senza formule inutili',
    status: 'open',
    lessons: [
      {
        id: 'm1-volt-ampere',
        title: 'Volt e Ampere',
        duration: '8 min',
        xp: 30,
        summary: 'Capire la differenza tra spinta elettrica e corrente che scorre.',
        theory: [
          'Il Volt misura la tensione: la spinta che tende a far muovere la corrente.',
          'L’Ampere misura la corrente: quanta carica elettrica scorre davvero nel circuito.',
          'L’analogia utile è l’acqua: Volt = pressione, Ampere = quantità d’acqua che passa.',
          'Una presa può avere 230 V disponibili anche se non sta passando corrente: la corrente passa solo quando chiudi un circuito.'
        ],
        lab: [
          'Prendi il multimetro ANENG AN8008.',
          'Osserva le scale V, Ω e il simbolo del diodo.',
          'Non misurare ancora la 230 V: in questo modulo ci concentriamo sul concetto.'
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'Che cosa misura il Volt?',
            options: ['La quantità di corrente', 'La spinta/tensione elettrica', 'La potenza consumata', 'La temperatura del componente'],
            correctIndex: 1,
            explanation: 'Il Volt misura la tensione: è la “spinta” elettrica disponibile.'
          },
          {
            id: 'q2',
            prompt: 'Che cosa misura l’Ampere?',
            options: ['La corrente che scorre', 'La resistenza', 'La tensione', 'La frequenza'],
            correctIndex: 0,
            explanation: 'L’Ampere misura quanta corrente scorre nel circuito.'
          },
          {
            id: 'q3',
            prompt: 'Una presa può avere 230 V anche se non c’è collegato nulla?',
            options: ['No, senza carico non esiste tensione', 'Sì, la tensione può essere presente anche senza corrente utile che scorre', 'Solo nei trasformatori', 'Solo con corrente continua'],
            correctIndex: 1,
            explanation: 'La tensione può essere presente; la corrente scorre quando c’è un circuito chiuso.'
          }
        ]
      },
      {
        id: 'm1-watt-ohm',
        title: 'Watt e Ohm',
        duration: '10 min',
        xp: 35,
        summary: 'Potenza, resistenza e la formula che useremo continuamente.',
        theory: [
          'Il Watt misura la potenza: quanta energia viene trasferita ogni secondo.',
          'La relazione fondamentale è P = V × I.',
          'L’Ohm misura la resistenza, cioè quanto un componente ostacola il passaggio della corrente.',
          'Una resistenza alta lascia passare meno corrente; una resistenza bassa ne lascia passare di più.'
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'Quale formula lega potenza, tensione e corrente?',
            options: ['P = V × I', 'V = P × I', 'I = V × P', 'R = P × V'],
            correctIndex: 0,
            explanation: 'La potenza si calcola moltiplicando Volt per Ampere.'
          },
          {
            id: 'q2',
            prompt: 'Che cosa misura l’Ohm?',
            options: ['La resistenza', 'La luce emessa', 'La potenza', 'La frequenza'],
            correctIndex: 0,
            explanation: 'L’Ohm misura quanto un componente si oppone al passaggio della corrente.'
          }
        ]
      }
    ]
  },
  {
    id: 'componenti-base',
    title: 'Modulo 2 · Componenti base',
    subtitle: 'Diodi, LED, ponti raddrizzatori e trasformatori',
    status: 'open',
    lessons: [
      {
        id: 'm2-diodi-led',
        title: 'Diodi e LED',
        duration: '12 min',
        xp: 45,
        summary: 'Il diodo come valvola della corrente. Il LED come diodo che emette luce.',
        theory: [
          'Un diodo lascia passare corrente soprattutto in un verso e la blocca nell’altro.',
          'In modalità test diodo, il multimetro invia una piccola corrente e misura la caduta di tensione.',
          'Nel faretto hai misurato circa 0,465 V in un verso e OL nell’altro: è un comportamento da diodo sano.',
          'LED significa Light Emitting Diode: un diodo che emette luce.'
        ],
        lab: [
          'Rivedi mentalmente il test fatto sul COB LED del faretto.',
          '0,465 V in un verso + OL nell’altro significa che il LED non è completamente interrotto né in corto.'
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'Un diodo sano in test diodo normalmente mostra...',
            options: ['0,000 in entrambi i versi', 'Un valore in un verso e OL nell’altro', 'OL sempre', '230 V'],
            correctIndex: 1,
            explanation: 'Il diodo conduce in un verso e blocca nell’altro.'
          },
          {
            id: 'q2',
            prompt: 'LED significa...',
            options: ['Low Energy Driver', 'Light Emitting Diode', 'Linear Electronic Device', 'Lamp Electric Diode'],
            correctIndex: 1,
            explanation: 'Un LED è un diodo a emissione luminosa.'
          }
        ]
      },
      {
        id: 'm2-ponte-trasformatore',
        title: 'Ponte raddrizzatore e trasformatore',
        duration: '15 min',
        xp: 55,
        summary: 'Come AC diventa DC e come l’energia passa attraverso un campo magnetico.',
        theory: [
          'Il ponte raddrizzatore contiene quattro diodi e trasforma corrente alternata in corrente continua pulsante.',
          'Nel driver LED del faretto il componente MB10F è un ponte raddrizzatore.',
          'Il trasformatore non trasferisce corrente tramite contatto diretto: trasferisce energia tramite un campo magnetico variabile.',
          'Nei driver switching il trasformatore può essere molto piccolo perché lavora ad alta frequenza.'
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'A cosa serve un ponte raddrizzatore?',
            options: ['A trasformare AC in DC', 'A raffreddare il LED', 'A cambiare colore alla luce', 'A misurare la resistenza'],
            correctIndex: 0,
            explanation: 'Il ponte raddrizzatore usa quattro diodi per ottenere una corrente continua pulsante.'
          },
          {
            id: 'q2',
            prompt: 'Nel trasformatore, le due bobine sono normalmente...',
            options: ['Collegate direttamente da un filo', 'Elettricamente isolate, accoppiate dal campo magnetico', 'Sempre in corto', 'Fatte di plastica'],
            correctIndex: 1,
            explanation: 'L’energia passa attraverso il campo magnetico variabile, non tramite contatto elettrico diretto.'
          }
        ]
      }
    ]
  },
  {
    id: 'casi-reali',
    title: 'Modulo 3 · Casi reali',
    subtitle: 'Il faretto LED come primo paziente elettronico',
    status: 'open',
    lessons: [
      {
        id: 'm3-driver-led',
        title: 'Diagnosi del driver LED',
        duration: '18 min',
        xp: 70,
        summary: 'Ricostruiamo la diagnosi fatta sul faretto: binario, LED, R1, ponte, diodi, U1.',
        theory: [
          'La diagnosi parte sempre dal percorso dell’energia.',
          'Nel faretto abbiamo escluso: binario, LED COB, R1, ponte MB10F, D1 e D2.',
          'Quando i componenti semplici risultano sani, il sospetto si sposta sulla sezione di controllo: U1 o il circuito di avviamento.',
          'U1 non si testa come un diodo: può essere guasto anche senza essere in corto evidente.'
        ],
        lab: [
          'Annota su un quaderno: cosa abbiamo escluso e con quale misura.',
          'Questo è il primo metodo tecnico: non cambiare pezzi a caso, ma restringere il campo.'
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'Se LED, R1, ponte e diodi sono sani, il sospettato principale diventa...',
            options: ['La lente frontale', 'U1 / circuito di controllo switching', 'Il colore del LED', 'La vite del dissipatore'],
            correctIndex: 1,
            explanation: 'Se il percorso base è integro, il guasto può stare nel circuito che fa partire e controlla lo switching.'
          },
          {
            id: 'q2',
            prompt: 'Perché non abbiamo misurato direttamente la 230 V sul faretto aperto?',
            options: ['Perché non serve mai', 'Perché è una misura pericolosa se fatta senza metodo e protezioni', 'Perché il multimetro non misura tensione', 'Perché il LED si rovina sempre'],
            correctIndex: 1,
            explanation: 'Le misure sulla rete sono pericolose: rischio di scossa o corto.'
          },
          {
            id: 'q3',
            prompt: 'Qual è il principio corretto di diagnosi?',
            options: ['Cambiare subito tutti i componenti', 'Seguire il percorso dell’energia ed escludere un blocco alla volta', 'Misurare casualmente i pin', 'Comprare un faretto nuovo senza osservare nulla'],
            correctIndex: 1,
            explanation: 'La diagnosi tecnica procede per esclusione ragionata.'
          }
        ]
      }
    ]
  }
]

export const allLessons = courseModules.flatMap((module) => module.lessons)
