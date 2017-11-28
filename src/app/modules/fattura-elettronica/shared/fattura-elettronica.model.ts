export interface FatturaElettronicaJson {
    versione?: string;
    datiTrasmissione: DatiTrasmissione;
}

export interface DatiTrasmissione {
    idTrasmittente?: {
        idPaese?: string;
        idCodice?: string;
    };
    progressivoInvio?: string;
    formatoTrasmissione?: string;
    codiceDestinatario?: string;
    contattiTrasmittente?: ContattiTramsmittente;
    pecDestinatario?: string;
}

export interface ContattiTramsmittente {
    telefono: string;
    email: string;
}

export interface CedentePrestatore {
    datiAnagrafici?: DatiAnagraficiCedente;
    sede?: Indirizzo;
    stabileOrganizzazione ?: Indirizzo;
    iscrizioneREA?: IscrizioneREA;
    contatti?: Contatti;
    riferimentoAmministrazione?: string;
}

export interface RappresentanteFiscale {
    datiAnagrafici?: DatiAnagrafici;
}

export interface RappresentanteFiscaleCessionario {
    idFiscaleIVA?: IdFiscaleIVA;
    denominazione?: string;
    nome ?: string;
    cognome ?: string;
}

export interface CessionarioCommittente {
    datiAnagrafici?: DatiAnagrafici;
    sede?: Indirizzo;
    stabileOrganizzazione ?: Indirizzo;
 }

export interface DatiAnagrafici {
    idFiscaleIVA?: IdFiscaleIVA;
    codiceFiscale?: string;
    anagrafica?: Anagrafica;
}

export interface DatiAnagraficiCedente extends DatiAnagrafici {
    alboProfessionale ?: string;
    provinciaAlbo ?: string;
    numeroIscrizioneAlbo ?: string;
    dataIscrizioneAlbo ?: Date;
    regimeFiscale?: string;
}


export interface IdFiscaleIVA {
    idPaese: string;
    idCodice: string;
}

export interface Anagrafica {
    denominazione?: string;
    nome ?: string;
    cognome ?: string;
    titolo ?: string;
    codEORI ?: string;
}

export interface Indirizzo {
    indirizzo?: string;
    numeroCivico ?: string;
    cap?: string;
    comune?: string;
    provincia?: string;
    nazione?: string;
}

export interface IscrizioneREA {
    ufficio?: string;
    numeroREA ?: string;
    capitaleSociale ?: string;
    socioUnico?: string;
    statoLiquidazione?: string;
}

export interface Contatti {
    telefono?: string;
    fax?: string;
    email?: string;
}