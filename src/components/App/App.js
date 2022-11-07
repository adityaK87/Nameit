// import React from 'react';
// import './App.css';
// import Header from '../Header/Header';
// import SearchBox from '../searchBox/SearchBox';
// import ResultContainer from '../ResultsContainer/ResultContainer';

// const name = require("@rstacruz/startup-name-generator")
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       headerText: 'Name It!',
//       headerExpanded: true,
//       suggestedNames: []
//     };
//   };

//   handleInputChange = (inputText) => {
//     this.setState({
//       headerExpanded: !inputText,
//       suggestedNames: inputText ? name(inputText) : []
//     });
//   };

//   render() {
//     // console.log(name('cloud'))
//     return (
//       <div>
//         <Header
//           headerExpanded={this.state.headerExpanded}
//           headTitle={this.state.headerText} />
//         <SearchBox onInputChange={this.handleInputChange} />
//         {/* Functions can also be passed as props. */}
//         <ResultContainer suggestedNames={this.state.suggestedNames} />
//       </div>
//     );
//   }
// }

// export default App;





import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../searchBox/SearchBox';
import ResultContainer from '../ResultsContainer/ResultContainer';
import { useState } from 'react';

const name = require("@rstacruz/startup-name-generator")
const App = () => {
  // eslint-disable-next-line 
  const [headerText, setHeaderText] = useState('Name It!')
  const [headerExpanded, setHeaderExpanded] = useState(true)
  const [suggestedNames, setSuggestedNames] = useState([])


  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText)
    setSuggestedNames(inputText ? name(inputText) : [])
  };

  return (
    <div>
      <Header
        headerExpanded={headerExpanded}
        headTitle={headerText} />
      <SearchBox onInputChange={handleInputChange} />
      {/* Functions can also be passed as props. */}
      <ResultContainer suggestedNames={suggestedNames} />
    </div>
  );
}

export default App;
