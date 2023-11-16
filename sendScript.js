async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 30);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
CAPÍTULO 1
Deus cria esta Terra e seu céu e todas
as formas de vida em seis dias — Descrevem-se os atos de criação de cada
dia — Deus cria o homem, macho e
fêmea, à Sua própria imagem — Ao
homem é dado domínio sobre todas as
coisas e ele recebe mandamento de se
multiplicar e de encher a Terra.
NO aprincípio, b
Deus c
criou os
dcéus e a e
terra.
2 E a terra era sem a forma e
vazia; e havia trevas sobre a face
do abismo; e o Espírito de Deus
se movia sobre a face das águas.
3 E disse Deus: Haja aluz; e
houve luz.
4 E viu Deus que era aboa a luz;
e fez Deus separação entre a luz
e as trevas.
5 E Deus chamou à luz Dia; e às
trevas chamou Noite. E foi a tarde
e a manhã, o adia primeiro.
6 E disse Deus: Haja uma aexpansão no meio das águas, e haja
separação entre águas e águas.
7 E fez Deus a expansão, e fez
separação entre as águas que estavam debaixo da expansão e as
águas que estavam sobre a expansão; e assim foi.
8 E chamou Deus à expansão aCéus, e foi a tarde e a manhã, o
dia segundo.
9 E disse Deus: Ajuntem-se as
águas debaixo dos céus anum
lugar, e apareça a porção seca; e
assim foi.
10 E chamou Deus à porção seca
Terra; e ao ajuntamento das águas
chamou Mares; e viu Deus que
era bom.
11 Disse Deus: Produza a terra arelva, erva que dê semente, árvore frutífera que dê fruto segundo
a sua espécie, cuja semente esteja
nela sobre a terra; e assim foi.
12 E a terra produziu relva, e
erva dando semente conforme a
sua espécie, e a árvore frutífera,
cuja semente estava nela conforme a sua espécie; e viu Deus que
era bom.
13 E foi a tarde e a manhã, o dia
terceiro.
14 E disse Deus: Haja luminares na expansão dos céus, para
haver separação entre o dia e a
noite; e sejam eles para asinais, e 
para tempos determinados, e para
dias e anos.
15 E sejam para luminares na
expansão dos céus, para alumiar
a terra; e assim foi.
16 E fez Deus os dois grandes
luminares: o a luminar maior
para governar o dia, e o luminar
menor para governar a noite; e as
b
estrelas.
17 E Deus os pôs na expansão
dos céus para alumiar a terra,
18 E para governar o dia e a
noite, e para fazer separação entre
a luz e as trevas; e viu Deus que
era bom.
19 E foi a tarde e a manhã, o dia
quarto.
20 E disse Deus: Produzam as
águas abundantemente répteis
de alma vivente; e voem as aves
sobre a face da expansão dos céus.
21 E Deus criou as agrandes baleias, e todo réptil de alma vivente que as águas abundantemente
produziram, conforme as suas
espécies; e toda ave de asas conforme a sua espécie; e viu Deus
que era bom.
22 E Deus as abençoou, dizendo:
Frutificai e multiplicai-vos, e enchei as águas nos mares; e as aves
se multipliquem na terra.
23 E foi a tarde e a manhã, o dia
quinto.
24 E disse Deus: Produza a terra
criatura vivente conforme a sua
espécie; gado, e répteis, e feras
da terra conforme a sua espécie;
e assim foi.
25 E fez Deus as feras da terra
conforme a sua espécie, e o gado
conforme a sua espécie, e todo réptil da terra conforme a sua espécie;
e viu Deus que era bom.
26 E disse Deus: aFaçamos o
b
homem à nossa c
imagem, conforme a nossa semelhança; e d
domine
sobre os peixes do mar, e sobre
as aves dos céus, e sobre o gado,
e sobre toda a terra, e sobre todo
réptil que se move sobre a terra.
27 E criou Deus o homem à sua
imagem, à imagem de Deus o
criou, macho e afêmea os criou.
28 E Deus os abençoou, e Deus
lhes disse: aFrutificai e b
multiplicai-vos, e c
enchei a terra, e sujeitai-a; e dominai sobre os peixes
do mar, e sobre as aves dos céus,
e sobre todo animal que se move
sobre a terra.
29 E disse Deus: Eis que vos dei
toda erva que dá semente, que está
sobre a face de toda a terra, e toda
árvore, em que há fruto de árvore que dá semente; ser-vos-á para
amantimento.
30 E a todo animal da terra, e a
toda ave dos céus, e a todo réptil
16 a Mois. 2:16.
 b Abr. 3:2–3.
21 a Abr. 4:20–21.
26 a Abr. 4:26–27.
GEE Criação, Criar;
Trindade.
 b OU ser humano.
GEE Adão;
Homem, Homens.
 c Mos. 7:27;
Ét. 3:14–17;
Mois. 2:26–28; 6:9–10.
GEE Corpo.
 d D&C 49:18–21;
104:11–14, 17.
GEE Homem,
Homens — Seu
potencial de se tornar
como o Pai Celestial;
Mordomia, Mordomo.
27 a GEE Mulher, Mulheres.
28 a GEE Criança(s);
Filho(s).
 b GEE Casamento, Casar;
Controle da
Natalidade.
 c 1 Né. 17:36.
29 a HEB alimento.
GEE Palavra de
Sabedoria.
GÊNESIS 1:15–30 2

sobre a terra, em que há alma vivente, eu dei toda erva verde para
mantimento; e assim foi.
31 E viu Deus tudo quanto tinha
feito, e eis que era muito abom;
e foi a tarde e a manhã, o dia
b
sexto.
CAPÍTULO 2
A Criação é concluída — Deus descansa no sétimo dia — Explica-se
a prévia criação espiritual — Adão
e Eva são colocados no Jardim do
Éden — É-lhes proibido comer do
fruto da árvore do conhecimento do
bem e do mal — Adão dá nome a toda
criatura vivente — Adão e Eva são
casados pelo Senhor.
ASSIM, os céus, e a terra, e todo o
seu exército foram acabados.
2 E havendo Deus acabado no
dia sétimo a sua obra, que tinha
feito, adescansou no sétimo dia
de toda a sua obra, que tinha
feito.
3 E abençoou Deus o a
dia sétimo,
e o b
santificou, porque nele c
descansou de toda a sua obra, que
Deus criara e fizera.
4 Estas são as aorigens dos céus
e da terra, quando foram b
criados,
no dia em que o c
SENHOR Deus fez
a terra e os céus;
5 E toda planta do campo que aainda não estava na terra, e toda
erva do campo que ainda não brotava; porque o SENHOR Deus não
tinha feito chover sobre a terra,
e não havia homem para lavrar
a terra.
6 Um avapor, porém, subia da
terra e regava toda a face da terra.
7 E aformou o SENHOR Deus o
homem do b
pó da terra, e soprou
em suas narinas o c
fôlego da vida;
e o d
homem foi feito e
alma vivente.
8 E plantou o SENHOR Deus um
jardim no aÉden, a oriente, e pôs
ali o homem que tinha formado.
9 E o SENHOR Deus fez brotar
da terra toda árvore agradável à
vista e boa para comida; e a aárvore da vida no meio do jardim,
e a árvore do bconhecimento do
bem e do mal.
10 E saía um rio do Éden para
regar o jardim; e dali se dividia e
se tornava em quatro braços.
11 O nome do primeiro é Pisom;
este é o que rodeia toda a terra de
Havilá, onde há ouro.
12 E o ouro dessa terra é bom; ali
há o bdélio, e a pedra ônix.
31 a 1 Tim. 4:4;
Morô. 7:12–14;
D&C 59:16–20.
 b Abr. 4:31.
2 2 a HEB parou, cessou;
do verbo shavat; o
substantivo shabat (em
português: Sábado)
significa interrupção
ou cessação.
Abr. 5:1–3.
GEE Descansar,
Descanso.
 3 a GEE Dia do Sábado
(Dia de Descanso).
 b Êx. 20:8–11; D&C 77:12.
GEE Santidade;
Santo (adjetivo).
 c Êx. 31:17.
 4 a HEB gerações.
 b Abr. 5:4–5.
 c GEE Jeová;
Jesus Cristo;
Senhor.
 5 a Mois. 3:4–5.
GEE Criação Espiritual;
Vida Pré-mortal.
 6 a HEB inundação,
correnteza.
 7 a GEE Criação, Criar.
 b Mórm. 9:17;
D&C 93:33–35;
Mois. 6:59.
 c Abr. 5:7–8.
GEE Espírito.
 d Mois. 1:34.
GEE Adão.
 e D&C 88:15.
GEE Alma.
 8 a GEE Éden.
 9 a GEE Árvore da Vida.
 b GEE Conhecimento.
3 GÊNESIS 1:31–2:12

13 E o nome do segundo rio é
Giom; este é o que rodeia toda a
terra de aCuxe.
14 E o nome do terceiro rio é
Tigre; este é o que vai para o oriente da Assíria; e o quarto rio é o
Eufrates.
15 E tomou o SENHOR Deus
o homem e o pôs no jardim do
aÉden para o lavrar e o guardar.
16 E a
ordenou o SENHOR Deus ao
homem, dizendo: De toda árvore
do jardim comerás b
livremente,
17 Mas da aárvore do bconhecimento do bem e do mal, dela
não comerás, porque no c
dia em
que dela comeres, certamente
dmorrerás.
18 E disse o SENHOR Deus: Não é
bom que o homem esteja asó; farlhe-ei uma adjutora que lhe seja
adequada.
19 Havendo, pois, o SENHOR
Deus formado da terra todo animal do campo, e toda ave dos
céus, levou-os a aAdão, para ver
como ele os chamaria; e tudo o
que Adão chamou cada criatura
vivente, isso foi o seu b
nome.
20 E Adão deu nome a todo o
gado, e às aves dos céus, e a todo
animal do campo; mas para o
homem não se achava adjutora
que lhe fosse adequada.
21 Então o SENHOR Deus fez cair
um sono pesado sobre Adão, e
este adormeceu; e tomou uma das
suas costelas e fechou a carne em
seu lugar;
22 E da costela que o SENHOR
Deus tomou do homem, formou
uma amulher, e levou-a a Adão.
23 E disse Adão: Esta é agora
osso dos meus ossos e acarne da
minha carne; esta será chamada
mulher, porquanto do homem foi
tomada.
24 Portanto, deixará o homem
o seu pai e a sua mãe, e aapegarse-á à sua b
mulher, e serão ambos c
uma carne.
25 E ambos estavam nus, o
homem e a sua mulher, e não se
envergonhavam.
CAPÍTULO 3
A serpente (Lúcifer) engana Eva —
Eva e depois Adão comem do fruto
proibido — A Semente da mulher
(Cristo) ferirá a cabeça da serpente —
Explica-se o papel da mulher e o do
homem — Adão e Eva são expulsos
do Jardim do Éden — Adão preside — Eva torna-se a mãe de todos
os viventes.
ORA, a aserpente era mais b
astuta
que todos os animais do campo
13 a OU Etiópia.
15 a GEE Éden.
16 a GEE Mandamentos de
Deus.
 b GEE Arbítrio.
17 a 2 Né. 2:15–16.
 b GEE Conhecimento.
 c Abr. 5:13.
 d Mois. 3:17.
GEE Mortal,
Mortalidade;
Morte Espiritual;
Morte Física;
Queda de Adão e Eva.
18 a Mois. 3:18.
19 a Mois. 3:19.
GEE Adão.
 b GEE Linguagem.
22 a GEE Criação, Criar; Eva;
Mulher, Mulheres.
23 a Jacó 2:21.
24 a D&C 42:22; 49:15–16.
GEE Castidade.
 b GEE Família.
 c GEE Casamento, Casar;
Unidade.
3 1 a GEE Diabo.
 b OU esperta, ardilosa.
2 Cor. 11:3;
Al. 12:4; Mois. 4:1–7.
GÊNESIS 2:13–3:1 4

que o SENHOR Deus tinha feito. E
esta disse à mulher: É assim que
Deus disse: Não comereis de toda
a árvore do jardim?
2 E disse a mulher à serpente: Do
fruto das árvores do jardim podemos comer,
3 Mas do fruto da aárvore que
está no meio do jardim, disse
Deus: Não comereis dele, nem nele
tocareis, para que não morrais.
4 Então a serpente disse à mulher: aCertamente não morrereis.
5 Porque Deus sabe que no dia
em que dele comerdes se abrirão os vossos aolhos, e sereis
como Deus, b
conhecendo o bem e
o mal.
6 E viu a mulher que aquela
árvore era boa para se comer, e a
agradável aos olhos, e árvore b
desejável para dar entendimento;
tomou do seu fruto, e c
comeu, e
deu também a seu marido que estava com ela, e ele comeu.
7 Então foram abertos os olhos
de ambos, e souberam que estavam anus; e coseram folhas de figueira,
e fizeram para si b
aventais.
8 E ouviram a voz do SENHOR
Deus, que passeava no jardim
apela viração do dia; e esconderam-se Adão e sua mulher da presença do SENHOR Deus, entre as
árvores do jardim.
9 E o SENHOR Deus chamou
Adão, e disse-lhe: Onde estás?
10 E ele disse: Ouvi a tua voz no
jardim e temi, porque estava nu,
e escondi-me.
11 E Deus disse: Quem te disse
que estavas nu? Comeste tu da
árvore de que te ordenei que não
comesses?
12 Então disse Adão: A mulher
que me deste por companheira,
ela me deu da árvore, e eu comi.
13 E disse o SENHOR Deus à mulher: Que é isto que fizeste? E disse
a mulher: A serpente me aenganou, e eu comi.
14 E o SENHOR Deus disse à aserpente: Porquanto fizeste isso,
bmaldita serás mais que todo o
gado, e mais que todos os animais
do campo; sobre o teu ventre andarás, e pó comerás todos os dias
da tua vida.
15 E porei ainimizade entre ti e a
mulher, e entre a tua semente e a
sua semente; b
esta te c
ferirá a cabeça, e tu lhe dferirás o calcanhar.
 3 a Gên. 2:17; Al. 12:21–32;
Mois. 3:16–17.
 4 a HEB (expressão
enfática) Morrer, não
morrereis.
GEE Morte Espiritual;
Morte Física.
 5 a Mois. 5:10–11.
GEE Olho(s).
 b 2 Né. 2:18, 26;
Al. 29:5;
Morô. 7:15–19.
GEE Conhecimento.
 6 a IE Expressão idiomática
hebraica que significa
“algo desejável.”
 b Mois. 4:12.
 c D&C 29:39–42.
GEE Queda de Adão
e Eva.
 7 a Gên. 2:25.
 b HEB algo para cobrir
o corpo.
GEE Recato.
 8 a HEB no vento do dia;
i.e., na hora da brisa
vespertina.
13 a GEE Tentação, Tentar.
14 a GEE Lúcifer.
 b GEE Amaldiçoar,
Maldições.
15 a Mois. 4:21.
GEE Inimizade.
 b HEB ele.
 c HEB esmagar, moer.
Rom. 16:20;
D&C 19:2–3.
GEE Redentor.
 d Isa. 53:10–12.
5 GÊNESIS 3:2–15

16 E à amulher disse: b
Multiplicarei grandemente a tua c
dor e a
tua concepção; com dor darás à
luz dfilhos; e o teu desejo será para
o teu e
marido, e ele te f
dominará.
17 E a Adão disse: Porquanto
deste ouvidos à voz de tua mulher e comeste da árvore de que
te ordenei, dizendo: Não comerás
dela; amaldita é a terra por causa
de ti; com dor comerás dela todos
os dias da tua vida.
18 aEspinhos e cardos também
te produzirá; e comerás a erva do
campo.
19 No a
suor do teu rosto comerás
o teu pão, até que retornes à terra,
porque dela foste tomado; porquanto és b
pó, e ao pó retornarás.
20 E chamou Adão o nome de
sua mulher Eva, porquanto ela
era a amãe de todos os viventes.
21 E fez o SENHOR Deus para
Adão e para sua mulher túnicas
de peles, e os vestiu.
22 Então adisse o SENHOR Deus:
Eis que o b
homem é como um de c
nós, dconhecendo o bem e o mal;
ora, para que não estenda a sua
mão, e tome também da árvore da
vida, e coma, e viva para sempre,
23 O SENHOR Deus, pois, o enviou para fora do jardim do a
Éden,
para lavrar a terra de que fora
tomado.
24 E havendo lançado para fora o
homem, pôs aquerubins a oriente
do jardim do Éden, e uma espada
flamejante, que se revolvia para
todos os lados, para guardar o caminho da b
árvore da vida.
CAPÍTULO 4
Eva dá à luz Caim e Abel — Eles oferecem sacrifícios — Caim mata Abel e
é amaldiçoado pelo Senhor, que também lhe coloca um sinal — Os filhos
dos homens se multiplicam — Adão
gera Sete, e Sete gera Enos.
E ADÃO conheceu sua mulher Eva,
e ela concebeu e deu à luz aCaim,
e disse: Alcancei do SENHOR um
homem.
2 E também deu à luz seu irmão a
Abel; e Abel foi pastor de ovelhas,
e Caim foi lavrador da terra.
3 E aconteceu ao cabo de dias
que Caim trouxe do fruto da terra
uma oferta ao SENHOR.
4 E Abel também trouxe dos a
primogênitos das suas ovelhas e da
16 a GEE Eva;
Mãe.
 b HEB aumentarei o
teu desconforto e o
teu tamanho; i.e., na
condição e no processo
de gravidez.
 c GEE Adversidade.
 d 2 Né. 2:23.
GEE Criança(s);
Filho(s).
 e GEE Casamento, Casar.
 f Ef. 5:21–25.
17 a GEE Amaldiçoar,
Maldições.
18 a GEE Adversidade.
19 a Mois. 4:23–25.
 b Mos. 2:25–26.
GEE Criação, Criar.
20 a GEE Mãe.
22 a Mois. 4:28.
 b GEE Homem,
Homens — Seu
potencial de se tornar
como o Pai Celestial.
 c GEE Trindade.
 d Al. 12:31.
GEE Arbítrio;
Conhecimento;
Consciência;
Discernimento, Dom
de.
23 a GEE Éden.
24 a GEE Querubins.
 b Al. 42:2–5.
GEE Árvore da Vida.
4 1 a Mois. 5:2–3.
GEE Caim.
 2 a Mois. 5:17.
GEE Abel.
 4 a Mois. 5:7.
GEE Jesus Cristo —
Simbolismos ou
símbolos de Cristo;
Sacrifício.
GÊNESIS 3:16–4:4 6

sua gordura; e atentou o SENHOR
para Abel e para a sua b
oferta,
5 Mas para Caim e para a sua a
oferta não atentou. E irou-se Caim
fortemente e descaiu-lhe o seu
semblante.
6 E o SENHOR disse a Caim: Por
que te iraste? E por que descaiu o
teu semblante?
7 Se procederes bem, não haverá aaceitação para ti? Se b
não procederes bem, o c
pecado jaz à porta,
e para ti será o dseu desejo, e sobre
ele dominarás.
8 E falou Caim com o seu irmão
Abel; e sucedeu que, estando eles
no campo, se levantou Caim contra o seu irmão Abel, e o amatou.
9 E disse o SENHOR a Caim: Onde
está teu irmão Abel? E ele disse:
Não sei; sou eu guardador do meu
irmão?
10 E disse Deus: Que fizeste?
A voz do asangue do teu irmão
clama a mim desde a terra.
11 E agora amaldito és tu desde
a b
terra, que abriu a sua boca para
receber da tua mão o sangue do
teu irmão.
12 Quando lavrares a terra, não
te dará mais a sua força; fugitivo
e errante serás na terra.
13 E disse Caim ao SENHOR: aÉ
maior a minha maldade que a que
possa ser perdoada.
14 Eis que hoje me lanças da
face da terra, e da tua face me
esconderei; e serei fugitivo e errante na terra, e acontecerá que
todo aquele que me achar me
matará.
15 O SENHOR, porém, disse-lhe:
Portanto, qualquer que matar
Caim sete vezes será castigado. E
pôs o SENHOR um sinal em Caim,
para que não o matasse qualquer
que o achasse.
16 E saiu Caim de diante da a
face
do SENHOR e habitou na terra de
Node, a oriente do Éden.
17 E conheceu Caim sua mulher,
e ela concebeu e deu à luz aEnoque; e ele edificou uma cidade e
chamou o nome da cidade pelo
nome de seu filho Enoque.
18 E a Enoque nasceu Irade, e
Irade gerou Meujael, e Meujael
gerou Metusael, e Metusael gerou
Lameque.
19 E tomou Lameque para si
duas mulheres: o nome de uma
era Ada, e o nome da outra, Zilá.
20 E Ada deu à luz Jabal; este foi
o pai dos que habitam em tendas
e têm gado.
21 E o nome do seu irmão era
4 b GEE Oferta.
 5 a Prov. 15:8;
Mois. 5:16–21.
 7 a D&C 97:8.
GEE Abençoado,
Abençoar, Bênção.
 b GEE Arbítrio.
 c GEE Pecado.
 d Mois. 5:23–24.
GEE Diabo.
 8 a Mois. 5:32–33.
GEE Homicídio;
Mártir, Martírio.
10 a GEE Sangue.
11 a GEE Amaldiçoar,
Maldições.
 b GEE Terra — Uma
entidade viva.
13 a OU Meu castigo é
maior do que eu possa
suportar.
D&C 134:8;
Mois. 5:38–41.
GEE Condenação,
Condenar.
16 a Mois. 6:49.
17 a IE Não confundir o
Enoque da linhagem
de Caim, e a cidade
que leva o seu nome,
com o Enoque da
linhagem de Sete e
a cidade (Sião) que
leva seu nome.
Mois. 6:21–7:69.
7 GÊNESIS 4:5–21

Jubal; este foi o pai de todos os
que tocam harpa e flauta.
22 E Zilá também deu à luz Tubalcaim, mestre de toda a obra
de abronze e de ferro; e a irmã de
Tubalcaim foi Noema.
23 E disse Lameque a suas mulheres: Ada e Zilá, ouvi a minha
voz; vós, mulheres de Lameque,
escutai as minhas palavras; porque eu amatei um homem por
minha ferida, e um jovem por
minha pisadura.
24 Porque sete vezes Caim será
castigado, mas aLameque, setenta
vezes sete.
25 E tornou Adão a conhecer sua
mulher; e ela deu à luz um filho
e chamou o seu nome aSete; porque, disse ela, Deus me deu outra
semente em lugar de Abel, porquanto Caim o matou.
26 E a Sete também nasceu um
filho, e chamou o seu nome Enos;
então se começou a ainvocar o
nome do b
SENHOR.
CAPÍTULO 5
As gerações de Adão são: Adão, Sete,
Enos, Cainã, Maalalel, Jarede, Enoque (que andou com Deus), Matusalém, Lameque e Noé (que gerou Sem,
Cão e Jafé).
ESTE é o alivro das bgerações de
Adão. No dia em que Deus c
criou
o homem, à semelhança de Deus
o fez;
2 Macho e fêmea os criou, e os
abençoou, e achamou o seu nome
Adão, no dia em que foram
criados.
3 E Adão viveu cento e trinta
anos e gerou um filho à sua semelhança, conforme a sua imagem, e
chamou o seu nome aSete.
4 E foram os dias de Adão, depois que gerou Sete, oitocentos
anos; e gerou filhos e filhas.
5 E foram todos os dias que Adão
viveu novecentos e trinta anos; e
morreu.
6 E viveu Sete cento e cinco anos,
e gerou Enos.
7 E viveu Sete, depois que gerou
Enos, oitocentos e sete anos; e
gerou filhos e filhas.
8 E foram todos os dias de Sete
novecentos e doze anos; e morreu.
9 E viveu Enos noventa anos, e
gerou Cainã.
10 E viveu Enos, depois que
gerou Cainã, oitocentos e quinze
anos; e gerou filhos e filhas.
11 E foram todos os dias de Enos
novecentos e cinco anos; e morreu.
12 E viveu Cainã setenta anos, e
gerou Maalalel.
13 E viveu Cainã, depois que
gerou Maalalel, oitocentos e
22 a HEB bronze, latão e
cobre.
23 a GEE Combinações
Secretas.
24 a Mois. 5:48–54.
25 a HEB Sheth; i.e.
Designado.
Mois. 6:2–4.
GEE Sete.
26 a GEE Oração.
 b GEE Jeová;
Jesus Cristo.
5 1 a Mois. 6:5–9.
GEE Livro de
Recordações.
 b D&C 107:41–57.
GEE Genealogia.
 c GEE Criação, Criar.
 2 a No hebraico, adão
é também um
substantivo comum
que significa homem
ou ser humano.
GEE Adão.
 3 a D&C 107:42–43.
GEE Sete.
GÊNESIS 4:22–5:13 8

quarenta anos; e gerou filhos e
filhas.
14 E foram todos os dias de aCainã novecentos e dez anos; e
morreu.
15 E viveu Maalalel sessenta e
cinco anos, e gerou Jarede.
16 E viveu Maalalel, depois que
gerou Jarede, oitocentos e trinta
anos; e gerou filhos e filhas.
17 E foram todos os dias de Maalalel oitocentos e noventa e cinco
anos; e morreu.
18 E viveu Jarede cento e sessenta e dois anos, e gerou Enoque.
19 E viveu Jarede, depois que
gerou Enoque, oitocentos anos; e
gerou filhos e filhas.
20 E foram todos os dias de Jarede novecentos e sessenta e dois
anos; e morreu.
21 E viveu Enoque sessenta e
cinco anos, e gerou Matusalém.
22 E aEnoque b
andou com Deus,
depois que gerou c
Matusalém, trezentos anos; e gerou filhos e filhas.
23 E foram todos os dias de Enoque trezentos e sessenta e cinco
anos.
24 E Enoque a
andou com Deus; e
não estava mais, porquanto Deus
para si o b
tomou.
25 E viveu Matusalém cento
e oitenta e sete anos, e gerou
Lameque.
26 E viveu Matusalém, depois
que gerou Lameque, setecentos e
oitenta e dois anos; e gerou filhos
e filhas.
27 E foram todos os dias de Matusalém novecentos e sessenta e
nove anos; e morreu.
28 E viveu Lameque cento e oitenta e dois anos; e gerou um filho,
29 E chamou o seu nome aNoé,
dizendo: Este nos b
consolará acerca de nossas obras, e da labuta de
nossas mãos, por causa da terra
que o SENHOR c
amaldiçoou.
30 E viveu Lameque, depois
que gerou Noé, quinhentos e noventa e cinco anos; e gerou filhos
e filhas.
31 E foram todos os dias de Lameque setecentos e setenta e sete
anos; e morreu.
32 E era Noé da idade de quinhentos anos; e Noé gerou aSem,
Cão e Jafé.
CAPÍTULO 6
Os filhos de Deus se casam com as
filhas dos homens — Os homens tornam-se iníquos; a Terra enche-se de
violência; toda carne é corrompida —
Anuncia-se o dilúvio — Deus estabelece Seu convênio com Noé, que
constrói uma arca para salvar sua
família e vários seres viventes.
E ACONTECEU que, quando os homens começaram a multiplicar-se
sobre a face da terra e lhes nasceram filhas,
14 a D&C 107:45.
22 a Mois. 6:25–36.
GEE Enoque.
 b D&C 107:48–49.
 c GEE Matusalém.
24 a GEE Andar, Andar com
Deus.
 b Mois. 7:68–69.
GEE Seres
Transladados; Sião.
29 a HEB Descanso,
Repouso. GEE Noé,
Patriarca Bíblico.
 b Mois. 8:19–20.
 c GEE Amaldiçoar,
Maldições.
32 a GEE Cão; Jafé;
Sem.
9 GÊNESIS 5:14–6:1

2 Viram os a
filhos de Deus que as
filhas dos homens eram formosas;
e b
tomaram para si c
mulheres de
todas as que escolheram.
3 Então disse o SENHOR: O
meu aespírito não bpermanecerá para sempre no homem, porque ele também é c
carne, porém
os seus dias serão cento e vinte
anos.
4 Havia naqueles dias gigantes
na terra; e também depois, quando os filhos de Deus se achegaram
às filhas dos homens, e delas geraram filhos; esses eram os valentes que houve na antiguidade, os
homens de fama.
5 E viu o SENHOR que a a
maldade
do homem se multiplicara sobre a
terra, e que b
toda a imaginação dos c
pensamentos de seu dcoração era
só má continuamente.
6 aE arrependeu-se o SENHOR de
haver feito o homem sobre a terra,
e b
pesou-lhe em seu coração.
7 E disse o SENHOR: aDestruirei o homem que criei de sobre a
face da terra, desde o homem até
o animal, até o réptil, e até a ave
dos céus, bporque me arrependo
de os haver feito.
8 Noé, porém, achou agraça aos
olhos do SENHOR.
9 Estas são as gerações de Noé;
Noé era homem justo e aperfeito
em suas gerações; Noé bandava
com Deus.
10 E gerou Noé três filhos: Sem,
Cão e Jafé.
11 A terra, porém, estava acorrompida diante da face de Deus;
e encheu-se a terra de b
violência.
12 E viu Deus a terra, e eis que
estava corrompida; porque toda
a acarne havia corrompido o seu
b
caminho sobre a terra.
13 Então disse Deus a Noé: O fim
de toda a carne chegou perante a
minha face, porque a terra está
cheia de aviolência; e eis que os
b
desfarei c
com a terra.
14 Faze para ti uma aarca da madeira de gofer; farás bcompartimentos na arca e a betumarás por
dentro e por fora com betume.
15 E desta maneira a farás: De
trezentos côvados o comprimento
da arca, e de cinquenta côvados a
6 2 a GEE Filhos e Filhas de
Deus.
 b GEE Casamento,
Casar — Casamento
entre pessoas de
religiões diferentes.
 c Mois. 8:13–15.
 3 a GEE Espírito Santo.
 b 2 Né. 26:11.
 c Mois. 8:17.
 5 a Mois. 7:36–37; 8:22.
GEE Iniquidade, Iníquo.
 b Mt. 15:19; Al. 12:14.
 c GEE Pensamentos.
 d GEE Coração.
 6 a TJS Gên. 8:13 E
arrependeu-se Noé, e
doeu-lhe o seu coração
por haver o Senhor feito
o homem (. . .)
3 Né. 27:32;
Mois. 8:25–26.
 b Mois. 7:28–40.
GEE Compaixão.
 7 a Gên. 7:23.
GEE Terra —
Purificação da Terra.
 b TJS Gên. 8:15 Porque
Noé se arrependeu por
eu os haver criado (. . .)
 8 a GEE Graça.
 9 a HEB completo, inteiro,
íntegro.
Mois. 8:27.
GEE Perfeito;
Santo (adjetivo).
 b GEE Andar, Andar com
Deus.
11 a GEE Imundície,
Imundo.
 b Mois. 7:32–34.
12 a D&C 38:11–12.
 b D&C 132:22–25;
Mois. 8:29–30.
GEE Caminho.
13 a GEE Guerra.
 b 3 Né. 9:9.
 c IE Em alguns textos
hebraicos: da terra.
14 a GEE Arca.
 b HEB ninhos.
GÊNESIS 6:2–15 10

sua largura, e de trinta côvados a
sua altura.
16 Farás na arca uma a
janela, e de
um b
côvado a acabarás em cima; e
a porta da arca porás ao seu lado;
far-lhe-ás andares baixos, segundos
e terceiros.
17 Porque eis que eu trago um adilúvio de águas sobre a bterra,
para desfazer toda a carne em
que há fôlego de vida debaixo
dos céus; tudo o que há na terra
expirará.
18 Mas contigo estabelecerei o ameu b
convênio; e tu entrarás na
arca, e os teus filhos, e a tua mulher, e as mulheres de teus filhos
contigo.
19 E de tudo o que vive, de toda
a carne, dois de cada espécie, farás
entrar na arca, para os conservar
vivos contigo; macho e fêmea
serão.
20 Das aves conforme a sua espécie, e dos animais conforme a
sua espécie, de todo réptil da terra
conforme a sua espécie, dois de
cada espécie virão a ti, para os conservar em vida.
21 E tu toma para ti de toda a comida que se come, e ajunta-a para
ti; e te será para mantimento para
ti e para eles.
22 Assim afez bNoé; conforme
tudo o que Deus lhe c
mandou,
assim o fez.
CAPÍTULO 7
A família de Noé e vários animais
e aves entram na arca — Chega o
dilúvio, e as águas cobrem toda a
Terra — Todos os demais seres vivos
que respiram são destruídos.
DEPOIS disse o SENHOR a aNoé:
Entra tu e toda a tua casa na arca,
porque vi que eras justo diante de
mim nesta geração.
2 De todo animal limpo tomarás para ti sete pares, o macho e
sua fêmea; mas dos animais que
não são limpos, um par, o macho
e sua fêmea.
3 Também das aves dos céus sete
pares, macho e fêmea, para conservar em vida a semente sobre a
face de toda a terra.
4 Porque, passados ainda sete
dias, farei chover sobre a terra
quarenta dias e quarenta noites;
e desfarei de sobre a face da terra
atoda substância viva que fiz.
5 E Noé a
fez conforme tudo o que
o SENHOR lhe ordenara.
6 E era Noé da idade de seiscentos anos, quando o dilúvio das
águas veio sobre a terra.
7 E entraram aNoé, e seus filhos,
16 a HEB tsohar; alguns
rabinos acreditavam
que era uma pedra
preciosa que brilhava
na arca.
Ét. 2:23–24.
 b IE antiga unidade
de medida de
comprimento.
17 a GEE Dilúvio no Tempo
de Noé.
 b GEE Terra —
Purificação da Terra.
18 a TJS Gên. 8:23–24 (. . .)
meu convênio, assim
como eu jurei ao teu
pai, Enoque, que da tua
posteridade virão todas as
nações. E tu (. . .)
 b GEE Convênio.
22 a GEE Obedecer,
Obediência, Obediente.
 b Heb. 11:7.
 c GEE Mandamentos de
Deus.
7 1 a 1 Ped. 3:20.
 4 a GEE Terra —
Purificação da Terra.
 5 a Heb. 11:7.
 7 a Mois. 7:42.
11 GÊNESIS 6:16–7:7

e sua mulher, e as mulheres de
seus filhos com ele na arca, por
causa das águas do dilúvio.
8 Dos animais limpos, e dos animais que não são limpos, e das
aves, e de todo réptil sobre a terra,
9 Entraram de dois em dois para
junto de Noé na arca, macho e
fêmea, como Deus ordenara a Noé.
10 E aconteceu que, passados
sete dias, vieram sobre a terra as
águas do adilúvio.
11 No ano seiscentos da vida de
Noé, no mês segundo, aos dezessete dias do mês, naquele mesmo
dia se romperam todas as fontes
do grande abismo, e as janelas dos
céus se abriram.
12 E houve chuva sobre a terra
quarenta dias e quarenta noites.
13 E no mesmo dia entraram
Noé, e Sem, e Cão, e Jafé, os filhos
de Noé, como também a mulher
de Noé, e as três mulheres de seus
filhos com ele na arca,
14 Eles, e todo animal conforme
a sua espécie, e todo o gado conforme a sua espécie, e todo réptil
que rasteja sobre a terra conforme
a sua espécie, e toda ave conforme a sua espécie, todo pássaro de
todo tipo.
15 E de toda a carne, em que
havia fôlego de vida, entraram
de dois em dois para junto de Noé
na arca.
16 E os que entraram, macho e
fêmea de toda a carne entraram,
como Deus lhe tinha ordenado; e
o SENHOR o fechou por fora.
17 E esteve o dilúvio quarenta
dias sobre a terra, e cresceram as
águas, e levantaram a arca, e ela
se elevou sobre a terra.
18 E prevaleceram as águas e
cresceram grandemente sobre a
terra; e a arca andava sobre as
águas.
19 E as águas prevaleceram
excessivamente sobre a terra; e
todos os altos montes, que havia
debaixo de todo o céu, foram
cobertos.
20 Quinze côvados acima prevaleceram as águas; e os montes
foram cobertos.
21 E expirou toda a carne que se
movia sobre a terra, tanto de ave
como de gado, e de feras, e de todo
réptil que rasteja sobre a terra, e
atodo homem.
22 Tudo o que tinha afôlego de
vida em suas narinas, tudo o que
havia no seco, morreu.
23 Assim foi adesfeita toda substância viva que havia sobre a face
da terra, desde o homem até o
animal, até o réptil, e até a ave dos
céus; e foram extintos da terra; e
ficaram somente Noé e os que com
ele estavam na arca.
24 E prevaleceram as águas sobre
a terra cento e cinquenta dias.
CAPÍTULO 8
Cessa o dilúvio — Noé solta uma
pomba, que retorna com uma folha
de oliveira — Ele faz todos os seres
viventes saírem da arca — Oferece
10 a GEE Dilúvio no Tempo
de Noé.
21 a OU todos os seres
humanos.
22 a Abr. 5:7.
GEE Espírito.
23 a Mois. 8:26–30.
GÊNESIS 7:8–24 12

