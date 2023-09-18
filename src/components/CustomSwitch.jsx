import { styled } from "@mui/system";

const SwitchContainer = styled("label")`
  display: inline-block;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ checked }) => (checked ? "#2196f3" : "#ccc")};
  position: relative;
  cursor: pointer;
`;

const Slider = styled("span")`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? "26px" : "2px")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ checked }) => (checked ? "#000" : "#000")};
  font-weight: bold;
`;

const ToggleSwitch = ({ checked, handleClick }) => {
  return (
    <SwitchContainer checked={checked} onClick={handleClick}>
      <Slider checked={checked}>{checked ? "n" : "%"}</Slider>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
