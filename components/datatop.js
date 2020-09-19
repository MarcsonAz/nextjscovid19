import React from 'react';
import API from './suport/apiaxios';

const slug = 'india';
export default class DataTop extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    API.get(`countries/${slug}`)
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
    })
  }


  render() {
    return (
      <div>
        <h3> Dados abaixo ! </h3>  
        <ul>
            <li key={this.state.countries.id}>
                {this.state.countries.country} cases: {this.state.countries.cases} at: {this.state.countries.date}
            </li>
        </ul>
      </div>  
      
    )
  }
}