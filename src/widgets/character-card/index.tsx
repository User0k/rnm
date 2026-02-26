import { useState } from 'react';

import Input from '@/shared/components/input';
import type { Status } from '@/shared/types';

import { CardActions, CardSelect, FormItem } from './components';
import type { CharacterCardProps } from './types';

import './character-card.scss';

export default function CharacterCard(props: CharacterCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [cardState, setCardState] = useState(props);

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
          src={props.image}
          alt={`${props.name} image`}
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
              value={props.gender}
              size='small'
              disabled
            />
          </FormItem>
          <FormItem label='Species'>
            <Input
              value={props.species}
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
        originalData={props}
        isEditing={isEditing}
        setCardState={setCardState}
        setIsEditing={setIsEditing}
      />
    </form>
  );
}