sacrifícios — Asseguram-se a semeadura, a ceifa e as estações.
E LEMBROU-SE Deus de aNoé, e de
todo animal, e de todo o gado que
com ele estava na arca; e Deus fez
passar um vento sobre a terra, e
aquietaram-se as águas.
2 Fecharam-se também as fontes
do abismo e as janelas dos céus, e
a chuva dos céus deteve-se.
3 E as águas aescoaram gradualmente de sobre a terra, e ao cabo
de cento e cinquenta dias as águas
minguaram.
4 E a arca repousou no sétimo
mês, no dia dezessete do mês,
sobre os montes de Ararate.
5 E as águas foram minguando
até o décimo mês; no décimo mês,
no primeiro dia do mês, apareceram os cumes dos montes.
6 E aconteceu que, ao cabo de
quarenta dias, abriu Noé a janela
da arca que tinha feito.
7 E soltou um corvo, que saiu,
indo e voltando, até que as águas
secaram de sobre a terra.
8 Depois soltou uma pomba,
para ver se as águas tinham
minguado de sobre a face da
terra.
9 A pomba, porém, não achou
repouso para a planta do seu pé
e voltou a ele para a arca, porque
as águas estavam sobre a face de
toda a terra; e ele estendeu a sua
mão, e tomou-a, e recolheu-a para
junto de si na arca.
10 E esperou ainda outros sete
dias e tornou a enviar a pomba
para fora da arca.
11 E a pomba voltou a ele à tarde;
e eis, arrancada, uma folha de oliveira no seu bico; e soube Noé que
as águas tinham minguado sobre
a terra.
12 Então esperou ainda outros
sete dias; e enviou para fora a
pomba, mas não retornou mais
a ele.
13 E aconteceu que no ano seiscentos e um, no mês primeiro, no
primeiro dia do mês, as águas secaram de sobre a terra; então Noé
tirou a cobertura da arca, e olhou,
e eis que a face da terra estava
enxuta.
14 E no segundo mês, aos vinte
e sete dias do mês, a terra estava
seca.
15 Então falou Deus a Noé,
dizendo:
16 Sai da arca, tu, e tua amulher,
e teus filhos, e as mulheres de teus
filhos contigo.
17 Todo animal que está contigo,
de toda a carne, de ave, e de gado,
e de todo réptil que rasteja sobre
a terra traze para fora contigo; e
povoem abundantemente a terra,
e afrutifiquem, e se multipliquem
sobre a terra.
18 Então saiu Noé, e seus filhos, e
sua mulher, e as mulheres de seus
filhos com ele.
19 Todo animal, todo réptil, e
toda ave, e tudo o que se move
sobre a terra, conforme as suas
famílias, saiu para fora da arca.
8 1 a 2 Ped. 2:5.
 3 a Ét. 13:2.
16 a Mois. 7:42.
17 a Gên. 1:22–25.
13 GÊNESIS 8:1–19

20 aE edificou Noé um altar ao
SENHOR; e tomou de todo animal
limpo, e de toda ave limpa, e ofereceu b
holocaustos sobre o altar.
21 E o SENHOR cheirou o asuave
cheiro, e disse o SENHOR em seu
coração: Não tornarei mais a
b
amaldiçoar a terra por causa do
homem, porque a imaginação do
coração do homem é má desde a
sua meninice, nem tornarei mais a
destruir todo ser vivente, como fiz.
22 Enquanto a terra durar, semeadura e ceifa, e frio e calor, e
verão e inverno, e dia e noite não
cessarão.
CAPÍTULO 9
Noé e seus filhos recebem o mandamento de se multiplicarem e de encherem a Terra — É-lhes dado domínio
sobre todas as formas de vida — Decreta-se a pena de morte por assassinato — Deus nunca mais destruirá
a Terra por meio de um dilúvio —
Canaã é amaldiçoado; Sem e Jafé são
abençoados.
E DEUS abençoou Noé e seus filhos, e disse-lhes: Frutificai e a
multiplicai-vos, e enchei a terra.
2 E o temor de vós e o pavor de
vós serão sobre todo animal da
terra, e sobre toda ave dos céus,
tudo o que se move sobre a terra,
e todos os peixes do mar; na vossa
mão são entregues.
3 Tudo quanto se move, que é
vivente, será para vosso amantimento; assim como a erva verde,
tudo vos dei.
4 aA carne, porém, com sua
vida, isto é, com seu b
sangue, não
comereis.
5 E certamente requererei o vosso
sangue, o sangue da vossa vida; da
mão de todo animal o requererei,
como também da mão do homem,
e da mão do irmão de cada um requererei a vida do homem.
6 Quem aderramar o sangue do
homem, pelo homem o seu sangue
será b
derramado, porque Deus fez
o homem conforme a sua c
imagem.
7 Mas vós, frutificai e multiplicai-vos; povoai abundantemente
a terra e multiplicai-vos nela.
8 E falou Deus a Noé e a seus filhos com ele, dizendo:
9 E eu, eis que aeu estabeleço o
meu b
convênio convosco e com a
vossa semente depois de vós,
10 E com toda alma vivente, que
convosco está, de aves, de gado, e
de todo animal da terra convosco,
desde todos os que saíram da arca,
até todo animal da terra.
11 E eu convosco estabeleço o
20 a TJS Gên. 9:4–6
(Apêndice).
 b GEE Oferta;
Sacrifício.
21 a Êx. 29:18; Ef. 5:2.
 b En. 1:10; Al. 10:22;
3 Né. 22:9.
GEE Amaldiçoar,
Maldições.
9 1 a GEE Controle da
Natalidade.
 3 a GEE Palavra de
Sabedoria.
 4 a TJS Gên. 9:10–15
(Apêndice).
 b Lev. 17:11–14.
GEE Sangue.
 6 a GEE Homicídio.
 b GEE Pena de Morte.
 c Ét. 3:14–16;
Abr. 4:26–27.
 9 a TJS Gên. 9:15 (. . .)
estabelecerei o meu
convênio convosco,
que eu fiz com o vosso pai
Enoque, concernente à
vossa semente depois
de vós.
 b Gên. 6:18.
GEE Convênio.
GÊNESIS 8:20–9:11 14

meu convênio, que não será mais
destruída toda a carne pelas águas
do dilúvio, e que não haverá mais
dilúvio para destruir a aterra.
12 E disse Deus: Este é o sinal do
convênio que ponho entre mim
e vós, e entre toda alma vivente
que está convosco, por gerações
eternas:
13 O meu aarco pus na nuvem,
e esse será por sinal do convênio
entre mim e a terra.
14 E acontecerá que, quando eu
trouxer nuvens sobre a terra, aparecerá o arco nas nuvens;
15 Então me lembrarei do meu
convênio, aque está entre mim e
vós, e entre toda alma vivente de
toda a carne; e as águas não se
tornarão mais em dilúvio para
destruir toda a carne.
16 aE estará o arco nas nuvens,
e eu o verei, para me lembrar do
b
convênio eterno entre Deus e toda
alma vivente de toda a carne que
está sobre a terra.
17 E disse Deus a Noé: Esse é o asinal do convênio que estabeleci
entre mim e entre toda a carne que
está sobre a terra.
18 E os filhos de Noé, que da arca
saíram, foram Sem, e Cão, e Jafé;
e Cão é o pai de Canaã.
19 Esses três foram os filhos de
Noé; e desses se povoou toda a
terra.
20 E começou Noé a ser lavrador
da terra, e plantou uma vinha;
21 E bebeu do vinho, e embebedou-se; e descobriu-se no meio de
sua tenda.
22 E viu Cão, o pai de Canaã, a
nudez do seu pai, e fê-lo saber,
fora, a ambos seus irmãos.
23 Então tomaram Sem e Jafé
uma capa, e puseram-na sobre
ambos os seus ombros, e indo virados para trás, cobriram a nudez
do seu pai, e os seus rostos estavam
virados, de maneira que não viram
a nudez do seu pai.
24 E despertou Noé do seu vinho
e soube o que seu filho menor lhe
fizera.
25 E disse: aMaldito seja b
Canaã;
servo dos servos seja aos seus
irmãos.
26 E disse: Bendito seja o SENHOR
Deus de Sem; e seja-lhe Canaã por
aservo.
27 Alargue Deus a Jafé, e habite nas tendas de Sem; e seja-lhe
Canaã por servo.
28 E viveu Noé, depois do dilúvio, trezentos e cinquenta anos.
29 E foram todos os dias de Noé
novecentos e cinquenta anos; e
morreu.
11 a TJS Gên. 9:16–17 (. . .)
terra. E eu estabelecerei
o meu convênio
convosco, o qual fiz com
Enoque, concernente aos
remanescentes de vossa
posteridade.
Mois. 7:51–52; 8:2–3.
13 a GEE Arco-Íris.
15 a TJS Gên. 9:20 (. . .) que
eu fiz entre mim e vós,
para toda criatura
vivente (. . .)
16 a TJS Gên. 9:21–25
(Apêndice).
 b GEE Novo e Eterno
Convênio.
17 a GEE Sinal.
25 a GEE Amaldiçoar,
Maldições.
 b Mois. 7:8, 22;
Abr. 1:21–25.
26 a TJS Gên. 9:30 (. . .)
servo, e um véu de
escuridão o cobrirá, para
que seja conhecido entre
todos os homens.
15 GÊNESIS 9:12–29

CAPÍTULO 10
Os descendentes de Noé são: Jafé,
cujos descendentes são os gentios;
Cão, cujos descendentes incluem os
cananeus; e Sem, de quem procedeu
Pelegue, em cujos dias foi dividida
a Terra.
ESTAS pois são as agerações dos
filhos de Noé: Sem, Cão, e Jafé;
e nasceram-lhes filhos depois do
dilúvio.
2 Os filhos de Jafé são: Gomer, e
Magogue, e Madai, e Javã, e Tubal,
e Meseque, e Tiras.
3 E os filhos de Gomer são: Asquenaz, e Rifate, e Togarma.
4 E os filhos de Javã são: Elisá, e
Társis, Quitim, e Dodanim.
5 aPor estes foram repartidas as
b
ilhas das c
nações nas suas terras,
cada qual segundo a sua língua,
segundo as suas famílias, entre as
suas nações.
6 E os filhos de aCão são: b
Cuxe,
e c
Mizraim, e Pute, e Canaã.
7 E os filhos de Cuxe são: Sebá,
e Havilá, e Sabtá, e Raamá, e Sabtecá; e os filhos de Raamá são:
Sabá e Dedã.
8 E Cuxe gerou aNinrode; este
começou a ser poderoso na terra.
9 E este foi poderoso caçador diante da face do SENHOR;
pelo que se diz: Como Ninrode, poderoso caçador diante do
SENHOR.
10 E o princípio do seu reino foi
a
Babel, e Ereque, e Acade, e Calné,
na terra de Sinear.
11 Desta mesma terra saiu à Assíria e edificou Nínive, e ReoboteIr, e Calá,
12 E Resém, entre Nínive e Calá
(esta é a grande cidade).
13 E Mizraim gerou Ludim, e
Anamim, e Leabim, e Naftuim,
14 E Patrusim, e Casluim, (donde
saíram os afilisteus) e Caftorim.
15 E Canaã gerou Sidom, seu
primogênito, e Hete;
16 E o jebuseu, e o amorreu, e o
girgaseu,
17 E o heveu, e o arqueu, e o
sineu,
18 E o arvadeu, e o zemareu, e o
hamateu; e depois se espalharam
as famílias dos cananeus.
19 E foi o termo dos cananeus
desde Sidom, indo para Gerar,
até Gaza; indo para Sodoma, e
Gomorra, e Admá, e Zeboim, até
Lasa.
20 Esses são os filhos de Cão, segundo as suas famílias, segundo
as suas línguas, em suas terras, em
suas nações.
21 E a Sem nasceram filhos, e ele
é o pai de todos os filhos de Éber,
e o irmão mais velho de Jafé.
22 Os filhos de Sem são: Elão, e
Assur, e Arfaxade, e Lude, e Arã.
23 E os filhos de Arã são: Uz, e
Hul, e Géter, e Más.
24 E Arfaxade gerou Salá; e Salá
gerou Éber.
10 1 a IE linhagens
genealógicas.
 5 a HEB Destes.
 b OU regiões costeiras e
marítimas.
 c GEE Gentios.
 6 a Abr. 1:21–25.
 b IE etíopes, egípcios,
líbios, cananeus.
 c IE Egito.
 8 a Ét. 2:1.
10 a GEE Babel, Babilônia.
14 a GEE Filisteus.
GÊNESIS 10:1–24 16

25 E a Éber nasceram dois filhos:
o nome de um foi aPelegue, porquanto em seus dias se b
repartiu
a terra, e o nome do seu irmão
foi Joctã.
26 E Joctã gerou Almodá, e Selefe, e Hazarmavé, e Jerá;
27 E Hadorão, e Uzal, e Dicla;
28 E Obal, e Abimael, e Sabá;
29 E Ofir, e Havilá, e Jobabe;
todos esses foram filhos de Joctã.
30 E foi a sua habitação desde
Messa, indo para Sefar, montanha
do oriente.
31 Esses são os filhos de Sem, segundo as suas famílias, segundo
as suas línguas, nas suas terras,
segundo as suas nações.
32 Essas são as famílias dos filhos
de Noé, segundo as suas gerações,
nas suas nações, e desses foram divididas as nações na terra depois
do dilúvio.
CAPÍTULO 11
Todos os homens falam a mesma língua — Eles constroem a torre de
Babel — O Senhor confunde a língua
deles e os dispersa por toda a Terra —
As gerações de Sem incluem Abrão,
cuja esposa era Sarai — Abrão sai de
Ur e se estabelece em Harã.
E ERA toda a terra de uma mesma alíngua, e de uma mesma fala.
2 E aconteceu que, partindo eles
do oriente, acharam um vale na
terra de Sinear; e habitaram ali.
3 E disseram uns aos outros:
Vinde, façamos tijolos, e queimemo-los bem. E foi-lhes o tijolo por
pedra, e o betume por cal.
4 E disseram: Vinde, edifiquemos
para nós uma cidade e uma atorre
cujo cume toque nos céus, e façamo-nos um b
nome, para que não
sejamos espalhados sobre a face
de toda a terra.
5 Então desceu o SENHOR para
ver a cidade e a torre que os filhos
dos homens edificavam;
6 E disse o SENHOR: Eis que
o povo é um, e todos têm uma
mesma língua; e isso é o que começam a fazer; e agora, não haverá restrição para tudo o que eles
intentarem fazer.
7 Vinde, desçamos, e aconfundamos ali a sua língua, para que
não entenda um a língua do outro.
8 Assim, o SENHOR os espalhou
dali sobre a face de toda a terra;
e cessaram de edificar a acidade.
9 Por isso se chamou o seu nome
Babel, porquanto ali aconfundiu o
SENHOR a b
língua de toda a terra, e
dali os c
espalhou o SENHOR sobre
a face de toda a terra.
10 Estas são as a
gerações de Sem;
Sem era da idade de cem anos e
gerou Arfaxade, dois anos depois
do dilúvio.
25 a HEB Divisão.
 b GEE Terra — Divisão
da Terra.
11 1 a Mois. 6:5–6.
 4 a Hel. 6:28.
 b OU memorial.
Mt. 23:12;
D&C 136:19.
 GEE Orgulho.
 7 a Mos. 28:17.
GEE Babel, Babilônia.
 8 a TJS Gên. 11:6 (. . .)
cidade, e eles não deram
ouvidos ao Senhor (. . .)
 9 a HEB balal, “misturar,”
“confundir” (jogo de
palavras com o termo
Babel).
 b GEE Linguagem.
 c Ét. 1:33–43.
10 a GEE Livro de
Recordações;
Sem.
17 GÊNESIS 10:25–11:10

11 E viveu Sem, depois que gerou
Arfaxade, quinhentos anos; e
gerou filhos e filhas.
12 E viveu Arfaxade trinta e
cinco anos, e gerou Salá.
13 E viveu Arfaxade, depois que
gerou Salá, quatrocentos e três
anos; e gerou filhos e filhas.
14 E viveu Salá trinta anos, e
gerou Éber.
15 E viveu Salá, depois que gerou
Éber, quatrocentos e três anos; e
gerou filhos e filhas.
16 E viveu Éber trinta e quatro
anos, e gerou aPelegue;
17 E viveu Éber, depois que
gerou Pelegue, quatrocentos e
trinta anos; e gerou filhos e filhas.
18 E viveu Pelegue trinta anos,
e gerou Reú;
19 E viveu Pelegue, depois que
gerou Reú, duzentos e nove anos;
e gerou filhos e filhas.
20 E viveu Reú trinta e dois anos,
e gerou Serugue;
21 E viveu Reú, depois que gerou
Serugue, duzentos e sete anos; e
gerou filhos e filhas.
22 E viveu Serugue trinta anos,
e gerou Naor;
23 E viveu Serugue, depois que
gerou Naor, duzentos anos; e
gerou filhos e filhas.
24 E viveu Naor vinte e nove
anos, e gerou Terá;
25 E viveu Naor, depois que
gerou Terá, cento e dezenove anos;
e gerou filhos e filhas.
26 E viveu Terá, setenta anos, e
gerou aAbrão, Naor, e Harã.
27 E estas são as gerações de
Terá: Terá gerou Abrão, Naor, e
Harã; e Harã gerou Ló.
28 E morreu Harã estando seu
pai Terá ainda vivo, na terra
do seu nascimento, em aUr dos
b
caldeus.
29 E tomaram Abrão e Naor mulheres para si; o nome da mulher
de Abrão era aSarai, e o nome da
mulher de Naor era b
Milca, filha
de Harã, pai de Milca, e pai de
Iscá.
30 E Sarai era aestéril; não tinha
filhos.
31 E Terá tomou seu filho Abrão,
e aLó, filho de Harã, filho de seu
filho, e sua nora Sarai, mulher de
seu filho Abrão, e saiu com eles
de Ur dos caldeus, b
para ir à terra
de c
Canaã; e foram até Harã, e habitaram ali.
32 E foram os dias de Terá duzentos e cinco anos; e morreu Terá
em Harã.
CAPÍTULO 12
Abrão se tornará uma grande
nação — Ele e sua semente abençoarão todas as famílias da Terra —
Abrão viaja de Harã para a terra de
Canaã — Devido à fome, ele desce ao
Egito — Abrão e Sarai são postos à
prova na corte de Faraó.
ORA, o SENHOR disse a a
Abrão: Sai
16 a GEE Pelegue.
26 a GEE Abraão.
28 a GEE Ur.
 b Abr. 1:1, 20, 29–30.
29 a GEE Sara.
 b Gên. 24:15.
30 a Gên. 21:1–3;
Heb. 11:11.
31 a GEE Ló.
 b At. 7:2–4;
 Abr. 2:1–6, 14–16.
 c GEE Canaã, Cananeus.
12 1 a Heb. 11:8.
GÊNESIS 11:11–12:1 18

da tua terra, e da tua bparentela,
e da casa de teu pai, para a c
terra
que eu te mostrarei.
2 E far-te-ei uma a
grande nação, e
b
abençoar-te-ei, e engrandecerei o
teu nome; e tu serás uma bênção.
3 E abençoarei os que te abençoarem, e aamaldiçoarei os que te
amaldiçoarem; e em ti serão benditas todas as b
famílias da terra.
4 Assim, partiu Abrão, como o
SENHOR lhe tinha dito, e foi Ló
com ele; e era Abrão da idade de
setenta e cinco anos quando saiu
de Harã.
5 E Abrão tomou sua mulher aSarai, e bLó, filho de seu irmão,
e todos os seus bens que haviam
adquirido, e as almas que lhes
c
acresceram em Harã; e saíram
para ir à terra de Canaã; e foram
à terra de Canaã.
6 E passou Abrão por aquela
terra até o lugar de Siquém, até o
carvalho de Moré; e estavam então
os acananeus na terra.
7 E apareceu o SENHOR a Abrão
e disse: aÀ tua semente darei esta
b
terra. E edificou ali um c
altar ao
SENHOR, que lhe aparecera.
8 E moveu-se dali para a montanha a oriente de aBetel, e armou a
sua tenda, tendo Betel ao ocidente,
e Ai ao oriente; e edificou ali um
altar ao SENHOR, e binvocou o c
nome do SENHOR.
9 Depois caminhou Abrão dali,
seguindo ainda para o sul.
10 E havia fome naquela terra; e
desceu Abrão ao Egito, para morar
ali, porquanto a fome era grande
na terra.
11 E aconteceu que, chegando ele
para entrar no Egito, a
disse a Sarai,
sua mulher: Ora, bem sei que és
mulher formosa à vista;
12 E acontecerá que, quando os
egípcios te virem, dirão: Esta é
sua mulher. E matar-me-ão, e a ti
guardarão em vida.
13 Dize, peço-te, que és minha
irmã, para que me vá bem por tua
causa, e que viva a minha alma
por causa de ti.
14 E aconteceu que, entrando
Abrão no Egito, viram os egípcios a mulher, que era muito
formosa.
15 E viram-na os príncipes de
Faraó, e gabaram-na diante de
Faraó; e foi a mulher levada para
a casa de Faraó.
16 E tratou bem a Abrão por
causa dela; e ele teve ovelhas, e
vacas, e jumentos, e servos e servas, e jumentas, e camelos.
1 b Abr. 1:1–7.
 c GEE Terra da
Promissão.
 2 a GEE Israel — Doze
tribos de Israel.
 b 1 Né. 22:9–11;
3 Né. 20:25–27;
Abr. 2:8–11.
GEE Abençoado,
Abençoar, Bênção;
Convênio Abraâmico.
 3 a Êx. 23:22.
GEE Amaldiçoar,
Maldições.
 b GEE Abraão — Semente
de Abraão;
Família — Família
eterna;
Novo e Eterno
Convênio.
 5 a GEE Sara.
 b GEE Ló.
 c HEB fizeram; i.e.,
converteram.
 6 a Abr. 1:21–22; 2:18.
GEE Canaã, Cananeus.
 7 a Êx. 33:1.
 b GEE Terra da
Promissão.
 c Abr. 2:17.
GEE Altar.
 8 a GEE Betel.
 b GEE Oração.
 c Mois. 5:8.
11 a Abr. 2:21–25.
19 GÊNESIS 12:2–16

17 Porém o SENHOR aferiu Faraó
e a sua casa com grandes pragas,
por causa de Sarai, mulher de
Abrão.
18 Então Faraó chamou Abrão,
e disse: Que é isso que me fizeste?
Por que não me disseste que ela
era tua mulher?
19 Por que disseste: É minha
irmã? De maneira que a teria tomado por minha mulher; agora,
pois, eis aqui tua mulher; toma-a
e vai-te.
20 E Faraó deu ordens aos seus
homens a respeito dele, e acompanharam-no, a ele, e a sua mulher,
e a tudo o que tinha.
CAPÍTULO 13
Abrão volta do Egito — Ele e Ló se
separam — O Senhor fará com que a
semente de Abrão seja tão numerosa
quanto o pó da terra — Abrão se estabelece em Hebrom.
SUBIU, pois, Abrão do Egito para o
sul, ele e sua mulher, e tudo o que
tinha, e com ele aLó.
2 E era Abrão muito rico em
gado, em prata, e em ouro.
3 E fez as suas jornadas do sul
até Betel, até o lugar onde no princípio estivera a sua tenda, entre
Betel e Ai;
4 Até o lugar do a
altar que dantes
ali tinha feito; e Abrão invocou ali
o nome do SENHOR.
5 E também Ló, que ia com Abrão,
tinha rebanhos, e gado, e tendas.
6 E não tinha capacidade a terra
para poderem habitar juntos, porque seus bens eram muitos, de
maneira que não podiam habitar
juntos.
7 E houve contenda entre os pastores do gado de Abrão e os pastores do gado de Ló; e os cananeus
e os perizeus habitavam então
na terra.
8 E disse Abrão a Ló: Ora, não
haja acontenda entre mim e ti, e
entre os meus pastores e os teus
pastores, porque somos irmãos.
9 Não está toda a terra diante
de ti? Rogo-te, pois, aparta-te de
mim; se escolheres a esquerda, irei
para a direita; e se a direita escolheres, eu irei para a esquerda.
10 E levantou Ló os seus olhos
e viu toda a campina do Jordão,
que era toda bem regada, antes de
o SENHOR ter destruído a
Sodoma e
Gomorra, e era como o jardim do
SENHOR, como a terra do Egito,
quando se entra em Zoar.
11 Então Ló escolheu para si toda
a campina do Jordão, e partiu Ló
para o oriente, e apartaram-se um
do outro.
12 Habitou Abrão na terra de
Canaã, e Ló habitou nas cidades
da campina, e armou as suas tendas até Sodoma.
13 Ora, eram amaus os homens
de Sodoma, e grandes pecadores
contra o SENHOR.
14 E disse o SENHOR a Abrão,
depois que Ló se apartou dele:
17 a GEE Amaldiçoar,
Maldições;
Faraó.
13 1 a GEE Ló.
 4 a Gên. 12:7.
 8 a GEE Contenção,
Contenda.
10 a GEE Gomorra;
Sodoma.
13 a Eze. 16:49.
GEE Comportamento
Homossexual.
GÊNESIS 12:17–13:14 20

Levanta agora os teus olhos, e olha
desde o lugar onde estás, para o
norte, e para o sul, e para o oriente, e para o aocidente;
15 Porque toda esta aterra que
vês hei de dar a ti, e à tua semente,
para sempre.
16 E farei a tua asemente como
o pó da terra; de maneira que
se alguém puder contar o pó da
terra, também a tua semente será
contada.
17 Levanta-te, percorre essa terra,
no seu comprimento e na sua largura; porque a ti a darei.
18 E Abrão levantou as suas tendas, e foi, e habitou nos carvalhais
de Manre, que estão junto a aHebrom; e edificou ali um baltar ao
SENHOR.
CAPÍTULO 14
Ló é capturado nas batalhas dos
reis — Ele é resgatado por Abrão —
Melquisedeque administra o pão e
o vinho, e abençoa Abrão — Abrão
paga o dízimo — Ele se recusa a aceitar os espólios da conquista.
E ACONTECEU nos dias de Anrafel,
rei de Sinear, Arioque, rei de Elasar, Quedorlaomer, rei de Elão, e
Tidal, rei de Goim,
2 Que esses fizeram guerra a Bera,
rei de Sodoma, e a Birsa, rei de
Gomorra, a Sinabe, rei de Admá,
e a Semeber, rei de Zeboim, e ao
rei de Belá (esta é Zoar).
3 Todos esses se ajuntaram no
vale de Sidim (que é o a
mar de sal).
4 Doze anos haviam servido a
Quedorlaomer, mas no décimo
terceiro ano rebelaram-se.
5 E no décimo quarto ano veio
Quedorlaomer, e os reis que estavam com ele, e derrotaram os
refains em Asterote-Carnaim, e
os zuzins em Hã, e os emins em
Savé-Quiriataim,
6 E os horeus no seu monte
Seir, até El-Parã, que está junto ao
deserto.
7 Depois retornaram e foram a
En-Mispate (que é Cades), e conquistaram toda a terra dos amalequitas, e também os amorreus, que
habitavam em Hazazom-Tamar.
8 Então saíram o rei de Sodoma, e o rei de Gomorra, e o rei de
Admá, e o rei de Zeboim, e o rei
de Belá (esta é Zoar), e organizaram batalha contra eles no vale
de Sidim,
9 Contra Quedorlaomer, rei de
Elão, e Tidal, rei de Goim, e Anrafel, rei de Sinear, e Arioque, rei
de Elasar; quatro reis contra cinco.
10 E o vale de Sidim estava cheio
de poços de betume, e fugiram os
reis de Sodoma, e de Gomorra, e
caíram ali; e os restantes fugiram
para um monte.
11 E tomaram todos os bens de
Sodoma, e de Gomorra, e todo o
seu mantimento, e foram-se.
12 Também tomaram Ló, que
14 a TJS Gên. 13:12–13 (. . .)
do ocidente; e lembra-te
do convênio que eu faço
contigo; porque será um
convênio eterno; e tu te
lembrarás dos dias de
Enoque, teu pai;
15 a Gên. 15:18; Jos. 1:2–4.
GEE Terra da
Promissão.
16 a GEE Convênio
Abraâmico.
18 a GEE Hebrom.
 b GEE Altar.
14 3 a GEE Mar Morto.
21 GÊNESIS 13:15–14:12

habitava em Sodoma, filho do
irmão de Abrão, e seus bens, e
foram-se.
13 Então veio um que escapara,
e o contou a Abrão, o hebreu; ele
habitava junto dos carvalhais de
Manre, o amorreu, irmão de Escol,
e irmão de Aner; eles eram confederados de Abrão.
14 Ouvindo, pois, Abrão que o
seu irmão estava preso, aarmou
os seus criados, nascidos em sua
casa, trezentos e dezoito, e os perseguiu até Dã.
15 E dividiu-se contra eles de
noite, ele e os seus criados, e
os derrotou, e os perseguiu até
Hobá, que fica à aesquerda de
Damasco.
16 E tornou a trazer todos os
bens, e tornou a trazer também
seu irmão Ló, e os seus bens, e
também as mulheres, e o povo.
17 E o rei de Sodoma saiu-lhe ao
encontro (depois que voltou de
derrotar Quedorlaomer e os reis
que estavam com ele) no vale de
Savé, que é o vale do rei.
18 E aMelquisedeque, rei de
b
Salém, trouxe pão e vinho; c
e era
ele dsacerdote do Deus Altíssimo.
19 E abençoou-o, e disse: aBendito seja Abrão pelo Deus Altíssimo,
o b
possuidor dos céus e da terra;
20 E bendito seja o Deus Altíssimo, que entregou os teus inimigos
nas tuas mãos. E Abrão deu-lhe o
adízimo de tudo.
21 E o rei de Sodoma disse a
Abrão: Dá-me as pessoas, e toma
os bens para ti.
22 Abrão, porém, disse ao rei
de Sodoma: Levantei minha mão
em juramento ao SENHOR, o Deus
Altíssimo, o possuidor dos céus
e da terra,
23 Que desde um fio até a correia de um sapato, não tomarei
coisa alguma de tudo o que é teu,
para que não digas: Eu enriqueci
Abrão;
24 Salvo tão somente o que os jovens comeram, e a parte que toca
aos homens que comigo foram,
Aner, Escol, e Manre; estes que
tomem a sua aparte.
CAPÍTULO 15
Abrão deseja ter progênie — O Senhor lhe promete uma semente tão
numerosa quanto as estrelas — Abrão
crê na promessa — Sua semente será
peregrina no Egito — Então, após
quatro gerações, eles herdarão Canaã.
DEPOIS dessas coisas, veio a palavra do SENHOR a Abrão em a
visão,
dizendo: Não temas, Abrão, eu
sou o teu escudo, o teu grandíssimo galardão.
2 Então disse Abrão: Senhor
DEUS, que me hás de dar, pois
14 a OU liderou.
15 a IE ao norte.
18 a HEB Rei de retidão.
GEE Melquisedeque.
 b GEE Jerusalém;
Salém.
 c TJS Gên. 14:17 (. . .) e ele
partiu o pão e o abençoou;
e abençoou o vinho, sendo
ele o sacerdote do Deus
Altíssimo,
 d GEE Sacerdote,
Sacerdócio de
Melquisedeque;
Sumo Sacerdote.
19 a GEE Abençoado,
 Abençoar, Bênção.
 b OU criador.
20 a Al. 13:15.
GEE Dízimos.
24 a TJS Gên. 14:25–40
(Apêndice).
15 1 a GEE Visão.
GÊNESIS 14:13–15:2 22

continuo sem filhos, e o mordomo da minha casa é o damasceno
Eliézer?
3 Disse mais Abrão: Eis que não
me deste semente, e eis que aum
nascido na minha casa será o meu
herdeiro.
4 E eis que veio a palavra do SENHOR a ele, dizendo: Esse não será
o teu herdeiro; mas aquele que de
tuas entranhas sair, esse será o teu
herdeiro.
5 Então o levou para fora e disse:
Olha agora para os céus e conta as
estrelas, se as podes contar. E disse-lhe: Assim será a tua asemente.
6 aE ele bcreu no SENHOR, e ele
imputou-lhe isso por c
justiça.
7 Disse-lhe mais: Eu sou o SENHOR, que te tirei de Ur dos caldeus, para dar-te esta terra, para
herdá-la.
8 E disse ele: Senhor DEUS, como
saberei que hei de herdá-la?
9 E disse-lhe: Toma-me uma bezerra de três anos, e uma cabra de
três anos, e um carneiro de três
anos, e uma rola, e um pombinho.
10 E trouxe-lhe todos esses, e
partiu-os pelo meio, e pôs cada
parte deles em frente da outra;
mas as aves não partiu.
11 E as aves desciam sobre os cadáveres; Abrão, porém, as enxotava.
12 E pondo-se o sol, um profundo sono caiu sobre Abrão; e eis
que grande espanto e grande aescuridão caiu sobre ele.
13 Então disse a Abrão: Saibas,
de certo, que peregrina será a tua
semente em terra que não é sua, e
servi-los-ão; e aafligi-los-ão quatrocentos anos;
14 Mas também eu julgarei a
nação à qual servirão, e depois
asairão com muitos b
bens.
15 E tu irás a teus pais em paz;
em boa velhice serás sepultado.
16 E a aquarta geração retornará para cá, porque a medida da
injustiça dos amorreus não está
ainda b
cheia.
17 E sucedeu que, quando o sol
se pôs e houve escuridão, eis um
forno de fumaça, e uma tocha de
fogo, que passaram por aquelas
metades.
18 Naquele mesmo dia, fez o SENHOR um aconvênio com Abrão,
dizendo: À tua semente dei esta
b
terra, desde c
o rio do Egito até o
grande rio, o rio Eufrates:
19 O queneu, e o quenezeu, e o
cadmoneu,
20 E o heteu, e o perizeu, e os
refains,
21 E o amorreu, e o cananeu, e o
girgaseu, e o jebuseu.
 3 a HEB um filho de minha
casa. GEE Herdeiro.
 5 a D&C 132:30–32.
GEE Abraão — Semente
de Abraão.
 6 a TJS Gên. 15:9–12
(Apêndice).
 b GEE Fé.
 c OU retidão.
