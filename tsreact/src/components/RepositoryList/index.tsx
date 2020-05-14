import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesAction from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';

/** Mapear informações que vem do mapStateToProps */
interface StateProps {
  repositories: Repository[];
}

/** Funções vindas através mapDispatchToProps */
interface DispatchProps {
  loadRequest(): void;
}

/** Mapear qualquer outra propriedade vinda de um componente pai */
interface OwnProps {}

//Uni todas as interfaces em um type
type Props = StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories?.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
