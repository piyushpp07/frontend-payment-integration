import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import theme from './components/Theme';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';


function MediaCard() {

  return (
    <div style={styles.main}>
      <div style={styles.iner}>
        <div style={styles.heading}>
          <h2>Donate For A Cause</h2>
        </div>
        <h3>The COVID-19 pandemic is one of the worst health and economic crises in modern history and it continues to require the best of humanity to overcome. Your donation to this fund will help stop the spread of the virus, including the highly contagious Delta variant, to protect us all.</h3>
        <h4>Your donation to this fund will help stop the spread of variants such as Delta around the world and give communities on the front lines of the crisis the resources they need to act quickly and protect the most vulnerable. As the situation evolves, the fund will evolve, too, supporting long-term recovery and education efforts run by local, vetted organizations in the most affected regions. We will work with our partners on the ground to get funds where they're most needed.</h4>
        <Link to='/components/Services'><button style={styles.btn} >
          <span>Donate Now</span></button></Link>
      </div>
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={MediaCard} />
          <Route exact path={'/components/Services'} component={Services} />
          <Route exact path={'/components/ContactUs'} component={ContactUs} />
          <Route exact path={'/components/AboutUs'} component={AboutUs} />
        </Switch>
        <Header value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />

      </BrowserRouter>
      <Footer value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

    </ThemeProvider>
  );
}
const styles = {
  main: {
    marginTop: '0em',
    width: '100%',
    height: '100%',
    color: 'black',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("https://images.unsplash.com/photo-1620990726624-4a39fd54e13a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80")`,

  },
  iner: {
    paddingTop: '20%',
    diplay: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginLeft: '2.5em',
    marginRight: '6em'
  }
  ,
  heading: {
    paddingTop: ' %',
    color: 'black',
    width: '70%',


  },
  btn: {
    marginTop: '5%',
    height: '4em',
    width: '15em',
    backgroundColor: 'transparent'
    , marginBottom: '30em',
    borderRadius: '1em',
    borderColor: 'black'
  }
}

export default App;