GEE Justo(s);
Retidão.
12 a JS—H 1:15–17.
13 a Êx. 1:8–14.
14 a D&C 136:21–22.
 b Êx. 12:35–36.
16 a Êx. 6:16–20 [quatro
gerações dos
descendentes de Levi
são citadas: (1) Levi,
(2) Coate, (3) Anrão,
(4) Moisés].
 b 1 Né. 17:32–35;
D&C 101:11.
18 a GEE Convênio
Abraâmico.
 b GEE Israel;
Terra da Promissão.
 c IE o Uádi El Arish, ao
norte do Sinai.
23 GÊNESIS 15:3–21

CAPÍTULO 16
Sarai dá Agar por mulher a Abrão —
Agar foge de Sarai — Um anjo ordena que Agar volte e seja submissa a
Sarai — Agar dá à luz Ismael.
ORA, Sarai, mulher de Abrão, não
lhe gerava filhos, e ela tinha uma
serva egípcia, cujo nome era a
Agar.
2 E disse Sarai a Abrão: Eis que
o SENHOR me impediu de gerar
filhos; achega-te, pois, à minha
serva; porventura terei filhos dela.
E ouviu Abrão a voz de Sarai.
3 Assim, Sarai, mulher de Abrão,
tomou Agar, a egípcia, sua serva,
e deu-a por mulher a Abrão, seu
marido, ao fim de dez anos que
Abrão habitara na terra de Canaã.
4 E ele achegou-se a Agar, e ela
concebeu; e vendo ela que concebera, foi sua senhora desprezada
aos seus olhos.
5 Então disse Sarai a Abrão: Meu
agravo seja sobre ti; minha serva
pus eu em teu regaço; vendo ela
agora que concebeu, sou menosprezada aos seus olhos; o SENHOR
julgue entre mim e ti.
6 E disse Abrão a Sarai: Eis que
tua serva está na tua mão, faze-lhe
o que é bom aos teus olhos. E afligiu-a Sarai, e ela fugiu de sua face.
7 E o aanjo do SENHOR a achou
junto a uma fonte de água no deserto, junto à fonte no caminho
de Sur.
8 E disse: Agar, serva de Sarai,
de onde vens, e para onde vais?
E ela disse: Venho fugida da face
de minha senhora Sarai.
9 Então lhe disse o anjo do SENHOR: Retorna para tua senhora e
humilha-te debaixo de suas mãos.
10 Disse-lhe mais o anjo do SENHOR: Multiplicarei sobremaneira a tua semente, que não
será contada, por numerosa
que será.
11 Disse-lhe também o anjo do
SENHOR: Eis que concebeste, e
darás à luz um filho, e chamarás
o seu nome aIsmael, porquanto o
SENHOR ouviu a tua aflição.
12 E ele será ahomem feroz, e
a sua mão será contra todos, e a
mão de todos contra ele; e habitará diante da face de todos os
seus irmãos.
13 E ela chamou o nome do SENHOR, que com ela falava: Tu és
Deus que me vê, porque disse:
Não olhei eu também para aquele
que me vê?
14 Por isso se chama aquele poço aBeer-Laai-Roi; eis que está entre
Cades e Berede.
15 E Agar deu um filho a Abrão;
e Abrão chamou o nome do seu
filho, que Agar tivera, Ismael.
16 E era Abrão da idade de oitenta e seis anos, quando Agar lhe
deu Ismael.
CAPÍTULO 17
É ordenado a Abrão que seja perfeito — Ele será pai de muitas nações — Seu nome é mudado para
16 1 a D&C 132:34–35.
GEE Hagar.
 7 a GEE Anjos.
11 a IE Deus ouve.
GEE Ismael, Filho de
Abraão.
12 a HEB asno selvagem.
14 a IE O poço Daquele que
vive e me vê.
GÊNESIS 16:1–16 24

Abraão — O Senhor faz convênio
de ser o Deus de Abraão e de sua semente para sempre — Também lhe
dá a terra de Canaã em perpétua possessão — A circuncisão se torna um
sinal do convênio eterno entre Deus e
Abraão — O nome de Sarai é mudado
para Sara — Ela dará à luz Isaque,
com quem o Senhor estabelecerá Seu
convênio — Abraão e todos os homens
de sua casa são circuncidados.
SENDO, pois, Abrão da idade de
noventa e nove anos, aapareceu
o SENHOR a Abrão, e disse-lhe:
Eu sou o Deus Todo-Poderoso,
banda em minha presença e sê
c
perfeito.
2 E porei o meu a convênio
entre mim e ti, e te multiplicarei
grandissimamente.
3 aEntão caiu Abrão sobre o
seu rosto, e falou Deus com ele,
dizendo:
4 Quanto a mim, eis que o meu
convênio é contigo, e serás o apai
de uma multidão de b
nações.
5 E não se chamará mais o teu
nome Abrão, mas aAbraão será o
teu nome, porque por pai de uma
multidão de nações te pus.
6 E te farei frutificar grandissimamente, e de ti farei nações, e
reis sairão de ti.
7 aE estabelecerei o meu b
convênio entre mim e ti e a tua semente
depois de ti, em suas gerações,
por c
convênio eterno, para te ser
a ti por Deus, e à tua semente
depois de ti.
8 E darei a ti, e à tua semente
depois de ti, a aterra de tuas peregrinações, toda a terra de Canaã
em perpétua b
possessão, e serei o
seu Deus.
9 Disse mais Deus a Abraão: Tu,
porém, guardarás o meu convênio,
tu e a tua semente depois de ti, nas
suas gerações.
10 Este é o meu aconvênio, que
guardareis entre mim e vós, e
a tua semente depois de ti: Que
todo filho homem será bcircuncidado.
11 E circuncidareis a carne do
vosso prepúcio; e isso será por asinal do convênio entre mim e
vós.
12 O filho de oito dias, pois,
será circuncidado, todo filho
homem nas vossas gerações:
o nascido na casa, e o comprado por dinheiro a qualquer estrangeiro, que não for da tua
semente.
13 Com efeito será circuncidado
o nascido em tua casa, e o comprado por teu dinheiro; e estará o
17 1 a Abr. 3:11.
 b GEE Andar, Andar com
Deus.
 c GEE Perfeito;
Santidade.
 2 a GEE Convênio
Abraâmico.
 3 a TJS Gên. 17:3–12
(Apêndice).
 4 a GEE Abraão — Semente
 de Abraão.
 b TJS Gên. 17:8–9 (. . .)
nações. E este convênio
eu faço, para que os teus
filhos sejam conhecidos
entre todas as nações (. . .)
 5 a GEE Abraão.
 7 a TJS Gên. 17:11–12
(Apêndice).
 b Abr. 2:8–11.
GEE Convênio
Abraâmico; Novo e
Eterno Convênio.
 c 2 Né. 29:14.
 8 a GEE Terra da
Promissão.
 b Núm. 34:1–12.
10 a GEE Convênio.
 b GEE Circuncisão.
11 a GEE Simbolismo.
25 GÊNESIS 17:1–13

meu convênio na vossa carne por
aconvênio eterno.
14 E o filho homem incircunciso,
cuja carne do prepúcio não estiver
circuncidada, aquela alma será
extirpada de seu povo; quebrou
o meu convênio.
15 Disse Deus mais a Abraão: A
Sarai tua mulher não chamarás
mais pelo nome de Sarai, mas a
Sara
será o seu nome,
16 Porque eu a hei de abençoar,
e dela te darei um filho; e a abençoarei, e será amãe de nações; reis
de povos sairão dela.
17 aEntão caiu Abraão sobre o
seu rosto, e b
riu-se, e disse no seu
coração: A um homem de cem
anos há de nascer um filho? E dará
à luz Sara na idade de noventa
anos?
18 E disse Abraão a Deus: Tomara que viva Ismael diante de
teu rosto!
19 E disse Deus: Na verdade,
tua mulher Sara te dará um filho,
e chamarás o seu nome Isaque, e
com ele estabelecerei o meu convênio, por convênio eterno para a
sua semente depois dele.
20 E quanto a aIsmael, também te
ouvi: eis que o abençoei, e fá-loei frutificar, e fá-lo-ei multiplicar
grandissimamente; doze príncipes
gerará, e dele farei uma grande
nação.
21 O meu convênio, porém,
estabelecerei com Isaque, o qual
Sara te dará neste tempo determinado, no ano seguinte.
22 E acabou de falar com ele, e
subiu Deus de diante de Abraão.
23 Então tomou Abraão seu filho
Ismael, e todos os nascidos na sua
casa, e todos os comprados por
seu dinheiro, todo homem entre
os da casa de Abraão, e acircuncidou a carne do seu prepúcio,
naquele mesmo dia, como Deus
falara com ele.
24 E era Abraão da idade de noventa e nove anos quando lhe
foi circuncidada a carne do seu
prepúcio.
25 E seu filho Ismael era da
idade de treze anos quando lhe
foi circuncidada a carne do seu
prepúcio.
26 Nesse mesmo dia foram circuncidados Abraão e seu filho
Ismael,
27 E todos os homens da sua
casa, o nascido em casa e o comprado por dinheiro ao estrangeiro,
foram circuncidados com ele.
CAPÍTULO 18
Abraão recebe três homens santos — Eles prometem que Sara terá
um filho — Abraão ordenará a seus
filhos que sejam justos — O Senhor
lhe aparece — Eles conversam sobre
a destruição de Sodoma e Gomorra.
13 a O convênio é eterno,
mas a circuncisão,
como sinal desse
convênio, foi mais
tarde descontinuada.
Morô. 8:8.
15 a IE Princesa. GEE Sara.
16 a GEE Abraão — Semente
de Abraão;
Mãe.
17 a TJS Gên. 17:23–24
(Apêndice).
 b HEB regozijou-se.
TJS Gên. 17:23 (. . .)
rejubilou-se (. . .)
20 a GEE Ismael, Filho de
Abraão.
23 a GEE Circuncisão.
GÊNESIS 17:14–27 26

DEPOIS, apareceu-lhe o aSENHOR
nos carvalhais de Manre, estando
ele assentado à porta da tenda, no
calor do dia.
2 E levantou os seus olhos, e
olhou, e eis que três ahomens estavam em pé junto a ele. E vendoos, correu da porta da tenda ao seu
encontro, e inclinou-se à terra,
3 E disse: Meu aSenhor, se agora
achei graça aos teus olhos, rogo-te
que não passes de teu servo,
4 Que se traga já um pouco de
água, e lavai os vossos pés, e recostai-vos debaixo desta árvore;
5 E trarei um bocado de pão,
para que fortaleçais o vosso coração; depois passareis adiante,
porquanto por isso chegastes até
vosso servo. E disseram: Assim
faze como disseste.
6 E Abraão apressou-se em ir
ter com Sara à tenda, e disse-lhe:
Amassa depressa três medidas de
flor de farinha, e faze bolos.
7 E correu Abraão às vacas, e
tomou uma vitela tenra e boa, e
deu-a ao moço, que se apressou
em prepará-la.
8 E tomou manteiga e leite, e a
vitela que tinha preparado, e pôs
tudo diante deles, e ele estava em
pé junto a eles debaixo da árvore;
e comeram.
9 E disseram-lhe: Onde está tua
mulher Sara? E ele disse: Ei-la aí,
está na tenda.
10 E disse: Certamente retornarei a ti por este tempo da
vida; e eis que tua mulher Sara
terá um afilho. E ouviu-o Sara à
porta da tenda, que estava atrás
dele.
11 E eram Abraão e Sara já velhos, e adiantados em idade; já a
Sara havia cessado o costume das
mulheres.
12 Assim, pois, riu-se Sara consigo, dizendo: Terei ainda deleite depois de haver envelhecido,
sendo também o meu senhor
já velho?
13 E disse o SENHOR a Abraão:
Por que se riu Sara, dizendo: Será
verdade que ainda darei eu à luz,
havendo já envelhecido?
14 Haveria coisa alguma adifícil
ao SENHOR? Ao tempo determinado, retornarei a ti por este tempo
da vida, e Sara terá um filho.
15 E Sara negou, dizendo: Não
me ri, porquanto temeu. E ele
disse: Não digas isso, porque te
riste.
16 E levantaram-se aqueles homens dali, e olharam para o lado
de Sodoma; e Abraão ia com eles,
acompanhando-os.
17 E disse o SENHOR: aOcultarei
eu a Abraão o que faço,
18 Visto que Abraão certamente
virá a ser uma grande e poderosa
nação, e nele serão a
benditas todas
as nações da terra?
18 1 a GEE Jeová;
Jesus Cristo —
Existência pré-mortal
de Cristo.
 2 a Ver TJS Gên. 18:23
(Gên. 18:22 nota a).
 GEE Anjos.
 3 a TJS Gên. 18:3 (. . .)
irmãos (. . .)
10 a GEE Abraão — Semente
de Abraão.
14 a GEE Milagre;
Poder.
17 a GEE Revelação.
18 a D&C 110:12; 115:5;
Abr. 2:9–11.
GEE Convênio
Abraâmico.
27 GÊNESIS 18:1–18

19 Porque eu o aconheço, que
ele há de ordenar a seus b
filhos e
à sua casa depois dele que c
guardem o caminho do SENHOR, para
agir com justiça e djuízo; para que
o SENHOR faça vir sobre Abraão o
que acerca dele falou.
20 Disse mais o SENHOR: Porquanto o clamor de Sodoma e
Gomorra se multiplicou, e porquanto o seu apecado se agravou
muito,
21 Descerei agora, e verei se com
efeito fizeram segundo o seu clamor, que chegou até mim; e se não,
asabê-lo-ei.
22 aEntão viraram aqueles homens o rosto dali, e foram para
Sodoma, mas Abraão ficou
ainda em pé diante da face do
SENHOR.
23 E chegou-se Abraão, dizendo: aDestruirás também o justo com
o b
ímpio?
24 Se porventura houver cinquenta justos na cidade, destruirás
também e não pouparás o lugar
por causa dos cinquenta justos
que estão dentro dela?
25 Longe de ti que faças tal coisa,
que mates o justo com o ímpio;
que o justo seja como o ímpio,
longe de ti seja. Não faria justiça
o aJuiz de toda a terra?
26 Então disse o SENHOR: Se
eu em Sodoma achar cinquenta ajustos dentro da cidade, pouparei todo o lugar por causa
deles.
27 E respondeu Abraão, dizendo: Eis que agora me atrevi a falar
ao Senhor, ainda que eu seja apó
e cinzas:
28 Se porventura de cinquenta
justos faltarem cinco, destruirás
por aqueles cinco toda a cidade? E
disse: Não a destruirei, se eu achar
ali quarenta e cinco.
29 E continuou ainda a falar-lhe,
e disse: Se porventura se acharem
ali quarenta? E disse: Não o farei
por causa dos quarenta.
30 Disse mais: Ora, não se ire o
Senhor, se eu ainda falar: Se porventura se acharem ali trinta?
E disse: Não o farei se achar ali
trinta.
31 E disse: Eis que agora me atrevi a falar ao Senhor: Se porventura se acharem ali vinte? E disse:
Não a destruirei por causa dos
vinte.
32 Disse mais: Ora, não se ire o
Senhor, que ainda só mais esta vez
eu fale: Se porventura se acharem
ali dez? E disse: Não a destruirei
por causa dos dez.
33 E foi-se o SENHOR, quando
acabou de falar a Abraão; e Abraão
retornou ao seu lugar.
19 a GEE Onisciente.
 b GEE Família —
Responsabilidade dos
pais.
 c GEE Justo(s);
Retidão.
 d GEE Julgar.
20 a GEE Comportamento
Homossexual.
21 a 2 Né. 27:27.
22 a TJS Gên. 18:23 E os
anjos, que eram homens
santos, e foram enviados
segundo a ordem de Deus,
viraram o rosto (. . .)
23 a 1 Né. 22:16–19;
Hel. 13:12–14;
D&C 64:24.
 b GEE Iniquidade, Iníquo.
25 a GEE Jesus Cristo — Juiz.
26 a GEE Justo(s);
Retidão.
27 a Gên. 2:7;
Mos. 4:1–2.
GEE Humildade,
Humilde, Humilhar.
GÊNESIS 18:19–33 28

CAPÍTULO 19
Ló recebe homens santos — Os homens de Sodoma procuram abusar
dos hóspedes de Ló e são feridos de
cegueira — Ordena-se a Ló que saia
de Sodoma — O Senhor faz chover
enxofre e fogo sobre Sodoma e Gomorra — As filhas de Ló preservam
a semente dele na terra.
E CHEGARAM adois banjos a Sodoma à tarde, e estava Ló assentado à porta de Sodoma; e
vendo-os Ló, levantou-se ao seu
encontro, e inclinou-se com o rosto
à terra;
2 E disse: Eis agora, meus senhores, entrai, peço-vos, na casa de
vosso servo, e passai nela a noite,
e lavai os vossos pés; e de madrugada vos levantareis, e seguireis
vosso caminho. E eles disseram:
Não, antes na rua passaremos
a noite.
3 E porfiou com eles muito, e
foram com ele, e entraram em sua
casa; e fez-lhes banquete, e assou
bolos sem levedura, e comeram.
4 E antes que se deitassem, cercaram a casa os homens daquela
cidade, os homens de Sodoma,
desde o moço até o velho; todo o
povo de todos os bairros.
5 E chamaram Ló e disseram-lhe:
Onde estão os homens que a ti vieram nesta noite? Traze-os para fora
a nós, para que os aconheçamos.
6 Então saiu Ló a eles à porta, e
fechou a porta atrás de si,
7 E disse: Meus irmãos, rogo-vos
que não façais mal.
8 a
Eis aqui, duas filhas tenho, que
ainda não conheceram homem;
deixai-me, rogo-vos, trazê-las
para fora, e fareis delas como for
bom aos vossos olhos; somente
nada façais a estes homens, porque por isso vieram à sombra do
meu telhado.
9 Eles, porém, disseram: Sai daí.
Disseram mais: Como estrangeiro
este indivíduo veio aqui habitar, e
quereria ser juiz em tudo? Agora
faremos mais mal a ti do que a
eles. E arremessaram-se sobre o
homem, sobre Ló, e aproximaramse para arrombar a porta.
10 Aqueles homens, porém, estenderam a sua mão, e fizeram Ló
entrar com eles na casa, e fecharam a porta,
11 E feriram de cegueira os homens que estavam à porta da casa,
desde o menor até o maior, de maneira que se cansaram à procura
da porta.
12 Então disseram aqueles ahomens a Ló: Tens alguém mais
aqui? Teu genro, e teus filhos, e
tuas filhas, e todos quantos tens
nesta cidade, tira-os para fora
deste lugar;
13 Porque nós vamos destruir
este lugar, porque o seu clamor
19 1 a TJS Gên. 19:1 (. . .)
três (. . .)
 b HEB mensageiros.
GEE Anjos.
 5 a IE A palavra
“conhecer” em
 hebraico e em
português é, neste
tipo de contexto,
um eufemismo para
relações sexuais.
GEE Comportamento
Homossexual;
Imoralidade Sexual.
 8 a TJS Gên. 19:9–15
(Apêndice).
12 a TJS Gên. 19:18 (. . .) esses
homens santos (. . .)
29 GÊNESIS 19:1–13

aumentou diante da face do SENHOR, e o SENHOR nos enviou para
destruí-lo.
14 Então saiu Ló e falou a seus
genros, aos que haviam de casar
com as suas filhas, e disse: Levantai-vos, asaí deste lugar, porque o
SENHOR há de destruir a cidade.
Foi tido, porém, por zombador
aos olhos de seus genros.
15 E ao amanhecer os aanjos
apressaram b
Ló, dizendo: Levanta-te, toma tua mulher, e tuas duas
filhas que aqui estão, para que não
pereças na injustiça desta cidade.
16 Ele, porém, demorava-se, e
aqueles homens o pegaram pela
mão, e pela mão de sua mulher, e
pela mão de suas duas filhas, sendo-lhe o SENHOR amisericordioso,
e tiraram-no, e puseram-no fora
da cidade.
17 E aconteceu que, tirando-os
para fora, disse: Escapa por tua
vida; anão olhes para trás de ti, e
não pares em toda esta campina;
escapa lá para o monte, para que
não pereças.
18 E Ló disse-lhe: Assim não,
meu Senhor!
19 Eis que agora o teu servo
achou agraça aos teus olhos, e engrandeceste a tua misericórdia que
a mim me fizeste, para guardar
a minha alma em vida; e eu não
posso escapar para o monte, para
que porventura não me apanhe
esse mal, e eu morra.
20 Eis que agora esta cidade está
perto, para fugir para lá, e é pequena; ora, deixa-me escapar para lá
(não é pequena?), para que minha
alma viva.
21 E disse-lhe: Eis que eu te
concedo também esse pedido, de
não derrubar essa cidade de que
falaste.
22 Apressa-te, escapa para ali;
porque nada poderei fazer enquanto não tiveres ali chegado.
Por isso se chamou o nome da
cidade aZoar.
23 Saiu o sol sobre a terra, quando Ló entrou em Zoar.
24 Então o SENHOR fez chover
sobre aSodoma e bGomorra c
enxofre e fogo do SENHOR desde os
céus;
25 E derrubou aquelas cidades,
e toda aquela campina, e todos os
moradores daquelas cidades, e o
que nascia da terra.
26 E a mulher de Ló aolhou para
trás dele, e ficou convertida numa
b
estátua de sal.
27 E Abraão levantou-se aquela
mesma manhã, de madrugada, e
foi para aquele lugar onde estivera
diante da face do SENHOR;
28 E olhou para Sodoma e Gomorra, e para toda a terra da campina; e viu, e eis que a fumaça da
14 a Apoc. 18:4;
D&C 133:5.
GEE Advertência,
Advertir, Prevenir.
15 a GEE Anjos.
 b 2 Ped. 2:7.
16 a GEE Misericórdia,
Misericordioso.
17 a D&C 133:14–15.
19 a GEE Graça.
22 a IE Pequena (coisa).
24 a Eze. 16:48–50;
2 Ped. 2:6.
GEE Sodoma.
 b GEE Gomorra.
 c HEB materiais
combustíveis,
especialmente enxofre
e breu.
26 a Gên. 19:17.
 b Lc. 17:28–32.
GÊNESIS 19:14–28 30

terra subia, como a fumaça de uma
fornalha.
29 E aconteceu que, quando destruiu Deus as cidades da campina, Deus se lembrou de Abraão,
e tirou Ló do meio da destruição,
quando derrubou aquelas cidades
em que Ló habitara.
30 E subiu Ló de Zoar, e habitou
no monte, e as suas duas filhas
com ele, porque temia habitar em
Zoar; e habitou numa caverna, ele
e as suas duas filhas.
31 Então a aprimogênita disse à
menor: Nosso pai já é velho, e não
há homem na terra que se achegue
a nós, segundo o costume de toda
a terra;
32 Vem, demos de beber vinho a
nosso pai, e deitemo-nos com ele,
para que conservemos em vida a
semente de nosso pai.
33 E deram de beber vinho a seu
pai naquela noite; e foi a primogênita, e deitou-se com seu pai, e não
sentiu ele quando ela se deitou,
nem quando se levantou.
34 E sucedeu, no outro dia, que
a primogênita disse à menor: Vês
aqui, eu já ontem à noite me deitei
com meu pai; demos-lhe de beber
vinho também esta noite, e então
entra tu, deita-te com ele, para que
conservemos em vida a semente
de nosso pai.
35 aE deram de beber vinho a
seu pai também naquela noite; e
levantou-se a menor, e deitou-se
com ele; e não sentiu ele quando ela se deitou, nem quando se
levantou.
36 E as duas filhas de Ló conceberam de seu pai.
37 E a primogênita deu à luz
um filho, e chamou o seu nome aMoabe; esse é o pai dos moabitas,
até o dia de hoje.
38 E a menor também deu à luz
um filho, e chamou o seu nome
Ben-Ami; esse é o pai dos filhos de aAmom, até o dia de hoje.
CAPÍTULO 20
Abimeleque deseja Sara, que é preservada pelo Senhor — Abraão ora
por Abimeleque, e o Senhor abençoa
Abimeleque e sua casa.
E PARTIU Abraão dali para a terra
do sul, e habitou entre Cades e Sur,
e peregrinou em aGerar.
2 E havendo Abraão dito de sua
mulher Sara: É minha airmã; Abimeleque, rei de Gerar, mandou
buscar Sara e tomou-a para si.
3 aDeus, porém, veio a Abimeleque num sonho à noite, e disselhe: Eis que morto serás por causa
da mulher que tomaste; porque
ela é casada com marido.
4 Mas Abimeleque ainda não
se tinha achegado a ela; por isso
disse: Senhor, matarás também
auma nação justa?
31 a TJS Gên. 19:37 (. . .)
primogênita agiu
de maneira iníqua, e
disse (. . .)
35 a TJS Gên. 19:39 E elas
agiram de maneira
 iníqua, e deram (. . .)
37 a Deut. 2:9.
GEE Moabe.
38 a Deut. 2:19.
20 1 a Gên. 10:19.
 2 a Gên. 12:11–20; 26:1–17;
 Abr. 2:2, 22–25.
 3 a Salm. 105:14.
 4 a OU uma nação
inocente.
31 GÊNESIS 19:29–20:4

5 Não me disse ele mesmo: É
minha airmã? E ela também disse:
É meu irmão. Na b
sinceridade do
coração e na pureza das minhas
mãos fiz isso.
6 E disse-lhe Deus em sonho:
Bem sei eu que na sinceridade do
teu coração fizeste isso; e também
eu te impedi de pecar contra mim;
por isso não te permiti tocá-la.
7 Agora, pois, restitui a mulher
ao seu marido, porque profeta é,
e arogará por ti, para que vivas;
porém, se não lha restituíres, sabe
que certamente morrerás, tu e
tudo o que é teu.
8 E levantou-se Abimeleque pela
manhã, de madrugada, e chamou
todos os seus servos, e falou todas
essas palavras em seus ouvidos; e
temeram muito aqueles homens.
9 Então aAbimeleque chamou
Abraão e disse-lhe: Que nos fizeste? E em que pequei contra ti,
para trazeres sobre o meu reino
tamanho pecado? Tu me fizeste
aquilo que não deverias ter feito.
10 Disse mais Abimeleque a
Abraão: Que viste, para fazer tal
coisa?
11 E disse Abraão: Porque eu
dizia comigo: Certamente não há atemor de Deus neste lugar, e eles
me matarão por causa da minha
mulher.
12 E, na verdade, ela é também
minha irmã, filha de meu pai, mas
não filha da minha mãe; e veio a
ser minha mulher.
13 E aconteceu que, afazendome Deus sair errante da casa de
meu pai, eu lhe disse: Seja esta
a graça que me farás: em todo o
lugar aonde chegarmos, diz de
mim: É meu irmão.
14 Então tomou Abimeleque ovelhas e vacas, e servos e servas, e os
deu a Abraão; e restituiu-lhe sua
mulher Sara.
15 E disse Abimeleque: Eis que
a minha terra está diante da tua
face; habita onde for bom aos teus
olhos.
16 E a Sara disse: Vês que dei ao
teu irmão mil moedas de prata; eis
que ele te seja por véu dos olhos
para com todos os que contigo
estão, e até para com todos os outros; e estás advertida.
17 E orou Abraão a Deus, e Deus
sarou Abimeleque, e sua mulher,
e suas servas, de maneira que tiveram filhos;
18 Porque o SENHOR havia fechado totalmente todas as madres da casa de Abimeleque,
por causa de Sara, mulher de
Abraão.
CAPÍTULO 21
Sara dá à luz Isaque — Ele é circuncidado — Agar e seu filho são
expulsos da casa de Abraão — O Senhor salva Agar e Ismael — Abraão
e Abimeleque agem honradamente
um com o outro.
E o SENHOR avisitou Sara, como
 5 a Gên. 20:12.
 b GEE Integridade.
 7 a Jó 42:8; En. 1:11–12.
 9 a Gên. 26:6–10.
11 a GEE Temor — Temor de
Deus.
13 a Gên. 12:1;
Abr. 2:3–4.
21 1 a Gên. 30:22.
GÊNESIS 20:5–21:1 32

tinha dito; e fez o SENHOR a b
Sara
como tinha falado.
2 E concebeu Sara, e deu um afilho a Abraão na sua velhice, ao
b
tempo determinado que Deus lhe
tinha dito.
3 E chamou Abraão o nome de
seu filho que lhe nascera, que Sara
lhe dera, aIsaque.
4 E Abraão acircuncidou o seu
filho Isaque, quando era da idade
de oito dias, como Deus lhe tinha
ordenado.
5 E era Abraão da idade de acem
anos, quando lhe nasceu seu filho
Isaque.
6 E disse Sara: Deus me fez arir;
todo aquele que ouvir se rirá
comigo.
7 Disse mais: Quem diria a
Abraão que Sara daria de mamar
a filhos? Porque lhe dei um filho
na sua velhice.
8 E cresceu o menino, e foi desmamado; então Abraão fez um
grande banquete no dia em que
Isaque foi desmamado.
9 E viu Sara que o filho de aAgar,
a egípcia, o qual tinha dado a
Abraão, zombava.
10 E disse a Abraão: Expulsa esta
serva e o seu filho, porque o filho
desta serva não será a
herdeiro com
meu filho, com Isaque.
11 E pareceu essa palavra amuito
má aos olhos de Abraão, por causa
de seu filho.
12 Porém Deus disse a Abraão:
Não te pareça mal aos teus olhos
acerca do moço, e acerca da tua
serva; em tudo o que Sara te diz,
ouve a sua voz; porque em Isaque
será chamada a tua asemente.
13 Mas também do filho dessa
serva farei uma a
nação, porquanto
ele é tua semente.
14 Então se levantou Abraão
pela manhã, de madrugada, e
tomou pão, e um odre de água, e
os deu a Agar, pondo-os sobre o
seu ombro; também lhe deu o menino, e adespediu-a; e ela se foi,
andando errante no deserto de
b
Berseba.
15 E consumida a água do odre,
largou o menino debaixo de um
dos arbustos.
16 E foi-se, e assentou-se em frente, afastando-se a distância de um
tiro de arco, porque dizia: Que eu
não veja morrer o menino. E assentou-se em frente, e levantou a sua
voz, e chorou.
17 E ouviu Deus a voz do moço,
e bradou o aanjo de Deus a Agar
desde os céus, e disse-lhe: Que
tens, Agar? Não temas, porque
Deus ouviu a voz do moço desde
o lugar onde está.
18 Ergue-te, levanta o moço, e
1 b Gên. 17:19.
 2 a Gên. 24:36.
 b Gên. 17:21.
 3 a GEE Isaque.
 4 a GEE Circuncisão.
 5 a Gên. 17:17.
 6 a IE A raiz hebraica
tsahaq significa
tanto “rir” quanto
“regozijar-se.”
 9 a Gên. 16:1, 15.
10 a Gál. 4:22–31;
D&C 52:2.
GEE Herdeiro.
11 a Gên. 17:18.
12 a 1 Né. 17:40.
GEE Abraão — Semente
de Abraão;
Convênio Abraâmico.
13 a GEE Ismael, Filho de
Abraão.
14 a Gên. 25:6.
 b Gên. 21:31.
17 a GEE Anjos.
33 GÊNESIS 21:2–18

pega-o pela mão, porque dele farei
uma grande nação.
19 E abriu-lhe Deus os olhos,
e viu um poço de água; e foi, e
encheu o odre de água, e deu de
beber ao moço.
20 E era Deus com o moço, e ele
cresceu, e habitou no deserto, e
foi flecheiro.
21 E habitou no deserto de Parã;
e sua mãe tomou-lhe mulher da
terra do aEgito.
22 E aconteceu naquele mesmo
tempo que Abimeleque, com Ficol,
chefe do seu exército, falou com
Abraão, dizendo: aDeus é contigo
em tudo o que fazes;
23 Agora, pois, jura-me aqui por
Deus que não mentirás a mim,
nem a meu filho, nem a meu neto;
segundo a benevolência que te
fiz, farás a mim, e à terra onde
peregrinaste.
24 E disse Abraão: Eu jurarei.
25 Abraão, porém, arepreendeu Abimeleque por causa de
um poço de água, que os servos
de Abimeleque haviam tomado
à força.
26 Então disse Abimeleque: Eu
não sei quem fez isso; e também
tu não mo fizeste saber, nem eu o
ouvi senão hoje.
27 E tomou Abraão ovelhas e
vacas, e deu-as a Abimeleque; e
ambos afizeram uma aliança.
28 Pôs Abraão, porém, à parte
sete cordeiras do rebanho.
29 E Abimeleque disse a Abraão:
Para que estão aqui estas sete cordeiras, que puseste à parte?
30 E disse: Tomarás estas sete
cordeiras de minha mão, para que
sejam em testemunho que eu cavei
este poço.
31 Por isso se chamou aquele
lugar aBerseba, porquanto ambos
juraram ali.
32 Assim, fizeram uma aliança
em Berseba. aDepois se levantaram Abimeleque e Ficol, chefe do
seu exército, e retornaram à terra
dos filisteus.
33 E Abraão plantou um bosque
em Berseba, e ainvocou lá o nome
do SENHOR, Deus eterno.
34 E peregrinou Abraão na terra
dos afilisteus muitos dias.
CAPÍTULO 22
Ordena-se a Abraão que sacrifique seu filho Isaque — Tanto o
pai quanto o filho se submetem à
vontade de Deus — A semente de
Abraão será tão numerosa quanto
as estrelas do céu e como a areia da
praia — Em sua semente todas as
nações serão abençoadas — Betuel
gera Rebeca.
E ACONTECEU, depois dessas coisas, que Deus a
pôs à prova Abraão,
e disse-lhe: Abraão! E ele disse:
Eis-me aqui.
2 E disse: a
Toma agora o teu filho,
o teu b
único filho, Isaque, a quem
21 a Gên. 16:1.
22 a Gên. 26:28.
25 a Gên. 26:15–22.
27 a Gên. 26:26–33.
31 a HEB O poço do
juramento, ou poço de
sete. Gên. 26:18.
32 a TJS Gên. 21:31–32
(Apêndice).
33 a GEE Oração.
34 a GEE Filisteus.
22 1 a D&C 136:31;
Abr. 3:27.
 2 a D&C 132:36.
 b Jo. 3:16; Jacó 4:5.
GÊNESIS 21:19–22:2 34

c
amas, e vai à terra de dMoriá, e
oferece-o ali em holocausto sobre
uma das montanhas, que eu te
direi.
3 Então se levantou Abraão pela
manhã, de madrugada, e albardou
o seu jumento, e tomou consigo
dois de seus moços e seu filho
Isaque, e cortou lenha para o holocausto, e levantou-se, e foi ao
lugar que Deus lhe dissera.
4 Ao terceiro dia levantou
Abraão os seus olhos, e viu o lugar
de longe.
5 E disse Abraão a seus moços:
Ficai aqui com o jumento, e eu e
o moço iremos até ali, e aadoraremos, e retornaremos a vós.
6 E tomou Abraão a lenha do
holocausto, e apô-la sobre seu
filho Isaque; e ele tomou o fogo
e o cutelo na sua mão, e foram
ambos juntos.
7 Então falou Isaque a seu pai
Abraão, e disse: Meu pai! E ele
disse: Eis-me aqui, meu filho! E
ele disse: Eis aqui o fogo e a lenha,
mas onde está o cordeiro para o
holocausto?
8 E disse Abraão: Deus proverá
para si um acordeiro para o holocausto, meu filho. Assim, caminharam ambos juntos.
9 E chegaram ao lugar que Deus
lhe dissera, e edificou Abraão ali
um altar, e a
pôs em ordem a lenha,
e amarrou seu filho Isaque, e deitou-o sobre o baltar em cima da
lenha.
10 E estendeu Abraão a sua mão,
e tomou o cutelo para imolar o
seu filho;
11 Mas o anjo do SENHOR lhe bradou desde os céus, e disse: Abraão,
Abraão! E ele disse: Eis-me aqui.
12 Então disse: Não estendas a
tua mão sobre o moço, e não lhe
faças nada; porquanto agora sei
que atemes a Deus, e não me b
negaste o teu filho, o teu único filho.
13 Então levantou Abraão os seus
olhos, e olhou; e eis um carneiro detrás dele, travado pelos seus
chifres num mato; e foi Abraão, e
tomou o carneiro, e ofereceu-o em
holocausto, em lugar de seu filho.
14 E chamou Abraão o nome daquele lugar ao SENHOR proverá;
donde se diz até o dia de hoje: b
No
monte do SENHOR se proverá.
15 Então o anjo do SENHOR bradou a Abraão pela segunda vez
desde os céus,
16 E disse: Por mim mesmo ajurei, diz o SENHOR: Porquanto
fizeste essa ação, e não negaste o
teu filho, o teu único,
17 Que deveras te abençoarei, e
grandissimamente multiplicarei a
tua asemente como as estrelas dos
2 c GEE Amor.
 d 2 Sam. 24:18;
