import * as React from "react";
import { useUser } from "@clerk/clerk-react";

function ProfileImage() {

    
  const { user, isLoaded } = useUser(); 

  if (!isLoaded) {
     return <div>Loading...</div>;
  }

  return (
    <img
      loading="lazy"
      src={user.imageUrl}
      alt="Profile"
      className="mt-8 max-w-full aspect-square rounded-[200px] w-[235px]"
    />
  );
}

function InputField({ label, value, icon, onChange }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <label className="font-medium leading-[143%] text-neutral-700">
            {label}
          </label>
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="flex flex-col justify-center px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-stone-400"
          />
        </div>
      </div>
    </div>
  );
}

function InputFieldWithIcon({ label, value, icon, onChange }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <label className="font-medium leading-[143%] text-neutral-700">
            {label}
          </label>
          <div className="flex flex-col justify-center px-4 py-3 mt-2 w-full leading-6 bg-white rounded-lg border border-solid border-stone-300">
            <div className="flex gap-2 px-0.5">
              <input
                type="text"
                value={value}
                onChange={onChange}
                className="flex-1 text-stone-400 bg-transparent outline-none"
              />
              <img
                loading="lazy"
                src={icon}
                alt=""
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ label, variant, onClick }) {
  const baseClasses =
    "flex flex-col flex-1 grow shrink-0 justify-center rounded-md basis-0 w-fit";
  const variantClasses = {
    primary: "text-white bg-neutral-800",
    secondary:
      "text-neutral-700 bg-white border border-solid border-neutral-700",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      <div className="justify-center items-center px-5 py-3 rounded-lg">
        {label}
      </div>
    </button>
  );
}

function ProfileModal() {
  const [formData, setFormData] = React.useState({
    name: "Sid Aranda",
    email: "siddxd@growthx.com",
    contact: "+44 0000 0000000",
    country: "England",
    dni: "X4995280W",
    gender: "Female",
  });

  const handleChange = (field) => (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const inputFields = [
    { label: "Name", field: "name" },
    {
      label: "Email",
      field: "email",
      tags: ["Verify", "Verified"],
    },
    {
      label: "Contact",
      field: "contact",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc7ac094d5c3dac425a911e48d06502d0fadaa46e08a5ff79cfa27ae031d4526?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&",
      prefix: "EN",
    },
    { label: "Country", field: "country", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc7ac094d5c3dac425a911e48d06502d0fadaa46e08a5ff79cfa27ae031d4526?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" },
    { label: "DNI", field: "dni" },
    { label: "Gender", field: "gender", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc7ac094d5c3dac425a911e48d06502d0fadaa46e08a5ff79cfa27ae031d4526?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" },
  ];

  const { user, isLoaded } = useUser(); 

  if (!isLoaded) {
     return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center pt-6 pr-7 pb-10 pl-20 bg-white max-w-[862px] max-md:px-5">
      <div className="flex gap-5 w-full max-w-[657px] max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center text-base font-medium leading-7 text-neutral-700 w-fit max-md:max-w-full">
          Edit profile
        </div>
        <button className="flex justify-center items-center px-1 py-1.5 my-auto rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4297f02966bd6c29c0164b329e0e124f5aa2e3ef3e9d7aa1c741ed9b5f41ff7?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&"
            alt=""
            className="aspect-square fill-stone-300 w-[11px]"
          />
        </button>
      </div>
      <ProfileImage />
      <div className="flex flex-col pt-1.5 mt-9 w-full max-w-[657px] max-md:max-w-full">
        <div className="flex flex-col pb-3 max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-wrap">
            {inputFields.slice(0, 2).map((field, index) => (
              <React.Fragment key={index}>
                {field.tags ? (
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col">
                        <div className="flex z-10 gap-3 justify-between -mt-1.5 text-xs leading-4 text-stone-900 text-opacity-80">
                          <label className="text-sm font-medium leading-5 text-neutral-700">
                            {field.label}
                          </label>
                          {field.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className={`justify-center px-3 py-2.5 tracking-normal whitespace-nowrap ${
                                tag === "Verify" ? "bg-red-300" : "bg-lime-200"
                              } rounded-2xl`}
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                        <input
                          type="text"
                          value={formData[field.field]}
                          onChange={handleChange(field.field)}
                          className="flex flex-col justify-center px-4 py-3 mt-1.5 text-sm leading-6 whitespace-nowrap bg-white rounded-lg border border-solid border-stone-300 text-stone-400"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <InputField
                    label={field.label}
                    value={formData[field.field]}
                    onChange={handleChange(field.field)}
                    icon={field.icon}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-sm max-md:flex-wrap">
            {inputFields.slice(2, 4).map((field, index) => (
              <InputFieldWithIcon
                key={index}
                label={field.label}
                value={formData[field.field]}
                onChange={handleChange(field.field)}
                icon={field.icon}
              />
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-sm whitespace-nowrap max-md:flex-wrap">
            {inputFields.slice(4).map((field, index) => (
              <InputField
                key={index}
                label={field.label}
                value={formData[field.field]}
                onChange={handleChange(field.field)}
                icon={field.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-11 w-full text-base font-medium whitespace-nowrap max-w-[657px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <Button label="Cancel" variant="secondary" onClick={() => {}} />
        <Button label="Submit" variant="primary" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default ProfileModal;