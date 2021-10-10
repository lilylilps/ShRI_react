import { useState } from "react";

function useInput(initial, required, errorMessage = "Required field") {
    const [value, setValue] = useState(initial);
    const [error, setError] = useState(null);

    return {
        value,
        onBlur: e => {
            if (!e.target.value && required) setError(errorMessage);
            else setError(null);
        },
        onChange: e => setValue(e.target.value),
        error,
        reset: () => {
            if (required) setError(errorMessage);
            setValue(initial)
        },
        setError: (message) => setError(message || errorMessage)
    };
};

export default useInput