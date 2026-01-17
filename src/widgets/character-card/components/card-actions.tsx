import type { Dispatch, SetStateAction } from 'react';

import { CloseIcon, ConfirmIcon, PencilIcon } from '@/assets/icons';

import type { CardProps } from '../types';

interface CardActionsProps {
  cardState: CardProps;
  initialState: CardProps;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setCardState: Dispatch<SetStateAction<CardProps>>;
}

export default function CardActions({
  cardState,
  initialState,
  isEditing,
  setIsEditing,
  setCardState,
}: CardActionsProps) {
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCardState(initialState);
  };

  const handleConfirm = () => {
    if (!cardState.name) {
      setCardState({ ...cardState, name: initialState.name });
    }

    setIsEditing(false);
  };

  return (
    <div className='character-card__actions'>
      {isEditing ? (
        <>
          <button
            type='reset'
            onClick={handleCancel}
          >
            <CloseIcon />
          </button>
          <button
            type='submit'
            onClick={handleConfirm}
          >
            <ConfirmIcon />
          </button>
        </>
      ) : (
        <button
          type='button'
          className='character-card__action-edit'
          onClick={handleEditClick}
        >
          <PencilIcon />
        </button>
      )}
    </div>
  );
}
