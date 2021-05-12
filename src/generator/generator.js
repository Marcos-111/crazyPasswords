import React from "react";

class Generator extends React.Component {
  render() {
    return (
     
       
      <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2>Password Generator</h2>
      <div class="setting">
			<label>Length</label>
			<input type="number" id="length" min='4' max='256' value='10' />
		</div>
        <div class="mb-4">
        <label>Numbers</label> 
			<input type="checkbox" id="numbers" checked />
        </div>
        <div class="mb-6">
        <label>Numbers</label> 
			<input type="checkbox" id="numbers" checked />
        </div>
        <div class="mb-6">
        <label>Numbers</label> 
			<input type="checkbox" id="numbers" checked />
        </div>
        <div class="mb-6">
        <label>Numbers</label> 
			<input type="checkbox" id="numbers" checked />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      
    </div>
      
    );
  }
}

export default Generator;
