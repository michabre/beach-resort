interface IButton {
  text: string; 
  icon: string;
  type: string;
  handler: () => void
  url: string;
}

export default IButton