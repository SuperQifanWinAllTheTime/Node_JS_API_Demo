var React = require('react');

class HelloMessage extends React.Component {

  render() {

    return (

    	<html>
        <head><title>welcome</title></head>
        <link rel="stylesheet" href="index.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"/>
        <body>
        <div className="maindiv">
        <h1>{this.props.hellomessage}</h1>
        </div>
        <div className="wrap">
   		<div className="search">
   		<form action="/search">
      	<input type="text" className="searchTerm" placeholder="What are you looking for?" name="name" value=""/>
      	<button type="submit" className="searchButton" value="submit">
        <i className="fas fa-search"></i>
     	</button>
     	</form>
  		 </div>
		</div>
        </body>
      </html>
      );
  }
}

module.exports = HelloMessage;