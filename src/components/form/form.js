import React, {useState} from 'react';
import './form.css'
//import logo from '../../Assets/portfolio_logo_hitesh.png';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import ButtonCustom from '../button/button';

import Button from '@material-ui/core/Button';


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function Form(props) {
    const [offence, setOffence] = useState('');
    const [bikeSpeed, setBikeSpeed] = useState('');
    const [bikeMake, setBikeMake] = useState('');
    const [bikeModel, setBikeModel] = useState('');
    const [bikeType, setBikeType] = useState('');
    const [occurenceDay, setOccurenceDay] = useState('');
    const [occurenceHour, setOccurenceHour] = useState('');
    const [reportDay, setReportDay] = useState('');
    const [reportHour, setReportHour] = useState('');
    const [costBike, setCostBike] = useState('');
    const [longitude, setLongitude] = useState('');
    const [lattitude, setLattitude] = useState('');

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const saveTime = () => {
      setOffence("THEFT UNDER")
      setBikeSpeed(50)
      setBikeMake("FORTRESS")
      setBikeModel("1700 DT")
      setBikeType("SC")
      setOccurenceDay(204)
      setOccurenceHour(11)
      setReportDay(23)
      setReportHour(13)
      setCostBike(2500.0)
      setLongitude(-79.29673149999999)
      setLattitude(43.68930442)
    }

    const postFormData = () => {

      handleClickOpen();

      console.log("postFormData");
          fetch(
            "http://localhost:5000/predict",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "offence":offence,
                "bikeSpeed":bikeSpeed,
                "bikeMake":bikeMake,
                "bikeModel":bikeModel,
                "bikeType":bikeType,
                "occurenceDay":occurenceDay,
                "occurenceHour":occurenceHour,
                "reportDay":reportDay,
                "reportHour":reportHour,
                "costBike":costBike,
                "longitude":longitude,
                "lattitude":lattitude
              }),
            }
        ).then((r) => r.json())
        .then((res)=>{
            console.log("res_from_model:",res);

            setMessage(res.prediction);
            setStatus(res.status);
            handleClickOpen();

        });
        setMessage('Classifier predicts that the bike is not likely to be RECOVERED!');
    }

    const handleOccurenceDateTime = (event) => {
      console.log("value123", event.target.value);
      let datetimeValue = new Date(event.target.value);
      let year = datetimeValue.getFullYear();
      let month = datetimeValue.getMonth()+1;
      let date = datetimeValue.getDate();

      console.log("day123", date, month, year);
    }
  return (
    <div className="wrapper fadeInDown">
    <div id="formContent">
        <h2 className="active"> Find my bicycle </h2>
        <form>
            <input 
              type="text"
              name="offence" 
              placeholder="Primary Offence"
              value={offence}
              onChange={e => setOffence(e.target.value)}
              autoFocus 
            />

            <input 
              type="number"
              name="bikeSpeed"
              placeholder="Bike Speed"
              value={bikeSpeed}
              defaultValue={20}
              onChange={e => setBikeSpeed(e.target.value)}
            />

            <input 
              type="text"
              name="bikeMake"
              placeholder="Bike Make"
              value={bikeMake}
              onChange={e => setBikeMake(e.target.value)}
            />

            <input 
              name="bikeModel"
              type="text"
              placeholder="Bike Model"
              value={bikeModel}
              onChange={e => setBikeModel(e.target.value)}
            />

            <input 
              name="bikeType"
              type="text"
              placeholder="Bike Type"
              value={bikeType}
              onChange={e => setBikeType(e.target.value)}
            />

            <input 
              name="occurenceDay"
              type="number"
              placeholder="Occurence Day of the year"
              value={occurenceDay}
              onChange={e => setOccurenceDay(e.target.value)}
            />

            <input 
              name="occurenceHour"
              type="number"
              placeholder="Occurence hour"
              value={occurenceHour}
              onChange={e => setOccurenceHour(e.target.value)}
            />

            <input 
              name="reportDay"
              type="number"
              placeholder="Report day of the month"
              value={reportDay}
              onChange={e => setReportDay(e.target.value)}
            />

            <input 
              name="reportHour"
              type="number"
              placeholder="Report hour"
              value={reportHour}
              onChange={e => setReportHour(e.target.value)}
            />

            <input 
              name="costBike"
              type="number"
              placeholder="Cost of Bike"
              value={costBike}
              onChange={e => setCostBike(e.target.value)}
            />

            <input 
              name="longitude"
              type="number"
              placeholder="Longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />

            <input 
              name="lattitude"
              type="number"
              placeholder="Latitude"
              value={lattitude}
              onChange={e => setLattitude(e.target.value)}

            />

            {/* <TextField
              id="datetime-local"
              label="Occurence Date and Time"
              type="datetime-local"
              defaultValue="2021-08-18T10:30"
              placeholder="Next appointment"
              onChange={(event)=>{
                handleOccurenceDateTime(event)
              }}
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
            
            <ButtonCustom id="login-button" className="btn btn-success button-style" onClick={()=>{postFormData()}} label="Predict"/>
            <Button onClick={()=>{saveTime()}} color="primary">Load Data</Button>
        </form>

        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move', color:'#bf5e2e' }} id="draggable-dialog-title">
            <span style={{color:'#bf5e2e'}}>{status === "success"? 'Congratulations!!!' : 'Sorry :('}</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{color:'#000'}}>
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
 
            <Button onClick={handleClose} style={{color:'#000', backgroundColor:'#bf5e2e'}}>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
    </div>
    </div>
  );
}

export default Form;