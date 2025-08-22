import CustomButton from "@/components/ui/CustomButton";

export default function CustomHeader(props) {
  return (
    //first div is the span and container for header and button
    //second one is the margins between the header and button to add

    <div className="border-2 border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10 bg-white rounded-xl shadow-stone-500"> 
      <div className="-mt-1 -ml-4 block items-center justify-between sm:flex">
        <div className="mt-2 ml-4">
          <h2 className="text-2xl font-extrabold tracking-wide text-gray-900">
            {props.label}
          </h2>
        </div>
        <div className="mt-2 ml-4 shrink-0 ">
          {props.button.isVisible && (
            <CustomButton
              onClick={props.button.onClick}
              label={props.button.label}
            />
          )}
        </div>
      </div>
    </div>
  );
}
