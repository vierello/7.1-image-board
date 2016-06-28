var React = require('react');

var Header = React.createClass({
  render: function(){
    return(
      <header className="add-bar">
        <button className="btn add-button btn-primary col-md-offset-2"><i className="fa plus fa-plus" aria-hidden="true"></i></button>
      </header>
    );
  }
});

var InputForm = React.createClass({
  render: function(){
    return(
      <form className="hidden">
        <input className="image-url" type="url" placeholder="Image URL"/>
        <textarea className="image-caption" type="text" rows="2" placeholder="Image Caption"></textarea>
      </form>
    );
  }
});

var ImageAddComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <Header />
        <InputForm />
      </div>
    );
  }
});

var ImageDisplay = React.createClass({
  render: function(){
    return (
      <li>
        <img />
        <p>{this.props.text}</p>
      </li>
    );
  }
});

var ImageBoardComponent = React.createClass({
  render: function(){
    return(
      <ul>
        <ImageDisplay text='my cool site' />
      </ul>
    );
  }
});

var AppComponent = React.createClass({
  render: function(){
    return(
      <div>
        <ImageAddComponent />
        <ImageBoardComponent />
      </div>
    );
  }
})

module.exports = {
  'Header': Header,
  'InputForm': InputForm,
  'AppComponent': AppComponent
}
