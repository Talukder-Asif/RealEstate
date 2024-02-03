/* eslint-disable react/prop-types */

const Btn = ({btnTitle}) => {
  return (
        <button
                type="submit"
                className=" border-2 border-[#0e2e50] text-white bg-[#0e2e50] hover:bg-white hover:text-[#0e2e50] font-medium rounded-lg text-lg px-5 mt-5 py-2.5 w-full"
              >
                {btnTitle}
        </button>
  );
};

export default Btn;
