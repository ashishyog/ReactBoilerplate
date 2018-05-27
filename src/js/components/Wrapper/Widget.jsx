import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './style.scss';
import ErrorBoundary from '../ErrorBoundry';


export default class Widget extends Component {
  render () {
    return (
      <ErrorBoundary>
        <Card className={styles.card}>
          <CardContent>
            
          </CardContent>
        </Card>
      </ErrorBoundary>
    );
  }
}
