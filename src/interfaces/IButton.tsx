interface IButton {
  text: string; 
  icon: string;
  type: string;
  action: () => void
  url: string;
}

export default IButton