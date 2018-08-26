var React = require('react');

class result extends React.Component {
  render() {

    return (

    	<html>
        <head><title>result</title></head>
        <link rel="stylesheet" href="result.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"/>
        <body>
        
        {this.props.isfuzzy >0? 
        <div className="maindiv">
        <h2> Sorry, we did not find {this.props.userInput}</h2><br/>
        <h3>but we find {this.props.searchQ} instead</h3>
        </div> :
        <div className="maindiv">
        <h3>Here is the result of {this.props.searchQ}</h3>
        </div>
        }
         <div className="secdiv">
        
<table>
  <tr>
    <th>Date</th>
    <th>Hour</th>
    <th>Impressions</th>
    <th>Clicks</th>
    <th>Revenue</th>
  </tr>
  <tr>
    <td>{this.props.arr[0].date.toString()}</td>
    <td>{this.props.arr[0].hour.toString()}</td>
    <td>{this.props.arr[0].impressions.toString()}</td>
    <td>{this.props.arr[0].clicks.toString()}</td>
    <td>{this.props.arr[0].revenue.toString()}</td>
    </tr>
     <tr>
    <td>{this.props.arr[1].date.toString()}</td>
    <td>{this.props.arr[1].hour.toString()}</td>
    <td>{this.props.arr[1].impressions.toString()}</td>
    <td>{this.props.arr[1].clicks.toString()}</td>
    <td>{this.props.arr[1].revenue.toString()}</td>
    </tr>
     <tr>
    <td>{this.props.arr[2].date.toString()}</td>
    <td>{this.props.arr[2].hour.toString()}</td>
    <td>{this.props.arr[2].impressions.toString()}</td>
    <td>{this.props.arr[2].clicks.toString()}</td>
    <td>{this.props.arr[2].revenue.toString()}</td>
    </tr>
     <tr>
    <td>{this.props.arr[3].date.toString()}</td>
    <td>{this.props.arr[3].hour.toString()}</td>
    <td>{this.props.arr[3].impressions.toString()}</td>
    <td>{this.props.arr[3].clicks.toString()}</td>
    <td>{this.props.arr[3].revenue.toString()}</td>
    </tr>
    <tr>
    <td>{this.props.arr[4].date.toString()}</td>
    <td>{this.props.arr[4].hour.toString()}</td>
    <td>{this.props.arr[4].impressions.toString()}</td>
    <td>{this.props.arr[4].clicks.toString()}</td>
    <td>{this.props.arr[4].revenue.toString()}</td>
    </tr>
</table>

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

module.exports = result;