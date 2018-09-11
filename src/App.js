//@flow
import * as React from 'react';
import logo from './logo.svg';
import './App.css';

type TextProps = {
  name: string
}

type State = {
  count: number,
};

class Text extends React.Component<TextProps, State> {

  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  render () {

    return (
      <React.Fragment>
        <p>Count: {this.state.count}</p>
        <p>{this.props.name}</p>
      </React.Fragment>
    )
  }
}

class CustomTextInput extends React.Component<{}> {

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.textInput);
  };


  // tell Flow that we want to associate the textInput ref
  // with an HTML Input button
  textInput: ?HTMLInputElement;

  render() {
    return (
      <div className="m-t-20">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={textInput => (this.textInput = textInput)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

class EventComponent extends React.Component<{}, { count: number }> {
  state = {
    count: 0,
  };
  
  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    // To access your button instance use `event.currentTarget`.
    (event.currentTarget: HTMLButtonElement);

    this.setState(prevState => ({
      count: prevState.count + 1,
    }));

  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}

class App extends React.Component<{}> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Text name={'Yomi'} />
        <EventComponent />
        <CustomTextInput />
      </div>
    );
  }
}

export default App;
