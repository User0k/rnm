import { useState } from 'react';

import { CloseIcon, ConfirmIcon, PencilIcon } from '../../assets/icons';
import { rick } from '../../assets/images';
import type { Gender, Species, Status } from '../../shared/types';

import Input from '../../shared/components/input';
import './character-card.scss';
import { CardSelect, DetailItem } from './components';

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
  const [cardState, setCardState] = useState<
    Pick<CardProps, 'name' | 'status'>
  >({ name, status });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleConfirm = () => {
    if (!cardState.name) {
      setCardState({ ...cardState, name });
    }

    setIsEditing(false);
  };

  const handleNameChange = (value: string) => {
    setCardState({ ...cardState, name: value });
  };

  const handleStatusChange = (status: Status) => {
    setCardState({ ...cardState, status });
  };

  return (
    <article className='character-card'>
      <div className='character-card__wrapper'>
        <img
          src={rick}
          alt={`${name} image`}
          className='character-card__portrait'
        />
        <div className='character-card__content'>
          {isEditing ? (
            <Input
              placeholder='Character name'
              size='small'
              value={cardState.name}
              onChange={handleNameChange}
            />
          ) : (
            <a href='#'>{cardState.name}</a>
          )}

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
            <CardSelect
              disabled={!isEditing}
              status={cardState.status}
              onChange={handleStatusChange}
            />
          </DetailItem>
        </div>
      </div>

      <div className='character-card__actions'>
        {isEditing ? (
          <>
            <button onClick={handleCancel}>
              <CloseIcon />
            </button>
            <button onClick={handleConfirm}>
              <ConfirmIcon />
            </button>
          </>
        ) : (
          <button
            className='character-card__action-edit'
            onClick={handleEditClick}
          >
            <PencilIcon />
          </button>
        )}
      </div>
    </article>
  );
}