2 Crôn. 3:1.
 5 a GEE Adorar.
 6 a Jo. 19:17.
 8 a Isa. 53:7.
GEE Cordeiro de Deus;
Jesus Cristo — Simbolismos ou símbolos de
Cristo; Páscoa.
 9 a Tg. 2:21–23.
 b GEE Sacrifício.
12 a GEE Temor — Temor de
Deus.
 b Heb. 11:17–19.
GEE Obedecer,
Obediência, Obediente.
14 a Gên. 22:8.
GEE Expiação, Expiar;
Jeová.
 b OU Em um monte o
SENHOR se manifestará
ou será visto.
16 a Êx. 32:13.
17 a Gên. 13:14–16.
GEE Convênio
Abraâmico.
35 GÊNESIS 22:3–17

céus, e como a bareia que está na
praia do mar; e a tua semente possuirá a c
porta dos seus inimigos;
18 E em tua asemente serão
bbenditas todas as nações da
terra; porquanto c
obedeceste à
minha dvoz.
19 Então Abraão retornou aos
seus moços, e levantaram-se, e
foram juntos para Berseba; e
Abraão habitou em Berseba.
20 E sucedeu, depois dessas coisas, que anunciaram a Abraão, dizendo: Eis que também a
Milca deu
filhos a teu irmão Naor:
21 Uz, o seu primogênito, e Buz,
seu irmão, e Quemuel, pai de Arã,
22 E Quésede, e Hazo, e Pildas,
e Jidlafe, e Betuel.
23 E aBetuel gerou Rebeca; esses
oito deu Milca a Naor, b
irmão de
Abraão.
24 E a sua concubina, cujo nome
era Reumá, ela deu à luz também
Tebá, e Gaã, e Taás, e Maaca.
CAPÍTULO 23
Sara morre e é sepultada na cova de
Macpela, que Abraão comprou de
Efrom, o heteu.
E FOI a vida de Sara cento e vinte
e sete anos; esses foram os anos da
vida de Sara.
2 E amorreu Sara em QuiriateArba, que é b
Hebrom, na terra de
Canaã; e foi Abraão lamentar Sara
e chorar por ela.
3 Depois se levantou Abraão de
diante de sua morta, e falou aos
filhos de Hete, dizendo:
4 Estrangeiro e peregrino sou
entre vós; dai-me possessão de
sepultura convosco, para que eu
sepulte a minha amorta de diante
da minha face.
5 E responderam os filhos de
Hete a Abraão, dizendo-lhe:
6 Ouve-nos, meu senhor; príncipe de Deus és no meio de nós;
enterra a tua morta na mais escolhida de nossas sepulturas;
nenhum de nós te vedará a sua
sepultura, para enterrar a tua
morta.
7 Então se levantou Abraão, e inclinou-se diante do povo da terra,
diante dos filhos de Hete.
8 E falou com eles, dizendo: Se é
de vossa vontade que eu sepulte a
minha morta de diante de minha
face, ouvi-me e falai por mim a
Efrom, filho de Zoar,
9 Que ele me dê a cova de aMacpela, que ele tem no fim do seu
campo; que ma dê pelo devido
preço em herança de sepulcro no
meio de vós.
10 Ora, Efrom habitava no meio
dos filhos de Hete; e respondeu
Efrom, o heteu, a Abraão, aos ouvidos dos filhos de Hete, de todos
17 b 1 Né. 12:1;
D&C 132:30–33.
 c Gên. 24:60.
18 a GEE Abraão — Semente
de Abraão.
 b GEE Convênio
Abraâmico.
 c GEE Obedecer,
Obediência, Obediente.
 d GEE Voz.
20 a Gên. 11:29.
23 a Gên. 24:15; 25:20.
 b Abr. 2:2.
23 2 a Gên. 24:67.
 b Gên. 23:19.
GEE Hebrom.
 4 a GEE Morte Física.
 9 a Gên. 25:9–10; 49:29–31.
GÊNESIS 22:18–23:10 36

os que entravam pela porta da sua
cidade, dizendo:
11 Não, meu senhor, ouve-me:
o campo te dou, também te dou
a cova que nele está, diante dos
olhos dos filhos do meu povo ta
dou; sepulta a tua morta.
12 Então Abraão se inclinou
diante da face do povo da terra,
13 E falou a Efrom, aos ouvidos
do povo da terra, dizendo: Mas se
tu estás de acordo, ouve-me, peçote: O preço do campo darei; toma-o
de mim, e sepultarei ali a minha
morta.
14 E respondeu Efrom a Abraão,
dizendo-lhe:
15 Meu senhor, ouve-me, a terra
é de quatrocentos siclos de prata;
que é isso entre mim e ti? Sepulta
a tua morta.
16 E Abraão deu ouvidos a
Efrom; e Abraão pesou a Efrom
a prata de que tinha falado aos
ouvidos dos filhos de Hete, quatrocentos siclos de prata, corrente
entre mercadores.
17 Assim o campo de aEfrom,
que estava em Macpela, em frente de Manre, o campo e a cova
que nele estava, e todo o arvoredo
que no campo havia, que estava
em todo o seu contorno ao redor,
18 Se confirmaram a Abraão em
possessão diante dos olhos dos filhos de Hete, de todos os que entravam pela porta da sua cidade.
19 E depois Abraão sepultou sua
mulher Sara na cova do campo de
Macpela, em frente de Manre, que
é Hebrom, na terra de Canaã.
20 Assim o campo e a cova,
que nele estava, se confirmaram
a Abraão em possessão de sepultura, pelos filhos de Hete.
CAPÍTULO 24
Abraão ordena que Isaque não se
case com uma mulher cananeia —
O Senhor guia o servo de Abraão na
escolha de Rebeca para mulher de
Isaque — Rebeca é abençoada para se
tornar a mãe de milhares de milhares — Ela se casa com Isaque.
E ERA Abraão já velho e adiantado
em idade, e o SENHOR havia a
abençoado Abraão em tudo.
2 E disse Abraão ao seu aservo, o
mais velho da casa, que tinha governo sobre tudo o que possuía:
Põe agora a tua mão debaixo da
minha b
coxa,
3 Para que eu te faça ajurar pelo
SENHOR, Deus dos céus e Deus da
terra, que b
não tomarás para meu
filho c
mulher das filhas dos dcananeus, no meio dos quais eu habito,
4 Mas que irás à minha aterra e
à minha b
parentela, e dali tomarás
mulher para meu filho Isaque.
5 E disse-lhe o servo: Se porventura não quiser seguir-me a
mulher a esta terra, farei, pois,
17 a Gên. 50:13;
At. 7:16.
24 1 a Isa. 51:2.
 2 a Gên. 15:2.
 b TJS Gên. 24:2 (. . .)
mão (. . .)
 3 a GEE Juramento.
 b Deut. 7:1, 3–4;
Abr. 1:21–24.
 c GEE Casamento,
Casar — Casamento
entre pessoas de
religiões diferentes.
 d GEE Canaã, Cananeus.
 4 a Gên. 11:31;
Abr. 2:2–5.
 b Gên. 24:38.
37 GÊNESIS 23:11–24:5

retornar o teu filho à terra de onde
saíste?
6 E Abraão lhe disse: Guarda-te
que não faças para lá retornar o
meu filho.
7 O SENHOR Deus dos céus, que
me tomou da casa de meu pai e da
terra da minha parentela, e que me
falou, e que me jurou, dizendo: À
tua semente darei esta aterra; ele
enviará o seu anjo adiante da tua
face, para que tomes mulher de lá
para meu filho.
8 Se a mulher, porém, não quiser
seguir-te, serás livre desse meu juramento; somente não faças para
lá retornar meu filho.
9 Então pôs o servo a sua mão
debaixo da acoxa de seu senhor
Abraão, e jurou-lhe sobre esse
assunto.
10 E o servo tomou dez camelos, dos camelos do seu senhor, e
partiu, pois que todos os bens de
seu senhor estavam em sua mão, e
levantou-se e partiu para a a
Mesopotâmia, para a cidade de b
Naor,
11 E fez ajoelhar os camelos
fora da cidade, junto a um poço
de água, à tarde, na hora que as
moças saíam a tirar água.
12 E disse: Ó SENHOR, Deus de
meu senhor Abraão! Dá-me hoje
bom encontro, e faze benevolência
ao meu senhor Abraão!
13 Eis que eu estou em pé junto
à fonte de água, e as filhas dos
homens desta cidade saem para
tirar água;
14 Seja, pois, que a donzela a
quem eu disser: Abaixa agora o
teu cântaro para que eu beba; e
ela disser: Bebe, e também darei
de beber aos teus camelos; esta
seja aaquela que designaste ao teu
servo Isaque, e que eu saiba com
isso que mostraste benevolência a
meu senhor.
15 E sucedeu que, antes que ele
acabasse de falar, eis que aRebeca,
que havia nascido a b
Betuel, filho
de Milca, mulher de Naor, irmão
de Abraão, saía com o seu cântaro
sobre o seu ombro.
16 E a donzela era muito aformosa à vista, virgem, a quem homem
não havia b
conhecido; e desceu à
fonte, e encheu o seu cântaro, e
subiu.
17 Então o servo correu-lhe ao
encontro, e disse: Ora, deixa-me
beber um pouco de água do teu
cântaro.
18 E ela disse: Bebe, meu senhor.
E apressou-se, e abaixou o seu
cântaro sobre a sua mão, e deulhe de beber.
19 E acabando ela de lhe dar de
beber, disse: Tirarei também água
para os teus camelos, até que acabem de beber.
20 E apressou-se, e esvaziou o
seu cântaro no bebedouro, e correu outra vez ao poço para tirar
 7 a GEE Terra da
Promissão.
 9 a TJS Gên. 24:8 (. . .)
mão (. . .)
10 a HEB Arã-Naaraim, ou
Arã dos dois rios.
 b Gên. 24:24;
Abr. 2:4–6, 14–15.
14 a Gên. 24:51.
GEE Eleitos.
15 a GEE Rebeca.
 b Gên. 22:23.
16 a Gên. 26:7;
1 Né. 11:15;
Abr. 2:22.
 b TJS Gên. 24:16 (. . .)
conhecido igual (. . .)
GÊNESIS 24:6–20 38

água, e tirou para todos os seus
camelos.
21 E o homem estava admirado
de vê-la, calando-se, para saber se
o SENHOR havia feito aprosperar a
sua jornada, ou não.
22 E aconteceu que, acabando os
camelos de beber, tomou o homem
um apendente de ouro de meio
bsiclo de peso, e duas pulseiras
para as suas mãos, do peso de dez
siclos de ouro.
23 E disse: De quem és filha? Faze-me saber, peço-te; há também
na casa de teu pai lugar para nós
pousarmos?
24 E ela lhe disse: Eu sou a filha
de Betuel, filho de Milca, o qual
ela deu a Naor.
25 Disse-lhe mais: Também
temos palha e muito pasto, e lugar
para passar a noite.
26 Então ainclinou-se aquele
homem, e adorou ao SENHOR,
27 E disse: Bendito seja o a
SENHOR
Deus de meu senhor Abraão, que
não retirou a sua b
benevolência e a
sua verdade de meu senhor; quanto a mim, o SENHOR me c
guiou
no caminho à casa dos irmãos de
meu senhor.
28 E a donzela correu, e fez saber
essas coisas na casa de sua mãe.
29 E Rebeca tinha um irmão, cujo
nome era Labão; e aLabão correu
ao encontro daquele homem, à
fonte.
30 E aconteceu que, quando ele
viu o pendente, e as pulseiras
sobre as mãos de sua irmã, e quando ouviu as palavras de sua irmã
Rebeca, que dizia: Assim me falou
aquele homem; foi ao homem, e
eis que estava em pé junto aos
camelos, à fonte.
31 E disse: Entra, bendito do SENHOR; por que estás fora? Pois eu
já preparei a casa, e o lugar para
os camelos.
32 Então foi aquele homem à
casa, e desataram os camelos, e
deram palha e pasto aos camelos, e água para lavar os pés dele
e os pés dos homens que estavam
com ele.
33 Depois puseram comida diante dele; ele, porém, disse: Não
comerei, até que tenha dito as minhas palavras. E ele disse: Fala.
34 Então disse: Eu sou o servo
de Abraão.
35 E o SENHOR aabençoou muito
o meu senhor, de maneira que foi
engrandecido, e deu-lhe ovelhas
e vacas, e prata e ouro, e servos e
servas, e camelos e jumentos.
36 E Sara, a mulher do meu senhor, deu à luz um afilho a meu
senhor depois da sua velhice, e ele
b
deu-lhe tudo quanto tem.
37 E meu senhor me fez a
jurar, dizendo: Não tomarás mulher para
meu filho das filhas dos cananeus,
em cuja terra habito;
21 a 1 Né. 20:15.
22 a HEB anel.
 b IE antiga unidade de
medida de peso.
26 a GEE Humildade,
Humilde, Humilhar.
27 a Gên. 24:12.
 b Salm. 98:3.
 c 1 Né. 4:6;
Al. 13:28; 22:1.
29 a GEE Labão, Irmão de
Rebeca.
35 a Gên. 13:2; 26:12.
36 a Gên. 21:2.
 b Gên. 25:5.
37 a Gên. 24:3.
39 GÊNESIS 24:21–37

38 aIrás, porém, à casa de meu
pai, e à minha família, e tomarás
mulher para meu filho.
39 Então disse eu ao meu senhor: aTalvez não me seguirá a mulher.
40 E ele me disse: O SENHOR,
em cuja presença tenho aandado,
enviará o seu anjo contigo, e fará
prosperar o teu caminho, para que
tomes mulher para meu filho da
minha família e da casa de meu pai;
41 Então estarás livre do meu
juramento, quando fores à minha
família; e se não ta derem, livre
estarás do meu juramento.
42 E hoje cheguei à fonte, e disse:
Ó SENHOR, Deus de meu senhor
Abraão, se tu agora fazes prosperar
o meu caminho, no qual eu ando,
43 Eis que estou junto à fonte
de água; seja, pois, que a donzela
que sair para tirar água e à qual eu
disser: Ora, dá-me um pouco de
água do teu cântaro;
44 E ela me disser: Bebe tu, e
também tirarei água para os teus
camelos; esta seja a mulher que o
SENHOR designou ao filho de meu
senhor.
45 E antes que eu acabasse de
falar no meu coração, eis que Rebeca saiu com o seu cântaro sobre
o seu ombro, e desceu à fonte, e
tirou água; e eu lhe disse: Peço-te,
dá-me de beber.
46 E ela se apressou, e abaixou
o seu cântaro de sobre si, e disse:
Bebe, e também darei de beber aos
teus camelos; e bebi, e ela deu também de beber aos camelos.
47 Então lhe perguntei, e disse:
De quem és filha? E ela disse: Filha
de Betuel, filho de Naor, que lhe
deu Milca. Então eu pus o apendente no seu rosto, e as pulseiras
sobre as suas mãos;
48 E ainclinando-me adorei ao
SENHOR, e bendisse ao SENHOR,
Deus do meu senhor Abraão, que
me havia encaminhado pelo caminho correto, para tomar a filha
do irmão de meu senhor para
seu filho.
49 Agora, pois, se vós haveis
de agir com benevolência e verdade para com o meu senhor,
fazei-mo saber; e se não, também mo fazei saber, para que
eu vá para a direita, ou para a
esquerda.
50 Então responderam Labão e
Betuel, e disseram: Do SENHOR
procedeu esse assunto; não podemos falar-te mal ou bem.
51 Eis que Rebeca está diante da
tua face; toma-a, e vai-te; seja ela
a mulher do filho de teu senhor,
como disse o SENHOR.
52 E aconteceu que o servo de
Abraão, ouvindo as suas palavras, inclinou-se à terra diante
do SENHOR,
53 E tirou o servo objetos de
prata, e objetos de ouro, e vestidos, e deu-os a Rebeca; também
deu coisas preciosas a seu irmão
e à sua mãe.
54 Então comeram e beberam,
ele e os homens que com ele estavam, e passaram a noite. E
38 a Gên. 24:4.
39 a Gên. 24:5–7.
40 a GEE Andar, Andar com
Deus.
47 a HEB anel no seu nariz.
48 a GEE Reverência.
GÊNESIS 24:38–54 40

levantaram-se pela manhã, e disse:
Deixai-me ir a meu senhor.
55 Então disseram seu irmão e
sua mãe: Fique a donzela conosco alguns dias, ou pelo menos dez
dias, depois irá.
56 Ele, porém, lhes disse: Não
me detenhais, pois o SENHOR fez aprosperar o meu caminho; deixai-me partir, para que eu volte a
meu senhor.
57 E disseram: Chamemos a donzela, e perguntemos a ela.
58 E chamaram Rebeca, e disseram-lhe: Irás tu com este homem?
E ela respondeu: aIrei.
59 Então despediram sua irmã
Rebeca, e sua aama, e o servo de
Abraão, e seus homens.
60 E abençoaram Rebeca, e disseram-lhe: Ó nossa irmã, sê tu a amãe de milhares de milhares, e
que a tua semente possua a porta
de seus b
inimigos!
61 E Rebeca se levantou com as
suas moças, e subiram nos camelos, e seguiram o homem; e aquele
servo tomou Rebeca, e partiu.
62 Ora, Isaque vinha de onde se
vem do apoço de Beer-Laai-Rói;
porque habitava na terra do sul.
63 E Isaque saíra a aorar no
campo, à tarde; e levantou os seus
olhos, e olhou, e eis que os camelos vinham.
64 Rebeca também levantou seus
olhos, e viu Isaque, e alançou-se
do camelo.
65 E disse ao servo: Quem é
aquele homem que vem pelo
campo ao nosso encontro? E
o servo disse: Este é meu senhor. Então tomou ela o véu, e
cobriu-se.
66 E o servo contou a Isaque
todas as coisas que fizera.
67 E Isaque levou-a para a tenda
de sua mãe Sara, e tomou Rebeca,
e ela foi-lhe por mulher, e ele a
amou. Assim, Isaque foi aconsolado depois da b
morte de sua mãe.
CAPÍTULO 25
Abraão se casa novamente, tem descendência, morre e é sepultado na
cova de Macpela — Sua descendência
por meio de Ismael é enumerada —
Rebeca concebe, e Jacó e Esaú lutam
em seu ventre — O Senhor revela o
destino deles a Rebeca — Esaú vende
sua primogenitura por um guisado
de lentilhas.
E ABRAÃO tomou outra mulher; e
o seu nome era Quetura;
2 E ela deu-lhe Zinrã, e Jocsã, e
Medã, e aMidiã, e Jisbaque, e Suá.
3 E Jocsã gerou Sabá e Dedã; e os
filhos de Dedã foram Assurim, e
Letusim, e Leumim.
4 E os filhos de Midiã foram
Efá, e Efer, e Enoque, e Abida, e
Elda; estes todos foram filhos de
Quetura.
5 Porém Abraão adeu tudo o que
tinha a Isaque;
56 a Gên. 24:21.
58 a 1 Né. 3:7.
59 a Gên. 35:8.
60 a Gên. 17:16.
GEE Bênçãos
Patriarcais.
 b GEE Odiar, Ódio.
62 a Gên. 16:14; 25:11.
63 a GEE Ponderar.
64 a IE ela desceu.
67 a D&C 25:5.
 b Gên. 23:2.
25 2 a Êx. 2:15–16; 18:1.
 5 a Gên. 24:36.
GEE Primogenitura.
41 GÊNESIS 24:55–25:5

6 Mas aos filhos das aconcubinas que Abraão tinha, deu Abraão
presentes e, vivendo ele ainda,
despediu-os do seu filho Isaque,
ao oriente, para a terra b
oriental.
7 Estes, pois, são os dias dos anos
da vida de Abraão, que viveu
cento e setenta e cinco anos.
8 E Abraão expirou e morreu em
boa velhice, velho e farto de dias; e
foi acongregado ao seu povo;
9 E sepultaram-no Isaque e
Ismael, seus filhos, na cova de
Macpela, no campo de Efrom,
filho de Zoar, o heteu, que estava
em frente de Manre,
10 O campo que Abraão acomprara dos filhos de Hete. Ali estão
sepultados Abraão, e sua mulher
Sara.
11 E aconteceu que, depois da
morte de Abraão, Deus abençoou
seu filho Isaque; e habitava Isaque
junto ao poço Beer-Laai-Rói.
12 Estas, porém, são as gerações
de aIsmael, filho de Abraão, que
a serva de Sara, b
Agar, a egípcia,
deu a Abraão.
13 E estes são os nomes dos filhos de Ismael, pelos seus nomes,
segundo as suas gerações: o primogênito de Ismael era Nebaiote, depois Quedar, e Adbeel, e
Mibsão,
14 E Misma, e Dumá, e Massá,
15 Hadade, e Tema, Jetur, Nafis,
e Quedemá.
16 Esses são os filhos de Ismael,
e esses são os seus nomes pelas
suas vilas e pelos seus castelos;
adoze príncipes segundo as suas
famílias.
17 E estes são os anos da vida de
Ismael, cento e trinta e sete anos;
e ele expirou, e morreu, e foi congregado ao seu povo.
18 E habitaram desde Havilá até
Sur, que está em frente do aEgito,
indo para a b
Assíria; e ele se estabeleceu diante da face de todos os
seus irmãos.
19 E estas são as agerações de
Isaque, filho de Abraão; Abraão
gerou Isaque;
20 E era Isaque da idade de quarenta anos, quando tomou por sua
mulher aRebeca, filha de Betuel,
arameu de bPadã-Arã, irmã de c
Labão, o arameu.
21 E Isaque asuplicou ao SENHOR
por sua mulher, porquanto era estéril; e o SENHOR bouviu as suas
orações, e sua mulher Rebeca
concebeu.
22 E os filhos lutavam dentro
dela; então disse: Se assim é, por
que estou eu assim? E foi perguntar
ao SENHOR.
23 E o SENHOR lhe disse: aDuas
nações há no teu ventre, e dois
 6 a D&C 132:1, 37.
GEE Casamento,
Casar — Casamento
plural.
 b Juí. 6:3.
 8 a GEE Família — Família
eterna.
10 a Gên. 23:16–17.
12 a GEE Ismael, Filho de
Abraão.
 b D&C 132:34, 65.
GEE Hagar.
16 a Gên. 17:20.
18 a GEE Egito.
 b GEE Assíria.
19 a Mt. 1:2.
20 a GEE Rebeca.
 b Gên. 28:1–7.
 c GEE Labão, Irmão de
Rebeca.
21 a GEE Oração;
Pedir.
 b Gên. 30:22–24;
1 Sam. 1:11, 19–20;
1 Né. 15:3, 8–11.
23 a Gên. 24:60.
GÊNESIS 25:6–23 42

povos se dividirão das tuas entranhas, e um povo será mais forte do
que o outro povo, e o b
maior servirá ao menor.
24 E cumprindo-se os seus dias
para dar à luz, eis que havia gêmeos no seu ventre.
25 E o primeiro saiu ruivo, todo
ele como um manto de apelos; por
isso chamaram o seu nome Esaú.
26 E depois saiu o seu irmão,
com sua mão agarrada ao acalcanhar de Esaú; por isso se chamou
o seu nome b
Jacó. E era Isaque da
idade de sessenta anos quando
os gerou.
27 E cresceram os meninos, e
Esaú foi homem perito ana caça,
homem do campo; mas Jacó era
homem bsimples, habitando em
tendas.
28 E Isaque amava Esaú, porque
a caça era de seu gosto, mas Rebeca amava Jacó.
29 E Jacó cozera um guisado; e
veio Esaú do campo, e estava ele
cansado;
30 E disse Esaú a Jacó: Deixa-me,
peço-te, comer desse guisado vermelho, porque estou cansado. Por
isso se chamou o seu nome a
Edom.
31 Então disse Jacó: Vende-me
hoje a tua aprimogenitura.
32 E disse Esaú: Eis que estou a
ponto de morrer, e para que me
servirá a primogenitura?
33 Então disse Jacó: Jura-me hoje.
E jurou-lhe e vendeu a sua primogenitura a Jacó.
34 E Jacó deu pão a Esaú e o guisado das lentilhas; e ele comeu,
e bebeu, e levantou-se, e foi-se.
Assim, desprezou aEsaú a sua
primogenitura.
CAPÍTULO 26
O Senhor promete a Isaque uma
posteridade tão numerosa quanto as
estrelas do céu — Em sua semente
serão abençoadas todas as nações —
O Senhor faz Isaque prosperar, temporal e espiritualmente, por causa
de Abraão — Isaque oferece sacrifícios — Esaú se casa com mulheres
heteias para tristeza de seus pais.
E HAVIA afome na terra, além da
primeira fome, que foi nos dias
de Abraão; por isso foi Isaque a
Abimeleque, rei dos filisteus, em
Gerar.
2 E apareceu-lhe o SENHOR, e
disse: Não desças ao Egito; habita
na terra que eu te disser;
3 aPeregrina nesta terra, e serei
contigo, e te abençoarei, porque a
ti e à tua semente darei todas estas
b
terras, e confirmarei o c
juramento
que jurei a teu pai Abraão;
4 E multiplicarei a tua asemente
como as estrelas dos céus, e darei
à tua semente todas estas terras;
23 b GEE Esaú;
Jacó, Filho de Isaque.
25 a Gên. 27:11.
26 a Ose. 12:3.
 b Gên. 27:36.
27 a Gên. 27:3–5.
 b HEB inteiro, completo,
 perfeito, singelo,
simples.
30 a IE Vermelho.
Gên. 36:1.
31 a GEE Primogenitura.
34 a Heb. 12:16–17.
26 1 a Hel. 11:4.
 3 a At. 7:2–8; Heb. 11:9;
1 Né. 17:3–4.
 b GEE Terra da
Promissão.
 c GEE Juramento.
 4 a GEE Abraão — Semente
de Abraão.
43 GÊNESIS 25:24–26:4

e em tua semente serão benditas
todas as b
nações da terra;
5 Porquanto Abraão aobedeceu
à minha voz, e guardou o meu
mandado, os meus preceitos, os
meus estatutos, e as minhas leis.
6 Assim, habitou Isaque em Gerar.
7 E perguntando-lhe os homens
daquele lugar acerca de sua mulher, disse: É minha airmã; porque
temia dizer: É minha mulher; para
que porventura (dizia ele) não me
matem os homens daquele lugar
por causa de Rebeca; porque era
formosa à vista.
8 E aconteceu que, como ele esteve ali muito tempo, Abimeleque,
rei dos filisteus, olhou por uma
janela, e viu, e eis que Isaque estava brincando com sua mulher
Rebeca.
9 Então Abimeleque chamou Isaque, e disse: Eis que na verdade é
tua mulher; como, pois, disseste:
É minha irmã? E disse-lhe Isaque:
Porque eu dizia: Para que eu porventura não morra por causa dela.
10 E disse aAbimeleque: Que é
isso que nos fizeste? Facilmente se
teria deitado alguém deste povo
com a tua mulher, e tu terias trazido sobre nós um delito.
11 E Abimeleque deu uma ordem
a todo o povo, dizendo: Qualquer
que tocar este homem ou sua mulher, certamente morrerá.
12 E semeou Isaque naquela
mesma terra, e colheu naquele
mesmo ano cem medidas, porque
o SENHOR o aabençoava.
13 aE engrandeceu-se o homem,
e ia-se engrandecendo, até que se
tornou muito poderoso;
14 E tinha rebanhos de ovelhas,
e rebanhos de vacas, e muitos servos, de maneira que os filisteus o ainvejavam.
15 E todos os poços, que os servos de seu pai tinham cavado nos
dias de seu pai Abraão, os filisteus
entulharam e encheram de terra.
16 Disse também Abimeleque a
Isaque: Aparta-te de nós, porque
te fizeste muito mais poderoso do
que nós.
17 Então Isaque partiu dali e
acampou no vale de Gerar, e habitou lá.
18 E retornou Isaque, e cavou
os poços de água que cavaram
nos dias de seu pai Abraão, e que
os filisteus taparam depois da
morte de Abraão, e chamou-os
pelos anomes pelos quais os chamara seu pai.
19 Cavaram, pois, os servos de
Isaque naquele vale, e acharam ali
um poço de águas vivas.
20 E os pastores de Gerar porfiaram com os pastores de Isaque, dizendo: Esta água é nossa.
Por isso chamou o nome daquele
poço aEseque, porque contenderam com ele.
4 b GEE Convênio
Abraâmico.
 5 a D&C 132:29–33.
GEE Obedecer,
Obediência, Obediente.
 7 a Gên. 12:10–13;
Abr. 2:21–25.
10 a Gên. 20:9–18.
12 a GEE Abençoado,
Abençoar, Bênção.
13 a HEB E o homem
prosperou
continuamente, até que
ficou muito rico.
Gên. 24:34; 30:43.
14 a GEE Inveja.
18 a Gên. 21:30–31.
20 a IE Contenda.
GÊNESIS 26:5–20 44

21 Então cavaram outro poço,
e também porfiaram a respeito
dele; por isso chamou o seu nome
aSitna.
22 E partiu dali, e cavou outro
poço, e não aporfiaram a respeito
dele; por isso chamou o seu nome
b
Reobote, e disse: Porque agora o
SENHOR abriu mais espaço para
nós, e cresceremos nesta terra.
23 Depois subiu dali a Berseba.
24 E apareceu-lhe o aSENHOR naquela mesma noite, e disse: Eu sou
o Deus de teu pai Abraão; não
temas, porque beu sou contigo, e
abençoar-te-ei, e multiplicarei a
tua c
semente por causa de meu
servo Abraão.
25 Então edificou ali um aaltar,
e b
invocou o nome do SENHOR, e
armou ali a sua tenda; e os servos
de Isaque cavaram ali um poço.
26 E Abimeleque veio a ele de
Gerar, com seu amigo Auzate, e
Ficol, chefe do seu exército.
27 E disse-lhes Isaque: Por que
viestes a mim, pois que vós me
odiais, e me mandastes sair do
vosso meio?
28 E eles disseram: Verdadeiramente vimos que o SENHOR é
contigo, pelo que dissemos: Haja
agora juramento entre nós, entre
nós e ti; e façamos aliança contigo,
29 Que não nos faças mal, como
nós não te tocamos, e como te fizemos somente bem, e te deixamos
ir em apaz. Agora tu és o bendito
do SENHOR.
30 Então lhes fez um banquete,
e comeram e beberam.
31 E levantaram-se de madrugada, e juraram um ao outro; depois
os despediu Isaque, e despediramse dele em paz.
32 E aconteceu, naquele mesmo
dia, que vieram os servos de
Isaque, e anunciaram-lhe acerca do assunto do poço que tinham cavado; e disseram-lhe:
Achamos água.
33 E chamou-o Seba; por isso é o
nome daquela cidade aBerseba até
o dia de hoje.
34 Ora, sendo Esaú da idade de
quarenta anos, tomou por a
mulher
Judite, filha de Beeri, o heteu, e
Basemate, filha de Elom, o heteu.
35 E elas foram para Isaque e para
Rebeca uma amargura de espírito.
CAPÍTULO 27
Rebeca orienta Jacó para que ele seja
abençoado — Jacó é abençoado para
que tenha domínio sobre povos e nações e os governe — Esaú odeia Jacó
e planeja matá-lo — Rebeca teme
que Jacó se case com uma das filhas
de Hete.
E ACONTECEU que, como Isaque
envelheceu, e os seus olhos se escureceram, de maneira que não
podia ver, chamou Esaú, seu filho
21 a IE Oposição.
22 a Prov. 15:1.
 b IE Lugares amplos e
abertos.
24 a Abr. 3:11.
GEE Jeová.
 b Gên. 28:15.
 c GEE Abraão — Semente
de Abraão.
25 a Gên. 12:7; 1 Né. 2:7.
 b GEE Oração.
29 a GEE Pacificador.
33 a IE Poço do juramento.
Gên. 21:30–31.
34 a GEE Casamento,
Casar — Casamento
entre pessoas de
religiões diferentes.
45 GÊNESIS 26:21–27:1

mais velho, e disse-lhe: Meu filho.
E ele lhe disse: Eis-me aqui.
2 E ele disse: Eis que já agora
estou velho, e não sei o dia da
minha morte;
3 Agora, pois, toma as tuas
armas, a tua aaljava e o teu arco, e
sai ao campo, e apanha para mim
alguma caça,
4 E faze-me um guisado saboroso, como eu gosto, e traze-mo, para
que eu coma; para que minha alma
te abençoe, antes que eu morra.
5 E Rebeca escutou quando Isaque falava a seu filho Esaú; e foi
Esaú ao campo, para apanhar a
caça que havia de trazer.
6 Então falou Rebeca a seu filho
Jacó, dizendo: Eis que ouvi o teu
pai, que falava com Esaú, teu
irmão, dizendo:
7 Traze-me caça, e faze-me um
guisado saboroso, para que eu
coma, e te abençoe diante da
face do SENHOR, antes da minha
morte.
8 Agora, pois, filho meu, ouve
a minha voz naquilo que eu te
mando:
9 Vai agora ao rebanho, e trazeme de lá dois bons cabritos das
cabras, e eu farei deles um guisado saboroso para teu pai, como
ele gosta,
10 E levá-lo-ás a teu pai, para que
o coma, para que te abençoe antes
da sua morte.
11 Então disse Jacó a Rebeca, sua
mãe: Eis que meu irmão Esaú é
peludo, e eu homem liso;
12 Talvez me apalpe o meu pai,
e serei aos seus olhos enganador;
assim, trarei eu sobre mim maldição, e não bênção.
13 E disse-lhe sua mãe: Meu
filho, sobre mim seja a tua maldição; somente obedece à minha
voz, e vai, traze-mos.
14 E foi, e tomou-os, e levouos à sua mãe; e sua mãe fez um
guisado saboroso, como seu pai
gostava.
15 Depois tomou Rebeca as melhores vestes de Esaú, seu filho
mais velho, que tinha consigo
em casa, e vestiu Jacó, seu filho
menor;
16 E com as peles dos cabritos
das cabras cobriu as suas mãos e
a lisura do seu pescoço;
17 E deu o guisado saboroso e o
pão que tinha preparado na mão
de seu filho Jacó.
18 E foi ele a seu pai, e disse: Meu
pai! E ele disse: Eis-me aqui; quem
és tu, meu filho?
19 E Jacó disse a seu pai: Eu sou
Esaú, teu primogênito; fiz como
me disseste; levanta-te agora, assenta-te, e come da minha caça,
para que a tua alma me abençoe.
20 Então disse Isaque a seu filho:
Como é isso, que tão cedo a achaste, filho meu? E ele disse: Porque
o SENHOR teu Deus a mandou ao
meu encontro.
21 E disse Isaque a Jacó: Chegate agora, para que te apalpe, meu
filho, se és meu filho Esaú mesmo,
ou não.
22 Então se chegou Jacó a seu pai
Isaque, que o apalpou, e disse: A
27 3 a Gên. 25:27.
GÊNESIS 27:2–22 46

