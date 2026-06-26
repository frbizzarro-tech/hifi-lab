import type { CourseModule } from '../types/course'

export const courseModules: CourseModule[] = [
  {
    "id": "fondamenta",
    "title": "Modulo 1 · Le fondamenta",
    "subtitle": "Volt, Ampere, Ohm e Watt spiegati con esempi reali",
    "status": "open",
    "lessons": [
      {
        "id": "m1-volt-ampere",
        "title": "Volt e Ampere",
        "duration": "14 min",
        "xp": 40,
        "summary": "La differenza tra spinta elettrica e corrente che scorre davvero.",
        "theory": [
          "Quando diciamo che una presa di casa è a 230 V non stiamo dicendo quanta elettricità sta passando. Stiamo dicendo quanta “spinta” è disponibile. La tensione è una differenza di potenziale: due punti del circuito sono a livelli elettrici diversi e, se li colleghi con un percorso adatto, la corrente può iniziare a scorrere.",
          "L’Ampere, invece, descrive quanta corrente scorre. Una batteria può avere pochi Volt ma fornire molta corrente; una scarica elettrostatica può avere migliaia di Volt ma pochissima energia. Per questo Volt e Ampere non sono intercambiabili: uno è la spinta, l’altro è il flusso.",
          "L’analogia dell’acqua aiuta: il Volt è la pressione nel tubo, l’Ampere è la quantità d’acqua che passa ogni secondo. Puoi avere un tubo con tanta pressione ma quasi chiuso, quindi poca acqua; oppure una pressione più bassa ma un tubo grande, quindi molta acqua.",
          "Nel faretto LED che hai aperto, la rete fornisce 230 V alternati. Il driver non passa semplicemente questi 230 V al LED: li converte, li isola e controlla la corrente in modo che il COB LED lavori nel suo intervallo corretto.",
          "Una cosa importante: una tensione può essere presente anche quando non scorre corrente utile. È come un rubinetto chiuso con pressione dietro: la pressione c’è, ma l’acqua non esce finché non apri un percorso."
        ],
        "lab": [
          "Sul multimetro identifica le posizioni V, Ω, continuità e prova diodo.",
          "Ripensa alla misura del LED COB: il multimetro ha applicato una piccola tensione e ha fatto scorrere una piccola corrente solo nel verso giusto.",
          "Non misurare la 230 V per esercizio: per ora l’obiettivo è capire il concetto, non lavorare sulla rete."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Che cosa descrive meglio il Volt?",
            "options": [
              "La quantità di corrente che scorre",
              "La spinta elettrica disponibile tra due punti",
              "La potenza consumata dal carico",
              "La temperatura del componente"
            ],
            "correctIndex": 1,
            "explanation": "Il Volt misura la tensione, cioè la differenza di potenziale: la spinta che può far muovere la corrente."
          },
          {
            "id": "q2",
            "prompt": "Che cosa misura l’Ampere?",
            "options": [
              "La corrente che scorre",
              "La resistenza del circuito",
              "La tensione disponibile",
              "La frequenza della rete"
            ],
            "correctIndex": 0,
            "explanation": "L’Ampere misura il flusso di carica elettrica, cioè quanta corrente passa."
          },
          {
            "id": "q3",
            "prompt": "Una presa può avere 230 V anche se non c’è collegato nulla?",
            "options": [
              "No, senza carico non esiste tensione",
              "Sì, la tensione può essere presente anche se non scorre corrente utile",
              "Solo se il carico è un LED",
              "Solo se c’è un trasformatore"
            ],
            "correctIndex": 1,
            "explanation": "La tensione è disponibile ai capi della presa; la corrente utile scorre solo quando chiudi un circuito con un carico."
          },
          {
            "id": "q4",
            "prompt": "Nel paragone con l’acqua, gli Ampere corrispondono soprattutto a...",
            "options": [
              "La pressione",
              "La quantità d’acqua che passa",
              "Il colore dell’acqua",
              "La lunghezza del tubo"
            ],
            "correctIndex": 1,
            "explanation": "Gli Ampere sono il flusso: quanta corrente passa, come i litri al secondo in un tubo."
          }
        ]
      },
      {
        "id": "m1-watt-ohm",
        "title": "Watt e Ohm",
        "duration": "16 min",
        "xp": 45,
        "summary": "Potenza, resistenza e perché P = V × I è una formula davvero pratica.",
        "theory": [
          "Il Watt misura la potenza: quanta energia viene trasferita o consumata ogni secondo. Una lampadina da 4 W consuma poca energia; un forno da 2000 W ne consuma moltissima. La potenza non è una nuova “sostanza”: è il risultato di tensione e corrente insieme.",
          "La relazione fondamentale è P = V × I. Se un carico lavora a 12 V e assorbe 0,33 A, la potenza è circa 4 W. Questo è il ragionamento che abbiamo fatto sul faretto: un LED da 4 W richiede un driver dimensionato per fornire una certa corrente al COB.",
          "L’Ohm misura la resistenza. Una resistenza alta rende difficile il passaggio della corrente; una resistenza bassa lo rende facile. Se la tensione resta la stessa, abbassare la resistenza fa aumentare la corrente.",
          "La legge di Ohm è V = R × I. È una delle formule più utili in elettronica. Non va imparata come una poesia: va usata per ragionare. Se sai due grandezze, ricavi la terza.",
          "Nel driver LED, componenti come R1 possono avere anche funzione di protezione. Una resistenza può limitare corrente, creare una caduta di tensione, fare da sensore o comportarsi come fusibile in caso di guasto."
        ],
        "lab": [
          "Prendi una resistenza qualsiasi se ne hai una, oppure osserva R1 nella foto della scheda del faretto.",
          "Chiediti: questa resistenza sta limitando corrente, misurando qualcosa o proteggendo il circuito?",
          "Rifai mentalmente il conto: 4 W a 12 V significano circa 0,33 A."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Quale formula lega potenza, tensione e corrente?",
            "options": [
              "P = V × I",
              "V = P × I",
              "I = V × P",
              "R = P × V"
            ],
            "correctIndex": 0,
            "explanation": "La potenza si calcola moltiplicando tensione per corrente: P = V × I."
          },
          {
            "id": "q2",
            "prompt": "Se un dispositivo usa 10 V e 2 A, quanta potenza assorbe idealmente?",
            "options": [
              "5 W",
              "12 W",
              "20 W",
              "200 W"
            ],
            "correctIndex": 2,
            "explanation": "P = V × I, quindi 10 × 2 = 20 W."
          },
          {
            "id": "q3",
            "prompt": "Che cosa misura l’Ohm?",
            "options": [
              "La resistenza al passaggio della corrente",
              "La quantità di luce",
              "La potenza",
              "La capacità di un condensatore"
            ],
            "correctIndex": 0,
            "explanation": "L’Ohm misura la resistenza: quanto un componente ostacola il passaggio della corrente."
          },
          {
            "id": "q4",
            "prompt": "A parità di tensione, se la resistenza diminuisce, la corrente...",
            "options": [
              "Diminuisce",
              "Aumenta",
              "Resta sempre zero",
              "Diventa alternata"
            ],
            "correctIndex": 1,
            "explanation": "Secondo la legge di Ohm, I = V/R: se R diminuisce e V resta uguale, I aumenta."
          }
        ]
      },
      {
        "id": "m1-ac-dc",
        "title": "Corrente continua e alternata",
        "duration": "14 min",
        "xp": 40,
        "summary": "Perché la presa è AC, ma molti circuiti interni lavorano in DC.",
        "theory": [
          "La corrente continua, o DC, ha un verso stabile. Una batteria ha un polo positivo e un polo negativo: se colleghi un LED nel verso corretto si accende, se lo inverti si spegne.",
          "La corrente alternata, o AC, cambia verso periodicamente. La rete domestica europea è a 50 Hz: significa che il ciclo si ripete 50 volte al secondo. Non è una corrente che “va e viene” a caso: è una forma d’onda ordinata e periodica.",
          "Molte schede elettroniche partono dalla AC di rete e la trasformano in DC. Prima spesso trovi un ponte raddrizzatore, poi un condensatore che livella, poi circuiti di regolazione o conversione.",
          "Nel tuo faretto, il ponte MB10F è proprio il punto in cui la corrente alternata viene raddrizzata. Da lì in poi il driver lavora su una tensione continua alta, che poi viene convertita tramite lo switching.",
          "Capire AC e DC è fondamentale per la sicurezza: la 230 V AC di rete è pericolosa, mentre molte sezioni secondarie isolate di un alimentatore lavorano a tensioni molto più basse."
        ],
        "lab": [
          "Nel multimetro individua i simboli V~ e V⎓.",
          "V~ serve per tensioni alternate; V⎓ serve per tensioni continue.",
          "Non misurare la rete: per ora limitati a riconoscere i simboli."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "La corrente continua è caratterizzata soprattutto da...",
            "options": [
              "Un verso stabile",
              "Un cambio di verso continuo",
              "Assenza di tensione",
              "Solo frequenze audio"
            ],
            "correctIndex": 0,
            "explanation": "La DC ha polarità stabile: positivo e negativo restano tali."
          },
          {
            "id": "q2",
            "prompt": "La rete domestica europea è tipicamente...",
            "options": [
              "DC a 5 V",
              "AC a 230 V e 50 Hz",
              "AC a 12 V",
              "DC a 230 V"
            ],
            "correctIndex": 1,
            "explanation": "La rete domestica europea è corrente alternata intorno a 230 V e 50 Hz."
          },
          {
            "id": "q3",
            "prompt": "Perché in molti apparecchi troviamo un ponte raddrizzatore?",
            "options": [
              "Per trasformare AC in DC pulsante",
              "Per creare suono",
              "Per abbassare meccanicamente la tensione",
              "Per misurare temperatura"
            ],
            "correctIndex": 0,
            "explanation": "Il ponte raddrizzatore converte l’alternata in una continua pulsante."
          }
        ]
      },
      {
        "id": "m1-serie-parallelo",
        "title": "Serie e parallelo",
        "duration": "13 min",
        "xp": 35,
        "summary": "Come cambia il comportamento dei componenti a seconda di come li colleghi.",
        "theory": [
          "Due componenti sono in serie quando la corrente deve attraversare prima uno e poi l’altro. In serie, la corrente è la stessa in tutti i componenti, ma la tensione si divide.",
          "Due componenti sono in parallelo quando sono collegati agli stessi due nodi. In parallelo, la tensione è la stessa ai capi dei componenti, ma la corrente si divide tra i rami.",
          "Questa distinzione è fondamentale per capire i LED COB. Un COB spesso contiene più giunzioni LED organizzate in serie/parallelo per ottenere una certa tensione di lavoro e una certa corrente.",
          "Nel test diodo, il multimetro può riuscire a polarizzare solo una parte del COB o una rete interna. Per questo il test ci dice che non è completamente interrotto o in corto, ma non garantisce al 100% il comportamento sotto carico.",
          "Serie e parallelo sono anche alla base degli altoparlanti: collegare diffusori in parallelo abbassa l’impedenza totale e può mettere sotto stress un amplificatore."
        ],
        "lab": [
          "Disegna due resistenze in serie e poi due in parallelo.",
          "Scrivi sotto: in serie stessa corrente; in parallelo stessa tensione.",
          "Pensa a un COB LED: potrebbe contenere molte giunzioni, non un solo LED semplice."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "In un collegamento in serie, la grandezza uguale per tutti i componenti è...",
            "options": [
              "La corrente",
              "La tensione",
              "La potenza",
              "La temperatura"
            ],
            "correctIndex": 0,
            "explanation": "In serie la stessa corrente attraversa tutti i componenti."
          },
          {
            "id": "q2",
            "prompt": "In un collegamento in parallelo, la grandezza uguale sui rami è...",
            "options": [
              "La tensione",
              "La corrente",
              "La resistenza",
              "Il colore"
            ],
            "correctIndex": 0,
            "explanation": "In parallelo i componenti sono collegati agli stessi due nodi, quindi hanno la stessa tensione ai capi."
          },
          {
            "id": "q3",
            "prompt": "Perché il test diodo su un COB LED non è una garanzia assoluta sotto carico?",
            "options": [
              "Perché il COB può contenere più giunzioni e il multimetro usa poca corrente",
              "Perché il multimetro misura solo la temperatura",
              "Perché i LED non sono diodi",
              "Perché il test diodo funziona solo sulla 230 V"
            ],
            "correctIndex": 0,
            "explanation": "Il test a bassa corrente esclude molti guasti, ma non replica la corrente reale del driver."
          }
        ]
      }
    ]
  },
  {
    "id": "multimetro",
    "title": "Modulo 2 · Multimetro",
    "subtitle": "Usarlo bene prima di saldare o alimentare una scheda",
    "status": "open",
    "lessons": [
      {
        "id": "m2-multimetro-sicurezza",
        "title": "Prima regola: non misurare a caso",
        "duration": "12 min",
        "xp": 35,
        "summary": "Il multimetro è potente, ma può creare corti se usato nel modo sbagliato.",
        "theory": [
          "Il multimetro non è un oggetto passivo in tutte le modalità. In tensione si mette in parallelo e ha alta impedenza; in corrente si mette in serie e ha una resistenza molto bassa; in continuità e Ohm inietta una piccola corrente propria.",
          "Questo significa che selezionare la funzione sbagliata può essere pericoloso. Se provi a misurare la 230 V con il puntale nella presa A/mA e la manopola su corrente, puoi creare un cortocircuito.",
          "Per questo prima di ogni misura si fa una mini-checklist: funzione corretta, puntali nelle boccole corrette, portata adatta, circuito alimentato o spento a seconda della misura.",
          "Nel lavoro sul faretto abbiamo scelto quasi sempre misure a freddo: continuità, prova diodo, resistenza. È il modo migliore per imparare senza esporsi subito alla rete.",
          "Quando si lavora su alimentatori switching, anche dopo aver tolto la spina possono rimanere condensatori carichi. La sicurezza non è paura: è metodo."
        ],
        "lab": [
          "Guarda le boccole del tuo ANENG: COM, VΩHz, A/mA.",
          "Ripeti a voce: tensione in parallelo; corrente in serie.",
          "Prima di ogni misura, controlla sempre dov’è inserito il puntale rosso."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Per misurare una tensione, il multimetro si collega di solito...",
            "options": [
              "In parallelo al punto da misurare",
              "Sempre in serie",
              "Al posto del fusibile",
              "Solo sulla terra"
            ],
            "correctIndex": 0,
            "explanation": "La tensione si misura tra due punti, quindi il multimetro va in parallelo."
          },
          {
            "id": "q2",
            "prompt": "Perché misurare corrente è più delicato?",
            "options": [
              "Perché il multimetro va inserito in serie e può creare corti se usato male",
              "Perché la corrente non esiste",
              "Perché serve sempre la 230 V",
              "Perché il display si rovina sempre"
            ],
            "correctIndex": 0,
            "explanation": "In modalità corrente il multimetro offre un percorso a bassa resistenza: se usato male può fare danni."
          },
          {
            "id": "q3",
            "prompt": "Qual è una buona checklist prima di misurare?",
            "options": [
              "Funzione, boccole, portata, circuito alimentato/spento",
              "Solo guardare il colore dei fili",
              "Mettere sempre il puntale rosso su A",
              "Toccare i componenti con le dita"
            ],
            "correctIndex": 0,
            "explanation": "Una misura sicura inizia dalla configurazione corretta dello strumento."
          }
        ]
      },
      {
        "id": "m2-continuita-ohm",
        "title": "Continuità e resistenza",
        "duration": "12 min",
        "xp": 35,
        "summary": "Quando il beep è utile e quando può ingannare.",
        "theory": [
          "La continuità è una prova rapida: il multimetro emette un beep se vede una resistenza molto bassa. È utile per cavi, fusibili, piste interrotte e interruttori.",
          "Ma il beep non significa sempre “tutto sano”. Su una scheda, due punti possono suonare perché sono collegati tramite un avvolgimento, una resistenza bassa o un circuito interno.",
          "Quando hai trovato continuità tra i pin 3 e 4 di U1, non abbiamo concluso automaticamente che U1 fosse guasto. In una scheda reale bisogna interpretare la misura nel contesto.",
          "La modalità Ohm misura una resistenza numerica. È più informativa del beep, ma anche qui i componenti collegati in parallelo possono falsare la lettura.",
          "La regola pratica: continuità per trovare interruzioni evidenti; Ohm per misure più ragionate; schema o piste per interpretare."
        ],
        "lab": [
          "Tocca insieme i puntali in continuità: deve suonare.",
          "Misura R1 come hai fatto sul driver LED: beep = non interrotta.",
          "Ricorda: su una scheda montata, il valore può essere influenzato da altri componenti."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Il beep di continuità significa sempre che il componente è sano?",
            "options": [
              "No, indica solo una resistenza molto bassa tra i puntali",
              "Sì, sempre",
              "Solo sui LED",
              "Solo sui trasformatori"
            ],
            "correctIndex": 0,
            "explanation": "Il beep indica continuità elettrica, ma va interpretato nel circuito."
          },
          {
            "id": "q2",
            "prompt": "Per cosa è molto utile la continuità?",
            "options": [
              "Cavi, fusibili, piste e interruttori",
              "Misurare potenza audio",
              "Misurare temperatura",
              "Cambiare frequenza"
            ],
            "correctIndex": 0,
            "explanation": "È perfetta per verificare se un collegamento è interrotto o no."
          },
          {
            "id": "q3",
            "prompt": "Perché una misura Ohm su scheda può essere diversa dal valore del componente?",
            "options": [
              "Perché altri componenti possono essere collegati in parallelo",
              "Perché gli Ohm non esistono",
              "Perché il multimetro misura solo luce",
              "Perché serve un oscilloscopio per tutto"
            ],
            "correctIndex": 0,
            "explanation": "Se il componente è montato, il multimetro può vedere anche altri percorsi."
          }
        ]
      },
      {
        "id": "m2-prova-diodo",
        "title": "Prova diodo",
        "duration": "15 min",
        "xp": 45,
        "summary": "La funzione che hai usato per LED, MB10F, D1 e D2.",
        "theory": [
          "In prova diodo il multimetro non misura una resistenza: invia una piccola corrente e mostra la caduta di tensione del componente in conduzione.",
          "Un diodo al silicio sano spesso mostra circa 0,5-0,8 V in un verso e OL nell’altro. Un diodo Schottky può mostrare valori più bassi. Un LED può avere valori diversi a seconda della tecnologia e della struttura interna.",
          "Nel ponte MB10F hai misurato quattro valori intorno a 0,58-0,61 V. Questo è coerente con quattro giunzioni sane dentro il ponte raddrizzatore.",
          "Se un diodo dà 0,000 in entrambi i versi è sospetto corto. Se dà OL in entrambi i versi, può essere interrotto o non raggiunto bene dai puntali.",
          "La prova diodo è potentissima, ma non è onnipotente: alcuni componenti collegati nel circuito possono alterare la lettura. Quando i risultati sono strani, si ripete la misura invertendo i puntali e confrontando con lo schema o le piste."
        ],
        "lab": [
          "Rivedi i tuoi risultati: LED 0,465/OL; MB10F circa 0,58; D1 0,543/OL; D2 0,465/OL.",
          "Scrivi accanto: comportamento compatibile con diodo sano.",
          "Memorizza la logica: valore in un verso, OL nell’altro."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "In prova diodo, un diodo sano di solito mostra...",
            "options": [
              "Un valore in un verso e OL nell’altro",
              "OL in entrambi i versi sempre",
              "0,000 in entrambi i versi sempre",
              "230 V"
            ],
            "correctIndex": 0,
            "explanation": "Il diodo conduce in un verso e blocca nell’altro."
          },
          {
            "id": "q2",
            "prompt": "Che cosa indica 0,000 o quasi 0 in entrambi i versi su un diodo?",
            "options": [
              "Possibile corto",
              "Componente perfetto",
              "Trasformatore funzionante",
              "Tensione alternata"
            ],
            "correctIndex": 0,
            "explanation": "Un valore quasi zero in entrambi i versi può indicare un corto."
          },
          {
            "id": "q3",
            "prompt": "Che cosa stava misurando il multimetro sul MB10F?",
            "options": [
              "Le quattro giunzioni interne del ponte raddrizzatore",
              "La potenza del LED",
              "La temperatura del trasformatore",
              "La frequenza della rete"
            ],
            "correctIndex": 0,
            "explanation": "Il ponte è formato da quattro diodi; la prova controlla le giunzioni."
          }
        ]
      },
      {
        "id": "m2-corrente",
        "title": "Misurare la corrente",
        "duration": "13 min",
        "xp": 40,
        "summary": "Perché la corrente non si misura come la tensione.",
        "theory": [
          "Misurare la corrente significa far passare la corrente attraverso il multimetro. Per questo il multimetro deve diventare parte del circuito, cioè va messo in serie.",
          "Se vuoi sapere quanta corrente assorbe un LED, devi interrompere il circuito e inserire il multimetro nel percorso. Non basta appoggiare i puntali ai capi del LED come faresti con la tensione.",
          "Questa è la ragione per cui misurare corrente è più rischioso. Se lasci il puntale rosso nella boccola A/mA e poi misuri una tensione come se fossi in modalità volt, puoi cortocircuitare il circuito.",
          "In elettronica pratica spesso si evita la misura diretta della corrente e si misura invece la tensione ai capi di una resistenza nota. Poi si usa I = V/R. È un metodo più sicuro e molto usato nei circuiti di sensing.",
          "Nei driver LED la corrente è il parametro fondamentale. Il driver non cerca semplicemente di dare una tensione precisa: cerca di far scorrere una corrente controllata nel LED."
        ],
        "lab": [
          "Controlla sul tuo ANENG qual è la boccola per A/mA.",
          "Ripeti: dopo una misura di corrente, rimetto subito il puntale rosso su VΩ.",
          "Non misurare corrente sulla rete o sul driver alimentato: questa lezione è concettuale."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Per misurare corrente, il multimetro va collegato...",
            "options": [
              "In serie al circuito",
              "Sempre in parallelo",
              "Solo al telaio",
              "Solo al neutro"
            ],
            "correctIndex": 0,
            "explanation": "La corrente deve attraversare il multimetro, quindi lo strumento va inserito in serie."
          },
          {
            "id": "q2",
            "prompt": "Perché è pericoloso lasciare il puntale rosso nella boccola A/mA?",
            "options": [
              "Perché potresti creare un corto misurando una tensione",
              "Perché il display si spegne",
              "Perché misura solo Ohm",
              "Perché la corrente diventa AC"
            ],
            "correctIndex": 0,
            "explanation": "La modalità corrente offre un percorso a bassa resistenza: se la usi come voltmetro puoi fare un corto."
          },
          {
            "id": "q3",
            "prompt": "Un modo indiretto per ricavare corrente è...",
            "options": [
              "Misurare la tensione su una resistenza nota e usare I = V/R",
              "Misurare il colore del condensatore",
              "Toccare il componente",
              "Guardare il numero di viti"
            ],
            "correctIndex": 0,
            "explanation": "È un metodo classico e spesso più sicuro."
          }
        ]
      }
    ]
  },
  {
    "id": "componenti-passivi",
    "title": "Modulo 3 · Componenti passivi",
    "subtitle": "Resistenze, condensatori, induttori, trasformatori e relè",
    "status": "open",
    "lessons": [
      {
        "id": "m3-resistenze",
        "title": "Resistenze",
        "duration": "14 min",
        "xp": 40,
        "summary": "Non sono solo “ostacoli”: fanno da limitatori, sensori e protezioni.",
        "theory": [
          "La resistenza è uno dei componenti più semplici e più presenti. Il suo compito base è opporsi al passaggio della corrente, ma in un circuito reale può avere molti ruoli diversi.",
          "Una resistenza può limitare la corrente in un LED, creare una caduta di tensione, dividere una tensione in un partitore, scaricare un condensatore o misurare indirettamente una corrente.",
          "Nel driver del faretto, R1 era vicino all’ingresso. In molti alimentatori una resistenza in quella posizione può essere fusibile o limitare picchi iniziali. Il fatto che suonasse in continuità ci ha detto che non era interrotta.",
          "Le resistenze SMD hanno spesso codici numerici. 472 significa 47 seguito da due zeri, quindi 4700 Ω. 102 significa 1000 Ω. Non sempre è così per codici speciali, ma è una buona base.",
          "Una resistenza bruciata può essere visibile, ma non sempre. Per questo la misura a freddo è utile, tenendo conto che su scheda altri componenti possono influenzare la lettura."
        ],
        "lab": [
          "Osserva la foto della scheda del faretto: cerca R1, R2, R4, R6.",
          "Leggi i codici SMD che riesci a vedere.",
          "Misura una resistenza solo a circuito spento."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Una resistenza può servire a...",
            "options": [
              "Limitare corrente o creare cadute di tensione",
              "Emettere luce come un LED",
              "Memorizzare firmware",
              "Fare da antenna Wi-Fi"
            ],
            "correctIndex": 0,
            "explanation": "Le resistenze sono usate per controllare correnti e tensioni."
          },
          {
            "id": "q2",
            "prompt": "Il codice SMD 472 indica normalmente...",
            "options": [
              "4700 Ω",
              "47 Ω",
              "472000 Ω",
              "4,72 Ω"
            ],
            "correctIndex": 0,
            "explanation": "47 seguito da due zeri = 4700 Ω."
          },
          {
            "id": "q3",
            "prompt": "R1 nel driver del faretto era utile da controllare perché...",
            "options": [
              "Era all’ingresso e poteva essere una resistenza di protezione/fusibile",
              "Era il LED principale",
              "Era il trasformatore",
              "Era il selettore colore"
            ],
            "correctIndex": 0,
            "explanation": "Un componente vicino all’ingresso può interrompere l’alimentazione se si apre."
          }
        ]
      },
      {
        "id": "m3-condensatori",
        "title": "Condensatori",
        "duration": "17 min",
        "xp": 45,
        "summary": "Piccoli serbatoi di energia che filtrano, accoppiano e temporizzano.",
        "theory": [
          "Un condensatore immagazzina energia in un campo elettrico. Puoi immaginarlo come un piccolo serbatoio: si carica, si scarica e si oppone ai cambiamenti bruschi di tensione.",
          "Negli alimentatori, i condensatori servono spesso a livellare una tensione raddrizzata. Dopo un ponte raddrizzatore la tensione è pulsante; un condensatore la rende più stabile.",
          "I condensatori elettrolitici sono polarizzati: hanno positivo e negativo. Montarli al contrario può danneggiarli o farli esplodere. Per questo nelle riparazioni bisogna fotografare sempre l’orientamento prima di dissaldare.",
          "Un condensatore guasto non è sempre gonfio. Può perdere capacità o aumentare ESR senza mostrare segni esterni. Nei vecchi amplificatori hi-fi, gli elettrolitici sono tra i componenti che invecchiano di più.",
          "Nel faretto, il condensatore arancione non era visibilmente gonfio. Questo non lo assolve al 100%, ma rende meno probabile un guasto evidente. Un guasto ai condensatori spesso causa lampeggi, instabilità o avvio difficoltoso."
        ],
        "lab": [
          "Osserva il condensatore elettrolitico arancione del driver LED.",
          "Cerca la banda che indica il negativo.",
          "Regola pratica: prima di sostituire un condensatore, foto chiara e segno dell’orientamento."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Un condensatore immagazzina energia soprattutto in...",
            "options": [
              "Un campo elettrico",
              "Un campo gravitazionale",
              "Una bobina di rame",
              "Una vite"
            ],
            "correctIndex": 0,
            "explanation": "Il condensatore immagazzina energia tra due armature separate da un dielettrico."
          },
          {
            "id": "q2",
            "prompt": "Un condensatore elettrolitico è normalmente...",
            "options": [
              "Polarizzato",
              "Sempre non polarizzato",
              "Un diodo",
              "Un trasformatore"
            ],
            "correctIndex": 0,
            "explanation": "Gli elettrolitici hanno positivo e negativo e vanno montati nel verso corretto."
          },
          {
            "id": "q3",
            "prompt": "Un condensatore guasto è sempre gonfio?",
            "options": [
              "No",
              "Sì",
              "Solo se è SMD",
              "Solo se lavora a 5 V"
            ],
            "correctIndex": 0,
            "explanation": "Può essere guasto anche senza segni visibili, per perdita di capacità o aumento ESR."
          }
        ]
      },
      {
        "id": "m3-induttori-trasformatori",
        "title": "Induttori e trasformatori",
        "duration": "18 min",
        "xp": 50,
        "summary": "Perché un ammasso di rame può trasferire energia senza contatto elettrico.",
        "theory": [
          "Un induttore è una bobina: filo di rame avvolto. Quando la corrente cambia, la bobina genera un campo magnetico che si oppone al cambiamento. Per questo gli induttori sono molto usati nei filtri e negli alimentatori switching.",
          "Un trasformatore ha almeno due avvolgimenti accoppiati dallo stesso nucleo magnetico. Il primario crea un campo magnetico variabile; il secondario riceve energia da quel campo e genera una tensione.",
          "La corrente non passa direttamente dal primario al secondario. In un trasformatore isolato, i due lati sono elettricamente separati. Passa energia tramite il campo magnetico, non tramite un filo comune.",
          "Nel tuo Yamaha CA-810 il trasformatore è grande perché lavora a 50 Hz. Nel faretto, il trasformatore giallo è minuscolo perché U1 lo pilota ad alta frequenza, decine di migliaia di volte al secondo.",
          "La frequenza cambia tutto: a frequenza alta serve meno ferro e meno rame per trasferire la stessa energia. È uno dei motivi per cui gli alimentatori switching moderni sono piccoli e leggeri."
        ],
        "lab": [
          "Confronta mentalmente il trasformatore grande del Yamaha con quello giallo del faretto.",
          "Scrivi: 50 Hz = grande; alta frequenza = piccolo.",
          "Ricorda: un trasformatore funziona solo con campo magnetico variabile, non con DC pura stabile."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Nel trasformatore, l’energia passa dal primario al secondario tramite...",
            "options": [
              "Campo magnetico variabile",
              "Contatto diretto tra fili",
              "Una resistenza",
              "La plastica del contenitore"
            ],
            "correctIndex": 0,
            "explanation": "Gli avvolgimenti sono accoppiati magneticamente, non necessariamente elettricamente."
          },
          {
            "id": "q2",
            "prompt": "Perché il trasformatore del faretto è molto più piccolo di quello dello Yamaha?",
            "options": [
              "Perché lavora ad alta frequenza",
              "Perché non trasferisce energia",
              "Perché è solo decorativo",
              "Perché usa corrente statica"
            ],
            "correctIndex": 0,
            "explanation": "A frequenze alte il trasformatore può essere molto più compatto."
          },
          {
            "id": "q3",
            "prompt": "Un trasformatore ideale con 220 W in ingresso e 12 V in uscita dovrebbe poter fornire circa...",
            "options": [
              "18,3 A",
              "1 A",
              "0,05 A",
              "220 A"
            ],
            "correctIndex": 0,
            "explanation": "P = V × I, quindi I = 220/12 ≈ 18,3 A, trascurando le perdite."
          }
        ]
      },
      {
        "id": "m3-rele",
        "title": "Relè",
        "duration": "12 min",
        "xp": 35,
        "summary": "Interruttori comandati elettricamente, molto comuni negli apparecchi hi-fi.",
        "theory": [
          "Un relè è un interruttore comandato da una bobina. Quando la bobina viene alimentata, genera un campo magnetico che sposta un contatto meccanico.",
          "Nei vecchi amplificatori hi-fi, i relè sono spesso usati per collegare gli altoparlanti solo dopo qualche secondo dall’accensione. Questo evita colpi o transitori sui diffusori.",
          "I contatti del relè possono ossidarsi o usurarsi. Un sintomo tipico è un canale che va e viene, oppure audio distorto che migliora alzando il volume.",
          "Un relè ha due parti: la bobina di comando e i contatti di potenza/segnale. Si possono misurare separatamente: la bobina ha una certa resistenza, i contatti dovrebbero chiudere bene.",
          "Il relè è un buon esempio di componente elettromeccanico: non è solo elettronica pura, ma unisce campo magnetico e movimento meccanico."
        ],
        "lab": [
          "Quando apriremo il Yamaha, cercheremo il relè altoparlanti.",
          "Ascolta all’accensione: molti amplificatori fanno un click dopo qualche secondo.",
          "Quel click spesso è proprio il relè che collega le casse."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Un relè è essenzialmente...",
            "options": [
              "Un interruttore comandato elettricamente",
              "Un condensatore polarizzato",
              "Un LED blu",
              "Un tipo di vite"
            ],
            "correctIndex": 0,
            "explanation": "La bobina comanda meccanicamente dei contatti."
          },
          {
            "id": "q2",
            "prompt": "Negli amplificatori hi-fi, un relè può servire a...",
            "options": [
              "Collegare gli altoparlanti dopo un ritardo",
              "Cambiare il colore del display",
              "Raddrizzare la rete",
              "Misurare la temperatura ambiente"
            ],
            "correctIndex": 0,
            "explanation": "Il relè altoparlanti protegge i diffusori da transitori all’accensione."
          },
          {
            "id": "q3",
            "prompt": "Un problema tipico dei relè vecchi è...",
            "options": [
              "Contatti ossidati o usurati",
              "Aumento della capacità",
              "Emissione di luce",
              "Perdita del nucleo di silicio"
            ],
            "correctIndex": 0,
            "explanation": "I contatti meccanici possono ossidarsi e causare audio intermittente."
          }
        ]
      }
    ]
  },
  {
    "id": "semiconduttori",
    "title": "Modulo 4 · Semiconduttori",
    "subtitle": "Diodi, LED, Zener, transistor e MOSFET",
    "status": "open",
    "lessons": [
      {
        "id": "m4-diodo-valvola",
        "title": "Il diodo come valvola",
        "duration": "15 min",
        "xp": 45,
        "summary": "Capire davvero perché conduce in un verso e blocca nell’altro.",
        "theory": [
          "Un diodo è fatto con una giunzione PN: una parte di semiconduttore di tipo P e una di tipo N. Questa giunzione crea una barriera interna che rende facile il passaggio in un verso e difficile nell’altro.",
          "Quando polarizzi il diodo direttamente, cioè nel verso giusto, la barriera si riduce e la corrente può passare. Il multimetro mostra la caduta di tensione necessaria per farlo condurre.",
          "Quando lo polarizzi inversamente, la barriera aumenta e la corrente viene quasi bloccata. Il multimetro mostra OL perché la piccola tensione del test non basta a far passare corrente significativa.",
          "Questo comportamento è alla base del raddrizzamento, della protezione contro inversioni di polarità, dei LED, degli Zener e di molti circuiti di alimentazione.",
          "Il diodo non è perfetto: ha una caduta di tensione, una corrente massima, una tensione inversa massima e una velocità. Per questo esistono diodi diversi per usi diversi."
        ],
        "lab": [
          "Disegna il simbolo del diodo: triangolo/freccia verso una barra, o più correttamente anodo-cadodo.",
          "Scrivi: conduce da anodo a catodo quando è polarizzato direttamente.",
          "Ripeti la logica: valore in un verso, OL nell’altro."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "La giunzione PN è alla base di quale componente?",
            "options": [
              "Diodo",
              "Trasformatore",
              "Relè meccanico",
              "Fusibile in vetro"
            ],
            "correctIndex": 0,
            "explanation": "Il diodo è una giunzione PN."
          },
          {
            "id": "q2",
            "prompt": "In polarizzazione diretta, un diodo...",
            "options": [
              "Conduce",
              "Blocca sempre",
              "Diventa una bobina",
              "Perde il suo simbolo"
            ],
            "correctIndex": 0,
            "explanation": "Nel verso diretto la barriera si riduce e può passare corrente."
          },
          {
            "id": "q3",
            "prompt": "In polarizzazione inversa, il multimetro spesso mostra...",
            "options": [
              "OL",
              "Sempre 0,000",
              "La potenza in Watt",
              "La temperatura"
            ],
            "correctIndex": 0,
            "explanation": "OL indica che non scorre corrente sufficiente nel verso inverso."
          }
        ]
      },
      {
        "id": "m4-led",
        "title": "LED e COB LED",
        "duration": "16 min",
        "xp": 45,
        "summary": "Perché un LED non va alimentato come una lampadina normale.",
        "theory": [
          "Un LED è un diodo che emette luce quando viene attraversato da corrente nel verso giusto. Ma non è una lampadina a incandescenza: non puoi semplicemente collegarlo a una tensione qualunque.",
          "Il parametro più importante del LED è la corrente. Se la corrente è troppo bassa fa poca luce; se è troppo alta si scalda, degrada o si brucia. Per questo si usano resistenze o driver a corrente costante.",
          "Un COB LED, come quello del faretto, contiene più giunzioni LED montate su una base comune. Visto da fuori sembra un unico disco giallo, ma internamente può avere molte celle in serie e parallelo.",
          "Il COB è montato su un dissipatore perché una parte dell’energia diventa calore. Se il calore non viene smaltito, la vita del LED si riduce drasticamente.",
          "Il test diodo su un COB è utile, ma non sempre lo illumina. Il multimetro eroga poca corrente e poca tensione rispetto a un driver reale."
        ],
        "lab": [
          "Osserva il COB del faretto: LED al centro, pasta termica, dissipatore intorno.",
          "Scrivi: LED = corrente controllata; calore = nemico principale.",
          "Non alimentare mai un COB direttamente con un alimentatore casuale senza limitazione di corrente."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Qual è il parametro più critico per un LED?",
            "options": [
              "La corrente",
              "Il colore della plastica",
              "Il peso del cavo",
              "La marca del multimetro"
            ],
            "correctIndex": 0,
            "explanation": "Un LED deve essere pilotato con corrente controllata."
          },
          {
            "id": "q2",
            "prompt": "Perché il COB LED è montato su un dissipatore?",
            "options": [
              "Per smaltire calore",
              "Per aumentare la frequenza",
              "Per misurare Ohm",
              "Per fare da interruttore"
            ],
            "correctIndex": 0,
            "explanation": "Il LED produce calore e deve trasferirlo al corpo metallico."
          },
          {
            "id": "q3",
            "prompt": "Un driver LED a corrente costante serve a...",
            "options": [
              "Controllare la corrente nel LED",
              "Trasformare il LED in relè",
              "Cambiare la forma della lente",
              "Misurare la rete"
            ],
            "correctIndex": 0,
            "explanation": "Il driver mantiene la corrente nel range corretto per il LED."
          }
        ]
      },
      {
        "id": "m4-zener",
        "title": "Diodo Zener",
        "duration": "12 min",
        "xp": 35,
        "summary": "Un diodo che lavora apposta in inversa per stabilizzare tensioni.",
        "theory": [
          "Il diodo Zener è un diodo speciale progettato per lavorare in polarizzazione inversa oltre una certa tensione. Invece di rompersi, entra in conduzione controllata.",
          "Se uno Zener è da 5,1 V, tenderà a mantenere circa 5,1 V ai suoi capi quando lavora nel suo range corretto. Per questo è utile come riferimento o protezione.",
          "Gli Zener sono spesso usati per limitare tensioni, proteggere ingressi o fornire riferimenti semplici in alimentatori e circuiti di controllo.",
          "La differenza concettuale è importante: un diodo normale in inversa dovrebbe bloccare; uno Zener è scelto proprio per condurre in inversa a una tensione precisa.",
          "Nei circuiti reali lo Zener ha bisogno di una resistenza o di un circuito che limiti la corrente, altrimenti può bruciarsi."
        ],
        "lab": [
          "Quando vedrai un piccolo diodo vicino all’alimentazione di un integrato, chiediti se può essere uno Zener.",
          "Ricorda: Zener = tensione inversa controllata.",
          "Non è da testare solo come un diodo normale: serve sapere il valore nominale."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Uno Zener è progettato per...",
            "options": [
              "Condurre in inversa a una tensione definita",
              "Essere sempre aperto",
              "Emettere sempre luce",
              "Fare da trasformatore"
            ],
            "correctIndex": 0,
            "explanation": "Lo Zener sfrutta la conduzione inversa controllata."
          },
          {
            "id": "q2",
            "prompt": "Uno Zener da 5,1 V tende a...",
            "options": [
              "Stabilizzare circa 5,1 V",
              "Creare 230 V",
              "Misurare corrente",
              "Diventare un relè"
            ],
            "correctIndex": 0,
            "explanation": "Nel suo range, mantiene circa la tensione Zener nominale."
          },
          {
            "id": "q3",
            "prompt": "Perché uno Zener ha bisogno di limitazione di corrente?",
            "options": [
              "Per non bruciarsi",
              "Per diventare una bobina",
              "Per cambiare colore",
              "Per funzionare solo in AC"
            ],
            "correctIndex": 0,
            "explanation": "Come tutti i diodi, se la corrente è troppo alta può danneggiarsi."
          }
        ]
      },
      {
        "id": "m4-transistor-mosfet",
        "title": "Transistor e MOSFET",
        "duration": "18 min",
        "xp": 55,
        "summary": "Interruttori e rubinetti controllati elettricamente.",
        "theory": [
          "Un transistor è un componente che permette a un piccolo segnale di controllare una corrente più grande. Questa idea è alla base sia degli amplificatori sia degli alimentatori switching.",
          "Nei transistor bipolari si parla di base, collettore ed emettitore. Una piccola corrente di base controlla una corrente maggiore tra collettore ed emettitore.",
          "Nei MOSFET si parla di gate, drain e source. Il gate è controllato da tensione e può accendere o spegnere il passaggio tra drain e source.",
          "Nel tuo Yamaha, i transistor servono ad amplificare il segnale audio. Nel driver LED, un transistor o MOSFET interno/esterno commuta energia nel trasformatore ad alta frequenza.",
          "Un transistor può guastarsi in corto, aperto o in modo più subdolo. Il multimetro può trovare corti evidenti, ma per capire se sta amplificando o commutando spesso servono misure dinamiche."
        ],
        "lab": [
          "Cerca U1 nella scheda del faretto: non è un semplice transistor, ma contiene circuiti che comandano lo switching.",
          "Quando studieremo il Yamaha, cercheremo transistor piccoli di segnale e transistor finali di potenza.",
          "Scrivi: transistor = controllo; diodo = verso; resistenza = limite."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "L’idea base di un transistor è...",
            "options": [
              "Un piccolo segnale controlla una corrente più grande",
              "Una bobina trasferisce energia",
              "Un componente emette solo luce",
              "Un fusibile si brucia sempre"
            ],
            "correctIndex": 0,
            "explanation": "Il transistor è un dispositivo di controllo/amplificazione."
          },
          {
            "id": "q2",
            "prompt": "Un MOSFET ha tipicamente...",
            "options": [
              "Gate, drain e source",
              "Anodo e catodo soltanto",
              "Primario e secondario",
              "Due armature e dielettrico"
            ],
            "correctIndex": 0,
            "explanation": "I terminali tipici del MOSFET sono gate, drain e source."
          },
          {
            "id": "q3",
            "prompt": "Nel driver LED, lo switching significa...",
            "options": [
              "Accendere e spegnere rapidamente il passaggio di energia",
              "Cambiare manualmente il colore del faretto",
              "Misurare Ohm",
              "Ruotare il binario"
            ],
            "correctIndex": 0,
            "explanation": "Lo switching usa commutazioni rapide per trasferire e regolare energia."
          }
        ]
      }
    ]
  },
  {
    "id": "alimentatori",
    "title": "Modulo 5 · Alimentatori",
    "subtitle": "Lineari, switching e driver LED",
    "status": "open",
    "lessons": [
      {
        "id": "m5-alimentatore-lineare",
        "title": "Alimentatore lineare",
        "duration": "16 min",
        "xp": 45,
        "summary": "Il mondo del trasformatore grande: Yamaha, amplificatori e hi-fi vintage.",
        "theory": [
          "Un alimentatore lineare classico parte da un trasformatore a 50 Hz. Il trasformatore abbassa la tensione e isola dalla rete, poi un ponte raddrizzatore la trasforma in DC pulsante, e i condensatori la livellano.",
          "Negli amplificatori vintage come il tuo Yamaha CA-810, l’alimentatore lineare è grande e pesante ma robusto. Il trasformatore lavora direttamente alla frequenza della rete, quindi richiede molto ferro e rame.",
          "Dopo il raddrizzamento, i grandi condensatori di filtro immagazzinano energia e riducono il ripple. Se invecchiano, possono aumentare rumore, ronzii o instabilità.",
          "Un alimentatore lineare è più facile da capire rispetto a uno switching perché il percorso dell’energia è più diretto: trasformatore, ponte, condensatori, regolatori.",
          "Il rovescio della medaglia è l’efficienza: i regolatori lineari dissipano energia in calore quando devono ridurre tensione."
        ],
        "lab": [
          "Quando apriremo il Yamaha, individueremo: trasformatore, ponte/raddrizzatori, condensatori principali.",
          "Disegna il blocco: AC → trasformatore → ponte → condensatori → circuito audio.",
          "Annota: lineare = più grande, più pesante, spesso più semplice da seguire."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "In un alimentatore lineare classico, il trasformatore lavora tipicamente a...",
            "options": [
              "50 Hz",
              "100 kHz",
              "2,4 GHz",
              "0 Hz sempre"
            ],
            "correctIndex": 0,
            "explanation": "Il trasformatore di rete lavora alla frequenza della rete, tipicamente 50 Hz in Europa."
          },
          {
            "id": "q2",
            "prompt": "Dopo il ponte raddrizzatore, i condensatori servono soprattutto a...",
            "options": [
              "Livellare la tensione",
              "Creare Wi-Fi",
              "Aumentare il peso per estetica",
              "Cambiare il colore dei cavi"
            ],
            "correctIndex": 0,
            "explanation": "I condensatori di filtro riducono il ripple della tensione raddrizzata."
          },
          {
            "id": "q3",
            "prompt": "Un alimentatore lineare è spesso...",
            "options": [
              "Più grande e pesante di uno switching equivalente",
              "Sempre microscopico",
              "Senza trasformatore",
              "Solo digitale"
            ],
            "correctIndex": 0,
            "explanation": "A 50 Hz il trasformatore richiede più ferro e rame."
          }
        ]
      },
      {
        "id": "m5-alimentatore-switching",
        "title": "Alimentatore switching",
        "duration": "20 min",
        "xp": 60,
        "summary": "Il mondo del trasformatore piccolo e dell’U1 che commuta.",
        "theory": [
          "Un alimentatore switching prima raddrizza la rete, poi usa un circuito di controllo per trasformare quella tensione in impulsi ad alta frequenza. Questi impulsi alimentano un piccolo trasformatore o induttore.",
          "Il vantaggio è l’efficienza e la compattezza. A frequenze alte, il trasformatore può essere molto più piccolo rispetto a un trasformatore da 50 Hz.",
          "Nel driver del faretto, U1 è probabilmente il cervello dello switching. Se U1 non parte, il trasformatore resta fermo e il LED non riceve energia, anche se ponte e diodi sono sani.",
          "Gli switching hanno spesso due zone: lato primario, collegato alla rete e pericoloso; lato secondario, isolato e più sicuro. La separazione fisica sulla scheda è fondamentale.",
          "La diagnosi di uno switching spento parte dai blocchi: ingresso, protezione, ponte, condensatore principale, circuito startup/U1, trasformatore, secondario. Noi abbiamo già seguito questa logica sul faretto."
        ],
        "lab": [
          "Rivedi la foto della scheda: individua ingresso, R1, MB10F, condensatore, U1, trasformatore, uscita S+/S-.",
          "Traccia il percorso dell’energia con il dito, a faretto scollegato.",
          "Non alimentare la scheda aperta: il primario è pericoloso."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Perché un trasformatore switching può essere piccolo?",
            "options": [
              "Perché lavora ad alta frequenza",
              "Perché non trasferisce energia",
              "Perché è solo plastica",
              "Perché usa corrente statica"
            ],
            "correctIndex": 0,
            "explanation": "L’alta frequenza permette trasformatori più compatti."
          },
          {
            "id": "q2",
            "prompt": "In uno switching, U1 spesso serve a...",
            "options": [
              "Controllare la commutazione",
              "Fare da vite",
              "Cambiare il vetro",
              "Misurare la luce ambiente"
            ],
            "correctIndex": 0,
            "explanation": "Il controller genera o comanda gli impulsi di switching."
          },
          {
            "id": "q3",
            "prompt": "Quale lato di uno switching è più pericoloso?",
            "options": [
              "Il primario collegato alla rete",
              "Sempre il secondario isolato",
              "La lente frontale",
              "Il dissipatore spento"
            ],
            "correctIndex": 0,
            "explanation": "Il primario può essere collegato alla rete e a tensioni elevate."
          }
        ]
      },
      {
        "id": "m5-driver-led",
        "title": "Driver LED a corrente costante",
        "duration": "17 min",
        "xp": 50,
        "summary": "Perché il LED non vuole semplicemente “12 V”.",
        "theory": [
          "Molti principianti pensano che un LED sia un carico a tensione fissa. In realtà il parametro da controllare è la corrente. Una piccola variazione di tensione può causare una grande variazione di corrente.",
          "Un driver LED a corrente costante misura o controlla la corrente che scorre nel LED e regola l’energia trasferita per mantenerla nel valore previsto.",
          "Nel faretto, i fili S+ e S- sono l’uscita verso il COB LED. Il driver prende 230 V dal binario e produce l’uscita adatta al LED, non semplicemente una tensione fissa universale.",
          "Per sostituire un driver non basta dire “230 V in ingresso”. Bisogna conoscere potenza, corrente nominale e range di tensione di uscita. Un driver sbagliato può fare poca luce, lampeggiare o danneggiare il LED.",
          "Quando il faretto è completamente morto ma il LED supera il test diodo, il sospetto si sposta sul driver: non sta più generando la corrente di uscita."
        ],
        "lab": [
          "Scrivi su un foglio: driver LED = corrente costante.",
          "Elenca i dati da cercare su un driver sostitutivo: corrente, watt, tensione uscita, ingresso 220-240 V.",
          "Non comprare un driver solo guardando la forma fisica."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Il parametro più importante per pilotare un LED di potenza è...",
            "options": [
              "La corrente",
              "Il colore della scatola",
              "Il numero di viti",
              "La marca del binario"
            ],
            "correctIndex": 0,
            "explanation": "Il LED va pilotato a corrente controllata."
          },
          {
            "id": "q2",
            "prompt": "Per sostituire un driver LED devi conoscere almeno...",
            "options": [
              "Corrente, potenza e range tensione di uscita",
              "Solo il colore del cavo",
              "Solo la lunghezza del binario",
              "Solo il peso"
            ],
            "correctIndex": 0,
            "explanation": "La compatibilità elettrica è più importante della sola forma."
          },
          {
            "id": "q3",
            "prompt": "S+ e S- nella scheda del faretto indicano probabilmente...",
            "options": [
              "Uscita verso il LED",
              "Ingresso audio",
              "Antenna radio",
              "Pulsante meccanico"
            ],
            "correctIndex": 0,
            "explanation": "Erano i terminali di uscita verso il COB LED."
          }
        ]
      },
      {
        "id": "m5-sicurezza-rete",
        "title": "Sicurezza sulla 230 V",
        "duration": "15 min",
        "xp": 45,
        "summary": "Dove fermarsi e quando serve attrezzatura adeguata.",
        "theory": [
          "La 230 V di rete è pericolosa perché può far passare corrente attraverso il corpo. Non serve toccare “tanto”: basta un percorso sfavorevole e una distrazione.",
          "Negli alimentatori switching c’è un ulteriore rischio: il condensatore principale può caricarsi a circa 320 V DC dopo il ponte raddrizzatore. Questa tensione può rimanere per un po’ anche dopo aver scollegato.",
          "Per questo abbiamo evitato misure live sul faretto aperto. Abbiamo fatto diagnosi a freddo su LED, ponte, resistenze e diodi. È il modo corretto di imparare progressivamente.",
          "Un laboratorio attrezzato userebbe trasformatore d’isolamento, lampada in serie, sonde adatte e procedure precise. Senza questi strumenti, ci si ferma prima delle misure sul primario alimentato.",
          "La sicurezza non rallenta la riparazione: evita di trasformare un guasto da pochi euro in un incidente o in una scheda distrutta."
        ],
        "lab": [
          "Regola personale: schede collegate alla rete = non improvvisare.",
          "Prima di misurare su alimentatori: chiedersi dove sono primario, secondario e condensatore principale.",
          "Per ora la tua area sicura è: misure a freddo + bassa tensione."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Dopo un ponte raddrizzatore su 230 V AC, il condensatore principale può arrivare circa a...",
            "options": [
              "320 V DC",
              "3,2 V DC",
              "12 V AC",
              "0 V sempre"
            ],
            "correctIndex": 0,
            "explanation": "230 V AC RMS corrispondono a circa 325 V di picco, al netto delle perdite."
          },
          {
            "id": "q2",
            "prompt": "Perché abbiamo evitato misure live sul faretto aperto?",
            "options": [
              "Per sicurezza: primario e rete sono pericolosi",
              "Perché il multimetro non funziona",
              "Perché la luce era fredda",
              "Perché i LED non si misurano mai"
            ],
            "correctIndex": 0,
            "explanation": "Le misure a rete collegata richiedono procedura e protezioni adeguate."
          },
          {
            "id": "q3",
            "prompt": "Che cosa significa lavorare a freddo?",
            "options": [
              "A circuito scollegato dall’alimentazione",
              "Con il circuito nel freezer",
              "Solo di notte",
              "Con corrente massima"
            ],
            "correctIndex": 0,
            "explanation": "A freddo significa senza alimentazione collegata."
          }
        ]
      }
    ]
  },
  {
    "id": "caso-faretto",
    "title": "Modulo 6 · Caso reale: faretto LED",
    "subtitle": "Dal sintomo alla diagnosi ragionata",
    "status": "open",
    "lessons": [
      {
        "id": "m6-anatomia-faretto",
        "title": "Anatomia del faretto",
        "duration": "15 min",
        "xp": 45,
        "summary": "Riconoscere blocchi funzionali invece di vedere una scheda caotica.",
        "theory": [
          "Il faretto non è solo un LED. È un piccolo sistema: adattatore per binario, driver, corpo dissipante, COB LED, riflettore e collegamenti.",
          "Il driver è la scheda elettronica. Il suo compito è prendere la rete a 230 V e trasformarla in corrente controllata per il LED. Senza driver il COB non può essere alimentato direttamente in modo sicuro.",
          "Sulla scheda hai riconosciuto R1, il ponte MB10F, D1, D2, U1, il condensatore elettrolitico, il trasformatore giallo e l’uscita S+/S-. Questa è già lettura a blocchi.",
          "Il corpo cilindrico è anche dissipatore. La luce è il risultato utile, ma il calore è il sottoprodotto da gestire. Un buon faretto ha metallo e superficie per smaltire calore.",
          "Il nuovo faretto Inspire che hai aperto sembrava più integrato e meno riparabile. Questo è un concetto importante: non tutti i prodotti sono progettati con la stessa manutenzione in mente."
        ],
        "lab": [
          "Prendi le foto del vecchio faretto e assegna un nome a ogni blocco.",
          "Disegna: binario → driver → S+/S- → COB LED → dissipatore.",
          "Scrivi cosa è riparabile e cosa è integrato."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Nel tuo faretto, il driver è...",
            "options": [
              "La scheda elettronica che alimenta il LED",
              "La lente frontale",
              "La vite laterale",
              "Il binario"
            ],
            "correctIndex": 0,
            "explanation": "Il driver è la scheda che converte e regola l’alimentazione del LED."
          },
          {
            "id": "q2",
            "prompt": "Il corpo metallico del faretto serve anche a...",
            "options": [
              "Dissipare calore",
              "Memorizzare dati",
              "Raddrizzare la corrente",
              "Fare da telecomando"
            ],
            "correctIndex": 0,
            "explanation": "Il LED di potenza deve trasferire calore al dissipatore."
          },
          {
            "id": "q3",
            "prompt": "Leggere una scheda a blocchi significa...",
            "options": [
              "Riconoscere funzioni come ingresso, raddrizzamento, controllo, uscita",
              "Imparare a memoria tutti i codici",
              "Guardare solo il colore dei componenti",
              "Misurare a caso"
            ],
            "correctIndex": 0,
            "explanation": "I blocchi funzionali rendono una scheda comprensibile."
          }
        ]
      },
      {
        "id": "m6-diagnosi-esclusione",
        "title": "Diagnosi per esclusione",
        "duration": "18 min",
        "xp": 55,
        "summary": "Come siamo passati da “non funziona” a un sospetto preciso.",
        "theory": [
          "Il sintomo iniziale era semplice: il faretto non si accendeva. Ma “non si accende” può significare binario guasto, contatto difettoso, LED interrotto, driver morto o circuito di controllo non avviato.",
          "La prima esclusione è stata il binario: altri faretti funzionavano sullo stesso binario, quindi l’alimentazione generale era presente.",
          "Poi abbiamo testato il COB LED: 0,465 V in un verso e OL nell’altro. Questo non garantisce funzionamento sotto carico, ma esclude corto e interruzione totale.",
          "R1 suonava in continuità: quindi la resistenza d’ingresso non era aperta. Il ponte MB10F mostrava quattro giunzioni sane. D1 e D2 avevano comportamento da diodi sani.",
          "A quel punto il guasto probabile si è spostato nella parte non facilmente testabile a freddo: U1, circuito di avvio, alimentazione del controller o secondario sotto carico."
        ],
        "lab": [
          "Scrivi una tabella: componente, misura, risultato, conclusione.",
          "Esempio: MB10F, prova diodo, 0,585/0,587/0,610/0,585, ponte probabilmente sano.",
          "Questa tabella è il tuo primo report tecnico."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Qual è stato il primo indizio che il binario non era il problema?",
            "options": [
              "Gli altri faretti funzionavano",
              "Il LED era giallo",
              "La scatola era marrone",
              "Il multimetro era acceso"
            ],
            "correctIndex": 0,
            "explanation": "Se altri faretti funzionano sullo stesso binario, l’alimentazione del binario è probabilmente ok."
          },
          {
            "id": "q2",
            "prompt": "Il test 0,465 V / OL sul COB LED esclude soprattutto...",
            "options": [
              "Corto o interruzione totale del LED",
              "Qualsiasi guasto possibile al 100%",
              "Il guasto di U1",
              "La 230 V"
            ],
            "correctIndex": 0,
            "explanation": "È compatibile con una giunzione sana, ma non replica il carico reale."
          },
          {
            "id": "q3",
            "prompt": "Dopo aver escluso LED, R1, MB10F, D1 e D2, il sospetto si sposta su...",
            "options": [
              "U1/circuito di controllo o avviamento",
              "La lente frontale",
              "La temperatura colore",
              "Il cartone della confezione"
            ],
            "correctIndex": 0,
            "explanation": "Resta la parte di controllo e startup dello switching."
          }
        ]
      },
      {
        "id": "m6-mb10f",
        "title": "Il ponte MB10F",
        "duration": "14 min",
        "xp": 45,
        "summary": "Quattro diodi in un solo componente.",
        "theory": [
          "Il MB10F è un ponte raddrizzatore SMD. Dentro contiene quattro diodi disposti in modo da trasformare l’alternata in continua pulsante.",
          "I pin sono due ingressi alternati, indicati con ~ e ~, e due uscite, + e -. Questa marcatura è preziosa perché permette di testare le giunzioni interne con il multimetro.",
          "Nel test hai misurato quattro cadute di tensione: 0,585, 0,587, 0,610, 0,585. Sono valori coerenti con giunzioni al silicio funzionanti.",
          "Se il ponte fosse stato in corto, avresti potuto trovare valori quasi zero tra pin che non dovrebbero esserlo. Se fosse stato aperto, una o più giunzioni avrebbero dato OL nel verso in cui dovevano condurre.",
          "Avere escluso il ponte è stato importante: se BD1 fosse guasto, il resto del driver non avrebbe ricevuto la tensione continua primaria."
        ],
        "lab": [
          "Disegna il ponte con quattro diodi.",
          "Segna i pin: ~, ~, +, -.",
          "Ripeti mentalmente le quattro misure fatte."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Il MB10F è...",
            "options": [
              "Un ponte raddrizzatore",
              "Un relè",
              "Un condensatore",
              "Un COB LED"
            ],
            "correctIndex": 0,
            "explanation": "MB10F è un ponte raddrizzatore SMD."
          },
          {
            "id": "q2",
            "prompt": "I due pin ~ del ponte indicano...",
            "options": [
              "Ingressi alternati",
              "Uscite positive",
              "Massa audio",
              "Pin del LED"
            ],
            "correctIndex": 0,
            "explanation": "Il simbolo ~ indica i terminali di ingresso AC."
          },
          {
            "id": "q3",
            "prompt": "I tuoi valori intorno a 0,58 V sulle giunzioni del ponte indicano...",
            "options": [
              "Comportamento compatibile con diodi sani",
              "Corto certo",
              "Assenza del componente",
              "Errore del binario"
            ],
            "correctIndex": 0,
            "explanation": "Sono cadute di tensione tipiche di giunzioni al silicio."
          }
        ]
      },
      {
        "id": "m3-driver-led",
        "title": "Diagnosi del driver LED",
        "duration": "20 min",
        "xp": 70,
        "summary": "Perché U1 resta il principale indiziato senza essere testabile come un diodo.",
        "theory": [
          "U1 è un circuito integrato. A differenza di un diodo o di una resistenza, non ha una prova semplice del tipo “valore in un verso, OL nell’altro”. Dentro contiene più transistor e circuiti di controllo.",
          "Il fatto che due pin di U1 suonino in continuità non basta a dichiararlo guasto. Alcuni pin possono essere collegati internamente o tramite piste esterne, resistenze basse o riferimenti di massa.",
          "Per diagnosticare davvero U1 servirebbero misure dinamiche: tensione di alimentazione del chip, presenza di oscillazione, impulsi sul trasformatore. Queste misure richiedono alimentare il primario, quindi non le abbiamo fatte per sicurezza.",
          "La diagnosi corretta, al nostro livello attuale, è: driver guasto nella sezione di controllo/avviamento, con U1 o componenti attorno come principali sospettati.",
          "Questa è una conclusione tecnica onesta: non afferma più di quanto le misure dimostrino, ma restringe molto il campo rispetto al sintomo iniziale."
        ],
        "lab": [
          "Scrivi: U1 non si testa come un diodo.",
          "Scrivi cosa servirebbe per andare oltre: saldatore, eventualmente alimentatore/oscilloscopio, procedure di sicurezza.",
          "Conserva la scheda come prima cavia per esercizi di saldatura."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Perché U1 non si testa come un semplice diodo?",
            "options": [
              "Perché è un circuito integrato con più funzioni interne",
              "Perché è fatto di legno",
              "Perché non ha pin",
              "Perché lavora solo se fotografato"
            ],
            "correctIndex": 0,
            "explanation": "Un IC contiene circuiti complessi, non una sola giunzione."
          },
          {
            "id": "q2",
            "prompt": "Un beep tra due pin di un integrato significa sempre guasto?",
            "options": [
              "No, va interpretato nel circuito",
              "Sì, sempre",
              "Solo se è estate",
              "Solo se il componente è giallo"
            ],
            "correctIndex": 0,
            "explanation": "Può esserci continuità interna o tramite componenti esterni."
          },
          {
            "id": "q3",
            "prompt": "La conclusione più corretta sul faretto è...",
            "options": [
              "Driver probabilmente guasto nella sezione controllo/avviamento",
              "LED sicuramente esploso",
              "Binario sicuramente guasto",
              "R1 sicuramente aperta"
            ],
            "correctIndex": 0,
            "explanation": "Le misure hanno escluso molti guasti semplici e puntano alla sezione di controllo."
          }
        ]
      }
    ]
  },
  {
    "id": "saldatura",
    "title": "Modulo 7 · Saldatura",
    "subtitle": "Dalla scelta degli strumenti alle prime riparazioni",
    "status": "open",
    "lessons": [
      {
        "id": "m7-attrezzi",
        "title": "Attrezzi minimi",
        "duration": "12 min",
        "xp": 35,
        "summary": "Cosa serve davvero per iniziare senza comprare tutto subito.",
        "theory": [
          "Per iniziare non serve un laboratorio professionale. Serve un saldatore regolabile, stagno adatto, flussante, treccia dissaldante e una superficie sicura su cui lavorare.",
          "Il saldatore che stai valutando, tipo FNIRSI HS-02B, è adatto perché ha temperatura regolabile e punte fini. Questo conta più della potenza dichiarata da sola.",
          "Lo stagno da 0,6 mm è un buon compromesso: abbastanza fine per PCB e SMD semplici, abbastanza comodo per fili e componenti through-hole.",
          "Il flussante è spesso la differenza tra una saldatura frustrante e una saldatura pulita. Aiuta lo stagno a bagnare meglio le superfici e riduce ossidi.",
          "La treccia dissaldante è fondamentale per correggere errori e rimuovere stagno da piazzole. La pompetta è utile, ma per schede piccole spesso treccia + flussante è più controllabile."
        ],
        "lab": [
          "Lista minima: saldatore, stagno 0,6 mm, flussante, treccia.",
          "Prima esercitazione futura: fili su una basetta o scheda rotta.",
          "Non iniziare dal Yamaha: il faretto è una cavia migliore."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Quale accessorio aiuta lo stagno a bagnare meglio le superfici?",
            "options": [
              "Flussante",
              "Cacciavite",
              "Nastro carta",
              "Carta vetrata grossa sempre"
            ],
            "correctIndex": 0,
            "explanation": "Il flussante migliora la bagnatura e riduce ossidi."
          },
          {
            "id": "q2",
            "prompt": "Per schede piccole, spesso è meglio dissaldare con...",
            "options": [
              "Treccia + flussante",
              "Martello",
              "Colla caldo",
              "Acqua"
            ],
            "correctIndex": 0,
            "explanation": "La treccia è controllabile e precisa su piazzole piccole."
          },
          {
            "id": "q3",
            "prompt": "Perché conviene esercitarsi sul faretto prima del Yamaha?",
            "options": [
              "Perché è meno prezioso e più adatto come cavia",
              "Perché non contiene componenti",
              "Perché è fatto di carta",
              "Perché non serve saldatore"
            ],
            "correctIndex": 0,
            "explanation": "Meglio fare pratica su un oggetto a basso rischio."
          }
        ]
      },
      {
        "id": "m7-prima-saldatura",
        "title": "La prima saldatura buona",
        "duration": "15 min",
        "xp": 45,
        "summary": "Calore, stagno e tempo: la triade da controllare.",
        "theory": [
          "Una buona saldatura non è una goccia appoggiata sopra: deve bagnare sia la piazzola sia il terminale del componente. Deve sembrare liscia e aderente, non una pallina opaca e isolata.",
          "Il saldatore deve scaldare insieme piazzola e terminale. Poi si aggiunge lo stagno al punto caldo, non direttamente alla punta come se fosse colla.",
          "Se scaldi troppo poco, lo stagno non bagna e ottieni una saldatura fredda. Se scaldi troppo a lungo, rischi di sollevare piste o danneggiare componenti.",
          "Il flussante aiuta molto, soprattutto su vecchie schede ossidate. Ma non sostituisce la tecnica: pulizia, temperatura corretta e tempo breve restano fondamentali.",
          "Per iniziare conviene lavorare su componenti through-hole e fili. Gli SMD arrivano dopo, quando hai preso confidenza con la quantità di stagno."
        ],
        "lab": [
          "Prima esercitazione: stagnare due fili e unirli.",
          "Seconda: dissaldare e risaldare un componente da una scheda rotta.",
          "Obiettivo visivo: saldatura lucida, conica, non a pallina."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "In una buona saldatura, lo stagno deve...",
            "options": [
              "Bagnare piazzola e terminale",
              "Restare una pallina sopra",
              "Toccare solo la punta",
              "Essere sempre nero"
            ],
            "correctIndex": 0,
            "explanation": "La saldatura deve aderire ai metalli da collegare."
          },
          {
            "id": "q2",
            "prompt": "Dove va applicato lo stagno?",
            "options": [
              "Sul punto scaldato tra piazzola e terminale",
              "Solo sulla plastica",
              "Sempre lontano dal componente",
              "Nel multimetro"
            ],
            "correctIndex": 0,
            "explanation": "Lo stagno deve fondere grazie al calore del giunto, non solo sulla punta."
          },
          {
            "id": "q3",
            "prompt": "Scaldare troppo a lungo può...",
            "options": [
              "Sollevare piste o danneggiare componenti",
              "Migliorare sempre la saldatura",
              "Trasformare il diodo in trasformatore",
              "Azzerare la tensione di rete"
            ],
            "correctIndex": 0,
            "explanation": "Il calore eccessivo può danneggiare la scheda."
          }
        ]
      },
      {
        "id": "m7-dissaldare",
        "title": "Dissaldare senza distruggere",
        "duration": "16 min",
        "xp": 45,
        "summary": "Rimuovere componenti è più difficile che saldarli.",
        "theory": [
          "Dissaldare è spesso più difficile che saldare perché devi rimuovere stagno esistente senza strappare piste o piazzole. La fretta è il nemico principale.",
          "La treccia funziona così: la appoggi sulla saldatura, aggiungi un po’ di flussante, scaldi con la punta e la treccia assorbe lo stagno fuso per capillarità.",
          "Se la treccia non assorbe, spesso manca flussante o la temperatura è insufficiente. Non schiacciare troppo: devi trasferire calore, non grattare la scheda.",
          "Per componenti through-hole con molto stagno, la pompetta può aiutare. Per SMD piccoli, invece, treccia, flussante e punta adatta sono spesso più precisi.",
          "Prima di dissaldare un componente importante, fai foto. Poi controlla polarità, orientamento, sigle e posizione. La riparazione fallisce spesso per errori di rimontaggio, non solo per tecnica."
        ],
        "lab": [
          "Esercizio futuro: rimuovere stagno da una piazzola su scheda rotta.",
          "Non tirare mai un componente se lo stagno non è completamente fuso.",
          "Segna sempre polarità dei condensatori e orientamento dei diodi."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "La treccia dissaldante assorbe stagno grazie a...",
            "options": [
              "Capillarità",
              "Magnetismo permanente",
              "Wi-Fi",
              "Compressione meccanica soltanto"
            ],
            "correctIndex": 0,
            "explanation": "Lo stagno fuso viene assorbito tra i fili della treccia."
          },
          {
            "id": "q2",
            "prompt": "Se la treccia non assorbe bene, spesso serve...",
            "options": [
              "Più flussante o temperatura corretta",
              "Acqua",
              "Colla",
              "Una vite più lunga"
            ],
            "correctIndex": 0,
            "explanation": "Flussante e calore corretto sono essenziali."
          },
          {
            "id": "q3",
            "prompt": "Prima di rimuovere un componente polarizzato conviene...",
            "options": [
              "Fare foto e segnare orientamento",
              "Toglierlo al buio",
              "Ignorare la polarità",
              "Invertirlo sempre"
            ],
            "correctIndex": 0,
            "explanation": "Orientamento e polarità sono critici per il rimontaggio."
          }
        ]
      },
      {
        "id": "m7-smd-base",
        "title": "SMD base",
        "duration": "18 min",
        "xp": 55,
        "summary": "Come affrontare componenti piccoli senza panico.",
        "theory": [
          "SMD significa Surface Mount Device: componenti montati sulla superficie della scheda, senza terminali lunghi che attraversano il PCB.",
          "Resistenze e condensatori SMD 1206 o 0805 sono affrontabili con un buon saldatore, flussante e pinzette. Componenti molto piccoli o package complessi richiedono più pratica e talvolta aria calda.",
          "Un SOIC-8 come U1 è già una buona sfida, ma non impossibile. Si può lavorare pin per pin con treccia e flussante, oppure con tecniche specifiche quando avrai più esperienza.",
          "Il rischio sugli SMD è usare troppo stagno e creare ponti tra pin. Il flussante aiuta molto: fa scorrere lo stagno dove deve andare e rende più facile rimuovere l’eccesso.",
          "Non iniziare da U1 come prima esperienza. Prima prova su resistenze grandi, fili e piazzole. Poi passeremo a SMD semplici."
        ],
        "lab": [
          "Quando avrai il saldatore, cerca una scheda elettronica guasta da usare come palestra.",
          "Esercitati a rimuovere e rimettere una resistenza SMD grande.",
          "Solo dopo passeremo a un IC tipo SOIC-8."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "SMD significa...",
            "options": [
              "Componente montato in superficie",
              "Trasformatore ad alta tensione",
              "Diodo luminoso speciale",
              "Misura di corrente"
            ],
            "correctIndex": 0,
            "explanation": "Gli SMD sono montati sulla superficie del circuito stampato."
          },
          {
            "id": "q2",
            "prompt": "Un rischio comune saldando SMD è...",
            "options": [
              "Creare ponti di stagno tra pin",
              "Far sparire la tensione di rete",
              "Trasformare AC in DC",
              "Cambiare il colore del PCB"
            ],
            "correctIndex": 0,
            "explanation": "Troppo stagno può collegare pin vicini."
          },
          {
            "id": "q3",
            "prompt": "Prima di provare a rimuovere U1 conviene...",
            "options": [
              "Fare pratica su schede guaste e componenti più semplici",
              "Provare subito sul pezzo importante",
              "Usare un martello",
              "Non usare flussante"
            ],
            "correctIndex": 0,
            "explanation": "La progressione riduce il rischio di danneggiare la scheda."
          }
        ]
      }
    ]
  },
  {
    "id": "hifi-vintage",
    "title": "Modulo 8 · Hi-Fi vintage",
    "subtitle": "Applicare gli stessi concetti ad amplificatori e giradischi",
    "status": "open",
    "lessons": [
      {
        "id": "m8-yamaha-blocchi",
        "title": "Leggere lo Yamaha a blocchi",
        "duration": "18 min",
        "xp": 55,
        "summary": "Da una scheda apparentemente complessa a funzioni riconoscibili.",
        "theory": [
          "Un amplificatore come lo Yamaha CA-810 sembra molto più complesso del faretto, ma il metodo è lo stesso: leggere a blocchi.",
          "Ci sarà una sezione alimentazione: trasformatore, raddrizzatori, condensatori, regolatori. Poi sezioni audio: ingresso, preamplificazione, controlli tono, finale di potenza.",
          "I componenti sono gli stessi mattoncini: resistenze, condensatori, diodi, transistor, relè. Cambia il modo in cui sono collegati e lo scopo del circuito.",
          "La diagnosi audio spesso segue il percorso del segnale: ingresso → selettore → pre → finale → relè → diffusori. Se un canale sparisce, bisogna capire dove si interrompe o si degrada.",
          "Per ora non serve aprirlo e misurare tutto. L’obiettivo è costruire una mappa mentale, come abbiamo fatto col faretto."
        ],
        "lab": [
          "Prossima volta che guardi lo Yamaha, non cercare componenti singoli: cerca blocchi.",
          "Scrivi: alimentazione, pre, finale, protezione, uscita.",
          "Confronta: faretto = alimentazione LED; Yamaha = alimentazione + audio."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Il metodo corretto davanti a una scheda complessa è...",
            "options": [
              "Leggerla a blocchi funzionali",
              "Cambiare componenti a caso",
              "Guardare solo il componente più grande",
              "Misurare tutto sulla 230 V"
            ],
            "correctIndex": 0,
            "explanation": "I blocchi rendono comprensibile anche una scheda complessa."
          },
          {
            "id": "q2",
            "prompt": "Nel percorso audio di un amplificatore troviamo tipicamente...",
            "options": [
              "Ingresso, pre, finale, relè, diffusori",
              "Solo ponte raddrizzatore",
              "Solo LED",
              "Solo trasformatore"
            ],
            "correctIndex": 0,
            "explanation": "Il segnale audio attraversa più stadi prima di arrivare alle casse."
          },
          {
            "id": "q3",
            "prompt": "I componenti base dello Yamaha rispetto al faretto sono...",
            "options": [
              "Molti degli stessi mattoncini usati in modo diverso",
              "Completamente alieni",
              "Solo meccanici",
              "Solo software"
            ],
            "correctIndex": 0,
            "explanation": "Resistenze, condensatori, diodi e transistor ricompaiono in moltissimi apparecchi."
          }
        ]
      },
      {
        "id": "m8-condensatori-hifi",
        "title": "Condensatori nell’hi-fi",
        "duration": "16 min",
        "xp": 45,
        "summary": "Perché tutti parlano di recap, ma non si cambia tutto alla cieca.",
        "theory": [
          "Negli apparecchi vintage i condensatori elettrolitici sono tra i componenti che possono invecchiare. Perdono capacità, aumentano ESR o iniziano a perdere.",
          "Questo non significa che bisogna cambiare tutti i condensatori a caso. Un recap fatto male può introdurre errori, polarità invertite, valori sbagliati o saldature peggiori delle originali.",
          "Prima si osservano sintomi: ronzio, instabilità, canali sbilanciati, alimentazioni fuori specifica. Poi si misura e si decide dove intervenire.",
          "I condensatori di alimentazione grandi hanno un ruolo diverso dai piccoli condensatori di accoppiamento nel segnale. Cambiarli ha effetti diversi e rischi diversi.",
          "Quando arriveremo a lavorare sullo Yamaha, faremo foto, schema, lista componenti e sostituzioni mirate. Non sarà un cambio pezzi casuale."
        ],
        "lab": [
          "Regola: nessun recap senza foto e lista.",
          "Annota: polarità, capacità, tensione, temperatura, posizione.",
          "Prima pratica su schede meno preziose."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Un recap fatto male può...",
            "options": [
              "Introdurre errori e guasti",
              "Rendere sempre perfetto l’apparecchio",
              "Evitare ogni misura",
              "Sostituire il multimetro"
            ],
            "correctIndex": 0,
            "explanation": "Cambiare componenti senza metodo può peggiorare la situazione."
          },
          {
            "id": "q2",
            "prompt": "Prima di sostituire un condensatore polarizzato devi annotare...",
            "options": [
              "Polarità e valore",
              "Solo il colore",
              "Solo la marca del mobile",
              "La posizione del volume"
            ],
            "correctIndex": 0,
            "explanation": "Capacità, tensione e orientamento sono essenziali."
          },
          {
            "id": "q3",
            "prompt": "Un condensatore di alimentazione grande serve soprattutto a...",
            "options": [
              "Filtrare e immagazzinare energia",
              "Selezionare ingresso phono",
              "Emettere luce",
              "Fare da relè altoparlanti"
            ],
            "correctIndex": 0,
            "explanation": "I grandi elettrolitici filtrano la tensione e forniscono riserva di energia."
          }
        ]
      },
      {
        "id": "m8-segnale-audio",
        "title": "Segnale audio",
        "duration": "15 min",
        "xp": 45,
        "summary": "Dalla testina del giradischi ai diffusori.",
        "theory": [
          "Il segnale audio è una tensione che varia nel tempo. Non è una tensione fissa come una batteria: oscilla seguendo la musica.",
          "Una testina phono produce un segnale molto piccolo. Il pre phono lo amplifica e applica equalizzazione RIAA. Poi il segnale passa ai controlli e al finale di potenza.",
          "Il finale non crea musica dal nulla: prende un piccolo segnale e lo rende capace di muovere i diffusori, cioè di fornire più potenza.",
          "Il multimetro è utile per tensioni statiche, alimentazioni e continuità. Per vedere davvero la forma del segnale audio servirebbe un oscilloscopio.",
          "Per ora il concetto importante è il percorso: se un canale ha un problema, si segue il segnale da ingresso a uscita, proprio come nel faretto abbiamo seguito l’energia."
        ],
        "lab": [
          "Disegna: giradischi → phono → pre → finale → relè → diffusori.",
          "Segna dove il segnale è piccolo e dove diventa potente.",
          "Collega questo al concetto P = V × I."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "Il segnale audio è...",
            "options": [
              "Una tensione che varia nel tempo",
              "Sempre una tensione fissa",
              "Una resistenza",
              "Un relè"
            ],
            "correctIndex": 0,
            "explanation": "Il segnale audio cambia continuamente seguendo la forma d’onda della musica."
          },
          {
            "id": "q2",
            "prompt": "Il finale di potenza serve a...",
            "options": [
              "Fornire energia sufficiente ai diffusori",
              "Raddrizzare la rete",
              "Cambiare la velocità del giradischi",
              "Misurare capacità"
            ],
            "correctIndex": 0,
            "explanation": "Il finale rende il segnale capace di pilotare i diffusori."
          },
          {
            "id": "q3",
            "prompt": "Per vedere la forma d’onda audio serve soprattutto...",
            "options": [
              "Oscilloscopio",
              "Cacciavite",
              "Pompetta dissaldante",
              "Nastro isolante"
            ],
            "correctIndex": 0,
            "explanation": "L’oscilloscopio mostra come il segnale cambia nel tempo."
          }
        ]
      },
      {
        "id": "m8-metodo-diagnosi",
        "title": "Metodo di diagnosi",
        "duration": "17 min",
        "xp": 55,
        "summary": "Il vero obiettivo: non sapere tutto, ma sapere come cercare.",
        "theory": [
          "Un tecnico non riconosce ogni guasto a colpo d’occhio. Usa un metodo: sintomo, ipotesi, misura, interpretazione, nuova ipotesi.",
          "Il faretto è stato un buon esempio: invece di dire subito “driver rotto”, abbiamo verificato binario, LED, R1, ponte, diodi. Ogni misura ha tolto possibilità.",
          "Lo stesso metodo vale per hi-fi, elettrodomestici e alimentatori. Prima si capisce il percorso dell’energia o del segnale, poi si cerca dove si ferma o si deforma.",
          "La parte difficile non è usare il puntale: è scegliere dove misurare e cosa significa il risultato. Questo corso serve proprio a costruire quella capacità.",
          "La riparazione è l’ultimo passo. Prima viene la diagnosi. Saldare senza diagnosi è spesso solo cambiare pezzi sperando."
        ],
        "lab": [
          "Per ogni guasto futuro scrivi: sintomo, ipotesi, misura, risultato, conclusione.",
          "Non saltare subito alla soluzione.",
          "Ogni misura deve rispondere a una domanda precisa."
        ],
        "quiz": [
          {
            "id": "q1",
            "prompt": "La sequenza corretta di diagnosi è più simile a...",
            "options": [
              "Sintomo → ipotesi → misura → interpretazione",
              "Compra pezzi → dissaldali → spera",
              "Misura casuale → conclusione casuale",
              "Sostituisci tutto"
            ],
            "correctIndex": 0,
            "explanation": "La diagnosi è un processo guidato da ipotesi e misure."
          },
          {
            "id": "q2",
            "prompt": "La parte più difficile di una misura è spesso...",
            "options": [
              "Sapere dove misurare e interpretare il risultato",
              "Tenere il multimetro acceso",
              "Guardare il colore del display",
              "Trovare una vite"
            ],
            "correctIndex": 0,
            "explanation": "Il valore da solo non basta: bisogna dargli significato nel circuito."
          },
          {
            "id": "q3",
            "prompt": "Saldare senza diagnosi rischia di...",
            "options": [
              "Diventare cambio pezzi a tentativi",
              "Essere sempre perfetto",
              "Evitare errori",
              "Sostituire la teoria"
            ],
            "correctIndex": 0,
            "explanation": "La saldatura è uno strumento; la diagnosi decide cosa fare."
          }
        ]
      }
    ]
  }
]

export const allLessons = courseModules.flatMap((module) => module.lessons)
