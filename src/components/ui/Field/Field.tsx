import React, { useState } from "react";
import FieldInput from "./FieldInput";

type FieldProps = {
  value: string;
  acceptChange: (newValue: string) => void;
};

const Field: React.FC<FieldProps> = ({ value, acceptChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const acceptInputChange = (newValue: string) => {
    acceptChange(newValue);
    setIsEditing(false);
  }

  const doubleClickByText = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (event.detail >= 2) {
      setIsEditing(true);
    }
  };

  if (isEditing) {
    return <FieldInput previousValue={value} acceptChange={acceptInputChange} />;
  }

  return <div onClick={doubleClickByText}>{value}</div>
};

export default Field;