voz é a voz de Jacó, porém as mãos
são as mãos de Esaú.
23 E não o reconheceu, porquanto as suas mãos estavam peludas,
como as mãos de seu irmão Esaú;
e abençoou-o.
24 E disse: És tu meu filho Esaú
mesmo? E ele disse: Eu sou.
25 Então disse: Traze isso para
perto de mim, para que coma
da caça de meu filho; para que a
minha alma te abençoe. E levoulho, e ele comeu; levou-lhe também vinho, e ele bebeu.
26 E disse-lhe seu pai Isaque:
Ora, chega-te, e beija-me, filho
meu.
27 E chegou-se, e beijou-o; então
cheirou o cheiro de suas vestes,
e aabençoou-o, e disse: Eis que o
cheiro do meu filho é como o cheiro de um campo que o SENHOR
abençoou;
28 Assim, pois, Deus te dê do
orvalho dos céus, e das gorduras
da terra, e abundância de trigo e
de mosto;
29 Sirvam-te povos, e nações se
curvem a ti; sê senhor de teus irmãos, e os filhos da tua mãe se
curvem a ti; a
malditos sejam os que
te amaldiçoarem, e b
benditos sejam
os que te abençoarem.
30 E aconteceu que, acabando
Isaque de abençoar Jacó, apenas
Jacó acabava de sair de diante da
face de seu pai Isaque, chegou seu
irmão Esaú da sua caça.
31 E fez também ele um guisado saboroso, e levou-o a seu pai;
e disse a seu pai: Levanta-te, meu
pai, e come da caça de teu filho,
para que me abençoe a tua alma.
32 E disse-lhe seu pai Isaque:
Quem és tu? E ele disse: Eu sou
teu filho, o teu primogênito, Esaú.
33 Então estremeceu Isaque de
um estremecimento muito grande,
e disse: Quem, pois, é aquele que
apanhou a caça, e ma trouxe? E
comi de tudo, antes que tu viesses,
e abençoei-o; sim, ele será bendito.
34 Esaú, ouvindo as palavras
de seu pai, bradou com grande
e muito amargo brado, e disse a
seu pai: Abençoa-me também a
mim, meu pai.
35 E ele disse: Veio o teu irmão
com sutileza, e tomou a tua
bênção.
36 Então disse ele: Não foi com
razão o seu nome chamado aJacó,
tanto que já duas vezes me suplantou? A minha b
primogenitura me
tomou, e eis que agora me tomou
a minha bênção. E disse ele: Não
reservaste, pois, para mim bênção
alguma?
37 Então respondeu Isaque, e
disse a Esaú: Eis que o pus por
senhor sobre ti, e todos os seus irmãos lhe dei por servos; e de trigo
e de mosto o fortaleci; que te farei,
pois, agora a ti, meu filho?
38 E disse Esaú a seu pai:
Tens uma só bênção, meu pai?
27 a Heb. 11:20.
GEE Bênçãos
Patriarcais.
29 a GEE Amaldiçoar,
Maldições.
 b GEE Abençoado,
Abençoar, Bênção.
36 a IE Suplantador.
 b Gên. 25:29–34.
GEE Primogenitura.
47 GÊNESIS 27:23–38

Abençoa-me também a mim, meu
pai. E levantou Esaú a sua voz, e
achorou.
39 Então respondeu seu pai Isaque, e disse-lhe: Eis que a tua habitação será nas gorduras da terra,
e no orvalho do alto dos céus;
40 E pela tua espada viverás, e
ao teu airmão servirás. Acontecerá, porém, que, quando te assenhoreares, então b
sacudirás o seu c
jugo do teu pescoço.
41 E Esaú odiou Jacó por causa
daquela bênção, com que seu pai
o tinha abençoado; e Esaú disse no
seu coração: Chegar-se-ão os dias
de luto de meu pai; e matarei meu
irmão Jacó.
42 E foram relatadas a Rebeca
essas palavras de Esaú, seu filho
mais velho; e ela mandou chamar
Jacó, seu filho menor, e disse-lhe:
Eis que teu irmão Esaú se consola
a teu respeito, propondo-se matar-te.
43 Agora, pois, meu filho, ouve
a minha voz, e levanta-te; foge
para junto de meu irmão aLabão,
em Harã,
44 E mora com ele alguns dias,
até que passe o furor de teu irmão;
45 Até que se desvie de ti a aira
de teu irmão, e se esqueça do que
lhe fizeste; então mandarei trazerte de lá; por que seria eu desfilhada também de vós ambos num
mesmo dia?
46 E disse Rebeca a Isaque:
Enfadada estou da minha vida, por
causa das filhas de Hete; se Jacó
tomar amulher das filhas de Hete,
como estas são, das filhas desta
terra, para que me servirá a vida?
CAPÍTULO 28
Isaque proíbe Jacó de casar-se com
uma mulher cananeia — Ele abençoa
Jacó e sua semente com as bênçãos de
Abraão — Esaú se casa com uma das
filhas de Ismael — Jacó tem a visão de
uma escada que chega até o céu — O
Senhor promete que sua semente será
tão numerosa quanto o pó da terra —
O Senhor também promete a Jacó que
nele e em sua semente serão abençoadas todas as famílias da Terra — Jacó
faz convênio de pagar o dízimo.
E ISAQUE chamou Jacó, e abençoou-o, e ordenou-lhe, e disse-lhe:
Não tomes mulher dentre as filhas
de aCanaã.
2 Levanta-te, vai a Padã-Arã, à
casa de Betuel, pai de tua mãe, e
toma de lá uma mulher das filhas
de Labão, irmão de tua mãe;
3 E Deus aTodo-Poderoso te
abençoe, e te faça frutificar, e te
multiplique, para que sejas uma
multidão de povos;
4 E te dê a abênção de Abraão, a
ti e à tua bsemente contigo, para
que em herança possuas a terra
de tuas peregrinações, que Deus
deu a Abraão.
38 a Heb. 12:15–17.
40 a Gên. 25:23.
 b 2 Re. 8:20; 2 Crôn. 21:8.
 c GEE Jugo.
43 a GEE Labão, Irmão de
Rebeca.
45 a GEE Ira.
46 a GEE Casamento,
Casar — Casamento
entre pessoas de
religiões diferentes.
28 1 a Gên. 24:3.
 GEE Canaã, Cananeus.
 3 a Gên. 18:14; Al. 26:35.
 4 a GEE Convênio
Abraâmico.
 b GEE Abraão — Semente
de Abraão.
GÊNESIS 27:39–28:4 48

5 Assim, Isaque despediu Jacó,
o qual foi a Padã-Arã, a Labão,
filho de Betuel, o arameu, irmão
de Rebeca, mãe de Jacó e de Esaú.
6 Vendo, pois, Esaú que Isaque
abençoara Jacó, e o enviara a PadãArã, para tomar dali mulher para
si, e que, abençoando-o, lhe ordenara, dizendo: Não tomes mulher
das filhas de Canaã;
7 E que Jacó obedecera a seu pai
e à sua mãe, e fora a Padã-Arã;
8 Vendo também Esaú que as filhas de Canaã eram más aos olhos
de seu pai Isaque,
9 Foi Esaú a Ismael, e tomou para
si por mulher, além das suas mulheres, Maalate, filha de Ismael,
filho de Abraão, irmã de Nebaiote.
10 Partiu, pois, Jacó de Berseba,
e foi para Harã;
11 E chegou a um lugar onde
passou a noite, porque o sol já se
havia posto; e tomou uma das pedras daquele lugar, e a pôs por
sua cabeceira, e deitou-se naquele
lugar,
12 E a
sonhou, e eis que uma escada estava posta na terra, cujo topo
tocava nos céus; e eis que os b
anjos
de Deus subiam e desciam por ela;
13 E eis que o SENHOR estava aem cima dela, e disse: Eu sou o
b
SENHOR Deus de Abraão, teu pai,
e o Deus de Isaque; esta c
terra, em
que estás deitado, darei a ti e à tua
semente;
14 E a tua semente será como o
pó da terra, e aestender-se-á ao
ocidente, e ao oriente, e ao norte,
e ao sul, e em ti e na tua b
semente
serão todas as c
famílias da terra
dabençoadas.
15 E eis que estou contigo, e te
guardarei por onde quer que fores,
e te farei retornar a esta terra; porque não te deixarei, até que te haja
feito o que te disse.
16 Tendo acordado, pois, Jacó
do seu sono, disse: Certamente
o SENHOR está neste lugar; e eu
não o sabia.
17 E temeu, e disse: Quão terrivel
é este lugar! Este não é outro lugar
senão a casa de Deus; e esta é a
porta dos acéus.
18 Então, levantou-se Jacó pela
manhã, de madrugada, e tomou
a pedra que tinha posto por sua
cabeceira, e a pôs por acoluna, e
derramou azeite em cima dela.
19 E chamou o nome daquele
lugar aBetel; o nome, porém, daquela cidade dantes era Luz.
20 E Jacó fez um avoto, dizendo:
Se Deus for comigo, e me guardar
nesta viagem que faço, e me der
pão para comer, e roupas para
vestir,
21 E eu em paz retornar à casa
de meu pai, o aSENHOR me será
por Deus;
22 E esta pedra, que pus por coluna, será casa de Deus; e de tudo
12 a GEE Sonho.
 b GEE Anjos.
13 a OU ao lado dele.
 b GEE Jeová;
Jesus Cristo;
Senhor.
 c GEE Terra da
Promissão.
14 a 1 Né. 22:3.
 b GEE Abraão — Semente
de Abraão.
 c GEE Convênio
Abraâmico.
 d GEE Abençoado,
Abençoar, Bênção.
17 a GEE Céu.
18 a Gên. 31:13.
19 a IE Casa de Deus.
GEE Betel.
20 a GEE Juramento.
21 a Deut. 26:16–19.
49 GÊNESIS 28:5–22

quanto me deres certamente te
darei o adízimo.
CAPÍTULO 29
Jacó se encontra com Raquel junto
ao poço — Por ela, Jacó serve Labão
sete anos — Labão dá primeiro Lia em
matrimônio a Jacó e depois, Raquel —
Jacó serve mais sete anos — Lia dá à
luz Rúben, Simeão, Levi e Judá.
ENTÃO, pôs-se Jacó a caminho, e
foi à terra dos filhos do oriente;
2 E olhou, e eis um poço no
campo, e eis três rebanhos de ovelhas que estavam deitados junto a
ele; porque daquele poço davam
de beber aos rebanhos, e havia
uma grande pedra sobre a boca
do poço.
3 E ajuntavam ali todos os rebanhos, e removiam a pedra de
sobre a boca do poço, e davam de
beber às ovelhas; e tornavam a pôr
a pedra sobre a boca do poço, no
seu lugar.
4 E disse-lhes Jacó: Meus irmãos,
de onde sois? E disseram: Somos
de aHarã.
5 E ele lhes disse: Conheceis aLabão, filho de Naor? E disseram: Conhecemos.
6 Disse-lhes mais: Está ele bem?
E disseram: Está bem, e eis aqui
sua filha aRaquel, que vem com
as ovelhas.
7 E ele disse: Eis que ainda é
pleno dia, não é hora de ajuntar
o gado; dai de beber às ovelhas, e
ide, apascentai-as.
8 E disseram: Não podemos, até
que todos os rebanhos se ajuntem, e removam a pedra de sobre
a boca do poço, para que demos
de beber às ovelhas.
9 Enquanto ele ainda falava com
eles, chegou Raquel com as ovelhas de seu pai, porque ela era
pastora.
10 E aconteceu que, quando
Jacó viu Raquel, filha de Labão,
irmão de sua mãe, e as ovelhas de
Labão, irmão de sua mãe, chegou
Jacó, e revolveu a pedra de sobre
a boca do poço, e deu de beber
às ovelhas de Labão, irmão de
sua mãe.
11 E Jacó beijou Raquel, e levantou a sua voz, e chorou.
12 E Jacó anunciou a Raquel que
era irmão de seu pai, e que era filho
de Rebeca; então ela correu, e o
anunciou a seu pai.
13 E aconteceu que, ouvindo
Labão as novas de Jacó, filho de
sua irmã, correu-lhe ao encontro,
e abraçou-o, e beijou-o, e levou-o
à sua casa; e ele contou a Labão
todas essas coisas.
14 Então Labão disse-lhe: Verdadeiramente és tu o meu osso e a
minha carne. E ficou com ele um
mês inteiro.
15 Depois disse Labão a Jacó:
Porque tu és meu irmão, hás de
servir-me de graça? Declara-me
qual será o teu salário.
16 E Labão tinha duas filhas; o
nome da mais velha era Lia, e o
nome da mais nova, Raquel.
22 a GEE Dízimos.
29 4 a Gên. 27:43.
 5 a GEE Labão, Irmão de
Rebeca.
 6 a GEE Raquel.
GÊNESIS 29:1–16 50

17 Lia tinha olhos tenros, mas
Raquel era de formoso semblante
e formosa à vista.
18 E Jacó amava Raquel, e disse:
Sete anos te servirei por Raquel,
tua filha mais nova.
19 Então disse Labão: Melhor é
que eu a dê a ti, do que eu a dê a
outro homem; fica comigo.
20 Assim, serviu Jacó sete anos
por aRaquel; e foram aos seus
olhos como poucos dias, pelo
muito que a amava.
21 E disse Jacó a Labão: Dá-me
minha mulher, porque os meus
dias se cumpriram, para que eu
me achegue a ela.
22 Então ajuntou Labão todos os
homens daquele lugar, e fez um
banquete.
23 E aconteceu, ao entardecer,
que tomou sua filha Lia, e trouxelha; e ele achegou-se a ela.
24 E Labão deu sua serva Zilpa
a Lia, sua filha, por serva.
25 E aconteceu que, pela manhã,
viu que era Lia; pelo que disse a
Labão: Por que me fizeste isso?
Não te servi por Raquel? Por que,
pois, me enganaste?
26 E disse Labão: Não se faz
assim no nosso lugar, que a mais
nova se dê antes da primogênita.
27 Cumpre a semana desta; então
te daremos também a outra, pelo
serviço que ainda outros sete anos
servires comigo.
28 E Jacó fez assim, e cumpriu a
semana desta; então ele lhe deu
por amulher Raquel, sua filha.
29 E Labão deu sua serva Bila por
serva a Raquel, sua filha.
30 E uniu-se também a Raquel,
e amou também Raquel mais do
que Lia; e serviu com ele ainda
outros sete anos.
31 Vendo, pois, o SENHOR que Lia
era desprezada, abriu a sua madre;
porém Raquel era estéril.
32 E concebeu aLia, e deu à luz
um filho, e chamou o seu nome
b
Rúben, porque disse: Porque o SENHOR viu a minha aflição, por isso
agora me amará o meu marido.
33 E concebeu outra vez, e deu à
luz um filho, dizendo: Porquanto
o SENHOR ouviu que eu era adesprezada, me deu também este; e
chamou o seu nome b
Simeão.
34 E concebeu outra vez, e deu
à luz um filho, dizendo: Agora
esta vez se ajuntará meu marido
a mim, porque três filhos lhe dei;
por isso chamou o seu nome a
Levi.
35 E concebeu outra vez, e deu
à luz um filho, dizendo: Esta vez a
louvarei ao SENHOR. Por isso chamou o seu nome bJudá; e cessou
de dar à luz.
CAPÍTULO 30
Jacó se casa com Bila, e ela dá à luz
Dã e Naftali — Jacó se casa com
Zilpa, e ela dá à luz Gade e Aser —
Lia dá à luz Issacar, Zebulom e uma
20 a Ose. 12:12.
28 a GEE Casamento,
Casar — Casamento
plural.
32 a GEE Lia.
 b IE Eis um filho.
GEE Rúben.
33 a Gên. 29:30.
 b IE Ouvir.
GEE Simeão.
34 a IE Unido, Prometido.
GEE Levi.
35 a Gên. 49:8.
 b IE Louvor.
GEE Judá.
51 GÊNESIS 29:17–35

filha, Diná — Então, Raquel concebe e dá à luz José — Jacó trabalha para Labão em troca de gado e
ovelhas.
VENDO, pois, Raquel que não dava
filhos a Jacó, Raquel ateve inveja
de sua irmã, e disse a Jacó: Dá-me
filhos, senão morro.
2 Então se acendeu a ira de Jacó
contra Raquel, e disse: Estou eu no
lugar de Deus, que te impediu o
fruto de teu ventre?
3 E ela disse: Eis aqui minha
serva Bila; achega-te a ela, para
que dê à luz sobre os meus joelhos, e eu também aseja edificada
por ela.
4 Assim, lhe deu sua serva aBila
por mulher; e Jacó achegou-se a ela.
5 E concebeu Bila, e deu a Jacó
um filho.
6 Então disse Raquel: Julgou-me
Deus, e também ouviu a minha
voz, e me deu um filho; por isso
chamou o seu nome aDã.
7 E Bila, serva de Raquel, concebeu outra vez, e deu a Jacó um
segundo filho.
8 Então disse Raquel: Com lutas
de Deus lutei com minha irmã,
e venci; e chamou o seu nome
aNaftali.
9 Vendo, pois, Lia que cessava
de dar à luz, tomou também sua
serva Zilpa, e deu-a a Jacó por
mulher.
10 E deu Zilpa, serva de Lia, um
filho a Jacó.
11 Então disse Lia: Vem uma
turba; e chamou o seu nome
aGade.
12 Depois deu Zilpa, serva de
Lia, um segundo filho a Jacó.
13 Então disse Lia: Para minha
ventura; porque as filhas me terão
por bem-aventurada; e chamou o
seu nome aAser.
14 E foi Rúben nos dias da ceifa
do trigo, e achou mandrágoras
no campo. E trouxe-as a Lia, sua
mãe. Então disse Raquel a Lia:
Ora, dá-me das mandrágoras do
teu filho.
15 E ela lhe disse: É já pouco que
hajas atomado o meu marido, tomarás também as mandrágoras
do meu filho? Então disse Raquel:
Por isso ele se deitará contigo esta
noite pelas mandrágoras de teu
filho.
16 Vindo, pois, Jacó do campo,
à tarde, saiu-lhe Lia ao encontro, e disse: Achegar-te-ás a mim,
porque certamente te aluguei
com as mandrágoras do meu
filho. E deitou-se com ela aquela
noite.
17 E Deus ouviu Lia, e ela concebeu, e deu à luz um quinto filho.
18 Então disse Lia: Deus me deu
a minha recompensa, pois dei
minha serva ao meu marido; e
chamou o seu nome aIssacar.
30 1 a GEE Inveja.
 3 a HEB edificada tendo
filhos por meio dela.
Gên. 16:2.
 4 a D&C 132:37.
 6 a IE Ele julgou ou
justificou. GEE Dã.
 8 a IE Minha luta.
GEE Naftali.
11 a IE Boa ventura (jogo
de palavras com os
termos hebraicos
gedud, “turba,” e gad,
“ventura”). GEE Gade,
Filho de Jacó.
13 a IE Feliz, Abençoado.
GEE Aser.
15 a Gên. 29:30.
18 a IE (talvez) Há
uma recompensa.
GEE Issacar.
GÊNESIS 30:1–18 52

19 E Lia concebeu outra vez, e
deu a Jacó um sexto filho.
20 E disse Lia: Deus me deu uma
boa dádiva; desta vez amorará comigo o meu marido, porque lhe
dei seis filhos; e chamou o seu
nome b
Zebulom.
21 E depois deu à luz uma filha,
e chamou o seu nome Diná.
22 E lembrou-se Deus de Raquel, e Deus a ouviu, e abriu a
sua madre,
23 E ela concebeu, e deu à luz
um filho, e disse: Tirou-me Deus
a minha vergonha.
24 E chamou o seu nome aJosé,
dizendo: O SENHOR me acrescente
outro filho.
25 E aconteceu que, quando Raquel deu à luz José, disse Jacó a
Labão: Deixa-me ir, para que eu
vá ao meu lugar, e à minha terra.
26 Dá-me as minhas mulheres,
pelas quais te aservi, e os meus
filhos, e ir-me-ei; pois tu sabes o
meu serviço, que te fiz.
27 Então lhe disse Labão: Se
agora achei graça aos teus olhos,
fica comigo. Tenho visto sinais de
que o SENHOR me aabençoou por
causa de ti.
28 E disse mais: Determina-me o
teu salário, e eu to darei.
29 Então lhe disse: Tu sabes como
te tenho servido, e como passou o
teu gado comigo.
30 Porque o pouco que tinhas
antes de mim aumentou em grande número; e o SENHOR te abençoou por meu trabalho. Agora,
pois, quando hei de trabalhar também por minha casa?
31 E disse ele: Que te darei? Então
disse Jacó: Nada me darás; se me
fizeres isso, tornarei a apascentar
e a guardar o teu rebanho.
32 Passarei hoje por todo o teu
rebanho, separando dele todos
os salpicados e malhados, e todos
os escuros entre os cordeiros, e os
malhados e salpicados entre as
cabras; e isso será o meu salário.
33 Assim testificará por mim a
minha justiça no dia de amanhã,
quando vieres e o meu salário estiver diante de tua face; tudo o que
não for salpicado e malhado entre
as cabras e escuro entre os cordeiros, ser-me-á por furto.
34 Então disse Labão: Sim, que
seja conforme a tua palavra.
35 E separou naquele mesmo
dia os bodes listrados e malhados e todas as cabras salpicadas
e malhadas, todos em que havia
brancura, e todo o escuro entre os
cordeiros; e deu-os nas mãos dos
seus filhos.
36 E pôs três dias de jornada
entre si e Jacó; e Jacó apascentava
o restante dos rebanhos de Labão.
37 Então tomou Jacó varas verdes
de álamo, e de aveleira e de castanheiro, e descascou nelas riscas
20 a OU honrar-me-á,
exaltar-me-á.
 b IE O termo hebraico
zevul significa
“habitação exaltada.”
GEE Zebulom.
24 a IE “José” relaciona-se
tanto à raíz hebraica
yasaf, “acrescentar,”
quanto a asaf, ambas
significando “retirar”
e “reunir.” O contexto
joga com todos esses
significados. GEE José,
Filho de Jacó.
26 a Gên. 29:20, 30.
27 a GEE Abençoado,
Abençoar, Bênção.
53 GÊNESIS 30:19–37

brancas, descobrindo a brancura
que nas varas havia,
38 E pôs essas varas que tinha
descascado em frente do rebanho, nos bebedouros e nos cochos de água, aonde o rebanho
vinha beber, e concebiam quando
vinham beber.
39 E concebia o rebanho diante
das avaras, e as ovelhas pariam
listrados, salpicados e malhados.
40 Então separou Jacó os cordeiros, e pôs as faces do rebanho para
os listrados, e todo o escuro entre
o rebanho de Labão; e pôs o seu
rebanho à parte, e não o pôs com
o rebanho de Labão.
41 E sucedia que cada vez que
concebiam as ovelhas fortes,
punha Jacó as varas diante dos
olhos do rebanho nos bebedouros, para que concebessem diante
das varas.
42 Mas quando o rebanho era
fraco, não as punha. Assim, as
fracas eram de Labão, e as fortes
de Jacó.
43 E aprosperou o homem sobremaneira, e teve muitos rebanhos,
e servas, e servos, e camelos, e
jumentos.
CAPÍTULO 31
O Senhor manda Jacó voltar para
Canaã, e Jacó parte em segredo —
Labão o persegue; eles resolvem suas
diferenças e fazem um convênio de
paz — Labão abençoa seus descendentes, e ele e Jacó se separam.
ENTÃO ouvia as palavras dos filhos de Labão, que diziam: Jacó
tomou tudo o que era de nosso pai,
e do que era de nosso pai obteve
ele toda essa aglória.
2 Viu também Jacó o rosto de
Labão, e eis que não era para com
ele como anteriormente.
3 E disse o SENHOR a Jacó: Retorna à terra dos teus pais, e à tua
parentela, e aeu serei contigo.
4 Então Jacó mandou chamar
Raquel e Lia ao campo, ao seu
rebanho,
5 E disse-lhes: Vejo que o rosto de
vosso pai para comigo não é como
anteriormente; porém o Deus de
meu pai tem estado comigo;
6 E vós mesmas sabeis que com
todas as minhas forças tenho servido vosso pai;
7 Mas vosso pai me aenganou e
mudou o salário dez vezes; porém
Deus não lhe permitiu que me fizesse mal.
8 Quando ele dizia assim: Os salpicados serão o teu salário, então
todos os rebanhos pariam salpicados. E quando ele dizia assim:
Os listrados serão o teu salário,
então todos os rebanhos pariam
listrados.
9 Assim, Deus tirou o gado de
vosso pai, e deu-o a mim.
10 E sucedeu que, ao tempo em
39 a IE As varas descascadas
simbolizavam os
animais listrados que
seriam o salário de
Jacó. Desse modo, o
 Senhor aumentou o
salário de Jacó.
43 a Gên. 24:34–35;
26:12–15.
31 1 a OU riqueza.
 GEE Riquezas.
 3 a Gên. 26:24.
 7 a GEE Enganar, Engano,
Fraude.
GÊNESIS 30:38–31:10 54

que o rebanho concebia, eu levantei os meus olhos, e vi em sonhos,
e eis que os machos, que cobriam
as ovelhas, eram listrados, salpicados e malhados.
11 E disse-me o aanjo de Deus
em sonhos: Jacó. E eu disse: Eisme aqui.
12 E disse ele: Levanta agora
os teus olhos, e vê que todos os
machos que cobrem o rebanho
são listrados, salpicados e malhados; porque vi tudo o que Labão
te fez.
13 Eu sou o aDeus de Betel, onde
ungiste uma coluna, onde me fizeste um b
voto; levanta-te agora,
sai desta terra, e retorna à terra da
tua parentela.
14 Então responderam Raquel e
Lia, e disseram-lhe: Há ainda para
nós parte ou herança na casa de
nosso pai?
15 Não nos considera ele como
estranhas? Pois vendeu-nos, e consumiu todo o nosso dinheiro.
16 Porque toda a riqueza que
Deus tirou de nosso pai é nossa e
de nossos filhos; agora, pois, faze
tudo o que Deus te disse.
17 Então se levantou Jacó, pondo
os seus filhos e as suas mulheres
sobre os camelos;
18 E levou todo o seu gado, e
todos os seus bens, que havia adquirido, o gado que possuía, que
obtivera em Padã-Arã, para ir a
seu pai Isaque, à terra de Canaã.
19 E havendo Labão ido tosquiar
as suas ovelhas, furtou Raquel os
aídolos que seu pai tinha.
20 E esquivou-se Jacó de Labão, o aarameu, porque não lhe fez saber
que fugia.
21 E fugiu ele com tudo o que
tinha, e levantou-se, e passou o
rio; e dirigiu-se à montanha de
Gileade.
22 E no terceiro dia foi anunciado a Labão que Jacó tinha fugido.
23 Então tomou consigo os seus
irmãos, e perseguiu-o no caminho por sete dias; e alcançou-o na
montanha de Gileade.
24 Veio, porém, Deus a Labão,
o arameu, num asonho à noite, e
disse-lhe: Guarda-te que não fales
a Jacó nem bem nem mal.
25 Labão, pois, alcançou Jacó; e
armara Jacó a sua tenda na montanha; e armou também Labão com
os seus irmãos a sua, na montanha
de Gileade.
26 Então disse Labão a Jacó: Que
fizeste, que te esquivaste de mim,
e levaste as minhas filhas como
cativas pela espada?
27 Por que fugiste ocultamente,
e te esquivaste de mim, e não me
fizeste saber, para que eu te despedisse com alegria, e com cânticos,
e com tamboril, e com harpa?
28 Também não me permitiste
beijar os meus filhos e as minhas
filhas. Loucamente, pois, agora
agiste, fazendo assim.
29 Poder havia em minha mão
para vos fazer mal, mas o Deus de
11 a GEE Anjos.
13 a Gên. 28:10–22.
GEE Betel.
 b GEE Convênio.
19 a HEB terafins ou ídolos
de metal, madeira ou
barro.
Gên. 31:30, 32.
GEE Idolatria.
20 a Gên. 31:24.
24 a GEE Sonho.
55 GÊNESIS 31:11–29

vosso pai me falou ontem à noite,
dizendo: Guarda-te que não fales
a Jacó nem bem nem mal.
30 E agora se querias ir embora, porquanto tinhas saudades de
voltar à casa de teu pai, por que
furtaste os meus deuses?
31 Então respondeu Jacó, e disse
a Labão: Porque temia; pois que
dizia comigo, se porventura não me
arrebatarias as tuas filhas.
32 Com quem achares os teus
deuses, esse não viva; identifica
diante de nossos irmãos o que é
teu do que está comigo, e toma-o
para ti. Pois Jacó não sabia que
Raquel os tinha furtado.
33 Então entrou Labão na tenda
de Jacó, e na tenda de Lia, e na
tenda de ambas as servas, e não os
achou; e saindo da tenda de Lia,
entrou na tenda de Raquel.
34 Mas tinha tomado Raquel os
ídolos, e os tinha posto na albarda de um camelo, e assentara-se
sobre eles; e apalpou Labão toda
a tenda, e não os achou.
35 E ela disse a seu pai: Não se
acenda a ira nos olhos de meu senhor, que não posso levantar-me
diante da tua face, porquanto tenho
o costume das mulheres. E ele procurou, mas não achou os ídolos.
36 Então irou-se Jacó, e contendeu com Labão; e respondeu Jacó,
e disse a Labão: Qual é a minha
transgressão? Qual é o meu pecado, que tão furiosamente me tens
perseguido?
37 Havendo apalpado todos
os meus móveis, que achaste de
todos os móveis da tua casa? Põeno aqui diante dos meus irmãos,
e teus irmãos; e que julguem entre
nós ambos.
38 Estes vinte anos eu estive contigo, as tuas ovelhas e as tuas cabras nunca abortaram, e não comi
os carneiros do teu rebanho.
39 Não te trouxe eu o adespedaçado; eu o pagava; o furtado de
dia e o furtado de noite da minha
mão o requerias.
40 Eu era de dia consumido pelo
calor, e de noite pela geada; e o
meu sono foi-se dos meus olhos.
41 Eis que estive vinte anos na
tua casa; quatorze anos te aservi
por tuas duas filhas, e seis anos
por teu rebanho; mas o meu salário mudaste dez vezes.
42 Se o Deus de meu pai, o Deus
de Abraão, e o temor de Isaque
não fora comigo, por certo me despedirias agora com mãos vazias.
Deus atentou para a minha aflição, e para o trabalho das minhas
mãos, e repreendeu-te ontem à
noite.
43 Então respondeu Labão, e
disse a Jacó: Estas filhas são minhas filhas, e estes filhos são meus
filhos, e este rebanho é o meu rebanho, e tudo o que vês é meu; e que
farei hoje a estas minhas filhas, ou
a seus filhos, que elas deram à luz?
44 Agora, pois, vem e façamos
uma aliança eu e tu, que seja por
testemunho entre mim e ti.
45 Então tomou Jacó uma pedra,
e erigiu-a por acoluna.
46 E disse Jacó a seus irmãos:
39 a Êx. 22:12–13. 41 a Gên. 29:15–30. 45 a Gên. 28:18–22.
GÊNESIS 31:30–46 56

Ajuntai pedras. E tomaram pedras, e fizeram um montão, e comeram ali sobre aquele montão.
47 E chamou-o Labão aJegarSaaduta; porém, Jacó chamou-o
b
Galeede.
48 Então disse Labão: Este montão seja hoje por testemunha entre
mim e entre ti; por isso se chamou
o seu nome Galeede,
49 E aMispá, porquanto disse:
Atente o SENHOR entre mim e ti,
quando nós estivermos apartados
um do outro.
50 Se afligires as minhas filhas,
e se tomares mulheres além das
minhas filhas, ninguém está conosco; atenta que Deus é testemunha
entre mim e ti.
51 Disse mais Labão a Jacó: Eis
aqui este montão, e eis aqui esta
coluna que levantei entre mim e ti.
52 Este montão seja testemunha,
e esta coluna seja testemunha, que
eu não passarei deste montão para
o teu lado, e que tu não passarás
deste montão e desta coluna para
o meu lado, para mal.
53 O Deus de Abraão, e o Deus
de Naor, o Deus de seu pai julgue
entre nós. E jurou Jacó pelo temor
de seu pai Isaque.
54 E sacrificou Jacó um sacrifício na montanha, e convidou seus
irmãos para comer pão; e comeram pão, e passaram a noite na
montanha.
55 E levantou-se Labão pela
manhã, de madrugada, e beijou
seus filhos, e suas filhas, e abençoou-os, e partiu; e voltou Labão
ao seu lugar.
CAPÍTULO 32
Jacó vê anjos — Ele pede a Deus que
o proteja de Esaú, para quem prepara
presentes — Ele luta a noite inteira
com um mensageiro de Deus — O
nome de Jacó é mudado para Israel —
Ele vê Deus face a face.
E FOI também Jacó pelo seu caminho, e encontraram-no os anjos
de Deus.
2 E Jacó disse, quando os viu:
Este é o aexército de Deus. E
chamou o nome daquele lugar
b
Maanaim.
3 E enviou Jacó mensageiros
diante da sua face a seu irmão
Esaú, à terra de Seir, território de
aEdom.
4 E ordenou-lhes, dizendo:
Assim direis a meu senhor Esaú:
Assim diz teu servo Jacó: Como
peregrino morei com Labão, e me
detive lá até agora;
5 E tenho bois e jumentos, ovelhas, e servos e servas; e mandei
dizê-lo a meu senhor, para que
ache graça aos teus olhos.
6 E os mensageiros retornaram a
Jacó, dizendo: Fomos a teu irmão
Esaú; e também ele vem encontrar-te, e quatrocentos homens
com ele.
7 Então Jacó temeu muito, e angustiou-se; e repartiu o povo que
47 a IE A pilha do
testemunho (em
aramaico).
 b IE A pilha do
 testemunho (em
hebraico).
49 a IE O ponto de vigia.
32 2 a HEB mahaneh,
 “acampamento.”
 b IE Dois exércitos ou
acampamentos.
 3 a Gên. 36:1, 8.
57 GÊNESIS 31:47–32:7

