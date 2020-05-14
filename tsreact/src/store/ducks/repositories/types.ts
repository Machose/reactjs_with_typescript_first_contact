/**
 * Action types  ->  Dispara funções do redux
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * Data types  ->  Formato da informações armazenado no reducer
 */
export interface Repository {
  id: number;
  name: string;
}

/**
 * State types  ->  Formato do estado armazenado pelo reducer
 */
export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}

//readonly  ->  estado do redux é imutavel
