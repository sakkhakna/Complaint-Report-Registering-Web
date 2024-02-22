import React from "react";
import Input from "../../ui/share/Input";
import Button from "../../ui/share/Button"

function registerForm() {
  return (
    <div className="max-w-screen-xl h-auto flex flex-col items-center p-10">
      <form className="md:w-[1000px] md:h-[900px] bg-white flex flex-col items-center p-10 gap-4">
        <h1 className="font-bold md:text-4xl ">Register Complaint</h1>
        <div className="flex gap-4 w-full justify-center">
          <div className="w-1/2">
            <Input
              title="Title"
              id="title"
              placeholder="Title"
              onChange={onchange}
              type="text"
              isRequired={true}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="gender">Type</label>
            <select className="form-select block rounded-xl w-full py-2 px-4 border-2 ">
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <Input
            title="Location"
            id="location"
            type="text"
            placeholder="Location"
            onChange={onchange}
            isRequired={true}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
            <label >Description</label>
          <textarea name="description" id="description" rows="5" className="p-4 border-2 rounded-xl"></textarea>
        </div>

        <div className="w-full">
          <Input
            title="Image && Proof"
            id="image"
            type="file"
            onChange={onchange}
            isRequired={true}
            customClass="h-[200px] bg-[#ffffff]"
          />
        </div>

        <Button
        type="submit"
        customClass="py-2 px-10 h-20"
        >
            Submit
        </Button>
      </form>
    </div>
  );
}

export default registerForm;
