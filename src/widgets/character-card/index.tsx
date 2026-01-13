import { useState } from 'react';

import { CloseIcon, ConfirmIcon, PencilIcon } from '../../assets/icons';
import rick from '../../assets/images/rick.jpg';
import type { Gender, Species, Status } from '../../shared/types';

import CardInput from './components/card-input';
import CardSelect from './components/card-select';
import DetailItem from './components/detail-item';

import './character-card.scss';

interface CardProps {
  gender: Gender;
  location: string;
  name: string;
  species: Species;
  status: Status;
}

export default function CharacterCard({
  gender,
  location,
  name,
  species,
  status,
}: CardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleConfirm = () => {
    setIsEditing(false);
  };

  return (
    <article
      className='character-card'
      onClick={handleClick}
    >
      <div className='character-card__wrapper'>
        <img
          src={rick}
          alt='Rick Sanchez image'
          className='character-card__portrait'
        />
        <div className='character-card__content'>
          <CardInput name={name} />
          <DetailItem label='Gender'>
            <p className='character-card__desc'>{gender}</p>
          </DetailItem>
          <DetailItem label='Species'>
            <p className='character-card__desc'>{species}</p>
          </DetailItem>
          <DetailItem label='Location'>
            <p className='character-card__desc'>{location}</p>
          </DetailItem>
          <DetailItem label='Status'>
            <CardSelect status={status} />
          </DetailItem>
        </div>
      </div>

      <div className='character-card__actions'>
        {!isEditing && (
          <button className='character-card__action-edit'>
            <PencilIcon />
          </button>
        )}
        {isEditing && (
          <>
            <button onClick={handleCancel}>
              <CloseIcon />
            </button>
            <button onClick={handleConfirm}>
              <ConfirmIcon />
            </button>
          </>
        )}
      </div>
    </article>
  );
}
