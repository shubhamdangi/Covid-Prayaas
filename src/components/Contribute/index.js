import React, { useEffect, useState } from "react";
import "./style.css";
import support from "./support.png";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { states } from "./states";
import SignIn from "../Signin";
// firebase firestore and auth imports
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth, logout } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Alert from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Contribute() {
  const classes = useStyles();

  let history = useHistory();
  const [state1, setState1] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [additional, setAdditional] = useState("");
  const [verified, setVerified] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);

  const [user] = useAuthState(auth);
  let username = "";
  {
    user ? (username = user.email.replace("@gmail.com", "")) : (username = "");
  }

  useEffect(() => {
    document.title = "Covid Prayaas | Contribute";
  }, []);

  /* function to add new item to firestore */
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "covid-res"), {
        username: user.email,
        contact: contact,
        desc: desc,
        category: category,
        city: city,
        state1: state1,
        verified: verified,
        additionalInfo: additional,
        website: website,
        created: Timestamp.now(),
      }).then(
        () => setContact(""),
        setDesc(""),
        setState1(""),
        setCity(""),
        setCategory(""),
        setVerified(""),
        setAdditional(""),
        setWebsite(""),
        setOpenAlert(true)
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="contrib-page">
        <br /> <br />
        <div
          className="back"
          style={{ textAlign: "left", padding: "0 0 0 20px" }}
        >
          {" "}
          <br />
          <Button onClick={() => history.goBack()}>
            <ArrowBackIosIcon /> Go Back
          </Button>
        </div>
        <img src={support} alt="support" style={{ width: "120px" }} />
        <div className="message">
          {user ? (
            <div>
              <h4 style={{ paddingTop: "10px" }}>
                Hey! {username} Glad to see you contribute.
              </h4>
              <p>Please fill the details below to submit a resource</p>
            </div>
          ) : (
            <h4 style={{ paddingTop: "15px" }}>
              Please Sign In to Contribute a Resource{" "}
            </h4>
          )}
        </div>
        {user ? (
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={6}>
                <Form onSubmit={onSubmit}>
                  <Form.Group controlId="state">
                    <h6 className="contrib-form">State*</h6>

                    <select
                      class="form-control"
                      value={state1}
                      onChange={(e) => setState1(e.target.value)}
                      required
                    >
                      {states.map((x) => (
                        <option value={x}>{x}</option>
                      ))}
                    </select>
                  </Form.Group>

                  <Form.Group controlId="city">
                    <h6 className="contrib-form">City*</h6>
                    <Form.Control
                      type="city"
                      placeholder="Enter City"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="category">
                    <h6 className="contrib-form">Type of resource*</h6>
                    <Form.Control
                      type="category"
                      placeholder="Enter category (Ex: Ambulance, Plasma, Oxygen etc.)"
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="desc">
                    <h6 className="contrib-form">Description*</h6>
                    <Form.Control
                      type="desc"
                      placeholder="Enter resource description"
                      required
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="contact">
                    <h6 className="contrib-form">Contact Number*</h6>
                    <Form.Control
                      type="contact"
                      placeholder="Enter contact number"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="website">
                    <h6 className="contrib-form">Resource website (if any)</h6>
                    <Form.Control
                      type="website"
                      placeholder="Enter URL "
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="additional">
                    <h6 className="contrib-form">Any additional information</h6>
                    <Form.Control
                      type="additional"
                      placeholder="Enter additional info"
                      value={additional}
                      onChange={(e) => setAdditional(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <h6 className="contrib-form">
                    Have you personally verified the resource?
                  </h6>
                  <div class="form-check" style={{ textAlign: "left" }}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={verified}
                      onChange={(e) => setVerified(e.target.value)}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div class="form-check" style={{ textAlign: "left" }}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value={verified}
                      onChange={(e) => setVerified(e.target.value)}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={!(city && contact && desc && state1 && category)}
                  >
                    Submit Resource
                  </Button>
                </Form>
                <br />
                {openAlert ? (
                  <div className={classes.root}>
                    <Alert severity="success">
                      Resource submitted successfully, It will be listed on the
                      site once verified.
                    </Alert>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                <Button onClick={logout} variant="contained">
                  logout
                </Button>
              </Col>
            </Row>
          </Container>
        ) : (
          <SignIn />
        )}
      </div>
    </>
  );
}

export default Contribute;
