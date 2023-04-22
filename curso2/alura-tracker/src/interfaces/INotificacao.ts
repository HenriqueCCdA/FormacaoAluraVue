export enum TipoNotificacao{
    SUCESSO,
    FALHA,
    ANTECAO
}


export interface INotifficacao {
    titulo: string
    texto: string
    tipo: TipoNotificacao
    id: number
}
