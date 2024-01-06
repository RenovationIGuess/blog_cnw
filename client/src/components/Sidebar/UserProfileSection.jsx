import { Tooltip } from 'antd';
import React from 'react';
import { MdNoteAlt, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { userStateContext } from '~/contexts/ContextProvider';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const UserProfileSection = ({
  showToggleIcon = false,
  handleMinimizedSidebar,
}) => {
  const { currentUser } = userStateContext();

  return (
    <>
      {showToggleIcon && (
        <div className="open-sidebar-icon-section">
          <div
            className="open-sidebar-icon--wrp"
            onClick={(e) => handleMinimizedSidebar(e)}
          >
            <AiOutlineMenuUnfold className="open-sidebar-icon" />
          </div>
        </div>
      )}
      <div className="user__info-section">
        <div className="user__info-section-wrp">
          {/* Avatar */}
          <div className="user__info-avatar">
            <img
              src={currentUser.profile.avatar}
              className="user-avatar"
              alt="user-avatar"
            />
          </div>
          {/* User name */}
          <div className="user__info">
            <div className="user__info-name">{currentUser.profile.name}</div>
          </div>
        </div>
        <div className="user__info-section--tools h-full flex flex-srhink-0 items-center">
          <Tooltip placement="bottom" title="Minimize sidebar">
            <div
              className="minimize-icon"
              onClick={(e) => handleMinimizedSidebar(e)}
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </div>
          </Tooltip>
          <Tooltip placement="bottom" title="Create new note">
            <div className="new-page-icon">
              <MdNoteAlt />
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default UserProfileSection;
