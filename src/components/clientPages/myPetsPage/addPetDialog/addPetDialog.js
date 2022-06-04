import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Dialog,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';
import chooseIcon from '../../../../assets/icons/choose-img.png';
import './addPetDialog.scss';
import addPetController from '../../../../controllers/clientControllers/pets/addPet';
import { PET_PASSPORT_VALIDATION } from '../../../../common/regex';

const VALID_FIELDS = Object.freeze({
  NAME: 'name',
  AGE: 'age',
  PASSPORT: 'passport',
  BREED: 'breed',
  GENDER: 'gender',
  TYPE: 'type',
  STERILIZED: 'sterilized',
});

const CustCheckbox = ({ value, mr, current }) => (
  <FormControlLabel
    value={value.toUpperCase()}
    control={
      <Radio
        size="small"
        icon={<CheckBoxOutlineBlank sx={{ pt: 0, mr: mr || 0.5 }} />}
        checkedIcon={<CheckBox />}
        sx={{
          color: 'black',
          '&.Mui-checked': {
            color: 'black',
          },
        }}
        checked={current.toUpperCase() === value.toUpperCase()}
      />
    }
    sx={{ mr: 0 }}
    label={value}
  />
);

const AddPetDialog = ({ open, handleClose, setPets }) => {
  const owner = useSelector((state) => state.user.userId);
  const [validation, setValidation] = useState({
    age: true,
    passport: false,
  });
  const [name, setName] = useState('');
  const [type, setType] = useState('Dog');
  const [breed, setBread] = useState('');
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState(0);
  const [sterilized, setSterilized] = useState('yes');
  const [passport, setPassport] = useState('');
  const [info, setInfo] = useState('');

  const checkValidation = () =>
    Object.values(validation).reduce(
      (previous, current) => previous && current
    );

  function clearForm() {
    setName('');
    setType('Dog');
    setBread('');
    setGender('female');
    setAge(0);
    setSterilized('yes');
    setPassport('');
    setInfo('');
  }

  const handleSubmit = (e) => {
    const newPet = {
      owner,
      name,
      type,
      breed,
      gender,
      age,
      sterilized,
      passport,
      info,
    };
    if (checkValidation()) {
      addPetController(newPet).then((res) => {
        if (res.status === 200) {
          setPets((pets) => [
            ...pets,
            { ...res.data.newPet, vet_pasport: passport },
          ]);
        }
      });
      handleClose();
      clearForm();
    }
    e.preventDefault();
  };

  const setValidationFields = (field, value) => {
    switch (field) {
      case VALID_FIELDS.AGE:
        if (value >= 0) {
          setValidation({ ...validation, age: true });
        } else {
          setValidation({ ...validation, age: false });
        }
        break;
      case VALID_FIELDS.PASSPORT:
        if (PET_PASSPORT_VALIDATION.test(value)) {
          setValidation({
            ...validation,
            passport: true,
          });
        } else {
          setValidation({
            ...validation,
            passport: false,
          });
        }
        break;
      default:
        break;
    }
  };

  const passportChange = (e) => {
    setPassport(e.target.value);
    setValidationFields(VALID_FIELDS.PASSPORT, e.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form className="dialog" onSubmit={handleSubmit}>
        <img src={chooseIcon} alt="img" />
        <TextField
          id="standard-basic"
          label="add nickname"
          variant="standard"
          value={name}
          onChange={(e) => {
            setValidationFields(VALID_FIELDS.NAME, e.target.value);
            setName(e.target.value);
          }}
          required
        />
        <div className="pet-card_prop">
          <p className="prop">Cat/Dog:</p>
          <RadioGroup
            className="row"
            onChange={(e) => {
              setValidationFields(VALID_FIELDS.TYPE, e.target.value);
              setType(e.target.value);
            }}
            value={type}
          >
            <CustCheckbox value="Dog" current={type} />
            <CustCheckbox value="Cat" mr={1.75} current={type} />
          </RadioGroup>
        </div>
        <div className="pet-card_prop">
          <p className="prop">Breed:</p>
          <input
            type="text"
            value={breed}
            onChange={(e) => {
              setValidationFields(VALID_FIELDS.BREED, e.target.value);
              setBread(e.target.value);
            }}
            required
            maxLength={10}
          />
        </div>
        <div className="pet-card_prop">
          <p className="prop">Gender:</p>
          <RadioGroup
            className="row"
            onChange={(e) => {
              setValidationFields(VALID_FIELDS.GENDER, e.target.value);
              setGender(e.target.value);
            }}
          >
            <CustCheckbox value="female" current={gender} />
            <CustCheckbox value="male" current={gender} />
          </RadioGroup>
        </div>
        <div className="pet-card_prop">
          <p className="prop">Age, years full:</p>
          <div className="row">
            <input
              type="number"
              min="0"
              max="20"
              defaultValue="0"
              onChange={(e) => {
                setValidationFields(VALID_FIELDS.AGE, e.target.value);
                setAge(e.target.value);
              }}
            />
            <span>years</span>
          </div>
        </div>
        <div className="pet-card_prop">
          <p className="prop">Sterilized:</p>
          <RadioGroup
            className="row"
            onChange={(e) => {
              setValidationFields(VALID_FIELDS.STERILIZED, e.target.value);
              setSterilized(e.target.value);
            }}
          >
            <CustCheckbox value="yes" current={sterilized} />
            <CustCheckbox value="no" mr={2.6} current={sterilized} />
          </RadioGroup>
        </div>
        <div className="pet-card_prop">
          <p className="prop">Vet Pass. number:</p>
          <input
            type="text"
            placeholder="11-1111"
            value={passport}
            onChange={passportChange}
            maxLength={7}
            className={
              !validation.passport && passport
                ? 'add-pet-dialog__invalid-passport'
                : ''
            }
            required
          />
        </div>
        <p>Individual notice (preferances):</p>
        <textarea
          type="text"
          rows="5"
          className="individual-info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          maxLength={150}
        />
        <button type="submit">Sumbit</button>
      </form>
    </Dialog>
  );
};

AddPetDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setPets: PropTypes.func.isRequired,
};

CustCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  mr: PropTypes.number.isRequired,
  current: PropTypes.string.isRequired,
};

export default AddPetDialog;