com ele estava, e as ovelhas, e
as vacas, e os camelos, em dois
grupos.
8 Porque dizia: Se Esaú vier a um
grupo e o atacar, o outro grupo
escapará.
9 Disse mais Jacó: aDeus de meu
pai Abraão, e Deus de meu pai Isaque, o SENHOR, que me disseste:
Retorna à tua terra, e à tua parentela, e far-te-ei bem;
10 aMenor sou eu que todas as
b
benevolências, e que toda a fidelidade que tiveste para com o teu
servo; porque apenas com meu
cajado passei este Jordão, e agora
me tornei em dois grupos;
11 Livra-me, peço-te, da mão
de meu irmão, da mão de Esaú,
porque o temo, para que não
venha, e me mate, e a mãe com os
filhos.
12 E tu o disseste: Certamente
te farei bem, e farei a tua asemente como a b
areia do mar, que pela
multidão não se pode contar.
13 E passou ali aquela noite; e
tomou do que lhe veio à sua mão,
um presente para seu irmão Esaú:
14 Duzentas cabras, e vinte
bodes; duzentas ovelhas, e vinte
carneiros;
15 Trinta camelas de leite com
suas crias, quarenta vacas, e dez
novilhos; vinte jumentas, e dez
jumentinhos;
16 E deu-os na mão dos seus servos, cada rebanho à parte, e disse
a seus servos: Passai adiante da
minha face, e ponde espaço entre
rebanho e rebanho.
17 E ordenou ao primeiro, dizendo: Quando meu irmão Esaú te
encontrar, e te perguntar, dizendo:
De quem és, e para onde vais, e de
quem são estes diante da tua face?
18 Então dirás: São de teu servo
Jacó, presente que envia a meu senhor, a Esaú; e eis que ele mesmo
vem também atrás de nós.
19 E ordenou também ao segundo, e ao terceiro, e a todos os que
vinham atrás dos rebanhos, dizendo: Conforme essa mesma palavra
falareis a Esaú, quando o achardes.
20 E direis também: Eis que o
teu servo Jacó vem atrás de nós.
Porque dizia: Eu o aplacarei com o
presente, que vai adiante de mim,
e depois verei a sua face; porventura me aceitará.
21 Assim passou o presente adiante da sua face; ele,
porém, passou aquela noite no
acampamento.
22 E levantou-se naquela mesma
noite, e tomou as suas duas mulheres, e as suas duas servas, e os
seus onze filhos, e passou o vau
de Jaboque.
23 E tomou-os, e fê-los passar
o ribeiro; e fez passar tudo o que
tinha.
24 Jacó, porém, ficou só; e alutou
com ele um homem, até que a alva
subia.
25 E vendo que não prevalecia
contra ele, tocou a juntura de sua
 9 a 1 Né. 19:10.
10 a OU Eu não sou
digno de todas as
misericórdias (. . .)
GEE Dignidade, Digno.
 b 1 Né. 1:20.
12 a GEE Abraão — Semente
de Abraão.
 b Ose. 1:10.
24 a En. 1:1–12;
Al. 8:10.
GÊNESIS 32:8–25 58

coxa, e se deslocou a juntura da
coxa de Jacó, lutando com ele.
26 E disse: Deixa-me ir, porque
já a alva subiu. Porém ele disse:
Não te deixarei ir, se não me
abençoares.
27 E disse-lhe: Qual é o teu
nome? E ele disse: Jacó.
28 Então disse: Não se chamará
mais o teu anome Jacó, mas bIsrael, c
pois como príncipe lutaste
com Deus, e com os homens, e
dprevaleceste.
29 E Jacó lhe perguntou, e disse:
Dá-me, peço-te, a saber o teu
nome. E disse: Por que perguntas
pelo meu anome? E babençoou-o
ali.
30 E chamou Jacó o nome daquele lugar aPeniel, porque dizia: b
Vi
Deus c
face a face, e a minha alma
foi salva.
31 E saiu-lhe o sol, quando passou por Peniel; e manquejava da
sua coxa.
32 Por isso os filhos de Israel não
comem o tendão encolhido, que
está sobre a juntura da coxa, até o
dia de hoje; porquanto ele tocara a
juntura da coxa de Jacó no tendão
encolhido.
CAPÍTULO 33
Jacó e Esaú se encontram e se reconciliam — Esaú recebe os presentes de
Jacó — Jacó se estabelece em Canaã,
onde edifica um altar.
E LEVANTOU Jacó os seus olhos, e
olhou, e eis que vinha Esaú, e quatrocentos homens com ele. Então
repartiu os filhos entre Lia e Raquel, e as duas servas.
2 E pôs as servas e seus filhos
na frente, e Lia e seus filhos
atrás; porém Raquel e José, os
derradeiros.
3 E ele mesmo passou adiante
deles, e inclinou-se à terra sete
vezes, até que chegou a seu irmão.
4 Então Esaú correu-lhe ao encontro, e abraçou-o, e lançou-se
sobre o seu pescoço, e beijou-o; e
choraram.
5 Depois levantou os seus olhos,
e viu as mulheres, e os meninos, e
disse: Quem são estes contigo? E
ele disse: Os filhos que Deus graciosamente deu a teu servo.
6 Então chegaram as servas, elas
e os seus filhos, e inclinaram-se.
7 E chegou também Lia com
seus filhos, e inclinaram-se; e depois chegaram José e Raquel, e
inclinaram-se.
8 E disse Esaú: Que pretendes tu
com todo esse grupo que encontrei? E ele disse: Para achar graça
aos olhos de meu senhor.
9 Mas Esaú disse: Eu tenho bastante, meu irmão; seja para ti o
que tens.
10 Então disse Jacó: Não, se
agora achei graça aos teus olhos,
peço-te que tomes o meu presente
28 a Isa. 62:2.
 b IE Ele persevera com
Deus; pode também
significar: Que Deus
prevaleça. GEE Israel.
 c OU porque
perseveraste com
Deus (. . .)
 d 3 Né. 5:21–26;
D&C 132:37.
29 a Mos. 5:9–14.
 b GEE Abençoado,
Abençoar, Bênção.
30 a IE A face de Deus.
 b Ver TJS Êx. 33:20, 23
(Apêndice).
 c Ét. 12:39; D&C 93:1;
Mois. 1:11.
59 GÊNESIS 32:26–33:10

da minha mão; porquanto vi o teu
rosto, como se tivesse visto o rosto
de Deus, e tomaste contentamento
em mim.
11 Toma, peço-te, a minha bênção, que te foi trazida; porque
Deus graciosamente ma deu; e
porque tenho de tudo. E instou
com ele, até que a tomou.
12 E disse: Partamos, e andemos,
e eu irei adiante de ti.
13 Porém ele lhe disse: Meu senhor sabe que estes filhos são tenros, e que tenho comigo ovelhas
e vacas de leite; se as afadigarem
somente um dia, todo o rebanho
morrerá.
14 Ora, passe o meu senhor diante da face de seu servo; e eu irei
como guia pouco a pouco, conforme o passo do gado que está
adiante da minha face, e conforme
o passo dos meninos, até que chegue a meu senhor em Seir.
15 E Esaú disse: Permite-me deixar agora contigo parte desta gente
que está comigo. E ele disse: Para
que é isso? Basta que eu ache graça
aos olhos de meu senhor.
16 Assim, retornou Esaú naquele
dia pelo seu caminho a Seir.
17 Jacó, porém, partiu para aSucote e edificou para si uma casa;
e fez cabanas para o seu gado;
por isso chamou o nome daquele
lugar Sucote.
18 E chegou Jacó são e salvo à cidade de Siquém, que está na terra
de Canaã, quando vinha de PadãArã; e acampou diante da cidade.
19 E comprou uma parte do
campo em que armara a sua tenda,
da mão dos filhos de Hamor, pai
de Siquém, por cem peças de
dinheiro.
20 E levantou ali um altar, e chamou-o: aDeus, o Deus de Israel.
CAPÍTULO 34
Siquém desonra Diná — Os heveus
procuram fazer acordos matrimoniais
com a família de Jacó — Muitos, após
terem sido circuncidados, são mortos
por Simeão e Levi — Jacó repreende
seus filhos.
E SAIU Diná, filha de Lia, que esta
dera a Jacó, para ver as filhas da
terra.
2 E Siquém, filho de Hamor, o
heveu, príncipe daquela terra, viua, e tomou-a, e deitou-se com ela,
e desonrou-a.
3 E apegou-se a sua alma a Diná,
filha de Jacó, e amou a moça, e
falou afetuosamente à moça.
4 Falou também Siquém a seu
pai Hamor, dizendo: Toma-me
esta por mulher.
5 Quando Jacó ouviu que Siquém
desonrara sua filha Diná, estavam os seus filhos no campo com
o gado; e calou-se Jacó até que
viessem.
6 E foi Hamor, pai de Siquém, a
Jacó, para falar com ele.
7 E vieram os filhos de Jacó do
campo, quando ouviram isso, e
entristeceram-se os homens, e iraram-se muito, porquanto Siquém
33 17 a IE Cabanas.
20 a HEB El-Elohe-Israel,
que significa El
(Deus) é o Deus de
Israel.
GÊNESIS 33:11–34:7 60

fizera doidice em Israel, deitandose com a filha de Jacó, o que não
se devia fazer.
8 Então falou Hamor com eles, dizendo: A alma de meu filho Siquém
está enamorada da vossa filha; dailha, peço-vos, por mulher;
9 E aparentai-vos conosco, dainos as vossas filhas, e tomai as
nossas filhas para vós;
10 E habitareis conosco; e a terra
estará diante da vossa face; habitai e negociai nela, e tomai possessão nela.
11 E disse Siquém ao pai dela e
aos irmãos dela: Ache eu graça
aos vossos olhos e darei o que me
disserdes.
12 Aumentai o quanto quiserdes
o dote e a dádiva, e darei o que me
disserdes; dai-me somente a moça
por mulher.
13 Então responderam os filhos de Jacó a Siquém e a seu pai
Hamor enganosamente, e falaram,
porquanto ele havia desonrado
sua irmã Diná,
14 aE disseram-lhes: Não podemos fazer isso, que déssemos a
nossa irmã a um homem b
não circuncidado, porque isso seria uma
vergonha para nós;
15 Nisso, porém, consentiremos
a vós: se fordes como nós, que se
a
circuncide todo homem entre vós;
16 Então dar-vos-emos as nossas
filhas, e tomaremos nós as vossas
filhas, e habitaremos convosco, e
seremos um povo.
17 Mas se não nos ouvirdes, e
não vos circuncidardes, tomaremos a nossa filha e ir-nos-emos.
18 E suas palavras foram boas
aos olhos de Hamor, e aos olhos
de Siquém, filho de Hamor.
19 E não tardou o jovem em fazer
isso, porque a filha de Jacó lhe
agradava; e ele era o mais honrado
de toda a casa de seu pai.
20 Foram, pois, Hamor e seu
filho Siquém à porta da sua cidade, e falaram aos homens da sua
cidade, dizendo:
21 Estes homens são pacíficos conosco; portanto, habitarão nesta
terra, e negociarão nela; eis que a
terra é larga de espaço diante da
sua face; tomaremos nós as suas
filhas por mulheres, e lhes daremos as nossas filhas.
22 Nisto, porém, consentirão
aqueles homens em habitar conosco, para que sejamos um povo: se
todo homem entre nós se circuncidar, como eles são circuncidados.
23 O seu gado, as suas possessões, e todos os seus animais não
serão nossos? Consintamos, pois,
com eles, e habitarão conosco.
24 E deram ouvidos a Hamor e
a seu filho Siquém todos os que
saíam da porta da cidade; e foi circuncidado todo homem, de todos
os que saíam pela porta da sua
cidade.
25 E aconteceu que, ao terceiro
dia, quando estavam com a mais
violenta dor, os dois filhos de Jacó,
34 14 a Septuaginta: E
Simeão e Levi, irmãos
de Diná, filhos de
 Lia, disseram (. . .)
 b GEE Casamento,
Casar — Casamento
entre pessoas de
religiões diferentes.
15 a GEE Circuncisão.
61 GÊNESIS 34:8–25

aSimeão e Levi, irmãos de Diná,
tomaram cada um a sua espada, e
entraram afoitamente na cidade, e
mataram todos os homens.
26 Mataram também ao fio da espada Hamor, e seu filho Siquém; e
tomaram Diná da casa de Siquém,
e saíram.
27 Lançaram-se os filhos de Jacó
sobre os mortos e saquearam a
cidade, porquanto desonraram
sua irmã.
28 As suas ovelhas, e as suas
vacas, e os seus jumentos, e o que
na cidade e o que no campo havia,
tomaram,
29 E todos os seus bens, e todos
os seus pequeninos, e as suas mulheres levaram presos, e despojaram-nos de tudo o que havia em
casa.
30 Então disse Jacó a Simeão e a
Levi: Tendes-me turbado, fazendome cheirar mal entre os moradores
desta terra, entre os cananeus e
perizeus; tendo eu pouco povo em
número, ajuntar-se-ão contra mim,
e atacar-me-ão, e serei destruído,
eu e minha casa.
31 E eles disseram: Faria, pois,
ele a nossa irmã como a uma
prostituta?
CAPÍTULO 35
Deus envia Jacó a Betel, onde ele
constrói um altar, e o Senhor lhe
aparece — Deus renova a promessa
de que Jacó será uma grande nação e
volta a dizer que seu nome será Israel — Jacó ergue um altar e sobre
ele derrama uma libação — Raquel
dá à luz Benjamim, morre no parto e
é sepultada perto de Belém — Rúben
comete pecado com Bila — Isaque
morre e é sepultado por Jacó e Esaú.
DEPOIS disse Deus a Jacó: Levantate, sobe a Betel, e habita ali; e faz
ali um altar ao Deus que te apareceu, quando afugiste de diante da
face de teu irmão Esaú.
2 Então disse Jacó à sua família,
e a todos os que com ele estavam:
Tirai os adeuses estranhos que há
no meio de vós, e b
purificai-vos, e
mudai as vossas vestes.
3 E levantemo-nos, e subamos
a Betel; e ali farei um altar ao
Deus que me respondeu no dia
da minha aangústia, e que esteve
comigo no caminho em que andei.
4 Então deram a Jacó todos os
deuses estranhos que tinham em
suas mãos, e os brincos que estavam em suas orelhas; e Jacó os escondeu debaixo do carvalho que
está junto a Siquém.
5 E partiram; e o terror de Deus
caiu sobre as cidades que estavam
ao redor deles, e não foram ao encalço dos filhos de Jacó.
6 Assim, chegou Jacó a aLuz,
que está na terra de Canaã (esta é
Betel), ele e todo o povo que com
ele estava.
7 E edificou ali um altar, e chamou aquele lugar El-Betel, porquanto Deus ali se lhe tinha
manifestado, quando fugia de
diante da face de seu irmão.
8 E morreu Débora, a ama de
25 a Gên. 49:5–7.
35 1 a Gên. 27:41–45.
 2 a GEE Idolatria.
 b GEE Limpo e Imundo.
 3 a Gên. 32:7–8.
 6 a Gên. 28:19.
GÊNESIS 34:26–35:8 62

Rebeca, e foi sepultada ao pé
de Betel, debaixo do carvalho
que se chamou pelo nome de
aAlom-Bacute.
9 E apareceu Deus outra vez a
Jacó, vindo ele de Padã-Arã, e
abençoou-o.
10 E disse-lhe Deus: O teu nome
é Jacó; não se chamará mais o teu
nome Jacó, mas aIsrael será o teu
nome. E chamou o seu nome
Israel.
11 Disse-lhe mais Deus: Eu sou
o aDeus Todo-Poderoso; frutifica
e multiplica-te; uma nação e uma
multidão de b
nações sairão de ti, e
reis procederão dos teus lombos;
12 E te darei a aterra que dei a
Abraão e a Isaque, e à tua semente
depois de ti darei a terra.
13 E Deus subiu de diante dele, do
lugar onde falara com ele.
14 E Jacó pôs uma coluna no
lugar onde falara com ele, uma
coluna de pedra; e derramou sobre
ela uma libação, e deitou sobre
ela azeite.
15 E chamou Jacó o nome daquele lugar, onde Deus falara com
ele, Betel.
16 E partiram de Betel; e havia
ainda um pequeno espaço de terra
para chegar a Efrata, e Raquel deu
à luz, e ela teve um parto difícil.
17 E aconteceu que, tendo ela dificuldade em seu parto, lhe disse a
parteira: Não temas, porque também este filho terás.
18 E aconteceu que, ao sair-lhe a
alma (porque ela morreu), chamou
o seu nome aBenoni; mas seu pai
o chamou b
Benjamim.
19 Assim, morreu Raquel, e foi
sepultada no caminho de Efrata,
que é Belém.
20 E Jacó pôs uma coluna sobre
a sua sepultura; essa é a coluna
da sepultura de Raquel até o dia
de hoje.
21 Então partiu Israel, e armou
a sua tenda além de Migdal Éder.
22 E aconteceu que, habitando
Israel naquela terra, foi Rúben, e
adeitou-se com Bila, concubina de
seu pai; e Israel ouviu-o. E eram
doze os filhos de Jacó:
23 Os filhos de Lia: Rúben, o
primogênito de Jacó, depois Simeão, e Levi, e Judá, e Issacar, e
Zebulom;
24 Os filhos de Raquel: José e
Benjamim;
25 E os filhos de Bila, serva de
Raquel: Dã e Naftali;
26 E os filhos de Zilpa, serva de
Lia: Gade e Aser. Esses são os filhos de Jacó, que lhe nasceram em
Padã-Arã.
27 E Jacó foi a seu pai Isaque, a
Manre, a Quiriate-Arba (que é Hebrom), onde peregrinaram Abraão
e Isaque.
28 E foram os dias de Isaque
cento e oitenta anos.
29 E Isaque expirou, e morreu, e
foi recolhido ao seu povo, velho e
 8 a IE Carvalho do pranto.
10 a GEE Israel.
11 a HEB El Shaddai.
 b GEE Abraão — Semente
de Abraão.
12 a GEE Terra da
Promissão.
18 a HEB Filho da minha
tristeza ou angústia.
 b HEB Filho da mão
direita.
22 a GEE Imoralidade
Sexual.
63 GÊNESIS 35:9–29

farto de dias; e seus filhos Esaú e
Jacó o sepultaram.
CAPÍTULO 36
Os descendentes de Esaú, que é
Edom, são enumerados.
E ESTAS são as gerações de Esaú
(que é aEdom).
2 Esaú tomou suas mulheres
das filhas de Canaã: Ada, filha de
Elom, o heteu, e Aolibama, filha
de Aná, filha de Zibeão, o heveu,
3 E Basemate, filha ade Ismael,
irmã de Nebaiote.
4 E Ada deu Elifaz a Esaú; e Basemate deu à luz Reuel;
5 E Aolibama deu à luz Jeús, e
Jalão, e Coré; esses são os filhos de
Esaú, que lhe nasceram na terra
de Canaã.
6 E Esaú tomou suas mulheres,
e seus filhos, e suas filhas, e todas
as almas de sua casa, e seu gado, e
todos os seus animais, e todos os
seus bens que havia adquirido na
terra de Canaã, e foi para outra terra,
distante da face de seu irmão Jacó,
7 Porque os bens deles eram
muitos para habitarem juntos; e
a terra de suas peregrinações não
os podia sustentar, por causa do
seu gado.
8 Portanto, Esaú habitou na montanha de Seir; Esaú é Edom.
9 Essas, pois, são as agerações de
Esaú, pai dos edomitas, na montanha de Seir.
10 Estes são os nomes dos filhos
de Esaú: Elifaz, filho de Ada,
mulher de Esaú; Reuel, filho de
Basemate, mulher de Esaú.
11 E os filhos de Elifaz foram:
Temã, Omar, Zefô, e Gaetã, e
Quenaz.
12 E Timna era concubina de Elifaz, filho de Esaú, e deu Amaleque
a Elifaz; esses são os filhos de Ada,
mulher de Esaú.
13 E estes foram os filhos de
Reuel: Naate, e Zerá, Samá, e
Mizá; esses foram os filhos de Basemate, mulher de Esaú.
14 E estes foram os filhos de
Aolibama, filha de Aná, filha de
Zibeão, mulher de Esaú; e deu a
Esaú: Jeús, e Jalão, e Coré.
15 Estes são os apríncipes dos filhos de Esaú: os filhos de Elifaz,
o primogênito de Esaú, foram: o
príncipe Temã, o príncipe Omar, o
príncipe Zefô, o príncipe Quenaz,
16 O príncipe Coré, o príncipe
Gaetã, o príncipe Amaleque; esses
são os príncipes de Elifaz na terra
de Edom, esses são os filhos de
Ada.
17 E estes são os filhos de Reuel,
filho de Esaú: o príncipe Naate, o
príncipe Zerá, o príncipe Samá, o
príncipe Mizá; esses são os príncipes de Reuel, na terra de Edom;
esses são os filhos de Basemate,
mulher de Esaú.
18 E estes são os filhos de Aolibama, mulher de Esaú: o príncipe
Jeús, o príncipe Jalão, o príncipe
Coré; esses são os príncipes de
Aolibama, filha de Aná, mulher
de Esaú.
36 1 a Gên. 25:30.
 3 a Gên. 28:9.
 9 a IE linhagens
genealógicas.
15 a IE chefes tribais.
GÊNESIS 36:1–18 64

19 Esses são os filhos de Esaú, e
esses são seus príncipes; ele é Edom.
20 Estes são os filhos de Seir, o
horeu, moradores daquela terra:
Lotã, e Sobal, e Zibeão, e Aná,
21 E Disom, e Eser, e Disã; esses
são os príncipes dos horeus, filhos
de Seir, na terra de Edom.
22 E os filhos de Lotã foram:
Hori e Homã; e a irmã de Lotã
era Timna.
23 Estes são os filhos de Sobal:
Alvã, e Manaate, e Ebal, e Sefô,
e Onã.
24 E estes são os filhos de Zibeão:
Aiá, e Aná; esse é o Aná que achou
as fontes termais no deserto, quando apascentava os jumentos de
seu pai Zibeão.
25 E estes são os filhos de Aná:
Disom, e Aolibama, a filha de Aná.
26 E estes são os filhos de Disom:
Hendã, e Esbã, e Itrã, e Querã.
27 Estes são os filhos de Eser: Bilã,
e Zaavã, e Acã.
28 Estes são os filhos de Disã:
Uz, e Arã.
29 Estes são os príncipes dos horeus: O príncipe Lotã, o príncipe
Sobal, o príncipe Zibeão, o príncipe Aná,
30 O príncipe Disom, o príncipe Eser, o príncipe Disã; esses
são os príncipes dos horeus, segundo os seus príncipes na terra
de Seir.
31 E estes são os reis que reinaram na terra de Edom, antes que
reinasse rei algum sobre os filhos
de Israel.
32 E Bela, filho de Beor, reinou
em Edom, e o nome da sua cidade
foi Dinabá.
33 E morreu Bela; e Jobabe, filho
de Zerá de Bozra, reinou em seu
lugar.
34 E morreu Jobabe; e Husão,
da terra dos temanitas, reinou em
seu lugar.
35 E morreu Husão, e em seu
lugar reinou Hadade, filho de Bedade, o que derrotou Midiã no
campo de Moabe; e o nome da sua
cidade foi Avite.
36 E morreu Hadade; e Samlá
de Masreca reinou em seu lugar.
37 E morreu Samlá; e Saul de
Reobote, junto ao rio, reinou em
seu lugar.
38 E morreu Saul; e Baal-Hanã,
filho de Acbor, reinou em seu
lugar.
39 E morreu Baal-Hanã, filho
de Acbor, e Hadar reinou em seu
lugar; e o nome da sua cidade foi
Pau; e o nome de sua mulher foi
Meetabel, filha de Matrede, filha
de Me-Zaabe.
40 E estes são os nomes dos príncipes de Esaú, segundo as suas gerações, segundo os seus lugares, com
os seus nomes: o príncipe Timna,
o príncipe Alva, o príncipe Jetete,
41 O príncipe Aolibama, o príncipe Ela, o príncipe Pinom,
42 O príncipe Quenaz, o príncipe
Temã, o príncipe Mibzar,
43 O príncipe Magdiel, o príncipe Irã; esses são os príncipes de
Edom, segundo as suas habitações, na terra da sua possessão;
esse é aEsaú, pai de Edom.
43 a Jer. 49:10–17. GEE Esaú.
65 GÊNESIS 36:19–43

CAPÍTULO 37
Jacó ama e favorece José, que é odiado pelos irmãos — José sonha que
seus pais e irmãos se inclinam diante dele — Seus irmãos vendem-no
ao Egito.
E JACÓ habitou na terra das peregrinações de seu pai, na terra
de Canaã.
2 Estas são as agerações de Jacó.
Sendo bJosé de dezessete anos,
apascentava as ovelhas com seus
irmãos; e estava este jovem com os
filhos de Bila, e com os filhos de
Zilpa, mulheres de seu pai; e José
contava a má fama deles a seu pai.
3 E Israel amava aJosé mais do
que todos os seus filhos, porque
era filho da sua velhice; e fez-lhe
uma b
túnica de várias c
cores.
4 Vendo, pois, seus irmãos que
seu pai o amava mais do que
todos os seus irmãos, odiaramno, e não podiam falar com ele
pacificamente.
5 Sonhou também José um asonho, que contou a seus irmãos;
por isso o odiaram ainda mais.
6 E disse-lhes: Ouvi, peço-vos,
este sonho que sonhei:
7 Eis que estávamos atando molhos no meio do campo, e eis que
o meu molho se levantava, e também ficava em pé, e eis que os
vossos molhos o rodeavam, e se
ainclinavam ao meu molho.
8 Então lhe disseram seus irmãos: Tu, pois, deveras reinarás
sobre nós? tu deveras terás domínio sobre nós? Por isso tanto mais
o odiaram por seus sonhos e por
suas palavras.
9 E sonhou ainda outro sonho,
e o contou a seus irmãos, e disse:
Eis que ainda sonhei outro sonho;
e eis que o sol, e a lua, e onze estrelas se inclinavam a mim.
10 E contando-o a seu pai e a
seus irmãos, repreendeu-o seu pai,
e disse-lhe: Que sonho é esse que
sonhaste? Porventura viremos eu
e tua mãe, e teus irmãos, a ainclinar-nos a ti em terra?
11 Seus irmãos, pois, o ainvejavam; seu pai, porém, guardava
esse assunto no seu coração.
12 E seus irmãos foram apascentar o rebanho de seu pai, junto de
Siquém.
13 Disse, pois, Israel a José: Não
pastoreiam os teus irmãos junto
de Siquém? Vem, e enviar-te-ei a
eles. E ele lhe disse: Eis-me aqui.
14 E ele lhe disse: Ora, vai, vê
como estão teus irmãos, e como
está o rebanho, e traze-me resposta. Assim, o enviou do vale de
Hebrom, e ele foi a Siquém.
15 E achou-o um homem, porque eis que andava errante pelo
campo, e perguntou-lhe o homem,
dizendo: Que procuras?
16 E ele disse: Procuro meus
37 2 a GEE Genealogia.
 b Gên. 41:46.
 3 a GEE José, Filho de Jacó.
 b Al. 46:23–24.
 c IE A palavra na
Septuaginta indica
muitas cores, mas o
termo hebraico pode
significar simplesmente
uma longa túnica com
mangas.
 5 a GEE Sonho.
 7 a Gên. 42:6, 9; 43:26–28;
44:14.
10 a Ver TJS Gên. 48:5–11
(Apêndice).
Gên. 50:18.
11 a GEE Inveja.
GÊNESIS 37:1–16 66

irmãos; dize-me, peço-te, onde
eles pastoreiam.
17 E disse aquele homem: Foramse daqui; porque os ouvi dizer:
Vamos a Dotã. José, pois, seguiu
atrás de seus irmãos, e achou-os
em Dotã.
18 E viram-no de longe e, antes
que chegasse a eles, conspiraram
contra ele, para o amatarem.
19 E disseram um ao outro: Eis
que lá vem o asonhador-mor!
20 Vinde, pois, agora, e matemo-lo, e lancemo-lo numa destas covas, e diremos: Uma fera o
comeu; e veremos o que será dos
seus sonhos.
21 E ouvindo-o aRúben, livrou-o
das suas mãos, e disse: Não lhe tiremos a vida.
22 Também lhes disse Rúben:
Não derrameis sangue; lançai-o
nesta cova, que está no deserto,
e não lanceis mãos nele; isso disse
para livrá-lo das suas mãos, e para
levá-lo de volta a seu pai.
23 E aconteceu que, chegando
José a seus irmãos, tiraram de José
a sua túnica, a túnica de várias
cores que trazia.
24 E tomaram-no, e lançaram-no
na cova; porém a cova estava vazia,
não havia água nela.
25 Depois se assentaram a comer
pão: e levantaram os seus olhos, e
olharam, e eis que uma caravana
de ismaelitas vinha de Gileade; e
seus camelos traziam especiarias,
e bálsamo, e mirra, e iam levá-los
ao Egito.
26 Então Judá disse aos seus irmãos: Que proveito haverá em que
matemos nosso irmão e escondamos o seu sangue?
27 Vinde, e vendamo-lo a estes
ismaelitas, e não seja nossa mão
sobre ele, porque ele é nosso
irmão, nossa carne. E seus irmãos
aobedeceram.
28 Passando, pois, os mercadores
midianitas, alçaram e tiraram José
da cova, e venderam José por vinte
moedas de prata aos aismaelitas, os
quais levaram José ao Egito.
29 Tornando, pois, Rúben à cova,
eis que José não estava na cova;
então rasgou as suas vestes,
30 E retornou a seus irmãos, e
disse: O moço não está mais lá; e
eu aonde irei?
31 Então tomaram a túnica de
José, e mataram um cabrito, e tingiram a túnica no sangue,
32 E enviaram a túnica de várias
cores, e mandaram levá-la a seu
pai, e disseram: Achamos essa túnica; reconhece agora se essa é ou
não a túnica de teu filho.
33 E reconheceu-a, e disse: É
a túnica de meu filho; uma fera
o comeu; certamente José foi
despedaçado.
34 Então Jacó rasgou as suas vestes, e pôs panos de saco sobre os
seus lombos, e lamentou seu filho
muitos dias.
35 E levantaram-se todos os seus
filhos e todas as suas filhas, para
o consolarem; recusou, porém, ser
consolado, e disse: Porquanto com
18 a GEE Homicídio.
19 a HEB mestre dos sonhos.
21 a Gên. 42:22.
27 a HEB deram ouvidos.
28 a GEE Ismael, Filho de
Abraão.
67 GÊNESIS 37:17–35

achoro hei de descer ao meu filho
até a sepultura. Assim, o chorou
seu pai.
36 E os midianitas avenderamno no Egito a Potifar, b
eunuco de
Faraó, c
capitão da guarda.
CAPÍTULO 38
Judá tem três filhos com uma mulher
cananeia — Er e Onã são mortos pelo
Senhor — Tamar, disfarçada de meretriz, dá à luz gêmeos de Judá.
E ACONTECEU, naquele mesmo
tempo, que Judá desceu de entre
seus irmãos, e entrou na casa de
um homem de Adulão, cujo nome
era Hira.
2 E viu Judá ali a afilha de um
homem cananeu, cujo nome era
Sua; e tomou-a, e achegou-se a ela.
3 E ela concebeu, e deu à luz um
filho, e chamou o seu nome Er.
4 E tornou a conceber, e deu à luz
um filho, e chamou o seu nome
Onã.
5 E continuou ainda, e deu à luz
um filho, e chamou o seu nome
Selá; e ele estava em Quezibe,
quando ela o deu à luz.
6 Judá, pois, tomou uma mulher
para Er, o seu primogênito, e o seu
nome era Tamar.
7 Er, porém, o primogênito
de Judá, era mau aos olhos do
SENHOR, pelo que o SENHOR
o matou.
8 Então disse Judá a Onã: Achega-te à amulher do teu irmão, e
casa-te com ela, e suscita semente
a teu irmão.
9 Onã, porém, soube que essa
semente não havia de ser para
ele; e aconteceu que, quando se
achegava à mulher de seu irmão,
derramava-a na terra, para não dar
semente a seu irmão.
10 E o que fazia era mau aos
olhos do SENHOR, pelo que também o matou.
11 Então disse Judá a Tamar sua
nora: Permanece viúva na casa de
teu pai, até que Selá, meu filho,
seja grande. Porquanto disse:
Para que porventura não morra
também esse, como seus irmãos.
Assim, foi Tamar, e ficou na casa
de seu pai.
12 Passando-se, pois, muitos
dias, morreu a filha de Sua, mulher de Judá; e depois se consolou
Judá, e subiu aos tosquiadores
das suas ovelhas, em Timna, ele
e Hira, seu amigo, o adulamita.
13 E deram aviso a Tamar, dizendo: Eis que o teu sogro sobe
a Timna, para tosquiar as suas
ovelhas.
14 Então ela tirou de sobre si os
vestidos da sua viuvez, e cobriu-se
com o véu, e envolveu-se, e assentou-se à entrada das duas fontes
que estão no caminho de Timna,
porque via que Selá já era grande,
e ela não lhe fora dada por mulher.
15 E vendo-a Judá, teve-a por
uma prostituta, porque ela tinha
coberto o seu rosto.
35 a Gên. 42:38.
36 a 1 Né. 5:14;
2 Né. 3:4.
 b HEB oficial.
 c HEB oficial, supervisor.
38 2 a GEE Casamento,
Casar — Casamento
entre pessoas de
 religiões diferentes.
 8 a Deut. 25:5–10.
GEE Viúva.
GÊNESIS 37:36–38:15 68

16 E dirigiu-se a ela no caminho,
e disse: Vem, peço-te, permite que
me achegue a ti. Porquanto não
sabia que era sua nora; e ela disse:
Que darás, para que te achegues
a mim?
17 E ele disse: Eu te enviarei um
cabrito do rebanho. E ela disse:
Dar-me-ás penhor até que o
envies?
18 Então ele disse: Que penhor
é que te darei? E ela disse: O teu
selo, e o teu cordão, e o cajado
que está em tua mão. O que ele
lhe deu, e achegou-se a ela, e ela
concebeu dele.
19 E ela se levantou, e se foi, e
tirou de sobre si o seu véu, e vestiu
os vestidos da sua viuvez.
20 E Judá enviou o cabrito por
mão do seu amigo, o adulamita,
para tomar o penhor da mão da
mulher, porém não a achou.
21 E perguntou aos homens daquele lugar, dizendo: Onde está a
prostituta que estava no caminho
junto às duas fontes? E disseram:
Aqui não esteve prostituta alguma.
22 E retornou a Judá, e disse:
Não a achei; e também disseram
os homens daquele lugar: Aqui
não esteve prostituta.
23 Então disse Judá: Tome-o para
si, para que porventura não caiamos em desprezo; eis que enviei
esse cabrito, mas tu não a achaste.
24 E aconteceu que, quase três
meses depois, deram aviso a Judá
dizendo: Tamar, tua nora, se prostituiu, e eis que está grávida da
prostituição. Então disse Judá:
Tirai-a para fora para que seja
aqueimada.
25 E tirando-a para fora, ela mandou dizer a seu sogro: Do homem
de quem são estas coisas eu concebi. E ela disse mais: Reconhece,
peço-te, de quem são este selo, e
estes cordões, e este cajado.
26 E reconheceu-os Judá, e disse:
Mais justa é ela do que eu, porquanto não a dei a meu filho Selá.
E nunca mais a conheceu.
27 E aconteceu ao tempo de dar
à luz, eis que havia gêmeos em
seu ventre.
28 E aconteceu que, dando ela à
luz, um pôs para fora a mão, e a
parteira tomou-a, e atou em sua
mão um fio escarlate, dizendo: Este
saiu primeiro.
29 Mas aconteceu que, tornando
ele a recolher a sua mão, eis que
saiu o seu irmão, e ela disse: Como
rompeste? Sobre ti seja a rotura.
E chamaram o seu nome aPerez;
30 E depois saiu o seu irmão, em
cuja mão estava o fio de escarlate;
e chamaram o seu nome aZerá.
CAPÍTULO 39
José, que o Senhor fez prosperar, torna-se mordomo da casa de Potifar —
José resiste à sedução da mulher de
Potifar, é acusado falsamente e colocado na prisão — O carcereiro-mor
entrega nas mãos de José os assuntos
da prisão.
E JOSÉ foi levado ao Egito, e
24 a Lev. 21:9.
29 a HEB brecha, irrupção.
Rut. 4:18–22;
Lc. 3:23–38.
30 a Gên. 46:12;
Ne. 11:24.
69 GÊNESIS 38:16–39:1

