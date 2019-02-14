'use-strict';

/*
  ReposList shows top repos.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import axios from 'axios';
import Repo from './repo';

const Title = styled.h1`
  padding: 5px;
`

class ReposList extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.setRepos([]); // clear any previous repos
    this.getTopRepos(this.props.numRepos);
  }

  getTopRepos = () => {
    // ToDo: use redux-thunk to support async actions and move API calls to actions
    axios.get('https://api.github.com/search/repositories?sort=stars&q=language:javascript').then(response => {
      if (response.data.items) {
        for (let repo of response.data.items) {
          this.props.addRepo(repo);
        }
      }
    })
    .catch(err => console.log(err)); // ToDo: show error
  }

  render() {
    return (
      <div>
        <Title>
          Github Top Repos
        </Title>
        <div>
          { this.props.repos.map(repo => {
              return <Repo repo={repo} key={repo.id}/>
            })
          }
        </div>
      </div>
    );
  }
}

ReposList.defaultProps = {
};

const mapStateToProps = (state) => {
  return {
		repos: state.repos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRepos: repos => {
      dispatch(actions.setRepos(repos));
    },
    addRepo: repo => {
      dispatch(actions.addRepo(repo));
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ReposList);
