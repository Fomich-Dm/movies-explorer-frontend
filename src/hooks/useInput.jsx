import { useState } from "react";
import useValidation from "./useValidation";

function useInput(initialValue , validations) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
}

export default useInput;
