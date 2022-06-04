import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPetController from '../../../controllers/adminControllers/getPetController';
import './petCard.scss';

const PetCard = () => {
  const params = useParams();
  const { petId } = params;

  const [pet, setPet] = useState(null);

  useEffect(async () => {
    const petRes = await getPetController(petId).then((res) => res.data.pet);
    setPet(petRes[0]);
  }, []);

  return (
    <div className="admin-page-rooms-pet">
      <hr />
      <div className="pet-name">{pet?.name}</div>
      <div className="pet-info">
        <div className="pet-info__item">
          Cat/Dog: {pet?.type?.toLowerCase()}
        </div>
        <div className="pet-info__item">Breed: {pet?.breed}</div>
        <div className="pet-info__item">
          Gender: {pet?.gender?.toLowerCase()}
        </div>
        <div className="pet-info__item">Age: {pet?.age} years</div>
        <div className="pet-info__item">
          Sterilized: {pet?.sterilized?.toLowerCase()}
        </div>
        <div className="pet-info__item">Vet-passport: {pet?.vet_pasport}</div>
        <div className="individual-notice">Individual notice: {pet?.info}</div>
      </div>
    </div>
  );
};

export default PetCard;
