import { useState } from 'react';

import { rick } from '@/assets/images';
import Input from '@/shared/components/input';
import type { Status } from '@/shared/types';

import { CardActions, CardSelect, FormItem } from './components';
import type { CardProps } from './types';

import './character-card.scss';

export default function CharacterCard(initialState: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [cardState, setCardState] = useState(initialState);

  const handleNameChange = (value: string) => {
    setCardState({ ...cardState, name: value });
  };

  const handleLocationChange = (value: string) => {
    setCardState({ ...cardState, location: value });
  };

  const handleStatusChange = (status: Status) => {
    setCardState({ ...cardState, status });
  };

  return (
    <form className='character-card'>
      <div className='character-card__wrapper'>
        <img
          src={rick}
          alt={`${initialState.name} image`}
          className='character-card__portrait'
        />
        <div className='character-card__content'>
          {isEditing ? (
            <Input
              placeholder='Character name'
              value={cardState.name}
              onChange={handleNameChange}
            />
          ) : (
            <a href='#'>{cardState.name}</a>
          )}

          <FormItem label='Gender'>
            <Input
              value={initialState.gender}
              size='small'
              disabled
            />
          </FormItem>
          <FormItem label='Species'>
            <Input
              value={initialState.species}
              size='small'
              disabled
            />
          </FormItem>
          <FormItem label='Location'>
            <Input
              value={cardState.location}
              size='small'
              disabled={!isEditing}
              onChange={handleLocationChange}
            />
          </FormItem>
          <FormItem label='Status'>
            <CardSelect
              disabled={!isEditing}
              status={cardState.status}
              onChange={handleStatusChange}
            />
          </FormItem>
        </div>
      </div>

      <CardActions
        cardState={cardState}
        initialState={initialState}
        isEditing={isEditing}
        setCardState={setCardState}
        setIsEditing={setIsEditing}
      />
    </form>
  );
}