Potifar, eunuco de Faraó, capitão
da guarda, homem egípcio, comprou-o da mão dos ismaelitas que
o tinham levado para lá.
2 E o SENHOR estava com aJosé, e
foi homem próspero; e estava na
casa de seu senhor egípcio.
3 Viu, pois, o seu senhor que o
SENHOR estava com ele, e que tudo
o que fazia o SENHOR aprosperava
em sua mão.
4 José achou graça aos seus olhos,
e servia-o; e ele o pôs sobre a sua
casa, e entregou na sua mão tudo
o que tinha.
5 E aconteceu que, desde que o
pusera sobre a sua casa, e sobre
tudo o que tinha, o SENHOR abençoou a casa do egípcio apor causa
de José; e a bênção do SENHOR
estava sobre tudo o que tinha, na
casa e no campo.
6 E deixou tudo o que tinha na
mão de José, de maneira que de
nada sabia do que estava com ele,
mais do que do pão que comia. E
José era formoso de porte, e formoso à vista.
7 E aconteceu, depois dessas coisas, que a mulher de seu senhor
pôs os seus a
olhos em José, e disse:
Deita-te comigo.
8 Porém ele arecusou, e disse à
mulher do seu senhor: Eis que o
meu senhor não sabe do que há
em casa comigo, e bentregou em
minha mão tudo o que tem;
9 Ninguém há maior do que eu
nesta casa, e nenhuma coisa me
vedou, senão a ti, porquanto tu
és sua mulher; como, pois, faria
eu este tamanho amal, e pecaria
contra Deus?
10 E aconteceu que, falando ela
cada dia a José, e não lhe dando
ele ouvidos, para deitar-se com
ela, e estar com ela,
11 Sucedeu, num certo dia, que
veio à casa para fazer seu serviço;
e nenhum dos da casa estava ali.
12 E ela o pegou pela sua roupa,
dizendo: Deita-te comigo. E ele
deixou a sua roupa na mão dela,
e afugiu, e saiu para fora.
13 E aconteceu que, vendo ela
que ele deixara a sua roupa em
sua mão, e fugira para fora,
14 Chamou os homens de sua
casa, e falou-lhes, dizendo: Vede,
ele trouxe-nos o homem hebreu
para escarnecer de nós; veio a mim
para deitar-se comigo, e eu gritei
com grande voz,
15 E aconteceu que, ouvindo ele
que eu levantava a minha voz e
gritava, deixou a sua roupa comigo, e fugiu, e saiu para fora.
16 E ela pôs a roupa dele perto
de si, até que o seu senhor veio à
sua casa.
17 Então falou-lhe conforme as
mesmas palavras, dizendo: Veio
a mim o servo hebreu, que nos
trouxeste para escarnecer de mim;
18 E aconteceu que, levantando
eu a minha voz e gritando, ele deixou a sua roupa comigo, e fugiu
para fora.
39 2 a 2 Né. 3:4–7; 4:1–2.
 3 a Salm. 1:2–3;
Mos. 2:41.
 5 a Gên. 30:27.
 7 a GEE Concupiscência;
Sensual, Sensualidade.
 8 a GEE Virtude.
 b GEE Confiança, Confiar;
Integridade.
 9 a GEE Adultério;
Fornicação.
12 a GEE Castidade.
GÊNESIS 39:2–18 70

19 E aconteceu que, ouvindo
o seu senhor as palavras de sua
mulher, que lhe afalava, dizendo: Conforme essas mesmas palavras me fez teu servo; a sua ira
se acendeu.
20 E o senhor de José o tomou, e
o entregou na acasa do cárcere, no
lugar onde os presos do rei estavam
encarcerados; assim, esteve ali na
casa do cárcere.
21 O SENHOR, porém, estava com
José, e estendeu sobre ele a sua
benignidade, e deu-lhe graça aos
olhos do carcereiro-mor.
22 E o carcereiro-mor entregou
na mão de José todos os presos
que estavam na casa do cárcere, e
ele afazia tudo o que se fazia ali.
23 E o carcereiro-mor não tinha
cuidado de nenhuma coisa que
estava na mão dele, porquanto o
SENHOR estava com ele, e tudo o
que fazia o SENHOR aprosperava.
CAPÍTULO 40
José interpreta o sonho do copeiro-mor
e do padeiro-mor — O copeiro-mor
esquece de falar de José a Faraó.
E ACONTECEU, depois dessas coisas, que o copeiro do rei do Egito e
o padeiro ofenderam o seu senhor,
o rei do Egito.
2 E indignou-se Faraó muito
contra os seus dois eunucos,
contra o copeiro-mor e contra o
padeiro-mor,
3 E colocou-os na prisão, na casa
do capitão da guarda, na casa do
cárcere, no lugar onde José estava preso.
4 E o capitão da guarda encarregou José deles, e ele os serviu;
e estiveram muitos dias na prisão.
5 E ambos sonharam um sonho,
cada um seu sonho na mesma
noite, cada um conforme a interpretação do seu sonho, o copeiro e o padeiro do rei do Egito,
que estavam presos na casa do
cárcere.
6 E foi José a eles pela manhã, e
olhou para eles, e eis que estavam
perturbados.
7 Então perguntou aos eunucos
de Faraó, que com ele estavam no
cárcere da casa de seu senhor, dizendo: Por que estão hoje tristes os
vossos semblantes?
8 E eles lhe disseram: Sonhamos
um asonho, e ninguém há que o
interprete. E José disse-lhes: Não
são de Deus as binterpretações?
Contai-mo, peço-vos.
9 Então contou o copeiro-mor o
seu sonho a José, e disse-lhe: Eis
que em meu sonho havia uma vide
diante da minha face,
10 E na vide, três asarmentos, e
estava como brotando; a sua flor
saía, os seus cachos amadureciam
em uvas:
11 E o copo de Faraó estava na
minha mão, e eu tomava as uvas,
e as espremia no copo de Faraó,
e dava o copo na mão de Faraó.
12 Então disse-lhe José: Esta é a
19 a GEE Mentir, Mentiroso.
20 a Salm. 105:17–19.
22 a TJS Gên. 39:22 (. . .) era
supervisor de (. . .)
23 a GEE Abençoado,
Abençoar, Bênção.
40 8 a GEE Sonho.
 b 2 Ped. 1:20–21;
 1 Né. 11:10–11.
10 a IE ramos de videira.
71 GÊNESIS 39:19–40:12

sua interpretação: os três sarmentos são três dias;
13 Dentro ainda de três dias
Faraó levantará a tua cabeça, e te
restaurará ao teu cargo, e darás o
copo de Faraó na sua mão, conforme o costume antigo, quando
eras seu copeiro.
14 Porém lembra-te de mim,
quando estiveres bem; e rogo-te
que uses comigo de compaixão, e
que faças menção de mim a Faraó,
e faze-me sair desta casa;
15 Porque, de fato, fui roubado
da terra dos hebreus; e tampouco
aqui nada fiz para que me pusessem nesta cova.
16 Vendo então o padeiro-mor
que tinha interpretado bem, disse
a José: Eu também sonhei, e eis
que três cestos brancos estavam
sobre a minha cabeça;
17 E no cesto mais alto havia de
todos os manjares de Faraó, da
obra de padeiro; e as aves o comiam do cesto de sobre a minha
cabeça.
18 Então respondeu José, e disse:
Esta é a sua interpretação: os três
cestos são três dias;
19 Dentro ainda de três dias
Faraó levantará a tua cabeça de
sobre ti, e te pendurará num madeiro, e as aves comerão a tua
carne de sobre ti.
20 E aconteceu ao terceiro dia, o
dia do nascimento de Faraó, que
fez um banquete a todos os seus
servos; e levantou a cabeça do
copeiro-mor, e a cabeça do padeiro-mor, no meio dos seus servos.
21 E fez retornar o copeiro-mor
ao seu ofício de copeiro, e ele deu
o copo na mão de Faraó,
22 Mas enforcou o padeiro-mor,
como José havia interpretado.
23 O copeiro-mor, porém, não
se lembrou de José, mas esqueceu-se dele.
CAPÍTULO 41
Faraó sonha com as vacas e as espigas — José interpreta os sonhos
como sete anos de fartura e sete anos
de fome — Ele propõe um programa de armazenamento de trigo —
Faraó faz dele governante de todo
o Egito — José se casa com Azenate — Ele ajunta trigo como a areia
do mar — Azenate dá à luz Manassés e Efraim — José vende trigo aos
egípcios e a outras pessoas durante a
época de fome.
E ACONTECEU que, ao fim de dois
anos inteiros, Faraó asonhou, e
eis que estava em pé junto ao rio,
2 E eis que subiam do rio sete
vacas, formosas à vista e gordas
de carne, e pastavam no prado.
3 E eis que subiam do rio após
elas outras sete vacas, feias à vista
e magras de carne; e paravam
junto às outras vacas na margem
do rio.
4 E as vacas feias à vista, e magras de carne, comiam as sete
vacas formosas à vista e gordas.
Então acordou Faraó.
5 Depois dormiu, e sonhou outra
vez, e eis que brotavam de uma
haste sete espigas cheias e boas,
41 1 a GEE Sonho.
GÊNESIS 40:13–41:5 72

6 E eis que sete espigas miúdas,
e queimadas do vento oriental,
brotavam após elas.
7 E as espigas miúdas devoravam as sete espigas grandes e
cheias. Então acordou Faraó, e
eis que era um sonho.
8 E aconteceu que pela manhã o
seu espírito perturbou-se, e mandou chamar todos os adivinhos
do Egito, e todos os seus sábios; e
Faraó contou-lhes os seus sonhos,
mas ninguém havia que os interpretasse a Faraó.
9 Então falou o copeiro-mor a
Faraó, dizendo: Dos meus erros
me lembro hoje:
10 Estando Faraó muito indignado contra os seus servos, e pondome na prisão, na casa do capitão
da guarda, eu e o padeiro-mor,
11 Então sonhamos um sonho
na mesma noite, eu e ele, cada um
conforme a interpretação do seu
sonho sonhamos.
12 E estava ali conosco um jovem
hebreu, servo do capitão da guarda, e contamos-lhos, e interpretou-nos os nossos sonhos, a cada
um os interpretou conforme o
seu sonho.
13 E como ele nos interpretou,
assim mesmo foi feito: a mim me
fez retornar ao meu cargo, e a ele
fez enforcar.
14 Então aFaraó mandou chamar
José, e o fizeram sair logo da cova;
e barbeou-se e mudou as suas vestes, e foi a Faraó.
15 E Faraó disse a José: Eu sonhei
um sonho, e ninguém há que o
interprete; mas de ti ouvi dizer
que quando ouves um sonho o
interpretas.
16 E respondeu José a Faraó,
dizendo: Não está em mim; aDeus responderá com bpaz a
Faraó.
17 Então disse Faraó a José: Eis
que em meu sonho estava eu em
pé na margem do rio,
18 E eis que subiam do rio sete
vacas gordas de carne e formosas
à vista, e pastavam no prado.
19 E eis que outras sete vacas
subiam após estas, muito feias à
vista, e magras de carne; não vi
outras tais, quanto à feiura, em
toda a terra do Egito.
20 E as vacas magras e feias
comiam as primeiras sete vacas
gordas;
21 E entravam em suas entranhas, mas não se notava que
houvessem entrado em suas entranhas, porque a sua aparência
era feia como no princípio. Então
acordei.
22 Depois vi em meu sonho, e
eis que de uma haste subiam sete
espigas cheias e boas;
23 E eis que sete espigas secas,
miúdas e queimadas do vento aoriental, brotavam após elas.
24 E as sete espigas miúdas
devoravam as sete espigas boas. E
eu contei aos magos, mas ninguém
houve que mo interpretasse.
25 Então disse José a Faraó: O
sonho de Faraó é um só; o que
14 a Salm. 105:20;
D&C 105:27.
16 a Dan. 2:29–30;
Al. 26:35.
 b D&C 6:23.
GEE Paz.
23 a Ose. 13:15–16;
Mos. 7:31.
73 GÊNESIS 41:6–25

Deus há de fazer, anotificou-o a
Faraó.
26 As sete vacas formosas são
sete anos; as sete espigas formosas também são sete anos; o sonho
é um só.
27 E as sete vacas feias à vista
e magras, que subiam depois
delas, são sete anos; e as sete espigas miúdas e queimadas do vento
oriental serão sete anos de fome.
28 Esta é a palavra que eu disse
a Faraó: o que Deus há de fazer,
mostrou-o a Faraó.
29 E eis que vêm sete anos, e
haverá grande fartura em toda a
terra do Egito.
30 E depois deles levantar-se-ão
sete anos de fome, e toda aquela
fartura será esquecida na terra do
Egito, e a fome consumirá a terra;
31 E não será conhecida a abundância na terra, por causa daquela
fome que haverá depois, porquanto
será gravíssima.
32 E se o sonho foi duplicado
duas vezes a Faraó, é porque essa
coisa é determinada por Deus, e
Deus se apressa a fazê-la.
33 Portanto, procure Faraó agora
um homem de discernimento e
sábio, e o ponha sobre a terra do
Egito;
34 Faça isso Faraó, e ponha governadores sobre a terra, e tome
a quinta parte da terra do Egito
nos sete anos de fartura,
35 E ajuntem toda a comida
destes bons anos que vêm, e amontoem o trigo debaixo da mão de
Faraó, para mantimento nas cidades, e o guardem;
36 Assim, será o mantimento
para aprovimento da terra, para
os sete anos de fome, que haverá
na terra do Egito, para que a terra
não pereça de fome.
37 E essa palavra foi boa aos
olhos de Faraó, e aos olhos de
todos os seus servos.
38 E disse Faraó a seus servos:
Acharíamos um homem como
esse, em quem esteja o aEspírito
de Deus?
39 Depois disse Faraó a José:
Visto que Deus te afez saber tudo
isso, ninguém há com tanto discernimento e b
sábio como tu;
40 Tu estarás a
sobre a minha casa,
e por tua boca se governará todo
o meu povo, somente no trono eu
serei maior que tu.
41 Disse mais Faraó a José: Vês
que te pus sobre toda a terra do
Egito.
42 E tirou Faraó o seu aanel da
sua mão, e o pôs na mão de José,
e o b
fez vestir de c
roupas de linho
fino, e pôs um colar de ouro no
seu pescoço,
43 E o fez subir no segundo carro
que tinha, e clamavam diante dele:
Ajoelhai. Assim, ao pôs sobre toda
a terra do Egito.
44 E disse Faraó a José: Eu sou
Faraó, porém sem ti ninguém
25 a GEE Sonho.
36 a 3 Né. 4:18.
GEE Bem-Estar.
38 a Al. 18:16.
GEE Dons do Espírito;
Espírito Santo.
39 a GEE Revelação.
 b Al. 48:11–17.
GEE Sabedoria.
40 a Salm. 105:21;
Dan. 2:48.
42 a Est. 8:2, 8, 10.
 b Dan. 5:29.
 c Est. 8:15.
43 a Gên. 45:8.
GÊNESIS 41:26–44 74

levantará a sua mão ou o seu pé
em toda a terra do Egito.
45 E deu Faraó a José o nome de
Zafenate-Paneia, e deu-lhe por
mulher a
Azenate, filha de Potífera,
sacerdote de Om; e saiu José por
toda a terra do Egito.
46 E aJosé era da idade de trinta anos quando esteve diante da
face de Faraó, rei do Egito. E saiu
José de diante da face de Faraó, e
passou por toda a terra do Egito.
47 E nos sete anos de fartura a
terra produziu a mãos cheias.
48 E ele ajuntou todo o mantimento dos sete anos, que houve na
terra do Egito, e guardou o mantimento nas cidades, pondo nas
cidades o mantimento do campo
que estava ao redor de cada cidade.
49 Assim, ajuntou José muitíssimo trigo, como a areia do mar, até
que cessou de contar, porquanto
era inumerável.
50 E nasceram a José dois filhos
(antes que viesse um ano de fome),
que lhe deu Azenate, filha de Potífera, sacerdote de Om.
51 E chamou José o nome do primogênito a
Manassés, porque disse:
Deus me fez esquecer de toda a
minha labuta, e de toda a casa de
meu pai.
52 E o nome do segundo chamou a
Efraim, porque disse: Deus me fez
b
crescer na terra da minha aflição.
53 Então acabaram-se os sete
anos de fartura que havia na terra
do Egito,
54 E começaram a vir os sete
anos de afome, como José tinha
dito; e havia fome em todas as terras, mas em toda a terra do Egito
havia pão.
55 E tendo toda a terra do Egito
fome, clamou o povo a Faraó por
pão; e Faraó disse a todos os egípcios: Ide a José; o que ele vos disser, fazei.
56 Havendo, pois, fome sobre
toda a terra, abriu José tudo em
que havia mantimento, e avendeu
aos egípcios, porque a fome prevaleceu na terra do Egito.
57 E todas as terras iam ao Egito,
para comprar de José, porquanto
a fome prevaleceu em todas as
terras.
CAPÍTULO 42
Jacó envia os filhos ao Egito para comprar trigo — Eles se inclinam diante
de José — José faz acusações ásperas
contra eles, aprisiona Simeão e enviaos de volta para buscar Benjamim.
VENDO então Jacó que havia a
mantimento no Egito, disse Jacó a seus
filhos: Por que estais olhando uns
para os outros?
2 Disse mais: Eis que ouvi que
há mantimentos no Egito; descei
para lá, e comprai-nos dali, para
que vivamos, e não morramos.
3 Então desceram os dez irmãos
de José, para comprarem trigo do
Egito.
4 Mas aBenjamim, irmão de José,
45 a Gên. 46:20.
46 a Gên. 37:2; 50:26.
51 a Jos. 17:1–5; Al. 10:3.
GEE Manassés.
52 a D&C 113:3–6;
133:30–34.
GEE Efraim.
 b Gên. 28:3.
54 a GEE Adversidade.
56 a Gên. 47:14.
42 1 a At. 7:11–12.
 4 a Gên. 35:18.
75 GÊNESIS 41:45–42:4

Jacó não enviou com os seus irmãos, porque dizia: Para que não
lhe suceda porventura alguma
desgraça.
5 Assim, foram os filhos de Israel para comprar, entre os que
iam lá, porque havia fome na terra
de Canaã.
6 José, pois, era o governador
daquela terra; ele vendia a todo o
povo da terra; e os irmãos de José
foram, e ainclinaram-se a ele com
a face na terra.
7 E José, vendo os seus irmãos,
reconheceu-os; porém, agiu como
um estranho para com eles, e falou
com eles asperamente, e disselhes: Donde vindes? E eles disseram: Da terra de Canaã, para
comprarmos mantimento.
8 José, pois, reconheceu os
seus irmãos; mas eles não o
reconheceram.
9 Então José lembrou-se dos asonhos, que havia sonhado deles, e
disse-lhes: Vós sois espias, e viestes
para ver a nudez da terra.
10 E eles lhe disseram: Não, senhor meu; mas teus servos vieram
comprar mantimento.
11 Todos nós somos filhos de um
mesmo homem; somos homens
honestos; os teus servos não são
espias.
12 E ele lhes disse: Não; mas viestes para ver a nudez da terra.
13 E eles disseram: Nós, teus servos, somos doze irmãos, filhos de
um homem na terra de Canaã; e
eis que o mais novo está com nosso
pai hoje; e um anão existe mais.
14 Então lhes disse José: Isso é
o que vos falei, dizendo que sois
espias;
15 Nisto sereis postos à prova:
Pela vida de Faraó, não saireis
daqui senão quando vosso irmão
mais novo vier aqui.
16 Enviai um dentre vós, que
traga vosso irmão, mas vós ficareis
presos, e vossas palavras sejam
postas à prova, se há verdade convosco; e se não, pela vida de Faraó,
vós sois espias.
17 E pô-los juntos na prisão três
dias.
18 E ao terceiro dia disse-lhes
José: Fazei isto, e vivereis, porque
eu atemo a Deus;
19 Se sois homens honestos, que
fique um de vossos irmãos preso
na casa de vossa prisão; e ide vós,
levai mantimento para a fome de
vossas casas,
20 E trazei-me o vosso irmão
mais novo, e serão verificadas
vossas palavras, e não morrereis.
E eles assim fizeram.
21 Então disseram uns aos outros: Na verdade, somos aculpados
acerca de nosso irmão, pois vimos
a angústia da sua alma, quando
nos rogava; nós, porém, não ouvimos; por isso vem sobre nós essa
angústia.
22 E aRúben respondeu-lhes, dizendo: Não vô-lo falei eu, dizendo: Não pequeis contra o moço?
 6 a Gên. 37:7, 9–10.
 9 a GEE Sonho.
13 a Gên. 37:28–30.
18 a GEE Reverência.
21 a GEE Culpa.
22 a Gên. 37:21–22;
42:36–37.
GÊNESIS 42:5–22 76

Mas não ouvistes; e vedes aqui, o
seu b
sangue também é requerido.
23 E eles não sabiam que José os
entendia, porque havia intérprete
entre eles.
24 E retirou-se deles, e achorou.
Depois retornou a eles, e faloulhes, e tomou Simeão dentre eles,
e amarrou-o perante os seus olhos.
25 E ordenou José que enchessem
os seus sacos de trigo, e que lhes
restituíssem o seu dinheiro a cada
um no seu saco, e lhes dessem comida para o caminho; e fizeramlhes assim.
26 E carregaram o seu trigo sobre
os seus jumentos, e partiram dali.
27 E abrindo um deles o seu saco,
para dar pasto ao seu jumento
na estalagem, viu o seu dinheiro,
porque eis que estava na boca do
seu saco.
28 E disse a seus irmãos: Foi devolvido o meu dinheiro, e ei-lo
aqui no meu saco. Então lhes desfaleceu o coração, e pasmavam,
dizendo um ao outro: Que é isso
que Deus nos fez?
29 E foram a Jacó, seu pai, na
terra de Canaã; e contaramlhe tudo o que lhes aconteceu,
dizendo:
30 O homem, o senhor da terra,
falou conosco asperamente, e tratou-nos como espias da terra;
31 Mas dissemos-lhe: Somos homens honestos; não somos espias;
32 Somos doze irmãos, filhos de
nosso pai; um não existe mais, e o
mais novo está hoje com nosso pai
na terra de Canaã.
33 E aquele homem, o senhor da
terra, nos disse: Nisto saberei que
vós sois homens honestos: deixai
comigo um de vossos irmãos, e
tomai mantimento para a fome de
vossas casas, e parti,
34 E trazei-me vosso irmão mais
novo; assim saberei que não sois
espias, mas homens honestos; então
vos darei o vosso irmão e negociareis na terra.
35 E aconteceu que, esvaziando
eles os seus sacos, eis que cada um
tinha a trouxinha com seu dinheiro no seu saco; e viram as trouxinhas com seu dinheiro, eles e seu
pai, e temeram.
36 Então seu pai Jacó disse-lhes:
Vós me desfilhastes; José não existe mais, e Simeão não existe mais;
agora levareis aBenjamim. Todas
essas coisas vieram sobre mim.
37 Mas Rúben falou a seu pai,
dizendo: Mata os meus dois filhos,
se to não tornar a trazer; dá-mo
em minha mão, e to tornarei
a trazer.
38 Ele, porém, disse: Não descerá meu filho convosco, porquanto o seu irmão está morto, e só
ele ficou. Se lhe suceder alguma
desgraça no caminho que fordes,
fareis descer minhas cãs com tristeza à sepultura.
CAPÍTULO 43
Jacó é persuadido a enviar Benjamim ao Egito — Os irmãos de José o
reverenciam — Todos eles comem e
bebem juntos.
22 b GEE Justiça. 24 a Gên. 43:30. 36 a Gên. 44:29.
77 GÊNESIS 42:23–38

E A fome era gravíssima na terra.
2 E aconteceu que, como acabaram de comer o mantimento que
trouxeram do Egito, disse-lhes seu
pai: Voltai, comprai-nos um pouco
de alimento.
3 Mas Judá respondeu-lhe, dizendo: Fortemente nos protestou
aquele homem, dizendo: Não vereis a minha face, se o vosso irmão
não vier convosco.
4 Se enviares conosco o nosso
irmão, desceremos, e te compraremos alimento;
5 Mas se não o enviares, não
desceremos, porquanto aquele
homem nos disse: Não vereis a
minha face, se o vosso irmão não
vier convosco.
6 E disse Israel: Por que me fizestes tal mal, fazendo saber àquele
homem que tínheis ainda outro
irmão?
7 E eles disseram: Aquele homem
particularmente nos perguntou
por nós, e pela nossa parentela, dizendo: Vive ainda vosso
pai? Tendes mais um irmão? E
respondemos-lhe conforme as
mesmas palavras. Podiamos nós
saber que diria: Trazei vosso
irmão?
8 Então disse Judá a seu pai Israel: Envia o jovem comigo, e levantar-nos-emos, e iremos, para
que vivamos, e não morramos,
nem nós, nem tu, nem os nossos
pequeninos.
9 Eu serei fiador por ele, da
minha mão o requererás; se eu não
to trouxer, e não o puser perante
a tua face, serei réu de crime para
contigo para sempre;
10 E se nós não nos tivéssemos
detido, certamente já estaríamos
pela segunda vez de volta.
11 Então disse-lhes seu pai Israel: Se assim é, fazei isto: tomai
do mais precioso desta terra em
vossos vasos, e levai ao homem
um presente: um pouco de bálsamo, e um pouco de mel, especiarias, e mirra, nozes de pistácia, e
amêndoas;
12 E tomai em vossas mãos dinheiro dobrado, e o adinheiro que
retornou na boca dos vossos sacos
tornai a levar em vossas mãos;
bem pode ser que fosse erro;
13 Tomai também vosso irmão,
e levantai-vos, e voltai àquele
homem;
14 E Deus Todo-Poderoso vos dê
misericórdia diante do homem,
para que deixe vir convosco vosso
outro irmão e Benjamim; e eu, se
for desfilhado, desfilhado ficarei.
15 E os homens tomaram aquele
presente, e tomaram dinheiro dobrado em suas mãos, e Benjamim;
e levantaram-se, e desceram ao
Egito, e apresentaram-se diante
da face de José.
16 E quando José viu Benjamim
com eles, disse ao que estava sobre
a sua casa: Leva estes homens à
casa, e mata reses, e prepara tudo,
porque estes homens comerão comigo ao meio-dia.
17 E o homem fez como José dissera, e o homem levou aqueles
homens à casa de José.
43 12 a Gên. 42:25.
GÊNESIS 43:1–17 78

18 Então temeram aqueles homens, porquanto foram levados à
casa de José, e diziam: Por causa
do dinheiro que dantes foi devolvido nos nossos sacos fomos
trazidos aqui, para nos incriminar e cair sobre nós, para que
nos tome por servos, e a nossos
jumentos.
19 Por isso chegaram-se ao
homem que estava sobre a casa
de José, e falaram com ele à porta
da casa,
20 E disseram: Ai, senhor meu!
Certamente descemos uma primeira vez para comprar mantimento;
21 E aconteceu que, chegando
nós à estalagem, e abrindo os nossos sacos, eis que o dinheiro de
cada homem estava na boca do
seu saco, nosso dinheiro por seu
peso; e tornamos a trazê-lo em
nossas mãos.
22 Também trouxemos outro dinheiro em nossas mãos, para comprar mantimento; não sabemos
quem teria posto o nosso dinheiro
nos nossos sacos.
23 E ele disse: Paz seja convosco,
não temais; o vosso Deus, e o Deus
de vosso pai, vos deu um tesouro
nos vossos sacos; o vosso dinheiro
chegou a mim. E trouxe-lhes para
fora Simeão.
24 Depois levou o homem aqueles homens à casa de José, e deulhes água, e alavaram os seus
pés; também deu pasto aos seus
jumentos.
25 E prepararam o presente, para
quando José chegasse ao meio-dia;
porque tinham ouvido que ali haviam de comer pão.
26 Chegando, pois, José à casa,
trouxeram-lhe o presente que estava em suas mãos; e ainclinaram-se
diante dele à terra.
27 E ele lhes perguntou como
estavam, e disse: Vosso pai, o ancião de quem falastes, está bem?
Ainda vive?
28 E eles disseram: Bem está o teu
servo, nosso pai vive ainda. E abaixaram a cabeça, e inclinaram-se.
29 E ele levantou os seus olhos,
e viu Benjamim, seu irmão, filho
de sua mãe, e disse: Este é vosso
irmão mais novo de quem me falastes? Depois ele disse: Deus te
dê a sua graça, meu filho.
30 E José apressou-se, aporque as
suas entranhas comoveram-se por
causa do seu irmão, e procurou
onde chorar; e entrou na câmara,
e chorou ali.
31 Depois lavou o seu rosto, e
saiu; e conteve-se, e disse: Ponde
pão.
32 E puseram-lhe à parte, e a
eles à parte, e aos egípcios, que
comiam com ele, à parte, porque
os egípcios não podem comer pão
com os hebreus, porquanto é a
abominação para os egípcios.
33 E assentaram-se diante
dele, o primogênito segundo a
sua aprimogenitura, e o menor
segundo a sua menoridade; do
que os homens se maravilhavam
entre si.
24 a Gên. 24:32.
26 a Gên. 37:7–10.
30 a GEE Amor.
32 a Gên. 46:34.
33 a GEE Primogênito;
Primogenitura.
79 GÊNESIS 43:18–33

34 E apresentou-lhes as porções
que estavam diante dele, porém
a porção de aBenjamim era cinco
vezes maior do que as porções
deles todos. E eles beberam, e se
regalaram com ele.
CAPÍTULO 44
José toma providências para impedir o
regresso dos seus irmãos a Canaã —
Judá se oferece em lugar de Benjamim
por causa de seu pai.
E DEU ordem ao que estava sobre a
sua casa, dizendo: Enche de mantimento os sacos destes homens,
quanto puderem levar, e põe o
dinheiro de cada um na boca do
seu saco.
2 E o meu copo, o copo de prata,
porás na boca do saco do mais
novo, com o dinheiro do seu trigo.
E ele fez conforme a palavra que
José tinha dito.
3 Chegando a luz da manhã, despediram-se os homens, eles com
os seus jumentos.
4 Saindo eles da cidade, e não se
havendo ainda distanciado, disse
José ao que estava sobre a sua casa:
Levanta-te, e persegue aqueles homens; e alcançando-os, lhes dirás:
Por que pagastes mal por bem?
5 Não é este o copo em que bebe
meu senhor? E em que ele de fato
adivinha? Fizestes mal no que
fizestes.
6 E alcançou-os, e falou-lhes
essas mesmas palavras.
7 E eles disseram-lhe: Por que diz
meu senhor tais palavras? Longe
estejam teus servos de fazerem
semelhante coisa.
8 Eis que o dinheiro, que achamos nas bocas dos nossos sacos,
te tornamos a trazer desde a terra
de Canaã: como pois furtaríamos da casa do teu senhor prata
ou ouro?
9 Aquele de teus servos, com
quem for achado, morra; e ainda
nós seremos escravos do meu
senhor.
10 E ele disse: Ora, seja também
assim conforme as vossas palavras; aquele com quem se achar
será meu escravo, porém vós sereis desculpados.
11 E eles apressaram-se, e cada
um pôs em terra o seu saco, e cada
um abriu o seu saco.
12 E buscou, começando do
maior, e acabando no mais novo;
e achou-se o copo no saco de
Benjamim.
13 Então rasgaram as suas vestes,
e carregou cada um o seu jumento,
e retornaram à cidade.
14 E foi Judá com os seus irmãos
à casa de José, porque ele ainda
estava ali; e aprostraram-se diante
dele na terra.
15 E disse-lhes José: Que é isso
que fizestes? Não sabeis vós que
tal homem como eu pode muito
bem adivinhar?
16 Então disse Judá: Que diremos a meu senhor? Que falaremos? E como nos justificaremos?
Achou Deus a iniquidade de teus
servos; eis que somos escravos
de meu senhor, tanto nós como
34 a Gên. 45:22. 44 14 a Gên. 43:26–28.
GÊNESIS 43:34–44:16 80

aquele em cuja mão foi achado o
copo.
17 Mas ele disse: Longe de mim
que eu tal faça; o homem em cuja
mão o copo foi achado, aquele será
meu servo, porém vós subi em paz
para vosso pai.
18 Então Judá se chegou a ele, e
disse: Ai, senhor meu! Deixa, peço-te, o teu servo dizer uma palavra aos ouvidos de meu senhor, e
não se acenda a tua ira contra o teu
servo, porque tu és como Faraó.
19 Meu senhor perguntou a seus
servos, dizendo: Tendes vós pai,
ou irmão?
20 E dissemos a meu senhor:
Temos um pai avelho, e um filho
da sua velhice, o mais novo, cujo
irmão está morto; e só ele ficou de
sua mãe, e seu pai o ama.
21 Então tu disseste a teus servos:
Trazei-o a mim, para que ponha os
meus olhos sobre ele.
22 E nós dissemos a meu senhor: Aquele moço não poderá
deixar seu pai; se deixar seu pai,
este morrerá.
23 Então tu disseste a teus servos: Se vosso irmão mais novo
não descer convosco, nunca mais
vereis a minha face.
24 E aconteceu que, subindo nós
a teu servo, meu pai, e contandolhe as palavras de meu senhor,
25 Disse nosso pai: Voltai,
comprai-nos um pouco de mantimento.
26 E nós dissemos: Não poderemos descer. Se nosso irmão menor
for conosco, desceremos, pois não
poderemos ver a face do homem,
se esse nosso irmão menor não
estiver conosco.
27 Então disse-nos teu servo,
meu pai: Vós sabeis que minha
mulher me deu dois filhos;
28 E um me deixou, e eu disse:
Certamente foi adespedaçado, e
não o vi mais até agora;
29 Se agora também tirardes
este de diante da minha face, e
lhe acontecer alguma desgraça,
fareis descer as minhas cãs com
dor à sepultura.
30 Agora, pois, indo eu a teu
servo, meu pai, e o moço não indo
conosco, pois que a sua alma está
atada com a alma dele,
31 Acontecerá que, vendo ele que
o moço não está conosco, morrerá; e
teus servos farão descer as cãs de
teu servo, nosso pai, com tristeza
à sepultura.
32 Porque teu servo se deu por
fiador por este moço para com
meu pai, dizendo: Se eu não to
tornar a trazer, serei aculpado perante meu pai todos os dias.
33 Agora, pois, fique teu servo
em lugar desse moço por escravo
de meu senhor, e que suba o moço
com os seus irmãos.
34 Porque como subirei eu a meu
pai, se o moço não for comigo?
Para que não veja eu o mal que
sobrevirá a meu pai.
CAPÍTULO 45
José se dá a conhecer aos seus
irmãos — Eles se regozijam
20 a Gên. 42:11–13. 28 a Gên. 37:33. 32 a Gên. 43:9.
81 GÊNESIS 44:17–34

