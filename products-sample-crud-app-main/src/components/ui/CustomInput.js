export default function CustomInput({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) {
  return (
    <div className="">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-green-600"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md px-3 py-1.5 text-base text-green-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-green-900 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
      </div>
    </div>
  );
}
