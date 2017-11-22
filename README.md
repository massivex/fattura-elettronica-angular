[![npm version](https://badge.fury.io/js/fattura-elettronica-angular.svg)](https://badge.fury.io/js/fattura-elettronica-angular)
[![Build Status](https://travis-ci.org/massivex/fattura-elettronica-angular.svg?branch=master)](https://travis-ci.org/massivex/fattura-elettronica-angular)
# fattura-elettronica-angular
Modulo di fatturazione elettronica PA/B2B per NodeJS


## Caratteristiche
### Modulo
- Supporto formato standard PA/B2B XML v1.2.1 [pa]
- Importazione e conversione xml v1.1 a v1.2
- Importazione e validazione xml v1.2
- Strumenti di modifica contenuto fattura
- Esportazione files xml v1.2
- Metodi di invio a gateway SdI
- Creato con [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3
- Supporto [Angular 5](https://angular.io/) e compilazione [AOT](https://angular.io/guide/aot-compiler)
- Interfaccia compatibile con [Bootstrap 4](https://getbootstrap.com/)

## Utilizzo
### Avvio dell'applicazione web di esempio
Installare le dipendenze con il comando `npm install` e poi avviare il web server con il comando `npm start`.

Navigare all'indirizzo http://localhost:4200/ per lanciare l'applicazione web.

### Applicazione web di esempio
https://skynet.sediva.it/fe/

## Installazione
fattura-elettronica-angular è disponibile su npm, quindi per utilizzare il modulo all'interno della vs applicazione Angular 5 tutto quel che serve è eseguire:
```
	npm install fattura-elettronica-angular @ng-bootstrap/ng-bootstrap --save
```
dalla console ed agganciare ed importare i moduli FatturaEletronicaModule e NgbModule nella file app.module.ts
```
import { FatturaElettronicaModule } from 'fattura-elettronica-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

[..]
@NgModule({
  declarations: [
    ...
  ],
  imports: [	
    NgbModule.forRoot(),
    FatturaElettronicaModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

```

## Licenza
fattura-elettronica-angular è un progetto open source della Massive Dynamic Technology S.r.l.s [mdt] rilasciato sotto licenza [BSD][bsd].

[pa]: http://www.fatturapa.gov.it/export/fatturazione/sdi/Specifiche_tecniche_del_formato_FatturaPA_v1.2.1.pdf 
[bsd]: http://github.com/massivex/fattura-elettronica-angular/blob/master/LICENSE
[mdt]: http://www.massivex.it/
[npm]: https://www.nuget.org/packages/fattura-elettronica-angular/