juntos — Faraó convida Jacó e sua
família a morar no Egito e a comer
da fartura da terra.
ENTÃO José não se pôde aconter
diante de todos os que estavam
com ele; e clamou: Fazei sair de
minha presença todos os homens;
e ninguém ficou com ele, quando José se deu a conhecer a seus
irmãos.
2 E levantou a sua voz com
choro, de maneira que os egípcios o ouviam, e a casa de Faraó
o ouviu.
3 E disse José a seus irmãos: Eu
sou José; vive ainda meu pai? E
seus irmãos não lhe puderam responder, porque estavam apasmados diante da sua face.
4 E disse José a seus irmãos: Peço-vos, chegai-vos a mim. E chegaram-se; então disse ele: Eu sou
José, vosso irmão, a quem vendestes para o Egito.
5 Agora, pois, não vos aentristeçais, nem vos pese aos vossos
olhos por me haverdes vendido
para cá, porque para conservação
da vida Deus me b
enviou adiante
de vós.
6 Porque já houve dois anos de
fome na terra, e ainda restam cinco
anos em que não haverá lavoura
nem ceifa.
7 Pelo que Deus me enviou
diante da vossa face, para apreservar um bremanescente vosso
na terra, e para guardar-vos com
vida por meio de um grande
livramento.
8 Assim, não fostes vós que me
enviastes para cá, senão Deus, que
me pôs por pai de Faraó, e por senhor de toda a sua casa, e como
regente em toda a terra do Egito.
9 Apressai-vos, e subi a meu pai,
e dizei-lhe: Assim disse o teu filho
José: Deus me pôs por senhor em
toda a terra do Egito; desce a mim,
e não te demores;
10 E habitarás na terra de Gósen,
e estarás perto de mim, tu e os teus
filhos, e os filhos dos teus filhos, e
as tuas ovelhas, e as tuas vacas, e
tudo o que tens.
11 E ali te asustentarei, porque
ainda haverá cinco anos de fome,
para que não pereças de pobreza,
tu e tua casa, e tudo o que tens.
12 E eis que vossos olhos, e os
olhos de meu irmão Benjamim o
veem, que é minha boca que vos
fala.
13 E fazei saber a meu pai toda
a minha glória no Egito, e tudo o
que vistes, e apressai-vos e fazei
descer meu apai para cá.
14 E lançou-se ao pescoço de
seu irmão Benjamim, e chorou; e
Benjamim chorou também ao seu
pescoço.
15 E beijou todos os seus irmãos,
e chorou sobre eles; e depois seus
irmãos falaram com ele.
16 E ouviu-se na casa de Faraó
a notícia, dizendo: Os irmãos de
José vieram; e pareceu bem aos
45 1 a Gên. 43:30–31.
 3 a Jó 23:15.
 5 a GEE Misericórdia,
Misericordioso;
 Perdoar.
 b Salm. 105:17–22.
 7 a Est. 4:14;
2 Né. 3:16.
 b 2 Né. 3:3–7.
11 a Gên. 47:12.
13 a Salm. 105:23;
At. 7:14.
GÊNESIS 45:1–16 82

olhos de Faraó, e aos olhos de seus
servos.
17 E disse Faraó a José: Dize a
teus irmãos: Fazei isto: carregai os
vossos animais e parti, retornai à
terra de Canaã,
18 E retornai a vosso pai, e às
vossas famílias, e vinde a mim;
e eu vos darei o melhor da terra
do Egito, e comereis a gordura
da terra.
19 A ti, pois, é ordenado, fazei
isto: tomai vós da terra do Egito
carros para vossos pequeninos,
para vossas mulheres, e trazei
vosso pai, e vinde.
20 E não vos preocupeis com
os vossos bens, porque o melhor de toda a terra do Egito será
vosso.
21 E os filhos de Israel fizeram
assim. E José deu-lhes carros, conforme o mandado de Faraó; também lhes deu provisões para o
caminho.
22 A todos lhes deu, a cada um,
mudas de roupa; mas a a
Benjamim
deu trezentas peças de prata, e
cinco mudas de roupa.
23 E a seu pai enviou semelhantemente dez jumentos carregados do melhor do Egito, e dez
jumentos carregados de trigo, e
pão, e comida para seu pai, para
o caminho.
24 E despediu os seus irmãos, e
partiram; e disse-lhes: aNão contendais pelo caminho.
25 E subiram do Egito, e foram
à terra de Canaã, a seu pai Jacó.
26 Então lhe anunciaram, dizendo: José ainda vive, e ele também é
regente em toda a terra do Egito. E
o seu coração esmoreceu, porque
não acreditava neles.
27 Porém havendo-lhe eles contado todas as palavras de José,
que ele lhes falara, e vendo ele
os carros que José enviara para
levá-lo, reviveu o espírito de seu
pai Jacó.
28 E disse Israel: Basta; ainda
vive meu filho José; eu irei, e o
verei antes que eu morra.
CAPÍTULO 46
O Senhor envia Jacó e sua família de
setenta almas para o Egito — Os descendentes de Jacó são enumerados —
José se encontra com Jacó.
E PARTIU Israel com tudo quanto
tinha, e foi a aBerseba, e bsacrificou sacrifícios ao Deus de seu pai
Isaque.
2 E falou Deus a Israel em a
visões
da noite, e disse: Jacó, Jacó! E ele
disse: Eis-me aqui.
3 E disse: Eu sou o Deus, o Deus
de teu pai; não temas descer ao
Egito, porque ali eu farei de ti uma
grande anação.
4 aEu descerei contigo ao Egito, e
certamente te b
farei tornar a subir,
e José porá a sua mão sobre os
teus olhos.
22 a Gên. 43:34.
24 a GEE Contenção,
Contenda.
46 1 a Gên. 21:31, 33; 26:23–25.
 b GEE Ação de
Graças, Agradecido,
Agradecimento;
Sacrifício.
 2 a GEE Visão.
 3 a GEE Israel.
 4 a Gên. 48:21.
 b Êx. 2:23–25.
83 GÊNESIS 45:17–46:4

5 Então levantou-se Jacó de Berseba, e os filhos de Israel levaram
seu pai Jacó, e seus pequeninos,
e suas mulheres, nos carros que
Faraó enviara para o levar.
6 E tomaram o seu gado e os
seus bens, que tinham adquirido na terra de Canaã, e foram ao
aEgito, Jacó e toda a sua semente
com ele,
7 Os seus filhos, e os filhos de
seus filhos com ele, as suas filhas, e
as filhas de seus filhos, e toda a sua
semente levou consigo ao Egito.
8 E estes são os a
nomes dos b
filhos
de Israel, que foram ao Egito, Jacó
e seus filhos: Rúben, o primogênito de Jacó,
9 E os filhos de Rúben: Enoque,
e Palu, e Hezrom, e Carmi.
10 E os filhos de Simeão: Jemuel, e Jamim, e Oade, e Jaquim,
e Zoar, e Saul, filho de uma mulher cananeia.
11 E os filhos de Levi: Gérson,
Coate, e Merari.
12 E os filhos de Judá: Er, e Onã,
e Selá, e Perez, e Zerá; Er e Onã,
porém, morreram na terra de
Canaã; e os filhos de Perez foram
Hezron e Hamul.
13 E os filhos de Issacar: Tola, e
Puva, e Jó, e Sinrom.
14 E os filhos de Zebulom: Serede, e Elom, e Jaleel.
15 Esses são os filhos de Lia, que
deu a Jacó em Padã-Arã, com
Diná, sua filha; todas as almas de
seus filhos e de suas filhas foram
trinta e três.
16 E os filhos de Gade: Zifiom, e
Hagi, Suni, e Esbom, Eri, e Arodi,
e Areli.
17 E os filhos de Aser: Imna, e
Isvá, e Isvi, e Berias, e Será, a irmã
deles; e os filhos de Berias: Héber
e Malquiel.
18 Esses são os filhos de Zilpa,
que Labão deu à sua filha Lia; e
deu a Jacó essas dezesseis almas.
19 Os filhos de Raquel, mulher
de Jacó: José e Benjamim.
20 E nasceram a José na terra do
Egito Manassés e Efraim, que lhe
deu Azenate, filha de Potífera, sacerdote de Om.
21 E os filhos de Benjamim: Belá,
e Bequer, e Asbel, Gera, e Naamã,
Eí, e Rôs, Mupim, e Hupim, e
Arde.
22 Esses são os filhos de Raquel,
que nasceram a Jacó, ao todo quatorze almas.
23 E os filhos de Dã: Husim.
24 E os filhos de Naftali: Jazeel,
e Guni, e Jezer, e Silém.
25 Esses são os filhos de Bila, que
Labão deu à sua filha Raquel; e
deu esses a Jacó; todas as almas
foram sete.
26 Todas as almas que foram com
Jacó ao Egito, que saíram de seus
lombos, sem as mulheres dos filhos de Jacó, todas foram sessenta
e seis almas.
27 E os filhos de José, que lhe
nasceram no Egito, eram duas
almas. Todas as almas da casa
de Jacó, que foram ao Egito, eram
setenta.
 6 a Ét. 13:7.
 8 a GEE Israel — Doze
tribos de Israel.
 b 3 Né. 5:24;
Mórm. 7:10.
GÊNESIS 46:5–27 84

28 E enviou Judá adiante de si a
José, para o encaminhar a Gósen;
e chegaram à terra de Gósen.
29 Então José aprontou o seu
carro, e subiu ao encontro de
Israel, seu pai, a Gósen. E mostrando-se-lhe, lançou-se ao seu pescoço, e achorou sobre o seu pescoço
longo tempo.
30 E Israel disse a José: Morra eu
agora, pois já vi o teu rosto, que
ainda vives.
31 Depois disse José a seus irmãos, e à casa de seu pai: Eu subirei, e anunciarei a Faraó, e lhe
direi: Meus irmãos, e a casa de
meu pai, que estavam na terra de
Canaã, vieram a mim!
32 E os homens são pastores de
ovelhas, porque são homens de
gado, e trouxeram consigo as suas
ovelhas, e as suas vacas, e tudo o
que têm.
33 Quando, pois, acontecer que
Faraó vos chamar, e disser: Qual
é vosso trabalho?
34 Então direis: Teus servos
foram homens de gado desde
a nossa mocidade até agora,
tanto nós como os nossos pais;
para que habitemos na terra
de Gósen, porque todo pastor
de ovelhas é aabominação aos
egípcios.
CAPÍTULO 47
Os israelitas se estabelecem em
Gósen — Jacó abençoa Faraó —
José vende trigo aos egípcios —
Faraó recebe o gado e as terras dos
egípcios — Jacó deseja ser sepultado
com seus pais em Canaã.
ENTÃO foi José, e anunciou a
Faraó, e disse: Meu pai, e os meus
irmãos, e as suas ovelhas, e as suas
vacas, com tudo o que têm, vieram
da terra de Canaã, e eis que estão
na terra de aGósen.
2 E tomou alguns de seus irmãos, a saber cinco homens, e os
pôs diante de Faraó.
3 Então disse Faraó a seus irmãos: Qual é vosso trabalho? E
eles disseram a Faraó: Teus servos
são pastores de ovelhas, tanto nós
como nossos pais.
4 Disseram mais a Faraó: Viemos
para peregrinar nesta terra, porque não há pasto para as ovelhas
de teus servos, porquanto a fome
é grave na terra de Canaã; agora,
pois, rogamos-te que teus servos
habitem na terra de Gósen.
5 Então falou Faraó a José, dizendo: Teu pai e teus irmãos vieram a ti;
6 A terra do Egito está diante da
tua face, no melhor da terra faze
habitar teu pai e teus irmãos; habitem na terra de Gósen; e se sabes
que entre eles há homens capazes,
tu os porás por maiorais do gado,
sobre o que eu tenho.
7 E José levou seu pai Jacó, e o
pôs diante de Faraó; e Jacó abençoou Faraó.
8 E Faraó disse a Jacó: Quantos
são os dias dos anos da tua vida?
9 E Jacó disse a Faraó: Os dias dos
anos das minhas peregrinações são
29 a Gên. 45:1. 34 a Gên. 43:32. 47 1 a Gên. 45:9–10.
85 GÊNESIS 46:28–47:9

cento e trinta anos; poucos e a
maus
foram os dias dos anos da minha
vida, e não chegaram aos bdias
dos anos da vida de meus pais,
nos dias das suas peregrinações.
10 E Jacó abençoou Faraó, e saiu
de diante da face de Faraó.
11 E José fez habitar seu pai e
seus irmãos, e deu-lhes possessão
na terra do Egito, no melhor da
terra, na terra de a
Ramessés, como
Faraó ordenara.
12 E José a
sustentou com pão seu
pai, e seus irmãos, e toda a casa de
seu pai, segundo os seus filhos.
13 E não havia pão em toda a
terra, porque a fome era muito
grave; de maneira que a terra do
Egito e a terra de Canaã desfaleciam por causa da fome.
14 Então José recolheu todo o adinheiro que se achou na terra
do Egito, e na terra de Canaã, pelo
trigo que compravam; e José levou
o dinheiro à casa de Faraó.
15 Acabando-se, pois, o dinheiro da terra do Egito, e da terra
de Canaã, foram todos os egípcios a José, dizendo: Dá-nos apão;
por que morreremos em tua presença? Porquanto o dinheiro
nos falta.
16 E José disse: Dai o vosso gado,
e eu vo-lo darei por vosso gado,
se falta o dinheiro.
17 Então levaram o seu gado a
José; e José deu-lhes pão em troca
de cavalos, e do rebanho das ovelhas, e do rebanho das vacas, e dos
jumentos; e os sustentou de pão
aquele ano por todo o seu gado.
18 E acabado aquele ano, foram
a ele no segundo ano, e disseramlhe: Não ocultaremos ao meu senhor que o dinheiro acabou, e meu
senhor possui os animais, e nenhuma outra coisa nos ficou diante da face de meu senhor, senão o
nosso corpo e a nossa terra;
19 Por que morreremos diante
dos teus olhos, tanto nós como a
nossa terra? Compra-nos a nós e à
nossa terra por pão, e nós e a nossa
terra seremos servos de Faraó, e
dá-nos semente para que vivamos,
e não morramos, e a terra não se
desole.
20 Assim, José comprou toda a
terra do Egito para Faraó, porque
os egípcios venderam cada um o
seu campo, porquanto a fome prevaleceu sobre eles; e a terra ficou
sendo de Faraó.
21 E quanto ao povo, afê-lo passar às cidades, desde uma extremidade da terra do Egito até a outra
extremidade.
22 Somente a terra dos sacerdotes não comprou, porquanto
os sacerdotes tinham uma ração
dada por Faraó, e eles comiam
a sua ração que Faraó lhes dava;
por isso não venderam a sua terra.
23 Então disse José ao povo: Eis
que hoje vos comprei a vós e à
vossa terra para Faraó; eis aí tendes semente para vós, para que
semeeis a terra.
 9 a IE tristes, cheios
de angústia e
preocupação.
 b Gên. 25:7; 35:28.
11 a Êx. 1:11.
12 a Gên. 45:11.
14 a Gên. 41:56.
15 a GEE Bem-Estar;
Compaixão.
21 a IE José redistribuiu a
população para melhor
sustentá-la.
GÊNESIS 47:10–23 86

24 Há de ser, porém, que das colheitas dareis o quinto a Faraó, e
quatro partes serão vossas, para
semente do campo, e para o vosso
mantimento, e dos que estão nas
vossas casas, e para que vossos
pequeninos comam.
25 E disseram: A vida nos deste;
achemos graça aos olhos de meu
senhor, e seremos servos de Faraó.
26 José, pois, estabeleceu isso por
estatuto até o dia de hoje, sobre a
terra do Egito, que Faraó tirasse o
quinto; só a terra dos sacerdotes
não ficou sendo de Faraó.
27 Assim, habitou Israel na terra
do Egito, na terra de Gósen, e nela
tomaram possessão, e frutificaram,
e multiplicaram-se muito.
28 E Jacó viveu na terra do Egito
dezessete anos; de sorte que os
dias de Jacó, os anos da sua
vida, foram cento e quarenta e
sete anos.
29 Chegando, pois, o tempo da
morte de Israel, ele chamou seu
filho José, e disse-lhe: Se agora
achei graça aos teus olhos, rogo-te
que ponhas a tua mão debaixo da
minha acoxa, e usa comigo de benevolência e verdade; rogo-te que
não me b
enterres no Egito,
30 Mas que eu jaza com os meus
pais; por isso me levarás do Egito,
e me asepultarás na sepultura
deles. E ele disse: Farei conforme
a tua palavra.
31 E disse ele: Jura-me. E ele jurou-lhe; e Israel inclinou-se sobre
a cabeceira da cama.
CAPÍTULO 48
Jacó narra a aparição de Deus a ele
em Luz — Adota Efraim e Manassés como seus próprios filhos — Jacó
abençoa José — Põe Efraim adiante
de Manassés — A semente de Efraim
se tornará uma multidão de nações —
Os filhos de Israel regressarão à terra
de seus pais.
E ACONTECEU, depois dessas coisas, que alguém disse a José: Eis
que teu pai está enfermo. Então
tomou consigo os seus dois filhos,
Manassés e Efraim.
2 E alguém anunciou a Jacó, e
disse: Eis que teu filho José vem a
ti. E esforçou-se Israel, e sentouse na cama.
3 E Jacó disse a José: O Deus aTodo-Poderoso me apareceu
em b
Luz, na terra de Canaã, e me
abençoou,
4 E me disse: Eis que te farei a
frutificar e multiplicar, e farei de ti
uma multidão de povos, e darei
esta b
terra à tua semente depois de
ti, em c
possessão perpétua.
5 a
Agora, pois, os teus dois filhos,
que te nasceram na terra do Egito,
antes que eu viesse a ti no Egito,
são meus: Efraim e Manassés serão
meus, como Rúben e Simeão;
29 a Ver TJS Gên. 24:2
(Gên. 24:2 nota b).
 b Gên. 49:29.
30 a Gên. 50:5.
48 3 a Gên. 32:30.
GEE Jeová;
 Jesus Cristo;
Trindade — Deus, o
Filho.
 b Gên. 28:19.
 4 a GEE Abraão — Semente
de Abraão.
 b GEE Terra da
Promissão.
 c Abr. 2:6.
 5 a TJS Gên. 48:5–11
(Apêndice).
87 GÊNESIS 47:24–48:5

6 Mas a tua descendência, que
gerarás depois deles, será tua;
segundo o nome de seus irmãos
serão chamados na sua herança.
7 Vindo, pois, eu de Padã, morreu-me Raquel na terra de Canaã,
no caminho, quando ainda faltava uma pequena distância para
chegar a Efrata; e eu a sepultei
ali, no caminho de Efrata, que
é Belém.
8 E Israel viu os filhos de José, e
disse: Quem são estes?
9 E José disse a seu pai: Eles são
meus filhos, que Deus me deu
aqui. E ele disse: Peço-te, trazemos aqui, para que os aabençoe.
10 Porém os olhos de Israel estavam carregados de velhice, já não
podia ver; e fê-los chegar a ele, e
beijou-os, e abraçou-os.
11 E Israel disse a José: Eu não
pensara ver o teu rosto; e eis que
Deus me fez ver a tua semente
também.
12 Então José os tirou de seus
joelhos, e inclinou-se à terra diante
da sua face.
13 E tomou José ambos, Efraim
na sua mão direita à esquerda de
Israel, e Manassés na sua mão esquerda à direita de Israel, e fê-los
chegar a ele.
14 Mas Israel estendeu a sua mão
direita, e a pôs sobre a cabeça de
aEfraim, ainda que fosse o menor,
e a sua esquerda sobre a cabeça de
Manassés, b
dirigindo as suas mãos
propositadamente, ainda que Manassés fosse o primogênito.
15 E abençoou aJosé, e disse: O
Deus, em cuja presença b
andaram
os meus pais Abraão e Isaque, o
Deus que me c
sustentou, desde
que eu nasci até este dia,
16 O aanjo que me redimiu de
todo o mal abençoe estes rapazes, e seja chamado neles o meu
bnome, e o nome de meus pais
Abraão e Isaque, e multipliquem-se em multidão no meio
da terra.
17 Vendo, pois, José que seu pai
punha a sua amão direita sobre
a cabeça de Efraim, b
foi mau aos
seus olhos; e tomou a mão de
seu pai, para a transpor de sobre
a cabeça de Efraim à cabeça de
Manassés.
18 E José disse a seu pai: Assim
não, meu pai, porque este é o primogênito; põe a tua mão direita
sobre a sua cabeça.
19 Mas seu pai o recusou, e disse:
Eu sei, filho meu, eu sei; também
ele será um povo, e também ele
será agrande, contudo o seu irmão
menor será maior que ele, e a sua
bsemente será uma multidão de
nações.
20 Assim, ele os abençoou
naquele dia, dizendo: aEm ti
 9 a Heb. 11:21.
14 a Zac. 10:6–12.
 b Septuaginta: cruzando
as mãos.
15 a Septuaginta: eles.
 b GEE Andar, Andar com
Deus.
 c HEB pastoreou;
i.e., que foi o meu
pastor.
16 a Gên. 32:24–30.
 b GEE Convênio
Abraâmico;
Israel.
17 a GEE Mãos, Imposição
de.
 b HEB foi errado aos
seus olhos.
19 a GEE Manassés.
 b GEE Efraim.
20 a OU Por meio de ti.
GÊNESIS 48:6–20 88

b
abençoará Israel, dizendo: Deus
te faça como Efraim e como Manassés. E pôs c
Efraim adiante de
Manassés.
21 Depois disse Israel a José: Eis
que eu morro, mas Deus será convosco, e vos fará retornar à aterra
de vossos pais.
22 E eu te dei um a
pedaço da terra
a mais do que a teus irmãos, que
tomei com a minha espada e com
o meu arco da mão dos amorreus.
CAPÍTULO 49
Jacó abençoa seus filhos e a semente
deles — Rúben, Simeão e Levi são
castigados — Judá governará até
que venha Siló (Cristo) — José é um
ramo frutífero junto à fonte — Seus
ramos (os nefitas e os lamanitas) se
estenderão sobre o muro — O Pastor
e a Pedra de Israel (Cristo) abençoará José temporal e espiritualmente — Jacó exige ser sepultado com
seus pais em Canaã — Jacó morre e
é reunido a seus pais.
DEPOIS aJacó chamou seus filhos,
e disse: Ajuntai-vos, e anunciarvos-ei o que vos há de acontecer
nos b
últimos dias.
2 Ajuntai-vos, e ouvi, filhos de
Jacó; e ouvi vosso apai Israel:
3 aRúben, tu és meu primogênito, minha força, e o bprincípio
de meu vigor, o mais excelente
em altivez, e o mais excelente em
poder.
4 Impetuoso como a água, não
serás o mais excelente, porquanto
subiste ao leito de teu pai. Então
o adesonraste; subiu à minha
cama.
5 aSimeão e b
Levi são irmãos; as
suas espadas são instrumentos de
violência.
6 No seu secreto conselho não
entre minha alma, com a sua congregação minha glória não ase
ajunte, porque no seu b
furor c
mataram homens, e na sua obstinação
arrebataram bois.
7 aMaldito seja o seu b
furor, pois
era forte, e a sua ira, pois era dura;
eu os dividirei em Jacó, e os espalharei em Israel.
8 aJudá, a ti te louvarão os teus
irmãos; a tua mão será sobre o pescoço de teus inimigos; os filhos de
teu pai a ti se inclinarão.
9 Judá é um leãozinho, da presa
subiste, filho meu; encurva-se, e
deita-se como um aleão, e como
um leão velho; quem o despertará?
10 O cetro não se arredará de
Judá, nem o alegislador dentre
20 b Septuaginta: será
abençoada.
 c D&C 133:34.
GEE Primogenitura.
21 a GEE Terra da
Promissão.
22 a GEE Israel — Doze
tribos de Israel.
49 1 a GEE Bênçãos
Patriarcais;
Patriarca, Patriarcal.
 b GEE Últimos Dias.
 2 a GEE Família —
Responsabilidade dos
pais.
 3 a GEE Rúben.
 b GEE Primogênito.
 4 a GEE Imoralidade
Sexual.
 5 a GEE Simeão.
 b D&C 13.
GEE Levi.
 6 a Ef. 5:11.
 b GEE Ira; Vingança.
 c Gên. 34:25–31.
 7 a GEE Amaldiçoar,
Maldições.
 b GEE Homicídio; Ira.
 8 a GEE Judá.
 9 a IE o leão é um símbolo
de realeza.
10 a D&C 38:22; 45:59.
89 GÊNESIS 48:21–49:10

seus pés, até que venha b
Siló; e a
ele se c
congregarão os povos.
11 Ele amarrará o seu jumentinho
à vide, e o filho da sua jumenta à acepa mais excelente; ele b
lavará o
seu vestido no vinho, e a sua capa,
em c
sangue de uvas.
12 Os olhos serão vermelhos de
vinho, e os dentes brancos de leite.
13 aZebulom habitará no porto
dos mares, e será porto dos navios, e o seu termo se estenderá
até Sidom.
14 aIssacar é jumento de fortes
ossos, deitado entre dois fardos.
15 E viu ele que o descanso era
bom, e que a terra era deleitosa, e
abaixou seu ombro à carga, e serviu debaixo de tributo.
16 aDã julgará o seu povo, como
uma das tribos de Israel.
17 Dã será serpente junto ao caminho, uma víbora junto à vereda, que morde os calcanhares do
cavalo, e faz cair o seu cavaleiro
para trás.
18 A tua salvação aespero, ó
SENHOR!
19 Quanto a aGade, uma tropa o
acometerá, mas ele a acometerá
por fim.
20 De a
Aser, o seu pão será gordo,
e ele dará delícias reais.
21 aNaftali é uma corça solta; ele
dá palavras formosas.
22 aJosé é um bramo frutífero,
ramo frutífero junto à fonte; seus
c
ramos dcorrem sobre o muro.
23 Os flecheiros lhe deram amargura, e o flecharam e o odiaram.
24 O seu arco, porém, permaneceu firme, e os braços de suas
mãos foram fortalecidos pelas
mãos do Valente de Jacó (de a
onde
é o b
pastor e a c
pedra de Israel).
25 Pelo Deus de teu pai, o qual
te ajudará, e pelo aTodo-Poderoso,
o qual te abençoará com bênçãos
dos céus acima, com bênçãos do
abismo que está abaixo, com bênçãos dos seios e da madre.
26 As abênçãos de teu pai excederão as bênçãos de meus pais,
até a extremidade dos bouteiros
eternos; elas estarão sobre a cabeça
de c
José, e sobre o alto da cabeça
do que foi dseparado dentre seus
irmãos.
10 b IE A palavra hebraica
siló pode ser uma
forma reduzida de
asher-ló, “de quem é o
direito.” Ver TJS Gên.
50:24 (Apêndice);
Eze. 21:27.
GEE Jesus Cristo —
Profecias acerca do
nascimento e da morte
de Jesus Cristo;
Messias.
 c 2 Né. 10:7–8; 25:15–18.
GEE Israel — Coligação
de Israel.
11 a Jo. 15:1–6;
1 Né. 15:15.
 b D&C 133:35.
 c Isa. 63:2;
D&C 76:107; 133:46–50.
13 a Jos. 19:10–16.
GEE Zebulom.
14 a GEE Issacar.
16 a GEE Dã.
18 a 2 Né. 6:13.
19 a 1 Crôn. 5:26.
GEE Gade, Filho de
Jacó.
20 a GEE Aser.
21 a GEE Naftali.
22 a GEE José, Filho de Jacó.
 b IE ramo principal.
GEE Vinha do Senhor.
 c 1 Né. 15:12, 16;
2 Né. 3:4–5.
GEE Livro de Mórmon.
 d GEE Israel — Dispersão
de Israel.
24 a IE É da linhagem
de Jacó que vem o
Messias.
 b GEE Bom Pastor.
 c GEE Rocha.
25 a GEE Poder.
26 a Abr. 2:9.
 b Isa. 2:2–3; 2 Né. 12:2–3;
D&C 133:26–34.
 c Deut. 33:13–17;
1 Crôn. 5:1–2.
GEE José, Filho de Jacó.
 d IE consagrado.
GÊNESIS 49:11–26 90

27 aBenjamim é lobo que despedaça; pela manhã comerá a presa,
e b
à tarde repartirá o despojo.
28 Todas essas são as a
doze tribos
de Israel; e isso é o que lhes falou
seu pai quando os abençoou; a
cada um deles abençoou segundo
a sua b
bênção.
29 Depois ordenou-lhes, e disse-lhes: Eu me congrego ao meu
povo; asepultai-me com meus
pais, na cova que está no campo
de Efrom, o heteu,
30 Na cova que está no campo
de aMacpela, que está em frente
de Manre, na terra de Canaã, a
qual Abraão comprou com aquele campo de Efrom, o heteu, por
herança de sepultura.
31 Ali a
sepultaram Abraão e Sara,
sua mulher; ali sepultaram Isaque
e Rebeca, sua mulher; e ali eu sepultei Lia.
32 O campo e a cova que está
nele foram comprados dos filhos
de Hete.
33 Acabando, pois, Jacó de dar
mandamentos a seus filhos, encolheu os seus pés na cama, e aexpirou, e foi bcongregado ao seu
povo.
CAPÍTULO 50
O corpo de Jacó é embalsamado —
José o sepulta em Canaã — José consola seus irmãos — Os filhos de Israel
se multiplicam — José promete que
Deus tirará Israel do Egito e o levará
para Canaã — José morre no Egito e
é embalsamado.
ENTÃO José se lançou sobre o rosto
de seu pai; e achorou sobre ele, e
o beijou.
2 E José ordenou aos seus servos,
os médicos, que embalsamassem
seu pai; e os médicos embalsamaram Israel.
3 E cumpriram-se-lhe quarenta
dias, porque assim se cumprem
os dias daqueles que se embalsamam; e os egípcios o choraram
setenta dias.
4 Passados, pois, os dias de
seu choro, falou José à casa de
Faraó, dizendo: Se agora achei
graça aos vossos olhos, rogo-vos
que faleis aos ouvidos de Faraó,
dizendo:
5 Meu pai me fez jurar, dizendo: Eis que eu morro; em meu
asepulcro, que cavei para mim na
terra de Canaã, ali me sepultarás.
Agora, pois, te peço que eu suba,
para que sepulte meu pai; então
voltarei.
6 E Faraó disse: Sobe e sepulta
teu pai como ele te fez jurar.
7 E José subiu para sepultar seu
pai; e subiram com ele todos os
servos de Faraó, os anciãos da sua
casa, e todos os anciãos da terra
do Egito,
27 a Deut. 33:12;
Jos. 18:11–28.
GEE Benjamim, Filho
de Jacó.
 b IE ao entardecer.
28 a GEE Israel — Doze
tribos de Israel.
 b GEE Bênçãos
Patriarcais.
29 a Gên. 47:29–30.
30 a Gên. 23:9.
31 a Gên. 25:10.
33 a GEE Morte Física.
 b GEE Família — Família
eterna.
50 1 a D&C 42:45–46.
 5 a Gên. 47:30.
91 GÊNESIS 49:27–50:7

8 Como também toda a casa
de José, e seus irmãos, e a casa
de seu pai; somente deixaram na
terra de Gósen os seus pequeninos, e as suas ovelhas, e as suas
vacas.
9 E subiram também com ele,
tanto carros como gente a cavalo;
e o cortejo foi grandíssimo.
10 Chegando eles, pois, à aeira
de Atade, que está além do Jordão,
b
choraram um grande e doloroso
pranto; e ele guardou luto por seu
pai por sete dias.
11 E vendo os moradores da
terra, os cananeus, o luto na eira
de Atade, disseram: Este é um
grande luto para os egípcios.
Por isso chamou-se o seu nome
aAbel-Mizraim, que está além do
Jordão.
12 E fizeram-lhe os seus filhos
assim como ele lhes ordenara,
13 Pois os seus filhos o levaram
à terra de Canaã, e o sepultaram
na cova do campo de Macpela,
que Abraão tinha comprado com
o campo, por herança de sepultura, de Efrom, o heteu, em frente
de Manre.
14 E retornou José para o Egito,
ele e seus irmãos, e todos os que
com ele subiram para sepultar
seu pai, depois de haver sepultado seu pai.
15 Vendo então os irmãos de
José que seu pai estava morto,
disseram: aJosé porventura nos
odiará, e certamente nos retribuirá
todo o mal que lhe fizemos.
16 Portanto, mandaram dizer a
José: Teu pai ordenou, antes da
sua morte, dizendo:
17 Assim direis a José: aPerdoa,
rogo-te, a transgressão de teus irmãos, e o seu pecado, porque te
fizeram mal; agora, pois, rogamoste que perdoes a transgressão dos
servos do Deus de teu pai. E José
chorou quando eles lhe falavam.
18 Depois vieram também seus
irmãos, e prostraram-se diante
dele, e disseram: Eis-nos aqui
como teus aservos.
19 E José lhes disse: Não temais,
porque porventura estou eu em
lugar de Deus?
20 Vós intentastes mal contra
mim, porém Deus o aintentou para
bbem, para fazer como está neste
dia, para conservar a vida de um
povo numeroso.
21 Agora, pois, não temais; eu
vos sustentarei a vós e a vossos
pequeninos. Assim os consolou,
e falou ao coração deles.
22 José, pois, habitou no Egito,
ele e a casa de seu pai; e viveu José
cento e dez anos.
23 E viu José os filhos de Efraim,
da terceira geração; também os filhos de Maquir, filho de Manassés,
nasceram sobre os joelhos de José.
24 aE disse José a seus irmãos:
10 a IE local para debulhar e
secar cereais.
 b Al. 28:12.
11 a IE O luto dos egípcios.
15 a OU Se José tiver
rancor contra nós,
ele certamente
revidará (. . .)
17 a GEE Perdoar.
18 a Gên. 37:5–11.
20 a Gên. 45:5.
 b D&C 100:15.
24 a TJS Gên. 50:24–38
(Apêndice).
GÊNESIS 50:8–24 92

24 b GEE Terra da
Promissão.
 c Deut. 11:9.
25 a GEE Juramento.
 b Êx. 13:19;
Jos. 24:32.
[ÊXODO]
1 6 a Gên. 50:24–26.
 7 a Deut. 26:5.
 8 a At. 7:17–19.
 9 a Êx. 12:37.
11 a Gên. 15:12–14.
 b 1 Né. 17:25.
 c OU Ramessés (Zoã,
Salm. 78:12); também a
antiga capital dos hicsos (Avaris ou Tânis)
na época de José.

O SEGUNDO LIVRO DE MOISÉS
CHAMADO
ÊXODO
CAPÍTULO 1
Os filhos de Israel se multiplicam —
Eles são submetidos à servidão pelos
egípcios — Faraó procura destruir os
filhos homens nascidos de mulheres
hebreias.
ESTES, pois, são os nomes dos
filhos de Israel, que entraram
no Egito com Jacó; cada um entrou
com sua família:
2 Rúben, Simeão, Levi, e Judá;
3 Issacar, Zebulom, e Benjamim;
4 Dã e Naftali, Gade e Aser.
5 Todas as almas, pois, que procederam dos lombos de Jacó,
foram setenta almas; José, porém,
estava no Egito.
6 Havendo, pois, a
José falecido, e
todos os seus irmãos, e toda aquela geração,
7 Os filhos de Israel afrutificaram, e aumentaram muito, e
multiplicaram-se, e foram fortalecidos grandemente; de maneira
que a terra se encheu deles.
8 Depois levantou-se um novo arei sobre o Egito, que não conhecera José;
9 O qual disse ao seu povo: Eis
que o povo dos filhos de Israel é amais numeroso, e mais poderoso
do que nós.
10 Vinde, usemos de sabedoria
para com ele, para que não se multiplique, e aconteça que, havendo
guerra, ele também se ajunte com
os nossos inimigos, e peleje contra
nós, e saia desta terra.
11 E puseram sobre eles a
feitores,
para os afligirem com suas b
cargas.
Porque edificaram para Faraó cidades-celeiro, Pitom e c
Ramessés.
12 Mas quanto mais os afligiam,
tanto mais se multiplicavam, e
tanto mais cresciam; de maneira
Eu morro, mas Deus certamente
vos visitará, e vos fará subir desta
terra à b
terra que jurou a c
Abraão,
a Isaque, e a Jacó.
25 E José fez ajurar os filhos de
Israel, dizendo: Certamente vos
visitará Deus, e fareis transportar
os meus b
ossos daqui.
26 E morreu José com a idade
de cento e dez anos; e o embalsamaram, e o`)
