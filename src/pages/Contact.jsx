import React, { useReducer } from "react";
import { FiChevronRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {},
  };

  function formReducer(state, action) {
    switch (action.type) {
      case "CHANGE_INPUT":
        return { ...state, [action.field]: action.value };
      case "SET_ERRORS":
        return { ...state, errors: action.errors };
      case "RESET_FORM":
        return initialState;
      default:
        return state;
    }
  }

  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // ✅ Validation function
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return;
    }

    // ✅ This opens user's email app with prefilled details
    const mailtoLink = `mailto:ssujalgupta@gmail.com?subject=${encodeURIComponent(
      formData.subject || "No Subject"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="flex flex-col gap-5 pt-4 w-screen mt-56 sm:mt-12 h-[200vh] sm:h-[700px] items-center">
      {/* Header */}
      <div className="text-3xl sm:text-6xl font-bold flex flex-row justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#37d0ff] via-[#e23cff] to-[#fe29a9]">
        <FiChevronRight className="text-4xl sm:text-6xl" color="#37d0ff" />
        GET_IN_TOUCH
      </div>

      {/* Main Section */}
      <div className="w-[95%] h-[70%] flex flex-col justify-center items-center gap-6 sm:flex-row">
        {/* Left Info */}
        <div className="flex-col items-center sm:items-start sm:pl-2 flex h-[100%] w-[100%] sm:w-[48%] gap-4 p-3">
          <div className="font-bold text-xl sm:text-2xl">
            Let's Build Something Amazing Together
          </div>
          <div className="text-[16px] text-[#b8b8b8e4]">
            Ready to bring your ideas to life? Whether you need a web
            application, mobile app, or custom software solution, I'm here to
            help you succeed.
          </div>

          <div className="w-[90%] border border-[#2984a5d3] flex flex-row items-center p-3 gap-3 rounded-xl">
            <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#37d0ff] to-[#e229fe] p-2">
              <FiMail size={30} color="#000" />
            </div>
            <div>
              <div className="font-bold text-[18px]">Email</div>
              <div className="text-[#b8b8b8e4]">ssujal172003@gmail.com</div>
            </div>
          </div>

          <div className="w-[90%] border border-[#2984a5d3] flex flex-row items-center p-3 gap-3 rounded-xl">
            <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#37d0ff] to-[#e229fe] p-2">
              <FiPhone size={30} color="#000" />
            </div>
            <div>
              <div className="font-bold text-[18px]">Phone</div>
              <div className="text-[#b8b8b8e4]">+91 89821 57428</div>
            </div>
          </div>

          <div className="w-[90%] border border-[#2984a5d3] flex flex-row items-center p-3 gap-3 rounded-xl">
            <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#37d0ff] to-[#e229fe] p-2">
              <FiMapPin size={30} color="#000" />
            </div>
            <div>
              <div className="font-bold text-[18px]">Location</div>
              <div className="text-[#b8b8b8e4]">Bhopal, Madhya Pradesh</div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="h-[100%] w-[100%] border border-[#2984a5d3] rounded-2xl sm:w-[48%] flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full gap-3 flex flex-col m-2 pb-4 pt-2 justify-center items-center"
            
          >
            <div className="w-[95%] h-[20%] flex flex-row justify-between">
              <div className="flex flex-col w-[50%] gap-3">
                <label className="font-bold text-[#ccc]">Name.Required </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border-[0.5px] w-[90%] focus:border-[#00b7ff] focus:ring focus:ring-[#00b7ff] p-2 rounded outline-none transition-all duration-200"
            />
            {formData.errors.name && (
              <p className="text-red-600 text-sm">{formData.errors.name}</p>
            )}
              </div>

            <div className="flex flex-col w-[50%] gap-3">
              <label className="font-bold text-[#ccc]" >Email.Required</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="border-[0.5px] w-[90%] p-2 rounded focus:border-[#00b7ff] focus:ring focus:ring-[#00b7ff] outline-none transition-all duration-200"
              
            />
            {formData.errors.email && (
              <p className="text-red-600 text-sm">{formData.errors.email}</p>
            )}
            </div>
            </div>


            <div className="w-[95%] h-[35%] gap-3 flex flex-col">
              <label className="font-bold text-[#ccc]">Subject.Optional</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-[100%] h-[80%] border-[0.5px] border-white focus:border-[#00b7ff] focus:ring focus:ring-[#00b7ff] rounded outline-none transition-all duration-200"
              
            />
            </div>

            <div className="w-[95%] h-[35%] gap-3 flex flex-col">
              <label className="font-bold text-[#ccc]" >Message.Required</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="4"
              className="w-[100%] h-[90%] border-[0.5px] border-white focus:border-[#00b7ff] focus:ring focus:ring-[#00b7ff] rounded outline-none transition-all duration-200"
              
            />
            {formData.errors.message && (
              <p className="text-red-600 text-sm">{formData.errors.message}</p>
            )}
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-[#37d0ff] to-[#e229fe] h-[12%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
