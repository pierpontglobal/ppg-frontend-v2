import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './redux/actions/simpleAction'

function App(props) {

  const simpleAction = (event) => {
    props.simpleAction();
   }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={simpleAction}>Test redux action</button>
      </header>

      <pre>
        {
          JSON.stringify(props)
        }
      </pre>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
