class AppSelectingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year:'',
      offense:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
        //   var spec = "https://gist.githubusercontent.com/hvo/8febd426e3d12bd430aedc0cd8dd1d41/raw/766342b5a84455fb941607eede525a3b7193946a/DV_Lab7.vg.json";
//     spec = `http://SERVER_LOCATION/${this.state.platform}/${this.state.rating}`;
    var spec = '/vis/'+this.state.year+'/'+this.state.offense;
    vegaEmbed('#vis', spec, {actions:false});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
         Year &nbsp;
          <input
            type='text'
            name='year'
            value={this.state.year}
            list = 'year_list'
            onChange={this.handleChange} />

        Offense &nbsp;
          <input
            type='text'
            name='offense'
            value={this.state.offense}
            list = 'offense_list'
            onChange={this.handleChange} />

        <datalist id='year_list'>
            {years.map( (y) => <option value={y} /> )}
        </datalist>
        <datalist id='offense_list'>
            {offenses.map( (o) => <option value={o} /> )}
        </datalist>

        </label> &nbsp; &nbsp;
        <input type="submit" value="Update" />
      </form>
    );
  }
}

ReactDOM.render(
  <div>
    <AppSelectingForm />
  </div>,
  document.getElementById('ui')
);

