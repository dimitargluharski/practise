type InputFieldTypes = {
  handleOnChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  term: string;
}

export const InputField = ({ handleOnChangeInput, term }: InputFieldTypes) => {
  return (
    <div className="w-full">
      <input type="text" placeholder="Add topic" onChange={handleOnChangeInput} value={term} className="w-full p-2 rounded-md" />
    </div>
  )
}