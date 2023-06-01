import { useCallback, useState } from "react";
import Avatar from "@mui/material/Avatar";
import FsLightbox from "fslightbox-react";

export const AvatarWithPreview = ({ thumb, sources }) => {
  const [toggler, setToggler] = useState(false);

  const handleToggle = useCallback(() => {
    setToggler((prev) => !prev);
  }, [setToggler]);

  return (
    <>
      <Avatar onClick={handleToggle} src={thumb} sx={{ cursor: "pointer" }} />
      <FsLightbox toggler={toggler} sources={sources} />
    </>
  );
};
