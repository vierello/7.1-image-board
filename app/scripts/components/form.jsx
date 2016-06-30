var React = require('react');
var $ = require('jquery');


var InputForm = React.createClass({
  getInitialState: function(){
    return {
      'url': '',
      'caption': ''
    }
  },

  addNewPicture: function(e){
    e.preventDefault();
    this.props.pictures.create({
      'url': this.state.url,
      'caption': this.state.caption,
    })
  },

  handleNewUrl: function(e){
    e.preventDefault();
    this.setState({'url': e.target.value})
  },

  handleNewCaption: function(e){
    e.preventDefault();
    this.setState({'caption': e.target.value})
  },

  render: function(){
    return(
      <form onSubmit={this.addNewPicture} className="new-image-form">
        <div className="col-md-offset-2 col-md-8">
          <input onChange={this.handleNewUrl} className="image-url" type="url" placeholder="Image URL"/>
          <textarea onChange={this.handleNewCaption} className="image-caption" type="text" rows="2" placeholder="Image Caption"></textarea>
          <input className="btn btn-success new-button" type="submit" value="Add" />
          <input onClick={this.props.cancelForm} className="btn btn-danger cancel-button" type="reset" value="Cancel" />
        </div>
      </form>
    );
  }
});

var HeaderComponent = React.createClass({
  render: function(){
    var form = this.props.displayForm ? <InputForm pictures={this.props.pictures}/>: '';
    return(
      <div className="row">
        <header className="add-bar">
          <button onClick={this.props.showPanel} className="btn add-button btn-primary col-md-offset-2"><i className="fa plus fa-plus" aria-hidden="true"></i></button>
        </header>
        {form}
      </div>
    );
  }
});

var PictureBoardComponent = React.createClass({

  componentWillMount: function(){
    this.props.pictures.on('add', this.update);
  },

  update: function(){
    this.forceUpdate();
  },

  render: function(){

    var pictureListing = this.props.pictures.map(function(picture){
      return (
        <section key={picture._id}className="image-board">
          <div className="thumbnail">
            <img src={picture.get('url')} alt="..."/>
            <div className="caption">
              <h3>{picture.get('caption')}</h3>
            </div>
          </div>
        </section>
      );
    });

    return(
      <div className="col-md-offset-2 col-md-8">
        <ul>
          {pictureListing}
        </ul>
      </div>
    );
  }
});

var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      'displayForm': false
    }
  },

  cancelForm: function(e){
    e.preventDefault();
    this.setState({'displayForm': false})
  },


  showPanel: function(e){
    e.preventDefault();
    if(this.state.displayForm){
    this.setState({'displayForm': false});
    } else {
      this.setState({'displayForm': true})
    }
  },

  render: function(){
    return(
      <div>
        <HeaderComponent cancelForm={this.cancelForm} showPanel={this.showPanel} displayForm={this.state.displayForm} pictures={this.props.pictures}/>
        <PictureBoardComponent pictures={this.props.pictures} />
      </div>
    );
  }
})

module.exports = {
  'AppComponent': AppComponent
}
