import { useState } from 'react';
import { Grid, TextField, TextareaAutosize, Checkbox } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleResetClick = () => {
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setCheckbox("");
  }

  const handleSubmitClick = () => {
    if (name.length === 0) {
      alert("Error : Name is required field");
    }
    else if (!(/^[a-zA-Z]+$/.test(name))) {
      alert("Error : Name only accepts character");
    }
    else if (email.length === 0) {
      alert("Error : Email is required field");
    }
    else if (!validateEmail(email)) {
      alert("Error : Invalid Email format");
    }
    else if (company.length === 0) {
      alert("Error : Company is required field");
    }
    else if (message.length === 0) {
      alert("Error : Message is required field");
    }
    else if (message.length < 20) {
      alert("Error : Message should have minimum 20 characters");
    }
    else {
      var hash = hashCode(email);
      localStorage.setItem('Email', hash);
      sessionStorage.setItem('Email', hash);
      setCookie('Email', hash , 7);
      alert("Email hashed and stored in Local Storage, Session Storage, & Cookies successfully");
      handleResetClick();
    }
  }

  function hashCode(s) {
    return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  return (
    <div className="App">
      <div className="get">
        GET IN TOUCH
      </div>
      <div className="send">
        Send us a message
      </div>
      <div className="red-underline"></div>
      <br />
      <div>
        <Grid container>
          <Grid
            container
            xs={12}
            md={8}
          >
            <Grid
              container
              xs={12}
            >
              <Grid
                xs={6}
                className="form-field"
              >
                <TextField
                  id="outlined-basic"
                  label="Your Name*"
                  variant="outlined"
                  fullWidth
                  style={{ backgroundColor: 'white' }}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid
                xs={6}
                className="form-field"
              >
                <TextField
                  id="outlined-basic"
                  label="Your Email*"
                  variant="outlined"
                  fullWidth
                  style={{ backgroundColor: 'white' }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              className="form-field"
            >
              <TextField
                id="outlined-basic"
                label="Company Name*"
                variant="outlined"
                fullWidth
                style={{ backgroundColor: 'white' }}
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              className="form-field"
            // style={{ marginBottom: '0px' }}
            >
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Your Message"
                minRows={6}
                className="textArea"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              container
              xs={12}
              style={{ padding: '0px' }}
            >
              <Grid
                xs={1}
                alignItems="center"
                container
              >
                <Checkbox
                  aria-label='Checkbox demo'
                  style={{ padding: '0px' }}
                  checked={checkbox}
                  onChange={e => setCheckbox(e.target.checked)}
                />
              </Grid>
              <Grid
                xs={11}
                alignItems="center"
                container
                className="checkbox-text"
              >
                Yes, I would like to receive communication by call/email about Nabler's services
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              style={{ marginRight: '20px' }}
            >
              <Grid
                xs={4}
                md={2}
                container
                justifyContent="center"
                alignItems="center"
                className="button"
                onClick={handleSubmitClick}
              >
                Submit
              </Grid>
              <Grid
                xs={4}
                md={8}
              >

              </Grid>
              <Grid
                container
                xs={4}
                md={2}
                justifyContent="center"
                alignItems="center"
                className="button"
                onClick={handleResetClick}
              >
                Reset
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            md={4}
            className="form-field right-screen"
          >
            <Grid
              xs={12}
              style={{ fontSize: '18px', marginBottom: '10px' }}
            >
              We've driven online revenues of over <strong> $2 billion </strong>for our clients. Ready to know how we can help you ?
            </Grid>
            <Grid
              xs={12}
              container
              style={{ fontSize: '22px' }}
            >
              <Grid
                xs={1}
                container
                alignItems="flex-end"
              >
                <EmailIcon />
              </Grid>
              <Grid
                xs={11}
                container
              >
                info@nabler.com
              </Grid>
            </Grid>
            <Grid
              xs={12}
              container
              style={{ fontSize: '22px' }}
            >
              <Grid
                xs={1}
                container
                alignItems="flex-end"
              >
                <LocalPhoneIcon />
              </Grid>
              <Grid
                xs={11}
                container
                style={{ color: '#ec1c24' }}
              >
                +918049372900
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
