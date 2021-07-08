export interface AppPropsType {
  str: string;
}

const App = (props: AppPropsType) => {
  return <div>{props.str}</div>;
};
export default App;
