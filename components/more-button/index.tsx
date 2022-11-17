import { LoadingButton } from "@mui/lab";
import { useState } from "react";

const MoreButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setDisabled(true);
      setLoading(false);
    }, Math.floor(Math.random() * 2500));
  };

  return (
    <LoadingButton
      onClick={handleClick}
      loading={loading}
      disabled={disabled}
      loadingPosition="end"
      sx={{ marginTop: "8px", paddingRight: loading ? "32px" : undefined }}
    >
      {disabled ? "No More Articles" : "Load More"}
    </LoadingButton>
  );
};

export default MoreButton;
