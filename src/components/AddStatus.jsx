import React, {Component} from 'react';

class AddStatus extends Component {

state = {
  status: ''
}

onChange = (e) => this.setState({[e.target.name]: e.target.value});

onSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmit(this.state.status);
  this.setState({status: ''});
}

  render(){
    return(
  <div>
    <form onSubmit={this.onSubmit}>
      <input
        type="text"
        name="status"
        placeholder="Write a status..."
        style={{width: '90%', marginLeft: '20px'}}
        value={this.state.status}
        onChange={this.onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn m-2 btn-primary"
      />
    </form>
  </div>
    )
  }

}


export default AddStatus;
