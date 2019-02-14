'use-strict';

/*
  Repo shows 1 repo.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import * as actions from './store/actions';

const Container = styled.section`
  margin: 10px;
`
const Button = styled.a`
  text-decoration: none;
  font-size: 24px;
`;
const RepoCard = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Image = styled.img`
  width: 20px;
  height: 20px;
`;
const Column = styled.section`
  color: blue;
  padding: 5px;
`
const RepoName = styled.section`
  padding-left: 10px;
`

class Repo extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Button href={this.props.repo.html_url}>
          <RepoCard>
            <Column>
              <Image src={this.props.repo.owner.avatar_url} alt="avatar"/>
            </Column>
            <Column>
              <FontAwesomeIcon icon={faStar} size="sm"/>
              {this.props.repo.stargazers_count}
            </Column>
            <RepoName>
              {this.props.repo.name}
            </RepoName>
          </RepoCard>
        </Button>
      </Container>
    );
  }
}

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

export default connect( mapStateToProps, mapDispatchToProps )(Repo);
