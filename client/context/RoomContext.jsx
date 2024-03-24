import React, { createContext, useState } from 'react';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [availableRooms, setAvailableRooms] = useState([]);

  return (
    <RoomContext.Provider value={{ availableRooms, setAvailableRooms }}>
      {children}
    </RoomContext.Provider>
  );
};