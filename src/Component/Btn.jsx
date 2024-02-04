/* eslint-disable react/prop-types */

const Btn = ({btnTitle}) => {
  return (
        <button
                type="submit"
                className=" border-2 border-[#15c39a] text-white bg-[#15c39a] hover:bg-white hover:text-[#15c39a] font-medium rounded-lg text-lg px-5 mt-5 py-2.5 w-full"
              >
                {btnTitle}
        </button>
  );
};

export default Btn;
