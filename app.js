// https://www.w3schools.com/cssref/css_selectors.asp
// Atskiri elementai
    // Tamsiai žaliai nuspalvinti h1 tagą;
    document.querySelector('h1').style.color = 'darkgreen';
    // Tagui i pridėti klasę small;
    document.querySelector('i').classList.add('small');
    // Iš tago h1 pašalinti klasę main;
    document.querySelector('h1').classList.remove('main');
    // Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
    document.querySelector('h1 + h2').classList.add('first');
    document.querySelector('h1 + h2').classList.remove('main');
    // Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
    document.querySelector('h2 > span:first-of-type').style.fontSize = '10px';
    document.querySelector('h2 > span:first-of-type').style.color = 'grey';

// Elemetų grupės (nodeList) skaičiavimus išvest į consolę
    // Suskaičiuoti kiek yra h2 tagų;
    console.log('KIEK H2 TAGU: ', document.querySelectorAll('h2').length);
    // Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
    console.log('KIEK H2 BE KLASES FIRST: ', document.querySelectorAll('h2').length - document.querySelectorAll('h2.first').length);
    // Visus h2 tagus nuspalvinti šviesiai mėlynai
    document.querySelectorAll('h2').forEach(e => e.style.color = 'lightblue');
    // Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
    document.querySelectorAll('div.prices > h2').forEach(e => e.classList.add('price-tag'));
    // Pabraukti visus tagus su klase new;
    document.querySelectorAll('.new').forEach(e => e.style.textDecoration = "underline");
    // Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
    console.log('KIEK GYVUNU KATEGORIJU: ', document.querySelectorAll('ul').length);
    const zirafos = [];
    document.querySelectorAll('li').forEach(e => {
        if(e.textContent.search('Žirafa') >= 0 )
            zirafos.push(e.textContent);
    });
    console.log('KIEK ZIRAFU: ', zirafos.length);
    console.log('Kokios zirafos:');
    console.log(zirafos);
    // Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
    document.querySelectorAll('ul').forEach(e => {
        e.style.border = '1px solid red';
        e.style.padding = '15px 50px';
    })
    // Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
    console.log('KIEK NAUJU GYVUNU: ', document.querySelectorAll('.new').length);
    // Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
    console.log('\nSuskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje:\n');
    document.querySelectorAll('ul').forEach(e => {

        const m =[];
        console.log(e.id.toUpperCase(), ':\n');

        e.querySelectorAll('.new').forEach(el => {
            m.push(el.textContent);
            console.log(el.textContent);
        })
        console.log('VISO: ', m.length);
        console.log('--------------');
    })

// Elementų events
    // Padaryti tai ką liepia mygtukai Header1 sekcijoje;
    document.getElementById('h1-color').addEventListener('click', () => {
        console.log('clicked');
        document.querySelector('h1').style.color = 'lightgreen';
    });
    document.getElementById('h1-font').addEventListener('click', () => {
        console.log('clicked');
        document.querySelector('h1').style.fontSize = '10px';
    });
    // Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
    const iDom = document.querySelector('i');
    iDom.addEventListener('click', () => iDom.style.fontWeight = 'bold')
    // Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
    const priceDom = document.querySelector('.prices');
    let color = true;
    priceDom.addEventListener('click', () => {
        color = !color;
        priceDom.style.background = color ? 'red' : 'white'}) 
    
    // Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
    const contactsDom = document.getElementById('contacts');
    contactsDom.addEventListener('click', () => {
    if(contactsDom.style.color !== 'orange') {
        contactsDom.style.color = 'orange'
    }
    });
    // Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
    const cntuDom = document.querySelector('#contacts > u');
    cntuDom.addEventListener('click', () => {contactsDom.style.fontSize = '20px'});
    // Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
    const xDom = document.querySelector('#contacts > b');
        xDom.addEventListener('click', () => {
            contactsDom.style.color = null;
            contactsDom.style.fontSize = null;
        });
    // Padaryti tai ką liepia mygtukai Header2 sekcijoje;
    const h1Dom = document.getElementById('h1-color-back');
    h1Dom.addEventListener('click', () => {
        document.querySelector('h1').style.color = null;
    });

// Elementų grupių events
    // Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
    const nauGyvDom = document.querySelectorAll('.new');
    nauGyvDom.forEach(e => e.addEventListener('dblclick', () => e.style.color = 'red'))
    
    // Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
    
    const gyvunaiDom = document.querySelectorAll('.animals > ul > li:not(.like-button)');
    gyvunaiDom.forEach(e => e.addEventListener('click', u => {
        u.target.style.fontSize = '130%'
    }));

    // Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
    document.querySelectorAll('.animals > ul').forEach(e => {
        e.querySelector('.like-button').addEventListener('click', () => {
            e.classList.add('like');
        })
    });

// Dinaminis elementų kūrimas (su createElement)
    // Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
    const pricesDom = document.querySelector('.prices');
    const newPriceh2 = document.createElement('h2');
    const newPricetxt = document.createTextNode('Senjorai tik: 1.99 eur');
    newPriceh2.appendChild(newPricetxt);
    pricesDom.appendChild(newPriceh2);
    // Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
    const newPriceh2B = document.createElement('h2');
    const newPricetxtB = document.createTextNode('Senjorų grupė iki 10: tik 5.99 eur');
    newPriceh2B.appendChild(newPricetxtB);
    pricesDom.appendChild(newPriceh2B);
    newPriceh2B.classList.add('new');
    newPriceh2B.addEventListener('click', e => e.target.style.color = 'green');
    // Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
    const allUlDom = document.querySelectorAll('.animals > ul');
    allUlDom.forEach(e => {
        const likeBtnDom = e.querySelector('.like-button');
        const li = document.createElement('li');
        const txt = document.createTextNode('NEPATINKA');
        li.appendChild(txt);
        li.addEventListener('click', () =>  e.classList.remove('like'));
        likeBtnDom.after(li);
    });
    // Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
const fieldset = document.createElement('fieldset');
const legend = document.createElement('legend');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btnText1 = document.createTextNode('Pabraukti H1 tagą');
const btnText2 = document.createTextNode('Nepabraukti H1 tagą');
const legendText = document.createTextNode('HEADER 3');
legend.appendChild(legendText);
fieldset.appendChild(btn1);
fieldset.appendChild(btn2);
btn1.appendChild(btnText1);
btn2.appendChild(btnText2);
fieldset.appendChild(legend);
document.getElementById('contacts').before(fieldset);

btn1.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'underline');
btn2.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'none');
