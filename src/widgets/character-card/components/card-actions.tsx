import type { Dispatch, SetStateAction } from 'react';

import { CloseIcon, ConfirmIcon, PencilIcon } from '@/assets/icons';

import type { CharacterCardProps } from '../types';

interface CardActionsProps {
  cardState: CharacterCardProps;
  originalData: CharacterCardProps;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setCardState: Dispatch<SetStateAction<CharacterCardProps>>;
}

export default function CardActions({
  cardState,
  originalData,
  isEditing,
  setIsEditing,
  setCardState,
}: CardActionsProps) {
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCardState(originalData);
  };

  const handleConfirm = () => {
    if (!cardState.name) {
      setCardState({ ...cardState, name: originalData.name });
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
