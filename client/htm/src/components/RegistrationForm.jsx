import { useState } from 'react';
import "../index.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team Name is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one numerical value';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one symbol';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        
        if (response.ok) {
          alert('Registration submitted!');
          setFormData({
            name: '',
            email: '',
            teamName: '',
            password: '',
          });
        } else {
          alert(`Error: ${result}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="my-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center text-white">Register Now</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-white text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-white text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-white text-sm font-medium">Team Name</label>
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded ${errors.teamName ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
        </div>
        <div>
          <label className="block text-white text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#4cb7e9] transition-transform transform hover:scale-105 text-white font-bold rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
