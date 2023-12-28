function Reset(props: { setCount:React.Dispatch<React.SetStateAction<number>>}) {
    
  return (
    <>
      <button
        onClick={() => {
          props.setCount(0)
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Reset;

