import React, { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
  COPY_SUCCESS,
} from "../data.js";
import { toast, ToastContainer } from "react-toastify";
import "./generator.css";

function Generator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("You must Select atleast one option", true);
    }
    let characterList = "";

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }

    setPassword(createPassword(characterList));
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleCopyPassword = (e) => {
    if (password === "") {
      notify("Nothing To Copy", true);
    } else {
      copyToClipboard();
      notify(COPY_SUCCESS);
    }
  };

  return (
    <div className="mt-10 sm:mt-0 w-2/5 pl-12">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 pgiy-5 bg-white space-y-6 sm:p-6">
                <section>
                  <h1 className="text-base font-normal text-xl text-gray-900">
                    Password Generator
                  </h1>
                  <div className="flex text-base font-normal text-gray-900">
                    <h3>{password}</h3>
                    <button className="font-normal text-gray-700" onClick={handleCopyPassword}>
                      Button here <i></i>
                    </button>
                  </div>
                  <div>
                    <label htmlFor="password-strength" className="font-normal text-gray-700">
                      Password length
                    </label>
                    <input
                      defaultValue={passwordLength}
                      onChange={(e) => setPasswordLength(e.target.value)}
                      type="number"
                      id="password-strength"
                      name="password-strength"
                      max="20"
                      min="10"
                      className="float-right box-border"
                    />
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          checked={includeUppercase}
                          onChange={(e) =>
                            setIncludeUppercase(e.target.checked)
                          }
                          type="checkbox"
                          id="uppercase-letters"
                          name="uppercase-letters"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="lowercase-letters"
                          className="font-medium text-gray-700"
                        >
                          Include Uppercase Letters
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          checked={includeLowercase}
                          onChange={(e) =>
                            setIncludeLowercase(e.target.checked)
                          }
                          type="checkbox"
                          id="lowercase-letters"
                          name="lowercase-letters"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="lowercase-letters"
                          className="font-medium text-gray-700"
                        >
                          Include Lowercase Letters
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          checked={includeNumbers}
                          onChange={(e) => setIncludeNumbers(e.target.checked)}
                          type="checkbox"
                          id="include-numbers"
                          name="include-numbers"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="include-numbers"
                          className="font-medium text-gray-700"
                        >
                          Include Numbers
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          checked={includeSymbols}
                          onChange={(e) => setIncludeSymbols(e.target.checked)}
                          type="checkbox"
                          id="include-symbols"
                          name="include-symbols"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="include-symbols"
                          className="font-medium text-gray-700"
                        >
                          Include Symbols
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  onClick={handleGeneratePassword}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Generate Password
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
